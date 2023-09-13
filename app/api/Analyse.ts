/*
    1. call the topic to emotion mapping function
    2. call the entity to emotion mapping function
    3. call the upload function 
*/

import { entity_to_emotion, topic_to_emotion } from "../../utils/MappingFunctions";

async function analyse(text: string) {

    try {
        const topic_emotion_map = topic_to_emotion(text);
        const entity_emotion_map = entity_to_emotion(text);

        return {
            "topic-emotion-map": topic_emotion_map,
            "entity-emotion-map":entity_emotion_map
        }

    } catch(error) {
        console.log(error);
        throw error;
    }


}

export {analyse}