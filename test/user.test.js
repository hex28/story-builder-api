const user = require('../model').user;

describe("User", () => {
    describe("Initialization", () => { 
        it ("should get last id", ()=>{
            const lastId = user.getLastId()
            expect(lastId).toEqual(0);
        })

        it("should generate a new id", () => {
            const newId = user.getNewId();
            expect(newId).toEqual(1);
        });

        it("should add a new character to users id", ()=> {
            const newId = user.getNewId();
            expect(user.addCharacter("Jenny")).toEqual(undefined)
            expect(user.addCharacter(newId)).toEqual(undefined)
            expect(user.addCharacter(newId, "Madeline")).toEqual(["Madeline"])
        })

        it("should set plot for user id", ()=> {
            const newId = user.getNewId();
            expect(user.setPlot("OcMonster")).toEqual(undefined)
            expect(user.setPlot(newId)).toEqual(undefined)
            expect(user.setPlot(newId, "ocMonster")).toEqual("ocMonster")
        })

        it("should get a whole user", ()=>{
            const newId = user.getNewId();
            user.addCharacter(newId, "Madeline");
            user.addCharacter(newId, "Ben");
            user.setPlot(newId, "ocMonster");
            expect(user.getUser(newId)).toMatchObject({
                characters: ["Madeline", "Ben"],
                plot: "ocMonster"
            })
        })
    }) 
})