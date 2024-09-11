import { useState } from "react";
import api from "../api"
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";

function Form({route, method}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isLogin = method === "login";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const req = await api.post(route, {username, password})
      if (isLogin) {
        localStorage.setItem(ACCESS_TOKEN, req.data.access);
        localStorage.setItem(REFRESH_TOKEN, req.data.refresh);
        // Navigate to notebook
        navigate("/notebook"); 
      } else {
        // else navigate to login (no tokens)
        navigate("/login")
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  const name = isLogin ? "Login" : "Register";

  return <form onSubmit={handleSubmit} className="w-64 h-40">
    <h1>{name}</h1>
    <input
      className=""
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Username"
    />
    <input
      className=""
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
    />
    {loading && <LoadingIndicator />}
    <button className="" type="submit">{name}</button>
  </form>
}

export default Form