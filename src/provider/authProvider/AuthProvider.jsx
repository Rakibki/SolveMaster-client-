import { createContext, useEffect, useState } from "react";
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
import auth from "../../firebase/firebase.config";
import Loader from "../../components/loader/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";

export const authContext = createContext(null);

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadding, setLoadding] = useState(true);
  const axiosSecure = useAxiosSecure();

  console.log({ user });

  const createUser = (email, password) => {
    setLoadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singUser = (email, password) => {
    setLoadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoadding(true);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoadding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubProvider = new GithubAuthProvider();
  const loginWithGithub = () => {
    setLoadding(true);
    return signInWithPopup(auth, githubProvider);
  };

  const updaetUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  useEffect(() => {
    const disConnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadding(false);

      const userData = {
        name: user?.displayName || currentUser?.displayName,
        email: user?.email || currentUser.email,
        role: "sudent",
        image: user?.photoURL || currentUser.photoURL,
      };

      axiosSecure.post(`/api/v1/users`, userData);

      return () => {
        disConnect();
      };
    });
  }, [user]);

  const userInfo = {
    user,
    loadding,
    createUser,
    singUser,
    logOut,
    loginWithGoogle,
    loginWithGithub,
    updaetUserProfile,
  };

  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvaider;
