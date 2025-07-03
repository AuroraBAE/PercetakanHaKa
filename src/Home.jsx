import React from "react";
// Menambahkan semua ikon yang dibutuhkan dari react-icons
import { FaWhatsapp, FaFileUpload, FaCreditCard, FaBoxOpen } from "react-icons/fa";


export default function Home() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">

      {/* Navbar -- DENGAN PERBAIKAN -- */}
      <nav className="bg-white shadow-sm py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        {/* Logo di kiri */}
        <a href="#Beranda">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-900 to-orange-500 text-transparent bg-clip-text">
              HaKa
            </h1>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-gray-700 font-serif leading-tight">
              <p>Fotokopi &</p>
              <p>Percetakan</p>
            </div>
          </div>
        </a>

        {/* Navbar di tengah */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-lg">
            <li>
              <a href="#Layanan" className="hover:text-blue-900">
                Layanan
              </a>
            </li>
            {/* -- BARU: Link ke Cara Pesan -- */}
            <li>
              <a href="#CaraPesan" className="hover:text-blue-900">
                Cara Pesan
              </a>
            </li>
            <li>
              <a href="#Keunggulan" className="hover:text-blue-900">
                Keunggulan
              </a>
            </li>
            <li>
              <a href="#Harga" className="hover:text-blue-900">
                Harga
              </a>
            </li>
            <li>
              <a href="#Testimoni" className="hover:text-blue-900">
                Testimoni
              </a>
            </li>
            <li>
              <a href="#Kontak" className="hover:text-blue-900">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        
        {/* -- BARU: Tombol CTA di Kanan Navbar -- */}
        <div className="hidden md:flex">
             <a href="https://wa.me/6285263184268?text=Halo%20HaKa%20Fotocopy,%20saya%20tertarik%20untuk%20memesan." target="_blank" rel="noopener noreferrer">
                <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-semibold px-6 py-2 rounded-lg shadow-md flex items-center gap-2">
                    <FaWhatsapp />
                    Pesan Online
                </button>
            </a>
        </div>
      </nav>


      {/* Hero Section -- DENGAN PERBAIKAN -- */}
      <section id="Beranda" className="bg-gradient-to-r from-[#0c2d68] to-[#142c65] text-white py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Print Cepat,<br />
              Hasil Berkualitas,<br />
              Harga Hemat?<br />
              <span className="text-orange-400">Hanya di HAKA FOTOCOPY</span>
            </h1>
            <p className="text-lg text-white py-4 font-medium">
              Haka Fotocopy: solusi cepat, terpercaya, dan berkualitas tinggi untuk kebutuhan bisnis maupun pribadi Anda.
            </p>
            {/* -- PERBAIKAN: Tombol CTA lebih jelas -- */}
            <div className="flex flex-wrap items-center gap-4">
                 <a href="https://wa.me/6285263184268?text=Halo%20HaKa%20Fotocopy,%20saya%20ingin%20memesan%20layanan%20Anda." target="_blank" rel="noopener noreferrer">
                  <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-bold px-8 py-4 rounded-lg shadow-lg flex items-center gap-3">
                    <FaWhatsapp className="text-2xl" />
                    Pesan via WhatsApp
                  </button>
                </a>
                <a href="#Layanan">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 transition duration-300 text-white font-semibold px-8 py-4 rounded-lg">
                    Lihat Layanan Kami
                  </button>
                </a>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="md:w-1/2 rounded-lg h-64 md:h-80 overflow-hidden flex items-center justify-center">
            <img
              src="/gambar/gambar_5.jpeg"
              alt="Printing"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="Layanan" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "#1F3F75" }}
            >
              Layanan Kami
            </h3>
            <p className="text-gray-600 text-base mb-12">
              Kami menawarkan berbagai layanan percetakan dan fotokopi lengkap untuk memenuhi semua kebutuhan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Fotokopi", image: "/gambar/Fotocopy.jpeg" },
              { title: "Sablon", image: "/gambar/sablon.jpeg" },
              { title: "Stempel", image: "/gambar/stample.jpeg " },
              { title: "Print", image: "/gambar/gambar_5.jpeg" },
              {
                title: "Pembayaran Listrik dan WiFi",
                image: "/gambar/wifi.jpeg",
              },
              { title: "Isi Pulsa", image: "/gambar/pulsa.jpeg" },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="w-20 h-20 overflow-hidden rounded-full ">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-fill "
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-700 mt-4">
                  {service.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- BARU: Section Cara Pemesanan -- */}
      <section id="CaraPesan" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              Cara Mudah Memesan Online
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hanya butuh 4 langkah sederhana untuk mendapatkan hasil cetak berkualitas tanpa harus keluar rumah.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-4">
              <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-4">
                <FaWhatsapp />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">1. Hubungi Kami</h4>
              <p className="text-gray-600">
                Klik tombol WhatsApp, lalu jelaskan kebutuhan cetak Anda (misal: print skripsi, fotokopi KTP, dll).
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center p-4">
              <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-4">
                <FaFileUpload />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">2. Kirim File Anda</h4>
              <p className="text-gray-600">
                Kirimkan dokumen atau file desain Anda langsung melalui chat WhatsApp.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center p-4">
              <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-4">
                <FaCreditCard />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">3. Konfirmasi & Bayar</h4>
              <p className="text-gray-600">
                Kami akan mengonfirmasi total biaya. Lakukan pembayaran melalui transfer atau metode lain yang disepakati.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center p-4">
              <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-4">
                <FaBoxOpen />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">4. Ambil Pesanan</h4>
              <p className="text-gray-600">
                Setelah selesai, pesanan bisa langsung Anda ambil di toko kami. Kami akan memberitahu jika sudah siap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section id="Keunggulan" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Kenapa Memilih Kami?
            </h2>
            <p className="text-gray-700 mb-8">
              Kami adalah pilihan terbaik untuk semua kebutuhan percetakan dan
              fotokopi Anda. Dengan pengalaman bertahun-tahun, kami menjamin kepuasan Anda.
            </p>

            {/* List of Features */}
            <ul className="space-y-6">
              {[
                {
                  title: "Proses Cepat",
                  desc: "Layanan cepat saat Anda membutuhkannya, sering kali selesai di hari yang sama.",
                },
                {
                  title: "Hasil Berkualitas Tinggi",
                  desc: "Peralatan modern menghasilkan cetakan yang tajam, jelas, dan profesional.",
                },
                {
                  title: "Harga Kompetitif",
                  desc: "Tarif terjangkau tanpa mengorbankan kualitas atau layanan.",
                },
                {
                  title: "Staf Ahli",
                  desc: "Tim berpengalaman siap membantu semua kebutuhan percetakan Anda.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex-shrink-0 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 text-xl">✔</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Box -- Teks dan link diperbarui */}
          <div className="bg-blue-100 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Siap untuk memulai?
            </h3>
            <p className="text-gray-700 mb-6">
              Lihat panduan cara pesan kami atau hubungi langsung untuk mulai mencetak.
            </p>
            <a href="#CaraPesan">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded shadow">
                Lihat Caranya
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* harga */}
      <section className="py-20 bg-gray-50" id="Harga">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-center text-3xl font-bold text-blue-900 mb-2">
            Harga Layanan Kami
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Kami menawarkan harga yang kompetitif untuk semua layanan kami.
            Berikut adalah daftar harga untuk layanan umum kami.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                  <th className="px-6 py-4 border-b">Layanan</th>
                  <th className="px-6 py-4 border-b">Deskripsi</th>
                  <th className="px-6 py-4 border-b">Harga</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                <tr>
                  <td className="px-6 py-4 font-bold border-b">Fotokopi Hitam Putih</td>
                  <td className="px-6 py-4 border-b">
                    Fotokopi standar hitam putih di kertas biasa
                  </td>
                  <td className="px-6 py-4 border-b">Rp 500 per lembar</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold border-b">Fotokopi Berwarna</td>
                  <td className="px-6 py-4 border-b">
                    Fotokopi penuh warna di kertas biasa
                  </td>
                  <td className="px-6 py-4 border-b">Rp 2.500 per lembar</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold border-b">Scan Dokumen</td>
                  <td className="px-6 py-4 border-b">
                    Pindai dokumen beresolusi tinggi ke format digital
                  </td>
                  <td className="px-6 py-4 border-b">Rp 1.000 per lembar</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold border-b">Cetak Format Besar</td>
                  <td className="px-6 py-4 border-b">
                    Poster, spanduk, dan dokumen berukuran besar
                  </td>
                  <td className="px-6 py-4 border-b">Rp 75.000 per m²</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold">Jasa Penjilidan</td>
                  <td className="px-6 py-4">
                    Penjilidan spiral, comb, atau perfect binding untuk dokumen
                  </td>
                  <td className="px-6 py-4">Mulai dari Rp 15.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-700 mb-4">
              Jika Anda memiliki kebutuhan khusus atau proyek besar, silakan
              hubungi kami untuk mendapatkan penawaran harga yang disesuaikan.
            </p>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-20 bg-white" id="Testimoni">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-2">
            Apa kata mereka tentang kami?
          </h3>
          <p className="text-center text-gray-600 mb-10">
            Kami bangga dengan layanan kami dan senang mendengar umpan balik
            positif dari pelanggan kami.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 shadow-sm">
              <p className="text-orange-500 text-4xl lg:text-5xl mb-4">❝</p>
              <p className="text-gray-700 italic mb-4">
                Layanan cepat dan hasil cetakan yang luar biasa! Saya sangat
                merekomendasikan HaKa untuk semua kebutuhan percetakan.
              </p>
              <div>
                <p className="font-bold text-blue-900">Ilham</p>
              </div>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <p className="text-orange-500 text-4xl lg:text-5xl mb-4">❝</p>
              <p className="text-gray-700 italic mb-4">
                Saya sangat terkesan dengan kualitas cetakan dan layanan
                pelanggan mereka. Tim sangat membantu dan selalu siap membantu.
              </p>
              <div>
                <p className="font-bold text-blue-900">Abi</p>
              </div>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <p className="text-orange-500 text-4xl lg:text-5xl mb-4">❝</p>
              <p className="text-gray-700 italic mb-4">
                Pesan spanduk format besar hasilnya luar biasa! Saya sangat
                merekomendasikan HaKa untuk semua kebutuhan percetakan.
              </p>
              <div>
                <p className="font-bold text-blue-900">Naufal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-blue-900 text-white text-center" id="Kontak">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Hubungi Kami
        </h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Punya pertanyaan lebih lanjut atau ingin memesan langsung? Klik tombol di bawah ini untuk terhubung dengan kami di WhatsApp.
        </p>
        <a href="https://wa.me/6285263184268" target="_blank" rel="noopener noreferrer">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow">
            <FaWhatsapp className="text-3xl inline-block mr-2" />
            Hubungi Kami Sekarang
          </button>
        </a>
      </section>

      {/* Information */}
      <section className="py-20 bg-white" id="Informasi">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
            Informasi Toko
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Kunjungi kami langsung atau hubungi melalui detail kontak di bawah ini.
          </p>

          <div className="flex justify-center">
            <div className="bg-gray-50 border-gray-50 rounded-lg p-6 shadow-xl w-full md:w-3/4">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">📍</span>
                  <p>Jalan Kubang Putiah, Jorong Lukok, Kubang Putiah, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">📞</span>
                  <p>+62 8526 3184 268</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✉️</span>
                  <p>yunisetiawan1969@gmail.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">🕒</span>
                  <div>
                    <p>Setiap Hari : 09.00 - 21.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">HaKa | Fotocopy & Percetakan</h3>
          <p className="text-sm mb-4">
            Solusi terpercaya untuk semua kebutuhan fotokopi dan percetakan Anda.
          </p>
          <p className="text-xs text-gray-300">
            © 2025 HaKa. All rights reserved.
          </p>
        </div>
      </footer>

      {/* -- BARU: Floating WhatsApp Button -- */}
      <a 
        href="https://wa.me/6285263184268?text=Halo%20HaKa%20Fotocopy,%20saya%20mau%20bertanya." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
        aria-label="Hubungi kami di WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}