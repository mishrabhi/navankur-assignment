import { useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //login fun
  const login = async (email, password) => {
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setUser({ email });
      navigate("/products");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  //logout fun
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
