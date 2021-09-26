const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const path = require("path");
const db = require(path.join(__dirname, "db.json"));

server.use(middlewares);
server.post("/eligibility/check", (req, res) => {
  // res
  //   .status(500)
  //   .send({ error: { message: "error" } })
  //   .end();
  res.status(200).jsonp(db.eligibilityCheck).end();
});

server.listen(8080, () => {
  console.log("JSON Server is running");
});
