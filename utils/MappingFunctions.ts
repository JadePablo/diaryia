import { getEntities , getEmotion, getTopic } from "./NlpFunctions";

/* entity to emotion
get the entities
get the emotions
match the top 3 or less based on their prevelance to the text


return format:

{
  "quavo": "happy",
  "apple": "excited",
  "tesla": "surprised"
}
*/

export async function entity_to_emotion(text: string) {

    try {
        const emotion_results = await getEmotion(text);
        const ner_results = await getEntities(text);
        
        
        /* reduce the entities to some normalized format
        so 'quavo' or '    quavo' or 'Quavo' will all be reduced to 'quavo'
        and map their occurences in the text
        */
        const occurrences: { [key: string]: number } = {};

        for (const ner of ner_results) {
            const entity = ner.text.replace(/\s+/g, '').toLowerCase();
            if(occurrences[entity]) {
                occurrences[entity] ++;
            } else {
                occurrences[entity] = 1;
            }
        }
        const occurrencesArray: [string, number][] = Object.entries(occurrences);
        occurrencesArray.sort((a, b) => b[1] - a[1]);
        const topThreeEntitiesWithCounts: [string, number][] = occurrencesArray.slice(0, 3);
        
        const top_entities: string[] = topThreeEntitiesWithCounts.map(([entity]) => entity);

        //get the top 3 emotions then use those as values that are mapped by the top 3 entities
        const emotionArray: [string, number][] = Object.entries(emotion_results.emotion);
        emotionArray.sort((a, b) => b[1] - a[1]);
        const top_emotions: string[] = emotionArray.slice(0, 3).map(([emotion]) => emotion.toLowerCase());

        const entityToEmotion: { [key: string]: string } = {};
        for (let i = 0; i < top_entities.length; i++) {
        entityToEmotion[top_entities[i]] = top_emotions[i];
        }

        return entityToEmotion;

    } catch (error) {
        console.log(error);
        throw error;
    }
    
}


/*

return format:

{
  "business": "happy",
  "world": "excited",
  "politics": "angry"
}

*/

export async function topic_to_emotion(text: string) {

    interface TopicResult {
        label: string;
        score: number;
    }

    try {
        const topic_results: TopicResult[] = await getTopic(text);

        //get top 3 topics
        topic_results.sort((a, b) => b.score - a.score);
        const top3Labels = topic_results.slice(0, 3).map(item => item.label);
    
        const emotion_results = await getEmotion(text);
        const emotionArray: [string, number][] = Object.entries(emotion_results.emotion);
        emotionArray.sort((a, b) => b[1] - a[1]);
        const top_emotions: string[] = emotionArray.slice(0, 3).map(([emotion]) => emotion.toLowerCase());
    
    
    
    
        const topicToEmotion: {[key:string]:string} = {};
    
        for (let i = 0; i < top3Labels.length; i++) {
            topicToEmotion[top3Labels[i]] = top_emotions[i];
        }
        
        return topicToEmotion    

    } catch (error) {
        console.log(error);
        throw error;
    }
}