import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketCount: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/tickets", formData);
      alert("Success: " + response.data.message);
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-blue-500 text-white flex flex-col items-center">
      <header className="py-6">
        <h1 className="text-4xl font-bold">LOPTATICK 9</h1>
        <p className="mt-2 text-center">Mengukir Prestasi dengan Langkah Budaya</p>
      </header>

      <main className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4">Beli Tiket</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              name="name"
              className="w-full border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Jumlah Tiket</label>
            <input
              type="number"
              name="ticketCount"
              min="1"
              className="w-full border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={formData.ticketCount}
              onChange={(e) => setFormData({ ...formData, ticketCount: Number(e.target.value) })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-md font-medium hover:bg-purple-600"
          >
            Konfirmasi Pembelian
          </button>
        </form>
      </main>

      <footer className="mt-10 text-center text-sm">
        <p>Media Partner & Sponsor</p>
        <div className="mt-4 flex justify-center space-x-4">
          {/* Add sponsor logos here */}
        </div>
      </footer>
    </div>
  );
}