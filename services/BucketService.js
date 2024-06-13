// TODO: Upload Image to Buckets

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

export const handleUploadOfImage = async (uri, fileName) => {

    console.log("uploading...")
    const blob = await new Promise((resolve, reject) => { //blob is the actual image
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uri, true); //open the file's location path
        xhr.send(null);
      });

      const uploadRef = ref(storage, fileName)
      const uploadResult = await uploadBytes(uploadRef, blob)

      blob.close();

    console.log(await getDownloadURL(uploadRef)) //<-- return the url of the image on firebase

}