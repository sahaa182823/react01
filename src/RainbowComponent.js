import React from 'react'

export default class RainbowAlphabate extends React.Component{
    render(){

        let alphabateColor={
            color:"red",
            float:'right',
            padding:30,
            margin:30
            
        }
        return (<h1 style={alphabateColor}>{this.props.children}</h1>)
    }
}