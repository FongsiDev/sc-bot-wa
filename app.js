
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Bot Online");
});

const listener = a.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});
