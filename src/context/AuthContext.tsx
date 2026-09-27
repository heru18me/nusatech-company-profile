import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import Backendless from '../services/backendless'

// ============================================
// TYPES
// ============================================
interface User {
  objectId: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

// ============================================
// CONTEXT
// ============================================
const AuthContext = createContext<AuthContextType | null>(null)

// ============================================
// PROVIDER
// ============================================
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Helper: convert Backendless user ke User kita
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapUser = (u: any): User => ({
    objectId: u.objectId ?? '',
    email: u.email ?? '',
    name: u.name ?? '',
  })

  // Cek apakah user sudah login saat app dibuka
  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await Backendless.UserService.getCurrentUser()
        if (currentUser) {
          setUser(mapUser(currentUser))
        }
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkUser()
  }, [])

  // Login
  const login = async (email: string, password: string) => {
    const loggedIn = await Backendless.UserService.login(
      email,
      password,
      true // stayLoggedIn
    )
    setUser(mapUser(loggedIn))
  }

  // Register
  const register = async (name: string, email: string, password: string) => {
    const newUser = new Backendless.User()
    newUser.email = email
    newUser.password = password
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(newUser as any).name = name

    await Backendless.UserService.register(newUser)
    await login(email, password)
  }

  // Logout
  const logout = async () => {
    await Backendless.UserService.logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// ============================================
// CUSTOM HOOK
// ============================================
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth harus dipakai di dalam AuthProvider')
  }
  return context
}