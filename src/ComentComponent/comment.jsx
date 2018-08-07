import React from 'react'
import CommentAuthor from "./CommentAuthor"
import CommentAction from "./CommentAction"
import CommentText from "./CommentText"
export default class Comment extends React.Component{

    render(){

        return(
            <div>
                <CommentAuthor />
                <CommentText />
                <CommentAction />
                
                </div>

        )
    }
}