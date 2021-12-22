class Media {
    constructor(name, releaseDate, type, audioBased, graphicsBased, textBased) {
        this.type = type;
        this.name = name;
        this.releaseDate = releaseDate;
        this.audioBased = audioBased;
        this.graphicsBased = graphicsBased;
        this.textBased = textBased;
    }
}

class Film extends Media {
    constructor(name, releaseDate, producer, director, actors) {
        super(name, releaseDate, "Film", true, true, false);
        this.producer = producer;
        this.director = director;
        this.actors = actors
    }
}

class Book extends Media {
    constructor(name, releaseDate, writer, publisher, edition) {
        super(name, releaseDate, "Book", false, true, true);
        this.writer = writer;
        this.publisher = publisher;
        this.edition = edition;
    }
}

class Music extends Media {
    constructor(name, releaseDate, singer, composer, producer) {
        super(name, releaseDate, "Music", true, false, false);
        this.singer = singer;
        this.composer = composer;
        this.producer = producer;
    }
}

function typeClassProps (obj) {
    let temp = Object.getOwnPropertyNames(obj)
    let string = ""
    for (let i = 0; i < temp.length - 1; i++) {
        string += temp[i] + ":"+ obj[temp[i]] + ",";
    }
    return "{"+string + temp[temp.length-1] + ":" + obj[temp[temp.length-1]] + "}"
}

let objFilm1 = new Film("Interstellar", 2014, "Emma Thomas", "Christopher Nolan", ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"])
let objFilm2 = new Film("Avengers:EndGame", 2019, "Marvel", "Russo Brothers", ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"])
let objMusic1 = new Music("Easy on Me", 2021, "Adele", "Adkins", "Kurstin")
let objMusic2 = new Music("Strangers by Nature", 2021, "Adele", "Adkins", "Göransson")
let objBook1 = new Book("HarryPotter:Philosopher's Stone", "1997", "J.K Rownling", "Bloomsbury Publishing", 1)
let objBook2 = new Book("HarryPotter:Deathly Hallows", "2007", "J.K Rownling", "Bloomsbury Publishing", 1)

console.log(typeClassProps(objFilm1))
console.log(typeClassProps(objFilm2))
console.log(typeClassProps(objMusic1))
console.log(typeClassProps(objMusic2))
console.log(typeClassProps(objBook1))
console.log(typeClassProps(objBook2))