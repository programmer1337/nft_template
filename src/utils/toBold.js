function toBold(text, words, color) {
    let splittedText = text.split(" ");
    let formattedText = "";
    let reState;

    return (
        splittedText.map((word, index) => {
            reState = "";

            if (words.includes(splittedText[index + 1])) {
                formattedText += " " + word;
                reState = formattedText;
                formattedText = "";
            }

            if (words.includes(word)) {
                formattedText = "";
                reState = <b key={index + word + index} style={{color: color}}> {word} </b>
            } else formattedText += " " + word;

            return reState;
        })
    )
}

export default toBold;