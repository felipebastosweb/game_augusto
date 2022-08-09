
const game = new ex.Engine()

const player_args = {
  width: 20,
  height: 20,
  x: 300,
  y: 300,
  color: ex.Color.Chartreuse
}

class Player extends ex.Actor {
  constructor() {
    super({x: 50, y: 50, width: 20, height: 20, color: ex.Color.Chartreuse})
  }
  
  resetVelocity() {
    this.vel.setTo(0, 0)
  }

  verifyMovimentLeft(engine) {
    if(engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
      this.vel.x = -100;
    }
  }

  verifyMovimentRight(engine) {
    if(engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
      this.vel.x = 100;
    }
  }

  verifyMovimentUp(engine) {
    if(engine.input.keyboard.isHeld(ex.Input.Keys.Up)) {
      this.vel.y = -100;
    }
  }

  verifyMovimentDown(engine) {
    if(engine.input.keyboard.isHeld(ex.Input.Keys.Down)) {
      this.vel.y = 100;
    }
  }

  onPreUpdate(engine, delta) {
    this.resetVelocity()
    this.verifyMovimentLeft(engine)
    this.verifyMovimentRight(engine)
    this.verifyMovimentUp(engine)
    this.verifyMovimentDown(engine)
  }
}

const player = new Player()
game.add(player)

game.start()