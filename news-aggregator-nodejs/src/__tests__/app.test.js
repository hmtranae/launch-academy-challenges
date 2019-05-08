const request = require("supertest")

const app = require("../app")

describe("app", () => {
  it("has an index page", async () => {
    const resp = await request(app).get("/")
    expect(resp.status).toEqual(200)
  })
})
