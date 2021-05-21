process.env.NODE_ENV = "test";
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
let server = require("../server");
chai.use(chaiHttp);

describe("POST /teams/users", () => {
  it("it should add an existing user to an existing team", (done) => {
    chai
      .request(server)
      .post("/api/teams/users")
      .send({
        //create user and team before this
        userId: 1,
        teamId: 1,
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it("it should not add user who is already in chosen team", (done) => {
    chai
      .request(server)
      .post("/api/teams/users")
      .send({
        //create user and team, add user to a team before this test
        userId: 2,
        teamId: 2,
      })
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });
});
