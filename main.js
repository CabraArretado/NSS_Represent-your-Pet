let myPet = {
    name: "Diego",
    species: "Dog",
    nicknames: [
        "Diego",
        "Liar"
    ],
    age: 5,
    dance: () => {
        console.log("~~Butt on the floor dance~~")
    },
    bark: () => {
        console.log("AUUUUUUUU!")
    },
    lie: () => {
        console.log("~~Pretend wanna pee just to go outside~~")
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy.form === "round"){
            this.favoriteToys.push(toy)
        }
    }
}
let ball = {
    name: "ball",
    form: "round"
}
myPet.dance()
myPet.bark()
myPet.lie()

myPet.play(ball)
console.log(myPet.favoriteToys)
