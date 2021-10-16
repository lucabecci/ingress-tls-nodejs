const Application = require("./index")
const POD_CONFIG = require("./config")
require("dotenv").config()

class Main {
  static process(){
    console.log(POD_CONFIG)
    const app = new Application(POD_CONFIG)
    app.init()
  }
}

Main.process()
