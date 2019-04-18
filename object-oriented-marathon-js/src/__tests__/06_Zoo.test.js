const Zoo = require("../Zoo")
const Employee = require("../Employee")
const Fox = require("../Fox")
const Snake = require("../Snake")
const Gorilla = require("../Gorilla")
const Cage = require("../Cage")

describe("A Zoo", () => {
  let zoo

  beforeEach(() => {
    zoo = new Zoo("The First Zoo in Outer Space")
  })

  it("has a name", () => {
    expect(zoo.name).toEqual("The First Zoo in Outer Space")
  })

  it("should create 10 cages by default, and assign them to the cages property", () => {
    expect(zoo.cages).toHaveLength(10)
    expect(zoo.cages[0]).toBeInstanceOf(Cage)
  })

  describe("#addEmployee", () => {
    it("should be able to have employees", () => {
      let newEmployee = new Employee("Roger", "Rabbit")
      zoo.addEmployee(newEmployee)

      expect(zoo.employees[0].firstName).toEqual("Roger")
    })
  })

  describe("#addEmployee", () => {
    it("should add an animal to the first open cage", () => {
      let newAnimal = new Fox("Kit")
      zoo.addAnimal(newAnimal)

      expect(zoo.cages[0].animal.name).toEqual("Kit")
    })

    it("should not add an animal to all of the open cages", () => {
      let newAnimal = new Fox("Kit")
      zoo.addAnimal(newAnimal)

      expect(zoo.cages[1].animal.name).not.toEqual("Kit")
    })

    it("should return a message that all of the cages are full if cages are filled", () => {
      let newAnimal = new Fox("Kit")
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)

      expect(zoo.addAnimal).toEqual("All of the cages are full!")
    })
  })

  describe("#visit", () => {
    it("should allow someone to visit and be greeted by each employee and animal", () => {
      let animalOne = new Snake("Sir Hiss")
      let animalTwo = new Gorilla("Bob")
      let employeeOne = new Employee("Jojo", "The Great")
      let employeeTwo = new Employee("Derek", "Zoolander")

      zoo.addAnimal(animalOne)
      zoo.addAnimal(animalTwo)
      zoo.addEmployee(employeeOne)
      zoo.addEmployee(employeeTwo)

      expect(zoo.visit()).toEqual("Sssssire, ssssire, they may be banditsssss\nBob got a bad feeling about this...\nJojo The Great waved hello!\nDerek Zoolander waved hello!")
    })
  })
})
