import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  // Initially no user is logged in
  user: null,
  token: null,

  // Login handler
  login: (user, token) => {
    // Optional: persist in localStorage/sessionStorage
    localStorage.setItem('authToken', token)
    localStorage.setItem('authUser', JSON.stringify(user))

    set({ user, token })
  },

  // Logout handler
  logout: () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('authUser')

    set({ user: null, token: null })
  },

  // Restore session from localStorage
  initialize: () => {
    const token = localStorage.getItem('authToken')
    const user = localStorage.getItem('authUser')

    if (token && user) {
      set({ token, user: JSON.parse(user) })
    }
  },
}))
