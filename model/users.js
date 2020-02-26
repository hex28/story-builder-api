class User {
    constructor() {
        this.users = {}
        this.lastId = 0
    }

    getLastId() {
        return this.lastId
    }

    getNewId() {
        let newId = this.lastId + 1
        this.users[newId] = {
            characters: [],
            plot: ""
        }
        this.lastId = newId
        return newId
    }

    addCharacter(id, character) {
        if (id === undefined || character === undefined) {
            return;
        }
        if (this.users[id] === undefined) {
            return;
        } else {
            this.users[id].characters.push(character);
            return this.users[id].characters
        }
    }

    setPlot(id, plot) {
        if (id === undefined || plot === undefined) {
            return;
        }
        if (this.users[id] === undefined) {
            return;
        } else {
            this.users[id].plot = plot
            return this.users[id].plot
        }
    }

    getUser(id) {
        if (this.users[id] !== undefined) {
            return this.users[id]
        } else {
            return
        }
    }
}

module.exports = User