const assert = require("chai").assert;
const should = require("should");
const request = require("request");
const util = require("util");
const app = require("../src/app");
// const common = require("../src/signup");

baseURL = "http://127.0.0.1:5000/api/v2/";

describe("App", function() {
  it("app should return stn", function() {
    assert.equal(app(), "testing");
  });
});
// user token


token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVkX2F0IjoxNTQwODIxMTU1LjUxNzEzOSwidXNlcm5hbWUiOiJDaGVydXRvIiwidXNlcl9pZCI6MTUsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJleHAiOjE1NDExODExNTUuNTE3MTQwNn0.5Qt4uhljmfKtyQHXKr1_0uyTD4Q8sGsh2KizjzDvIQw";

describe("Test meals", function() {
  it("should return meal", function(done) {
    request.get(
      { url: baseURL + 'meals/5', headers: {'Authorization': token } },
      function(error, response, body) {
        console.log(response, ">>>>>>>");
        assert.equal(response.statusCode,200);
        done();
      }
    );
  });
});
