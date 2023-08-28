import EntryContents from "../types/Entryprops";
import { deletePhoto, submitEntry,submitPhoto } from "../../utils/uploadFunctions";

export async function submit(entry: EntryContents) {
    let photoUploadSuccessful = false;
    let photo_ref: string | undefined = ''; // Initialize photo_ref with the appropriate type
    
    if (entry.photoUrl != '') {
        photo_ref = entry.photoUrl;
    }
    try {
        if (entry.photoUrl) {
            const photoCopy = entry.photoUrl;
            photo_ref = await submitPhoto(photoCopy);
            photoUploadSuccessful = true;
        }

        await submitEntry({
            date: entry.date,
            text_content: entry.text_content,
            user_id: entry.user_id,
            photoUrl: photo_ref // Pass photo_ref here, which can be undefined or a string
        });

    } catch (e) {
        if (photoUploadSuccessful && photo_ref) {
            await deletePhoto(photo_ref);
        }
        console.log(e);
    }
}