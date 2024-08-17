import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo_url) => {
    
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo_url,
    });
  };

  const LogInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user: ", currentUser);
      setUser(currentUser);
      setLoading(false);

      // if(currentUser){
      //   const loggedUser = {email: currentUser.email};
      //   axios.post('https://touro-server.vercel.app/jwt',loggedUser, {withCredentials: true})
      //   .then(res=> {
      //     console.log(res.data)
      //   })
      // }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    LogInUser,
    logOut,
    googleLogIn,
    githubLogIn,
    updateUserProfile,
  };


  return (
    <AuthContext.Provider value={{ authInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
