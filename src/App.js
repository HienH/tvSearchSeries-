import React, { Component } from 'react';
import './App.css';
import Series from './components/Series';
import Form from './components/Form'

class App extends Component {
  state = {
    series:undefined,
    error:"",

  }

  findSeries = async (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchValue.value;
    const api_call = await fetch(`http://api.tvmaze.com/search/shows?q=${searchValue}`);
    const data = await api_call.json();
    if( searchValue ){
      this.setState({ series: data});
    }
    else {
      this.setState({
        series: undefined,
        error: "cannot find series"
      });
    }
  
  }
  render() {
    const {series} = this.state
    return (
      
      <div className="App">
        <header className="App-header">
         <h1>Search Tv Series</h1>
        </header>
        <p>Here you can find your most beloved series</p>
        <Form findSeries = {this.findSeries}/>
        <Series 
          series = {this.state.series}
          error={this.state.error}/>
      </div>
    );
  }
}

export default App;

