import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userName: string;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const { isAuthenticated, userName } = JSON.parse(storedAuth);
      setIsAuthenticated(isAuthenticated);
      setUserName(userName);
    }
  }, []);

  const login = (email: string, password: string) => {
    const name = email.split('@')[0];
    setIsAuthenticated(true);
    setUserName(name);
    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, userName: name }));
  };

  const signup = (email: string, password: string, name: string) => {
    setIsAuthenticated(true);
    setUserName(name);
    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, userName: name }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserName("");
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
