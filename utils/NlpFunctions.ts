async function getTopic(text: string) {
    try {
        const response = await fetch(
            'https://api.nlp-api.com/v1/categorize', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              api_token: process.env.EXPO_PUBLIC_NLPAPI_APITOKEN,
              text: text,
            }),
          });

          const json = await response.json();
          
          return json.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getEntities(text: string) {
    try {
        const response = await fetch(
            'https://api.nlp-api.com/v1/ner', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              api_token: process.env.EXPO_PUBLIC_NLPAPI_APITOKEN,
              text: text,
            }),
          });

          const json = await response.json();
          
          return json.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getSentiment(text: string) {
    try {
      const response = await fetch(
          'https://api.nlp-api.com/v1/sentiment', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_token: process.env.EXPO_PUBLIC_NLPAPI_APITOKEN,
            text: text,
          }),
        });

        const json = await response.json();
        
        return json.data;

  } catch (error) {
      console.log(error);
      throw error;
  }
}

export {getTopic,getEntities,getSentiment}

