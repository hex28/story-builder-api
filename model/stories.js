let NPCBank = [
    "Abraham",
    "Abel",
    "Alexander",
    "Cassandra",
    "Hamilton",
    "Jean",
    "Joan",
    "Joe",
    "Michael",
    "Paul",
    "Pedro",
    "Sarah",
]
const ocMonster = (user) => {
    let minNumChars = 2;
    let chars = [...user.characters];
    while(chars.length < minNumChars) {
        chars.push(NPCBank[Math.floor(Math.random() * NPCBank.length)])
    }
    return {
        characters: chars,
        genre: "Overcome The Monster",
        plot: `${chars[0]} finds a mysterious artifact that he keeps as home. However, all is not what it seems as there is a secret entity hidden inside that hopes to get out. Now ${chars[0]} and friend ${chars[1]} try to figure out a way to stop this thing from getting out.`
    }
}



const getStoryPlot = (user) => {
    let plot = user.plot.toLowerCase()
    switch (plot) {
        case "ocmonster":
            return ocMonster(user)
            break;
        default:
            return ocMonster(user)
            break;
    }
}

module.exports = {
    getStoryPlot
}