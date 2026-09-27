import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Backendless from '../services/backendless'
import type { Blog } from '../types/index'

// ============================================
// SECTION 1: HERO
// ============================================
const BlogHero = () => (
  <section className="bg-gray-900 text-white py-20">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-red-500 font-semibold tracking-widest uppercase mb-3">
        Blog
      </p>
      <h1 className="text-5xl font-black mb-6">
        Artikel & <span className="text-red-500">Insights</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Tips, tutorial, dan wawasan seputar teknologi dan pengembangan software
        dari tim Nusatech.
      </p>
    </div>
  </section>
)

// ============================================
// SECTION 2: BLOG LIST
// ============================================
const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        const result = await Backendless.Data.of('Blog').find(
          Backendless.DataQueryBuilder.create()
            .setSortBy(['created DESC'])
            .setPageSize(20)
        )
        setBlogs(result as Blog[])
      } catch {
        setError('Gagal memuat blog. Coba refresh halaman.')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // Loading state
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-3 w-1/4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
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
        </div>
      </section>
    )
  }

  // Empty state
  if (blogs.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-6xl mb-4">📝</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Belum ada artikel
          </h3>
          <p className="text-gray-500 mb-6">
            Jadilah yang pertama menulis artikel!
          </p>
          <Link
            to="/create-blog"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Tulis Artikel
          </Link>
        </div>
      </section>
    )
  }

  // Success state
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Write Button */}
        <div className="flex justify-end mb-8">
          <Link
            to="/create-blog"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
          >
            + Tulis Artikel
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.objectId}
              className="border border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all group"
            >
              {/* Category */}
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                {blog.category || 'General'}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                {blog.title}
              </h3>

              {/* Content preview */}
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                {blog.content}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-xs font-bold">
                      {blog.author?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{blog.author}</span>
                </div>
                <span className="text-xs text-gray-400">
                  {blog.created
                    ? new Date(blog.created).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })
                    : ''}
                </span>
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
const BlogListPage = () => {
  return (
    <div>
      <BlogHero />
      <BlogList />
    </div>
  )
}

export default BlogListPage