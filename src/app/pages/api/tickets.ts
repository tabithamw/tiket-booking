import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, ticketCount } = req.body;
    try {
      const db = await open({
        filename: "./tickets.db",
        driver: sqlite3.Database,
      });

      await db.exec(
        "CREATE TABLE IF NOT EXISTS tickets (id INTEGER PRIMARY KEY, name TEXT, email TEXT, ticketCount INTEGER)"
      );

      await db.run("INSERT INTO tickets (name, email, ticketCount) VALUES (?, ?, ?)", name, email, ticketCount);

      res.status(200).json({ message: "Tiket berhasil dipesan!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Database error." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
