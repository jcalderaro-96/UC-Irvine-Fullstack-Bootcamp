// updated client/src/api/authAPI.tsx with green comments
import { UserLogin } from "../interfaces/UserLogin";

// async function to handle user login by sending credentials to server
const login = async (userInfo: UserLogin) => {
  // send POST request to backend login route with user info
  const response = await fetch('/auth/login', {
    method: 'POST', // use POST method to submit login data
    headers: {
      'Content-Type': 'application/json' // set content type as JSON
    },
    body: JSON.stringify(userInfo) // convert user info to JSON string
  });

  // if response not ok (error), throw an error
  if (!response.ok) {
    throw new Error('Login failed'); // notify caller login failed
  }

  // parse and return JSON response (should contain JWT token)
  const data = await response.json();

  return data; // return token data
}

export { login };
// end of file
