import { jwtDecode } from 'jwt-decode'; // import jwtDecode to decode JWT tokens

class AuthService {
  getProfile() {
    const token = this.getToken(); // get token from localStorage
    if (!token) return null; // if no token, return null

    try {
      return jwtDecode(token); // decode and return the token payload
    } catch (err) {
      console.error('Failed to decode token', err); // log error if decode fails
      return null;
    }
  }

  loggedIn() {
    const token = this.getToken(); // get token from localStorage
    // return true if token exists and is not expired
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    if (!token) return true; // no token means expired

    try {
      // decode token and check expiration time
      const decoded: { exp?: number } = jwtDecode(token);
      if (!decoded.exp) return false; // if no exp field, assume not expired

      // check if current time is past expiration (exp is in seconds)
      return decoded.exp * 1000 < Date.now();
    } catch (err) {
      return true; // if decode fails, treat as expired
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // retrieve token from localStorage
  }

  login(idToken: string) {
    localStorage.setItem('token', idToken); // store token in localStorage
    window.location.assign('/'); // redirect user to home page
  }

  logout() {
    localStorage.removeItem('token'); // remove token on logout
    window.location.assign('/login'); // redirect to login page
  }
}

export default new AuthService();
