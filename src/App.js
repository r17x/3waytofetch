import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: [] 
  }
  
  /**
   * async componentDidMount() 
   * merubah function componentDidMount menjadi asynchronous
   * untuk mengenali dan dapat menggunakan fungsi await
   */
  async componentDidMount(){
    console.log("ComponentDidmount Sedang Berjalan")
    console.log("Await Fetch")
    const urlFetch = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid") 
    
    /**
     * jika HTTP.satus bernilai 200 dan 'json' ada pada object
     * urlFetch maka setState untuk data menggunakan setStateAsync 
     * dengan nilai await urlFetch.json() 
     */
    console.log("execute: if urlFetch.status === 200 && 'json' in urlFetch")
    console.log("Jika True, maka setState data dengan nilai await urlFetch.json()")
    if ( urlFetch.status === 200 && 'json' in urlFetch ){
        console.log("Dan hasilnya adalah true maka setState dilakukan")
        this.setStateAsync({
            data: await urlFetch.json()  
        }) 
    }
  }

  setStateAsync(state){
    return new Promise( resolve => {
        this.setState(state, resolve) 
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
