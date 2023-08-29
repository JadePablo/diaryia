import { getEntries } from "../../utils/downloadFunctions";
import { getAuth } from "firebase/auth";

async function fetchEntries() {
    try {

        const auth = getAuth();
        const user = auth.currentUser;
        
        if (!user) {
            throw new Error("User not logged in");
        }

        const uid = user.uid;

        const entries = getEntries(uid);

        return entries;

    } catch(e) {
        throw e;
    }
}

export {fetchEntries}