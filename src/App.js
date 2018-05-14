import React, { Component } from 'react' 
import logo from './logo.svg'
import './App.css'

import AsyncFetch from './AsyncFetch'

import ComponentA from './ComponentA'

class App extends Component {
  /**
   * @var {state} state object reactjs 
   * default have property of data in value array 
   */
  state = {
    data: [],
    isLoad: false
  }

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this) 
    console.log(`Constructor : ${JSON.stringify(this.state)}`)
  }
  
  /**
   * async componentDidMount() 
   * merubah function componentDidMount menjadi asynchronous
   * untuk mengenali dan dapat menggunakan fungsi await
   *
   * @method {componentDidMount} Async Function 
   * change native componentDidMount function to 
   * asynchronous function 
   *
   * @returns void|null
   */
  async componentDidMount(){

    console.log("ComponentDidmount Sedang Berjalan")

    /**
     * @const {url} string untuk fetch data 
     */
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid"

    console.log(`Fetch data url : ${url}`)

    console.log("Menjalankan Fungsi AsyncFetch didalam setStateAsync")

    this.setStateAsync({
        data: await AsyncFetch(url)
    }) 

    console.log(`Async ComponentDidmount lifecycle: ${JSON.stringify(this.state)}`)
  }

  /**
   *
   * React setState for Async Function
   *
   * @param {state} Object state will set in setState  
   * @returns {Promise} Object Promise will use in Async Function  
   */
  setStateAsync(state){
    return new Promise( resolve => {
        this.setState(state, resolve) 
    }) 
  }

  /**
   * @method {handleClicK}
   * @param {e} Object as Event 
   */
  handleClick(e){
      console.log("Tombol Ter-Trigerred :D");
      this.setState({
        isLoad: ! this.state.isLoad  
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <button onClick={this.handleClick} children="Klik Untuk ComponentA"/>
        </p>
        { this.state.isLoad && <ComponentA/>}
      </div>
    )
  }
}

export default App
