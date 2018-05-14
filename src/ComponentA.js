import React, { Component } from 'react'
import AsyncFetch from './AsyncFetch'

export default class ComponentA extends Component {

    state = {
        data: [],
        url: "https://www.reddit.com/r/PostHardcore.json"
    }

    setStateAsync(state){
        return new Promise( resolve => {
            this.setState(state, resolve) 
        }) 
    }

    async componentWillMount(){
        const url = this.state.url  
        await this.setStateAsync({
            isLoad: true ,
           ...await AsyncFetch(url)
        })
    }

    render(){
        let children = []

        if (this.state.isLoad && 'children' in this.state.data){
           children = this.state.data.children   
           console.log(children) 
        }

        return (
                <div>
                <h3> ComponetA Loaded </h3>
                <p> Url {this.state.url} </p>
                <p> Keep Rock and Play Post Hardcore Music</p>
                <ul style={{textAlign: "left"}}>
                { ! this.state.isLoad && <label>Loading ... </label> }

                { 
                    this.state.isLoad && 
                    children.map((value, index) => <li key={index}><a href={value.data.url} children={value.data.title}/> (Score:{value.data.score})</li> )
                }
                </ul>
                </div>         
        ) 
    }
}
