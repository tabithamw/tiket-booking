import './globals.css';

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-800 text-white">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold">LOPTASIKU 9</h1>
        <p className="mt-2 text-lg">
          Mengukir Prestasi dengan Langkah Budaya
        </p>
        <div className="mt-4">
          <button className="bg-white text-purple-700 py-2 px-6 rounded-md font-semibold shadow-md hover:bg-gray-200">
            Beli Tiket
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center px-4 py-8">
        {/* Form Pemesanan */}
        <section className="bg-white text-black rounded-lg shadow-md p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Pesan Tiket
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="ticketCount"
                className="block text-sm font-medium"
              >
                Jumlah Tiket
              </label>
              <select
                id="ticketCount"
                name="ticketCount"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              >
                {[1, 2, 3, 4, 5].map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Pesan
            </button>
          </form>
        </section>

        {/* Sponsor */}
        <section className="mt-12 text-center">
          <h2 className="text-lg font-semibold">Mediapartner & Sponsorship</h2>
          <div className="flex flex-wrap justify-center mt-4 gap-4">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-2 w-24 h-24 flex items-center justify-center"
              >
                <span>Logo</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm">
        <p>&copy; 2025 LOPTASIKU. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
