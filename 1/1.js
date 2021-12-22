function ClassConstructor(name, unit, capacity) {
    this.className = name;
    this.classUnit = unit;
    this.classCapacity = capacity;
}

const softEngineering = new ClassConstructor('softEngineering', 3, 50)
const network = new ClassConstructor('network', 3, 30)

softEngineering.book = "Clean Code"
network.project = true

function typeClassProps (obj) {
    let temp = Object.getOwnPropertyNames(obj)
    let string = ""
    for (let i = 0; i < temp.length - 1; i++) {
        string += temp[i] + ":"+ obj[temp[i]] + ",";
    }
    return "{"+string + temp[temp.length-1] + ":" + obj[temp[temp.length-1]] + "}"
}

console.log(typeClassProps(softEngineering))
console.log(typeClassProps(network))