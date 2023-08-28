import { FIREBASE_STOR,FIREBASE_DB } from "../FirebaseConfig";
import {addDoc , collection } from 'firebase/firestore';
import EntryContents from "../app/types/Entryprops";
import { uploadBytes,ref, getDownloadURL, deleteObject } from 'firebase/storage';

async function submitEntry (entry: EntryContents ) {

    if (entry.text_content.length < 30) {
        throw new Error("Text content must be at least 30 characters long");
    }
    
    // Create a promise to handle success and error
    return new Promise((resolve, reject) => {
        //in later version, get the nlp goodies and put em in the upload

        addDoc(collection(FIREBASE_DB, "entry"), {
            created: new Date(),
            unlock: entry.date,
            photo_url: entry.photoUrl,
            text_content: entry.text_content,
            user_id: entry.user_id
        })
        .then(() => {
            resolve("Document added successfully"); // Resolve the promise on success
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            reject("Error adding document"); // Reject the promise on error
        });
    });

}

async function submitPhoto(image: string) {
    const blob: Blob = await new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
  
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("network request failed"));
        }
  
        xhr.responseType = "blob";
        xhr.open("GET",image,true);
        xhr.send(null);
      });

      try {
        const storageRef = ref(FIREBASE_STOR,`Images/image-${Date.now()}`);
        const result = await uploadBytes(storageRef,blob);
  
        const photo_ref = await getDownloadURL(storageRef);

        return photo_ref

      } catch (e) {
        alert(`error: ${e}`)
      }
}

async function deletePhoto(imageRef: string) {
    const deleteRef = ref(FIREBASE_STOR,imageRef);

    deleteObject(deleteRef).then(() => {
        // File deleted successfully
        console.log('deleted photo');
      }).catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
      });
}  

export {submitPhoto,submitEntry,deletePhoto}