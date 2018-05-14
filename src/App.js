import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: [] 
  }
  componentDidMount(){
    console.log("ComponentDidmount Sedang Berjalan")
    const urlFetch = fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid") 
    console.log("Fetch data sedang berjalan") 
    urlFetch.then(res => {
        if( res.status === 200 )
            return res.json()
    }).then( resJson => {
        console.log("Mengatur State.data")
        this.setState({
            data: resJson 
        })
    })
  }
  render() {
      console.log(`Render lifecycle: ${JSON.stringify(this.state)}`)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App;
