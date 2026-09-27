// src/pages/HomePage.tsx
import { Link } from 'react-router-dom'

// ============================================
// SECTION 1: HERO
// ============================================
const Hero = () => (
  <section className="bg-gray-900 text-white min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      
      {/* Text */}
      <div>
        <p className="text-red-500 font-semibold mb-3 tracking-widest uppercase">
          IT Consulting & Development
        </p>
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
          Teknologi dari{' '}
          <span className="text-red-500">ujung ke ujung</span>{' '}
          negeri
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Nusatech hadir sebagai mitra teknologi terpercaya untuk 
          bisnis Anda. Kami membangun solusi digital yang scalable, 
          modern, dan siap pakai.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            to="/services"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Lihat Layanan
          </Link>
          <Link
            to="/about"
            className="border border-gray-600 hover:border-red-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Tentang Kami
          </Link>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex justify-center">
        <div className="relative w-80 h-80">
          {/* Lingkaran dekorasi */}
          <div className="absolute inset-0 bg-red-600 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute inset-8 bg-red-600 rounded-full opacity-20"></div>
          {/* Logo besar di tengah */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-red-500 text-5xl font-black">NUSA</p>
              <p className="text-white text-5xl font-black">TECH</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
)

// ============================================
// SECTION 2: STATS
// ============================================
const Stats = () => {
  const stats = [
    { number: '150+', label: 'Proyek Selesai' },
    { number: '80+', label: 'Klien Puas' },
    { number: '7+', label: 'Tahun Pengalaman' },
    { number: '30+', label: 'Tim Profesional' },
  ]

  return (
    <section className="bg-red-600 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-black">{stat.number}</p>
              <p className="text-red-100 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 3: SERVICES HIGHLIGHT
// ============================================
const ServicesHighlight = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      desc: 'Membangun website modern, responsif, dan berperforma tinggi untuk bisnis Anda.',
    },
    {
      icon: '📱',
      title: 'Mobile App',
      desc: 'Aplikasi mobile iOS dan Android yang intuitif dan user-friendly.',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      desc: 'Migrasi dan pengelolaan infrastruktur cloud yang aman dan efisien.',
    },
    {
      icon: '🔒',
      title: 'Cyber Security',
      desc: 'Perlindungan sistem dan data bisnis dari ancaman siber.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-widest uppercase mb-2">
            Layanan Kami
          </p>
          <h2 className="text-4xl font-black text-gray-900">
            Solusi Digital Terlengkap
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Kami menyediakan berbagai layanan teknologi untuk membantu 
            bisnis Anda berkembang di era digital.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Semua Layanan →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 4: TESTIMONIALS
// ============================================
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Budi Santoso',
      company: 'CEO, TokoBaju.id',
      text: 'Nusatech berhasil membangun platform e-commerce kami dalam waktu singkat. Hasilnya luar biasa, penjualan naik 40%!',
    },
    {
      name: 'Sari Dewi',
      company: 'Founder, EduNesia',
      text: 'Tim Nusatech sangat profesional dan komunikatif. Aplikasi yang mereka bangun melebihi ekspektasi kami.',
    },
    {
      name: 'Ahmad Fauzi',
      company: 'CTO, LogisTech',
      text: 'Solusi cloud dari Nusatech membuat sistem kami jauh lebih stabil dan efisien. Sangat recommended!',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-widest uppercase mb-2">
            Testimoni
          </p>
          <h2 className="text-4xl font-black text-gray-900">
            Kata Klien Kami
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              {/* Quote */}
              <p className="text-red-500 text-4xl font-black leading-none mb-3">"</p>
              <p className="text-gray-600 leading-relaxed mb-4">{t.text}</p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <ServicesHighlight />
      <Testimonials />
    </div>
  )
}

export default HomePage