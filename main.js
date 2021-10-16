const Application = require("./index")
require("dotenv").config()

class Main {
  static process(){
    const app = new Application()
    app.init()
  }
}

Main.process()
