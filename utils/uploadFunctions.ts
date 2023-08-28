import { FIREBASE_STOR,FIREBASE_DB } from "../FirebaseConfig";
import {addDoc , collection } from 'firebase/firestore';
import { uploadString,ref } from 'firebase/storage';


//upload photo to storage bucket before submitting

interface EntryContents {
    date: Date,
    text_content: String,
    user_id: Number,
    photoUrl?: String | null
}

const storageRef = ref(FIREBASE_STOR, 'images');

const submitPhoto = async (imageURI: string) => {

    
    uploadString(storageRef,imageURI,'base64').then((snapshot) => {
        console.log('Uploaded a base64 string!');
    }); 
}
export const submitEntry = async (entry: EntryContents ) => {

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