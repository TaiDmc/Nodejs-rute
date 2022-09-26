'use strict'

 let EventEmitter = require('events').EventEmitter,
   inherits = require('util').inherits

let Clock = function () {
    let self = this

    setInterval(() => {
        //console.log("hola nena")
        self.emit('tictac')
    }, 1000);
}

inherits(Clock, EventEmitter)

Clock.prototype.theTime = function () {
    let date = new Date(),
    hrs = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    msg = `${hrs}:${min}:${sec} horas`

    console.log(msg)
}

let cucu = new Clock()

cucu.on('tictac', function () {
    cucu.theTime()
})