import React from 'react'

import ReactDOM from 'react-dom'

import HelloReact from './HelloReact';
import RainbowAlphabate from './RainbowComponent';
import Comment from "./ComentComponent/comment" 


var position  = document.getElementById("hello")

var position1  = document.getElementById("welcome")

var position2 = document.getElementById("colors")

var position3 = document.getElementById("message")

ReactDOM.render(<HelloReact name="Anirban"></HelloReact>, position)
ReactDOM.render(<HelloReact name="pk"></HelloReact>, position1)


ReactDOM.render(<RainbowAlphabate children="RAINBOW!!"></RainbowAlphabate>,position2)

ReactDOM.render(<Comment></Comment>,position3)