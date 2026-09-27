import { Link } from 'react-router-dom'

// ============================================
// SECTION 1: HERO ABOUT
// ============================================
const AboutHero = () => (
  <section className="bg-gray-900 text-white py-20">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-red-500 font-semibold tracking-widest uppercase mb-3">
        Tentang Kami
      </p>
      <h1 className="text-5xl font-black mb-6">
        Kami adalah <span className="text-red-500">Nusatech</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Perusahaan teknologi Indonesia yang berdedikasi membangun
        solusi digital terbaik untuk bisnis lokal maupun nasional.
      </p>
    </div>
  </section>
)

// ============================================
// SECTION 2: HISTORY
// ============================================
const History = () => {
  const milestones = [
    {
      year: '2017',
      title: 'Nusatech Berdiri',
      desc: 'Didirikan di Jakarta oleh 3 engineer muda dengan visi memajukan teknologi Indonesia.',
    },
    {
      year: '2019',
      title: 'Ekspansi Nasional',
      desc: 'Membuka kantor di Surabaya dan Bali, melayani klien dari seluruh Indonesia.',
    },
    {
      year: '2021',
      title: '100+ Proyek',
      desc: 'Berhasil menyelesaikan lebih dari 100 proyek digital untuk berbagai industri.',
    },
    {
      year: '2024',
      title: 'Menuju Regional',
      desc: 'Mulai merambah pasar Asia Tenggara dengan layanan IT Consulting internasional.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-widest uppercase mb-2">
            Perjalanan Kami
          </p>
          <h2 className="text-4xl font-black text-gray-900">
            Sejarah Nusatech
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {milestones.map((item) => (
            <div
              key={item.year}
              className="border-l-4 border-red-500 pl-4"
            >
              <p className="text-red-500 font-black text-2xl">{item.year}</p>
              <h3 className="font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 3: VALUES
// ============================================
const Values = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Berorientasi Hasil',
      desc: 'Setiap proyek kami kerjakan dengan target yang jelas dan terukur.',
    },
    {
      icon: '🤝',
      title: 'Kolaboratif',
      desc: 'Kami bekerja bersama klien, bukan hanya untuk klien.',
    },
    {
      icon: '💡',
      title: 'Inovatif',
      desc: 'Selalu mencari solusi terbaik dan teknologi terkini.',
    },
    {
      icon: '🇮🇩',
      title: 'Bangga Indonesia',
      desc: 'Produk lokal berkualitas internasional untuk bangsa.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-widest uppercase mb-2">
            Nilai Kami
          </p>
          <h2 className="text-4xl font-black text-gray-900">
            Yang Kami Percaya
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 4: CTA
// ============================================
const CTA = () => (
  <section className="bg-red-600 py-16 text-white text-center">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-black mb-4">
        Siap Bekerja Sama?
      </h2>
      <p className="text-red-100 mb-8 text-lg">
        Mari wujudkan proyek impian Anda bersama Nusatech.
      </p>
      <Link
        to="/services"
        className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors inline-block"
      >
        Lihat Layanan Kami
      </Link>
    </div>
  </section>
)

// ============================================
// MAIN COMPONENT
// ============================================
const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <History />
      <Values />
      <CTA />
    </div>
  )
}

export default AboutPage