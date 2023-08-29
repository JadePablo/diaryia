import { Timestamp } from "firebase/firestore"

interface Entry {
    created: Timestamp,
    photo_url:string,
    text_content: string,
    title: string,
    unlock: Timestamp,
}

export default Entry;