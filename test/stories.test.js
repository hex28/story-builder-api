
const model = require('../model');
const user = model.user;
const stories = model.stories;

describe("User", () => {
    describe("Initialization", () => { 
        const newId = user.getNewId();
        user.addCharacter(newId, "Madeline");
        user.addCharacter(newId, "Ben");
        user.setPlot(newId, "ocMonster");

        it("should get a new story for ocMonster", ()=>{   
            console.log(stories.getStoryPlot(user.getUser(newId))) 
            expect(stories.getStoryPlot(user.getUser(newId))).toEqual({
                "characters": ["Madeline", "Ben"], 
                "genre": "Overcome The Monster", 
                "plot": "Madeline finds a mysterious artifact that he keeps as home. However, all is not what it seems as there is a secret entity hidden inside that hopes to get out. Now Madeline and friend Ben try to figure out a way to stop this thing from getting out."
                
            })
        })
    }) 
})