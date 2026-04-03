import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage
  useEffect(() => {

    try {

      const storedUser = localStorage.getItem("crm_user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

    } catch (error) {

      console.error("Auth Load Error:", error);
      localStorage.removeItem("crm_user");

    }

    setLoading(false);

  }, []);

  // LOGIN
  const login = (userData) => {

    setUser(userData);
    localStorage.setItem("crm_user", JSON.stringify(userData));

  };

  // REGISTER
  const register = (userData) => {

    setUser(userData);
    localStorage.setItem("crm_user", JSON.stringify(userData));

  };

  // LOGOUT
  const logout = () => {

    setUser(null);
    localStorage.removeItem("crm_user");

  };

  const value = {
    user,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );

};