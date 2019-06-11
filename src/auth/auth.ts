interface Auth {
  isAuthenticated: boolean
  signIn: Function
  signout: Function
}

export const auth: Auth = {
  isAuthenticated: false,
  signIn(username: string, password: string, callback: Function): void {
    this.isAuthenticated = true
    setTimeout(callback, 1000)
  },
  signout(callback: Function) {
    this.isAuthenticated = false
    setTimeout(callback, 1000)
  },
}
