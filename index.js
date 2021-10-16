const express = require("express")

class Application {
  #server = null
  #app = null

  init(){
    this.app = express()
    this.#middleware()
    this.#start()
  }

  #middleware(){
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.get("/status", function(req, res){
      return res.status(200).json({
        active: true,
        port: process.env.PORT,
        namespace: process.env.KUBERNETES_NAMESPACE,
        env: process.env.NODE_ENV
      })
    })
    this.app.get("/", function(req, res){
      return res.status(200).json({
        rcaas: true
      })
    })
  }
  #start(){
    this.server = this.app.listen(process.env.PORT, function(){
      console.log("Server on port:", process.env.PORT)
    })
  }

  close(){
    console.log("Closing the server...")
    this.server.close()
  }
}

module.exports = Application
