import app from "../app";
import supertest from "supertest";

describe("root endpoint get and post", () => {
  // test method get to / returns 200 and data
  test("get to / returns 200 and data", async () => {
    const result = await supertest(app).get("/");
    expect(result.statusCode).toEqual(200);
    expect(result.body.name).toBeTruthy();
  });

  // test mothod post to / returns 200 and data
  test("post to / echoes json", async () => {
    const result = await supertest(app).post("/").send({
      test: "value",
    });
    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeTruthy();
    expect(result.body.test).toBe("value");
  });

  // test methos get to noneexistent route returns 404 and json
  test("404 & json returned from nonexistent route", async () => {
    const result = await supertest(app).get("/badPath");
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toBeTruthy();
  });
});
