import { films } from '../data/films.js'
import { people} from '../data/people.js'

console.log("Hi There! My first JavaScript code!")

console.log(document.querySelector('.greeting'))

let greetingDiv = document.querySelector('.greeting')

let castList = document.createElement("ul")

const maleCharacters = people.filter(person => person.gender === "male")
console.log(maleCharacters)

const femaleCharacters = people.filter(person => person.gender === "female")
console.log(femaleCharacters)

const otherCharacters = people.filter(person.gender === "n/a")
console.log(otherCharacters)

let counter = 1



greetingDiv.textContent = 'Welcome to my page! This message was generated by my JavaScript code!'
