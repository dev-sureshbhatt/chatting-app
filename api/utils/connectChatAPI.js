import fetch from "node-fetch";

const ChatAPI = "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"

export function connectChatAPI(message) {
  return new Promise(async (resolve, reject) => {
    console.log("sending fetch request")
    fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ChatAPI}`,
        //   "HTTP-Referer": `${YOUR_SITE_URL}`, // Optional, for including your app on openrouter.ai rankings.
        //   "X-Title": `${YOUR_SITE_NAME}`, // Optional. Shows in rankings on openrouter.ai.
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gryphe/mythomist-7b:free",
          messages: [{ role: "user", content: message }],
        }),
      }
    ).then( (response) => {
        console.log("inside then")
        response.json()
                .then(data => {
                    if (data.choices[0].message.content){

                        resolve(data.choices[0].message.content)

                    } else reject("cannot retrieve message from API")
                })
                .catch()
    }

    )
    .catch(
        err => console.log("new  error in fetch")
    )


    // console.log("response of fetch is", response)


  });
}
