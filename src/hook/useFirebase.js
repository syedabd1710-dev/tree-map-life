"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const useFirebase = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);

  // Get data from Firebase
  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "myData", key);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setValue(docSnap.data().value);
      }
    };

    getData();
  }, [key]);

  // Save data to Firebase
  useEffect(() => {
    const saveData = async () => {
      const docRef = doc(db, "myData", key);

      await setDoc(docRef, {
        value: value,
      });
    };

    saveData();
  }, [key, value]);

  return [value, setValue];
};

export default useFirebase;