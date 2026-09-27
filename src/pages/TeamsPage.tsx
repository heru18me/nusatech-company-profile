import { useEffect, useState } from 'react'

// ============================================
// TYPES
// ============================================
interface User {
  login: { uuid: string }
  name: { first: string; last: string }
  picture: { large: string }
  email: string
  location: { city: string; country: string }
}

// Jabatan fiktif untuk tim Nusatech
const positions = [
  'CEO & Founder',
  'CTO',
  'Lead Developer',
  'UI/UX Designer',
  'Backend Engineer',
  'Frontend Engineer',
  'DevOps Engineer',
  'Project Manager',
  'Data Analyst',
  'Mobile Developer',
  'QA Engineer',
  'Marketing Manager',
]

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
const TeamGrid = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          'https://randomuser.me/api/?results=12&nat=us,gb,au'
        )
        const data = await response.json()
        setUsers(data.results)
      } catch (err) {
        setError('Gagal memuat data tim. Coba refresh halaman.')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  // Loading state
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 animate-pulse"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mx-auto mb-2 w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded mx-auto w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-red-500 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Coba Lagi
          </button>
        </div>
      </section>
    )
  }

  // Success state
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user, index) => (
            <div
              key={user.login.uuid}
              className="border border-gray-200 rounded-xl p-6 text-center hover:border-red-500 hover:shadow-lg transition-all group"
            >
              {/* Photo */}
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100 group-hover:border-red-100 transition-colors"
              />

              {/* Name */}
              <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                {user.name.first} {user.name.last}
              </h3>

              {/* Position */}
              <p className="text-red-500 text-sm font-medium mt-1">
                {positions[index % positions.length]}
              </p>

              {/* Location */}
              <p className="text-gray-400 text-xs mt-1">
                {user.location.city}, {user.location.country}
              </p>

              {/* Email */}
              <p className="text-gray-500 text-xs mt-2 truncate">
                {user.email}
              </p>
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
const TeamsPage = () => {
  return (
    <div>
      <TeamsHero />
      <TeamGrid />
    </div>
  )
}

export default TeamsPage