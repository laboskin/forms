import React, { useContext, useState } from 'react';

const LOCAL_STORAGE_KEY = 'username';

const AuthContext = React.createContext<{
  username: string | null,
  login: (username: string) => void;
  logout: () => void;
}>({
  username: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState<string | null>(localStorage.getItem(LOCAL_STORAGE_KEY));

  const login = (username: string) => {
    setUsername(username);
    localStorage.setItem(LOCAL_STORAGE_KEY, username);
  };
  const logout = () => {
    setUsername(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
