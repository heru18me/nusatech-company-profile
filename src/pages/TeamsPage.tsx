// ============================================
// DATA TIM INDONESIA
// ============================================
const teamMembers = [
  { name: 'Budi Santoso', position: 'CEO & Founder', city: 'Jakarta', email: 'budi.santoso@nusatech.id' },
  { name: 'Sari Dewi', position: 'CTO', city: 'Bandung', email: 'sari.dewi@nusatech.id' },
  { name: 'Ahmad Fauzi', position: 'Lead Developer', city: 'Surabaya', email: 'ahmad.fauzi@nusatech.id' },
  { name: 'Rina Kusuma', position: 'UI/UX Designer', city: 'Yogyakarta', email: 'rina.kusuma@nusatech.id' },
  { name: 'Dian Pratama', position: 'Backend Engineer', city: 'Medan', email: 'dian.pratama@nusatech.id' },
  { name: 'Fitri Handayani', position: 'Frontend Engineer', city: 'Semarang', email: 'fitri.handayani@nusatech.id' },
  { name: 'Rizky Ramadhan', position: 'DevOps Engineer', city: 'Makassar', email: 'rizky.ramadhan@nusatech.id' },
  { name: 'Dewi Lestari', position: 'Project Manager', city: 'Bali', email: 'dewi.lestari@nusatech.id' },
  { name: 'Agus Wijaya', position: 'Data Analyst', city: 'Palembang', email: 'agus.wijaya@nusatech.id' },
  { name: 'Nurul Hidayah', position: 'Mobile Developer', city: 'Balikpapan', email: 'nurul.hidayah@nusatech.id' },
  { name: 'Hendra Gunawan', position: 'QA Engineer', city: 'Manado', email: 'hendra.gunawan@nusatech.id' },
  { name: 'Maya Sari', position: 'Marketing Manager', city: 'Lombok', email: 'maya.sari@nusatech.id' },
]

// Generate avatar URL dengan nama Indonesia
const getAvatarUrl = (name: string) => {
  const encoded = encodeURIComponent(name)
  return `https://ui-avatars.com/api/?name=${encoded}&size=200&background=DC2626&color=ffffff&bold=true&font-size=0.4`
}

// ============================================
// SECTION 1: HERO
// ============================================
const TeamsHero = () => (
  <section className="bg-gray-900 text-white py-20">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-red-500 font-semibold tracking-widest uppercase mb-3">
        Tim Kami
      </p>
      <h1 className="text-5xl font-black mb-6">
        Orang-orang di Balik{' '}
        <span className="text-red-500">Nusatech</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Tim profesional kami terdiri dari engineer, designer, dan
        konsultan berpengalaman dari seluruh Indonesia.
      </p>
    </div>
  </section>
)

// ============================================
// SECTION 2: TEAM GRID
// ============================================
const TeamGrid = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.email}
            className="border border-gray-200 rounded-xl p-6 text-center hover:border-red-500 hover:shadow-lg transition-all group"
          >
            {/* Avatar */}
            <img
              src={getAvatarUrl(member.name)}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100 group-hover:border-red-100 transition-colors"
            />

            {/* Name */}
            <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
              {member.name}
            </h3>

            {/* Position */}
            <p className="text-red-500 text-sm font-medium mt-1">
              {member.position}
            </p>

            {/* City */}
            <p className="text-gray-400 text-xs mt-1">
              {member.city}, Indonesia
            </p>

            {/* Email */}
            <p className="text-gray-500 text-xs mt-2 truncate">
              {member.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ============================================
// MAIN COMPONENT
// ============================================
const TeamsPage = () => {
  return (
    <div>
      <TeamsHero />
      <TeamGrid />
    </div>
  )
}

export default TeamsPage