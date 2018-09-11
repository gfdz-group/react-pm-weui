import decode from 'jwt-decode'

class AuthService {
  constructor() {
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  login(code) {
    return this.fetch('/api/jwt/getToken.do', {
      body:  JSON.stringify({ code }),
      method: 'POST',
      credentials: 'same-origin',
    }).then(res => {
      this.setToken(res.token)
      return Promise.resolve(res)
    })
  }

  loggedIn() {
    const token = this.getToken()
    return !!token && !this.isTokenExpired(token)
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(tocken);
      if(decoded.exp < Date.now() / 1000) {
        return true
      }
    } catch (err) {
      return false
    }
  }

  setToken(token) {
    localStorage.setItem('id_token', token)
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  logout() {
    localStorage.removeItem('id_token')
  }

  getProfile() {
    return decode(this.getToken())
  }

  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
    .then(this._checkStatus)
    .then(res => res.json())
  }

  _checkStatus(res) {
    if(res.status >= 200 && res.status < 300) {
      return res
    } else if(res.status === 401) {
      window.location = '/login?code=111'
    }else {
      let error = new Error(res.statusText)
      error.res = res
      throw error
    }
  }

}

export default AuthService
