const titleCase = (word) => {
    if (typeof word === "string") {
        word = word[0].toUpperCase() + word.slice(1)
    }

    return word
}

export default titleCase