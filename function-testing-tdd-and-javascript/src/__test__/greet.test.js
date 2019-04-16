const greet = require("../greet")

describe("greet function", () => {
  it("says Hi to Scott", () => {
    expect(greet("Scott")).toEqual("Hello, Scott")
  })
})
