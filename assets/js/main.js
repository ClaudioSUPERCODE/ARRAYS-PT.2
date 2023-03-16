let emailArr = ["batman@cave.gotham" , "jhhgwf@jhjf.de"];
let userAnfrage = "claudio@supercode.de";


    if (emailArr.indexOf(userAnfrage)  >= 0) {
        console.log(false)
    } else {
        console.log(true)
    }

console.log("xxx")

// ARRAYS//

// LEV-1_1

const person = ["Claudio", "Aleo", "King"]
const friends = ["Bruce", "Chuck", "Jackie"]
const favoriteFood = ["Pizza", "Pasta", "Steak"]

console.log(person, friends, favoriteFood)

// LEV-1_2

console.log(person[0])
console.log(person[1])
console.log(person[2])

console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

console.log(favoriteFood[0])
console.log(favoriteFood[1])
console.log(favoriteFood[2])

// LEV-1_3

console.log(person.length)
console.log(friends.length)
console.log(favoriteFood.length)

// LEV-1_4

person.push("Legende")
friends.push("JCVD")
favoriteFood.push("Bratwurst")
console.log(person)
console.log(friends)
console.log(favoriteFood)

// LEV-1_5

console.log(person)
console.log(person.pop())
console.log(person)

console.log(friends)
console.log(friends.pop())
console.log(friends)

console.log(favoriteFood)
console.log(favoriteFood.pop())
console.log(favoriteFood)

// LEV-1_6

console.log(person)
console.log(person.shift())
console.log(person)

console.log(friends)
console.log(friends.shift())
console.log(friends)

console.log(favoriteFood)
console.log(favoriteFood.shift())
console.log(favoriteFood)

// LEV-1_7

console.log(person)
console.log(person.unshift("Göttlich", "Weise"))
console.log(person)

console.log(friends)
console.log(friends.unshift("The Real Donald J", "Cobra Tate"))
console.log(friends)

console.log(favoriteFood)
console.log(favoriteFood.unshift("Lasagne", "Spinat"))
console.log(favoriteFood)

// LEV-1_9

const favTravel = ["Italien", "Kreta", "Jamaica", "Kuba", "Holland"]

console.log(favTravel)
console.log(favTravel.slice(0,3))
console.log(favTravel)

// Diese Methode verändert das Array nicht dauerhaft!//

// LEV-1_10

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

const res1 = text.split(" ")
console.log(res1)

const res2 = text.split("")
console.log(res2)

// DAY-32//

let name1 = "Steffi"
let name2 = "Katharina"
let name3 = "Saskia"

let nameList = ["Steffi", "Katharina", "Saskia"]

console.log(nameList[0])

// push() - am ende eines arrays etwas hinzufügen!!

nameList.push("Tolga")
console.log(nameList)

// unshift() - am anfang eines arrays etwas hinzufügen!!

nameList.unshift("Benny")
console.log(nameList)

// pop() - entfernt den letzten wert aus einem array und gibt diesen zurück

let lastName = nameList.pop()
console.log(lastName)

// shift() - entfernt den ersten wert aus einem array

let firstName = nameList.shift()
console.log(firstName)

// splice(ab index z.B.1, 1 objekt "ersetzen durch")

console.log(nameList)
nameList.splice(1,1, "Megan")

// ==============================================================//

// Arrays sind Referenzdatentypen

let arr1 = [3, 4, 5]
let arr2 = arr1

arr2[1] = "hi"

console.log(arr1)
console.log(arr2)
console.log(arr1===arr2)

// slice
// erstelle ich eine kopie des ursprungs arrays unabhängig von der referenz

let arr3 = arr1.slice()
console.log(arr3)
console.log(arr3===arr1)

// concat

console.log("%c===concat===", "color:tomato")

let arr4 = arr1.concat()
console.log(arr4)
console.log(arr4 === arr1)
arr4[0] = 1234
console.log(arr4)

let arr5 = ["hallo", "hey", "Steffi"]
console.log(arr5)
let arr6 = arr5.concat(arr1)
console.log(arr6)

// join

console.log("%c===join===", "color:orange")

const text2 = "Guten;Morgen;ihr;Lieben;Zuckerschnuten;heute;machen;wir;weiter;mit;Arrays"

let text2Arr = text2.split(";")
console.log(text2Arr)

let text2ArrToString = text2Arr.join(" ")
console.log(text2ArrToString)

// ========================================//

// reverse - dreht den inhalt eines arrays um

console.log("%c===reverse===", "color:yellow")

let numArr1 = [5, 6, 7, 8, 9]
console.log(numArr1)
numArr1.reverse()
console.log(numArr1)

// sort - alphabetisch sortieren

console.log("%c===sort===", "color:green")

const fruits = ["Banana", "Kiwi", "Apple", "Orange"]
fruits.sort()
console.log(fruits)

// sort liest NUMBERS als string(ACHTUNG!!!)
// sort kann eine callback function bekommen um numbers richtig zu sortieren
// erstmal anwenden und später verstehen :D


const numbers = [3, 4, 11, 20, 9, 1100]
numbers.sort()
console.log(numbers)

const numbers2 = [3, 4, 11, 20, 9, 1100]
numbers2.sort(function (a,b) {
    return a-b
})

console.log(numbers2)

// filter 

console.log("%c===filter===", "color:pink")

let filterArr = numbers.filter((elt) => elt < 10)
console.log(filterArr)

let filterArrEven = numbers.filter((num) => num%2 === 0)
console.log(filterArrEven)

// forEach (ist eine schleife die so oft ausgeführt wird wie es werte in meinem array gibt)

console.log("%c===forEach===", "color:blue")

const fruits2 = ["Banana", "Strawberry", "Papaya", "Lemon"]

console.log(fruits2[0])
console.log(fruits2[1])
console.log(fruits2[2])
console.log(fruits2[3])

fruits2.forEach((elt) => {
    console.log(elt)
})

// map

console.log("%c===map===", "color:limegreen")

const numbers3 = [5, 6, 7, 8, 9]

let numbersArr = numbers3.map((elt) =>{
    return elt *2;
})

console.log(numbersArr)

// ARRAYS TEIL 2=========ÜBUNGEN//

// LEV-1_1

let getraenke = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"]
console.log(getraenke.sort())

let myDrinks = getraenke.sort()

myDrinks.forEach((elt) => {
    console.log(elt)
    document.write(elt.concat("<br>"))
})

// LEV-1_2

let upperDrinks = getraenke.map((elt) => {
console.log(elt.toUpperCase());
return elt.toUpperCase();
})

console.log(upperDrinks);

// LEV-1_3

let randomNums = [18,16,80,51,47,38,95,42,68,61,34,51,20,17,56,31,100,6,5,30,74,97,28,99,91,27,73,12,92,6,27,71,26,15,78];

let randomNumsDouble = randomNums.map((x) => {
    console.log(x*2)
    return x*2
})

let randomNumsSort = randomNumsDouble.sort((kleiner, groeßer) => kleiner - groeßer)
console.log(randomNumsSort)

// LEV-1_4

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = fahrenheit.map((z) => {
    // let rechnung = z-32
    // let rechnung2 = rechnung/1.8
    // console.log(rechnung2.toFixed(1))
    // console.log(((z-32)/1.8).toFixed(1))
    console.log(((z-32)/1.8).toFixed(1))
})



// LEV-1_5

let checkNumber = [18,16,80,51,47,38,95,42,68,61,34,51,20,17,56,31,100,6,5,30,74,97,28,99,91,27,73,12,92,6,27,71,26,15,78];


let lastRechnung = checkNumber.map((y) => {
    if (y % 3 === 0) {
        return y + 100
    } else {
        return y
    }
})

console.log(lastRechnung)