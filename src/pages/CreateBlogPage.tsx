import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Backendless from '../services/backendless'
import { useAuth } from '../context/AuthContext'

const categories = [
  'Web Development',
  'Mobile App',
  'Cloud & DevOps',
  'Cyber Security',
  'Data & AI',
  'UI/UX Design',
  'General',
]

const CreateBlogPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('General')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validasi
    if (!title.trim()) return setError('Judul tidak boleh kosong!')
    if (!content.trim()) return setError('Konten tidak boleh kosong!')
    if (content.length < 20) return setError('Konten minimal 20 karakter!')

    setLoading(true)

    try {
      const newBlog = {
        title: title.trim(),
        content: content.trim(),
        author: user?.name || user?.email || 'Anonymous',
        category,
      }

      await Backendless.Data.of('Blog').save(newBlog)

      // Redirect ke blog list setelah berhasil
      navigate('/blog')
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Gagal menyimpan artikel. Coba lagi.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="text-gray-400 hover:text-red-400 transition-colors text-sm mb-4 inline-block"
          >
            ← Kembali ke Blog
          </Link>
          <h1 className="text-4xl font-black">
            Tulis <span className="text-red-500">Artikel</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Bagikan pengetahuan dan pengalamanmu!
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

          {/* Author info */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold">
                {(user?.name || user?.email || 'A').charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                {user?.name || user?.email}
              </p>
              <p className="text-gray-500 text-sm">Penulis</p>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul Artikel
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Tips Membangun REST API yang Scalable"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors text-lg"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Konten Artikel
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tulis artikel kamu di sini..."
                rows={10}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
              <p className="text-gray-400 text-xs mt-1">
                {content.length} / 500 karakter
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {loading ? 'Menyimpan...' : 'Publikasikan Artikel'}
              </button>
              <Link
                to="/blog"
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 transition-colors font-semibold"
              >
                Batal
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateBlogPage