import React from 'react'

export default class HelloReact extends React.Component{
    render(){
        return(
            <div>
                I,{this.props.name} learning React!! Again ! Again
                </div>
        )
    }
}