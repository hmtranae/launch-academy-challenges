const Room = require("../Rooms")

describe("A room", () => {
  it("has a name", () => {
    const roomName = "The Fairmont"
    const room = new Room(roomName)
    expect(room.name).toEqual(roomName)
  })

  //   it("has a maximum occupancy", () => {})

  //   it("is initially unreserved", () => {})
})
