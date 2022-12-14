import app from "./firebase";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  update,
  remove,
} from "firebase/database";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const AddUser = (info, currentUser) => {
  const db = getDatabase(app);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  console.log(info);
  set(newUserRef, {
    title: info.title,
    img: info.img,
    content: info.content,
    email: currentUser,
  });
};

// export const AddUser1 = (email) => {
//   const db = getDatabase(app);
//   const userRef = ref(db, "users/");
//   const newUserRef = push(userRef);
//   set(newUserRef, {
//     email: email.email,
//   });
// };

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentList, setContentList] = useState();
  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContentList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contentList };
};

export const UpdateUser = (info) => {
  console.log(info);
  const db = getDatabase(app);
  const updates = {};
  updates["users/" + info.id] = info;

  return update(ref(db), updates);
};

export const DeleteUser = (id) => {
  const db = getDatabase(app);
  const userRef = ref(db, "users/");
  remove(ref(db, "users/" + id));
};

// const auth = getAuth();
// export const getInfo = () => {
//   const [email, setEmail] = useState();
//   const user = auth.currentUser;
//   if (user !== null) {
//     // The user object has basic properties such as display name, email, etc.
//     setEmail(user.email);

//     // The user's ID, unique to the Firebase project. Do NOT use
//     // this value to authenticate with your backend server, if
//     // you have one. Use User.getToken() instead.
//   }
//   return { email };
// };
