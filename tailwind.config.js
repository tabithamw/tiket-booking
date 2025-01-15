// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Pastikan ini mencakup semua file JS dan JSX di dalam folder pages
    './components/**/*.{js,ts,jsx,tsx}', // Pastikan ini mencakup semua file JS dan JSX di dalam folder components
    './app/**/*.{js,ts,jsx,tsx}', // Jika kamu menggunakan struktur folder baru di Next.js 13 (app dir)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
