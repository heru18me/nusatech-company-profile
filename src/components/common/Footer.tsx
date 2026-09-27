import { Link } from 'react-router-dom'

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Teams', path: '/teams' },
    { name: 'Blog', path: '/blog' },
  ]

  const socials = ['LinkedIn', 'GitHub', 'Twitter']

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-500 text-2xl font-black">NUSA</span>
              <span className="text-white text-2xl font-black">TECH</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Mitra teknologi terpercaya untuk bisnis Indonesia.
              Kami hadir dari Sabang sampai Merauke.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="bg-gray-800 hover:bg-red-600 px-3 py-1.5 rounded text-sm transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4 text-white">Navigasi</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Jakarta, Indonesia</li>
              <li>hello@nusatech.id</li>
              <li>+62 21 1234 5678</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-sm">
            2024 Nusatech. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with love for Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer