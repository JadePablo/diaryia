import {collection,query,where,getDocs, DocumentSnapshot} from 'firebase/firestore';
import { FIREBASE_DB } from '../FirebaseConfig';
import Entry from '../app/types/Homepageprops';

async function getEntries(uid: string) {
    
    try {
        const entriesRef = collection(FIREBASE_DB,"entry");

        const entries = query(entriesRef,where("user_id","==",uid));
        const querySnapshot = await getDocs(entries);

        const entriesData: Entry[] = [];
        querySnapshot.forEach((doc: DocumentSnapshot) => {
          const entry: Entry = {
            created: doc.get("created"),
            photo_url: doc.get("photo_url"),
            text_content: doc.get('text_content'),
            title: doc.get('title'),
            unlock: doc.get('unlock'),
          }

          entriesData.push(entry);
        });

        return entriesData;
    } catch (e) {
        console.log(e);
        throw e;
    }

}

//get highlights

export {getEntries}