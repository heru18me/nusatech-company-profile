import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Teams', path: '/teams' },
    { name: 'Blog', path: '/blog' },
  ]

  const isActive = (path: string) => location.pathname === path

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-red-500 text-2xl font-black">NUSA</span>
          <span className="text-white text-2xl font-black">TECH</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`font-medium transition-colors hover:text-red-400 ${
                  isActive(link.path)
                    ? 'text-red-500 border-b-2 border-red-500 pb-1'
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            // Sudah login
            <>
              <Link
                to="/create-blog"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                + Tulis Artikel
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {(user.name || user.email).charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-gray-300 text-sm">{user.name || user.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            // Belum login
            <Link
              to="/login"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition-colors"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-medium transition-colors hover:text-red-400 ${
                    isActive(link.path) ? 'text-red-500' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {user ? (
              <>
                <li>
                  <Link
                    to="/create-blog"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-300 hover:text-red-400"
                  >
                    + Tulis Artikel
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left py-2 text-red-400"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block bg-red-600 text-white text-center py-2 rounded-lg font-medium"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar