const server = require("./server");

const PORT = 3000;

console.log("Starting server");
server.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});

console.log("Waiting on server");
