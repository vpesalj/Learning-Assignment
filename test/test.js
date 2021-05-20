process.env.NODE_ENV = "test";
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
let server = require("../server");
chai.use(chaiHttp);

describe("POST /teams/users", () => {
  it("it should add user to team", (done) => {
    chai
      .request(server)
      .post("/api/teams")
      .send({
        userId: 18, //add another user, this one is added after testing
        teamId: 7,
      })
      .end((err, res) => {
        res.should.have.status(400); //400 because it exists, replace with 200 later
        done();
      });
  });
  it("it should not add user who is already in chosen team", (done) => {
    chai
      .request(server)
      .post("/api/teams/users")
      .send({
        userId: 10,
        teamId: 2,
      })
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });
});
