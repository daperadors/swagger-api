const express = require("express");
const requestsRoute = require("./routes/requests");
const path = require("path");

const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger API - David",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`]
}

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", requestsRoute);
app.use("/api/documentation", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)));

app.get("/", (req, res) => {
  res.send("Swagger API");
});

app.listen(port, () => console.log("Server listening to", port));
