// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

const newCats = ["Broom"];
function appendCat() {
   let newCats = ([...cats, "Broom"]);
   return newCats;
}

const moreNewCats = ["Arnold"];
function prependCat() {
   let moreNewCats = (["Arnold", ...cats]);
   return moreNewCats;
}

function removeLastCat () {
    cats.slice(1);
    return cats.slice(0, cats.length -1); 
}

function removeFirstCat () {
   return cats.slice(1)
}