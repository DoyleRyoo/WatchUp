import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase";

export const login = async (
  email,
  password
) => {
  const credential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const token = await credential.user.getIdToken();

  localStorage.setItem(
    "token",
    token
  );

  return credential.user;
};

export const logout = async () => {
  localStorage.removeItem("token");

  await signOut(auth);
};
