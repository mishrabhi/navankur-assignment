import { Navigate, Router } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { cartProvider } from "./context/cartContext";

function App() {
  return (
    <AuthProvider>
      <cartProvider>
        <Router>
          <Navbar />
        </Router>
      </cartProvider>
    </AuthProvider>
  );
}

export default App;
