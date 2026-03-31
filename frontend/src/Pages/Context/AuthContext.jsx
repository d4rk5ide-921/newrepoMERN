import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [text, setText] = useState({ name: "ABC", des: "jnd  ksdjkdj" });

  return (
    <AuthContext.Provider value={{ text, setText }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
