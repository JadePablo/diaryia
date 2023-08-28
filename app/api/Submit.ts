import { deletePhoto, submitEntry,submitPhoto } from "../../utils/uploadFunctions";
import { getAuth } from "firebase/auth";
import FormInput from "../types/Formprops";

export async function submit(entry: FormInput) {
    let photoUploadSuccessful = false;
    let photo_ref: string | undefined = ''; // Initialize photo_ref with the appropriate type
    
    const auth = getAuth();
    const user = auth.currentUser;

    
    if (entry.photoUrl != '') {
        photo_ref = entry.photoUrl;
    }

    if (!user) {
        throw new Error("User not logged in");
    }

    try {
        if (entry.photoUrl) {
            const photoCopy = entry.photoUrl;
            photo_ref = await submitPhoto(photoCopy);
            photoUploadSuccessful = true;
        }

        await submitEntry({
            title:entry.title,
            date: entry.date,
            text_content: entry.text_content,
            user_id: user.uid,
            photoUrl: photo_ref // Pass photo_ref here, which can be undefined or a string
        });

    } catch (e) {
        if (photoUploadSuccessful && photo_ref) {
            await deletePhoto(photo_ref);
        }
        console.log(e);
    }
}