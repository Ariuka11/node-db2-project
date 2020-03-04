const express = require("express");
const carsRouter = require('./router/cars')
const server = express();
const port = process.env.PORT || 4000

server.use(express.json())
server.use("/api/cars", carsRouter)

server.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE || `<h2>Let's some SQL Stuff!</h2>`);
  });
  
  server.use((req, res) => {
      res.status(404).json({
          message: "Route was not found",
      })
  })
  
  server.use((err, req, res, next) => {

    server.use(res, req, res, next)
      res.status(500).json({
        message: 'Error retrieving the data'
   })
  })
  
  server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
  })