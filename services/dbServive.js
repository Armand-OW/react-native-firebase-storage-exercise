import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { storage } from "../firebase";
import { addDoc, collection, docRef } from "firebase/firestore";
import { db } from "../firebase";


export const createNewBucketMemory = async(fileName, uri) => {

const image = {
    Title: fileName,
    URL: uri,
}

    try {
      // docRef - our reference to our newly created document
      const docRef = await addDoc(collection(db, "memories"), image);
      console.log("Memory written with ID: ", docRef.id);
      return true;
    } catch (e) {
      console.error("Error adding memory: ", e);
      return false;
    }
  }


  const docRef = doc(db, "memories");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }