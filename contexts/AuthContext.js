import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const signup = (email, password) => {
    console.log(auth.createUserWithEmailAndPassword);
    createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    console.log("try signing in");
    signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    console.log("signout successful!");
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const [currentUser, setCurrentUser] = useState();

  const value = {
    currentUser,
    signup,
    signout,
    signin,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
}
