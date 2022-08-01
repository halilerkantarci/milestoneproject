import app from "./firebase";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { useEffect, useState } from "react";

export const AddUser = (info) => {
  const db = getDatabase(app);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    title: info.title,
    img: info.img,
    content: info.content,
  });
};

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
