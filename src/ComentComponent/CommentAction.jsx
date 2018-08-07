import React from 'react'

export default class CommentAction extends React.Component{

    constructor(){
        super()
        this.state = {
            upVoteCounter:0,
            message:"",
            replyMessage:"what's in your mind??"
        }
        this.CommentUpVote = this.CommentUpVote.bind(this)
        this.CommentDownVote = this.CommentDownVote.bind(this)
        this.Comment = this.Comment.bind(this)
    }
    
    CommentUpVote(){
        console.log("comment upvote")
        this.setState({upVoteCounter:this.state.upVoteCounter+1})
        // this.state.upVoteCounter = this.state.upVoteCounter + 1
    }

    CommentDownVote(){
        console.log("comment downvote")
        this.setState({upVoteCounter:this.state.upVoteCounter-1})
        // this.state.upVoteCounter = this.state.upVoteCounter + 1
    }

    Comment(){
        this.setState({message : "thanks for voting " + this.state.upVoteCounter + "!!"} )

    }

    componentDidMount(){
        console.log("hi it is componentDidMount!!")
    }

    componentWillMount(){
        console.log("hi it is componentWillMount!")
    }

    componentWillUpdate(){
        console.log("hi it is componentwillupdate!")

    }

    componentDidUpdate(){
        console.log("hi it is componentDidupdate!")

    }
    componentWillReceiveProps(){
        console.log("hi it is componentWillReceiveProps!")

    }
    componentWillUnmount(){
        console.log("hi it is componentWillUnmount!")

    }
    giveReply(e){
        console.log( e.target.value)
        this.setState( {replyMessage:e.target.value})
    }

    render(){
        return(<div>
            <button onClick= {this.CommentUpVote}> up vote  </button>
                <button onClick= {this.CommentDownVote}> down vote
                </button >
                <button onClick = {this.Comment}> reply
                </button>
               <br></br>
               <input type="text"  onChange={this.giveReply.bind(this)}></input>
                <h3>{this.state.upVoteCounter}{this.state.CommentDownVote}</h3>
                <h3>{this.state.message} </h3>
                reply message: {this.state.replyMessage}
                
            </div>)
    }
}