import { Link } from 'react-router-dom'

// ============================================
// DATA
// ============================================
const servicesData = [
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Membangun website modern, responsif, dan berperforma tinggi menggunakan teknologi terkini seperti React, Next.js, dan TypeScript.',
    features: ['React / Next.js', 'TypeScript', 'REST API', 'Responsive Design'],
    price: 'Mulai dari Rp 15.000.000',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Aplikasi mobile iOS dan Android yang intuitif, cepat, dan user-friendly menggunakan React Native.',
    features: ['React Native', 'iOS & Android', 'Push Notification', 'Offline Mode'],
    price: 'Mulai dari Rp 25.000.000',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    desc: 'Migrasi dan pengelolaan infrastruktur cloud yang aman, skalabel, dan efisien menggunakan AWS dan Google Cloud.',
    features: ['AWS / GCP', 'Docker & Kubernetes', 'CI/CD Pipeline', 'Auto Scaling'],
    price: 'Mulai dari Rp 10.000.000',
  },
  {
    icon: '🔒',
    title: 'Cyber Security',
    desc: 'Perlindungan menyeluruh untuk sistem dan data bisnis Anda dari ancaman siber yang terus berkembang.',
    features: ['Security Audit', 'Penetration Testing', 'Data Encryption', '24/7 Monitoring'],
    price: 'Mulai dari Rp 20.000.000',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    desc: 'Transformasi data mentah menjadi insight berharga untuk pengambilan keputusan bisnis yang lebih baik.',
    features: ['Dashboard Interaktif', 'Big Data', 'Machine Learning', 'Laporan Otomatis'],
    price: 'Mulai dari Rp 18.000.000',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Desain antarmuka yang indah dan pengalaman pengguna yang menyenangkan untuk produk digital Anda.',
    features: ['Figma Design', 'Prototyping', 'User Research', 'Design System'],
    price: 'Mulai dari Rp 8.000.000',
  },
]

// ============================================
// SECTION 1: HERO
// ============================================
const ServicesHero = () => (
  <section className="bg-gray-900 text-white py-20">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-red-500 font-semibold tracking-widest uppercase mb-3">
        Layanan Kami
      </p>
      <h1 className="text-5xl font-black mb-6">
        Solusi Digital <span className="text-red-500">Terlengkap</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Dari web development hingga cloud solutions, kami siap membantu
        bisnis Anda tumbuh di era digital.
      </p>
    </div>
  </section>
)

// ============================================
// SECTION 2: SERVICES GRID
// ============================================
const ServicesGrid = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className="border border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all group"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
              {service.title}
            </h3>

            {/* Desc */}
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              {service.desc}
            </p>

            {/* Features */}
            <ul className="space-y-1 mb-6">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <span className="text-red-500 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="border-t border-gray-100 pt-4">
              <p className="text-red-600 font-bold">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ============================================
// SECTION 3: TESTIMONIALS
// ============================================
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Budi Santoso',
      company: 'CEO, TokoBaju.id',
      service: 'Web Development',
      text: 'Website yang Nusatech bangun untuk kami sangat cepat dan mudah digunakan. Konversi meningkat 40% dalam 3 bulan!',
    },
    {
      name: 'Sari Dewi',
      company: 'Founder, EduNesia',
      service: 'Mobile App',
      text: 'Aplikasi dari Nusatech sangat intuitif. User kami langsung bisa menggunakannya tanpa tutorial panjang.',
    },
    {
      name: 'Ahmad Fauzi',
      company: 'CTO, LogisTech',
      service: 'Cloud Solutions',
      text: 'Downtime berkurang drastis setelah migrasi ke cloud bersama Nusatech. Sangat profesional!',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-widest uppercase mb-2">
            Testimoni
          </p>
          <h2 className="text-4xl font-black text-gray-900">
            Klien Yang Puas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                {t.service}
              </span>
              <p className="text-red-500 text-4xl font-black mt-3 leading-none">"</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.company}</p>
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
// SECTION 4: CTA
// ============================================
const CTA = () => (
  <section className="bg-red-600 py-16 text-white text-center">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-black mb-4">
        Tertarik Bekerja Sama?
      </h2>
      <p className="text-red-100 mb-8 text-lg">
        Konsultasi gratis untuk proyek pertama Anda.
      </p>
      <Link
        to="/teams"
        className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors inline-block"
      >
        Kenali Tim Kami
      </Link>
    </div>
  </section>
)

// ============================================
// MAIN COMPONENT
// ============================================
const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesGrid />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default ServicesPage