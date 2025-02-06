import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null); //token from localstorage
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setUser({ email: "user@example.com" }); // You can modify this logic to fetch user details
    }
  }, [token]);

  //login fun
  const login = async (email, password) => {
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setUser({ email });
      return true; //successful login
    } catch (error) {
      alert("Invalid credentials");
      return false; //failed login
    }
  };

  //logout fun
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, token, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
