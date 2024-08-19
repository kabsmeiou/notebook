import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import api from "../api"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants"
import { useState, useEffect } from "react"


// exclusive route (additional protection for pages
// that are not meant to be bypassed by unauthorized users)
function ProtectedRoute({children}) {
  const [isAuthorized, setIsAuthorized] = useState(null)

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false))
  }, []);

  // refresh async function for refresh token
  const refreshtoken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN)
    try {
      // submit a post request to access
      // token refresh page and pass the
      // refresh token
      const response = await api.post("/api/token/refresh/", { 
        refresh: refreshToken,
      });
      // response status = 200 means 
      // that it was a sucess
      // therefore set the previous access token
      // to the new one acquired upon submitting the refresh token
      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
    }
  }

  // authentication async function using the access token
  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (!token) {
      setIsAuthorized(false)
      return
    }
    const decoded_token = jwtDecode(token);
    const tokenExpiration = decoded_token.exp;
    // get time in seconds
    const now = Date.now() / 1000;
    
    if (tokenExpiration < now) {
      await refreshtoken();
    } else {
      setIsAuthorized(true)
    }
  }

  if (isAuthorized === null) {
    return <div className="font-bold">Loading...</div>
  } 

  // return to login page if no tokens
  return isAuthorized ? children : <Navigate to="/login"/>
}

export default ProtectedRoute;