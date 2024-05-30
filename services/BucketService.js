import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { storage } from "../firebase";
import { db } from "../firebase";
import { createNewBucketMemory } from "./dbServive";

// TODO: Upload Image to Buckets
export const handleUploadLoadOfImage = async (uri, fileName) => {

    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        }
        xhr.onerror = function () {
            console.log(e);
            reject(new TypeError("network request failed"));
        }
        xhr.responseType = 'blob';
        xhr.open("GET", uri, true);
        xhr.send(null);
    })

    const imageRef = ref(storage, fileName);

    const uploadResult = await uploadBytes(imageRef, blob);

    blob.close();

    const imageUrl = await getDownloadURL(imageRef);
    console.log("image URL: ", imageUrl);

    createNewBucketMemory(fileName, imageUrl)
}
