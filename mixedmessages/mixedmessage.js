const listOfMessages = [
    "The guy who invented auto-correct for smart phones passed away today. Restaurant in peace.",
    "I saw a driver texting and driving. It made me so mad I threw my beer at him.",
    "Between typos and autocorrect it's getting hard to post. One tiny mistake and your whole post is urined.",
    'My Wife texted me a selfie in a new dress and asked: "Does this make my butt look big?" I texted back: "Noo!" My phone autocorrected my response to: "Moo!" Please send help!',
    "As we waited for a bus in the frosty weather, the woman next to me mentioned that she makes a lot of mistakes when texting in the cold... I nodded knowingly. “It’s the early signs of typothermia.”"
]

const displayRandomMessage = () => {
    const randomNumber = Math.floor(Math.random() * listOfMessages.length)
    console.log(listOfMessages[randomNumber])
}

displayRandomMessage()