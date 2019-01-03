import React, { Component } from 'react';
import './App.css';
import Series from './components/Series';
import Form from './components/Form'

class App extends Component {
  state = {
    series: '',
    error: '',

  }

  findSeries = async (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchValue.value;
    const api_call = await fetch(`http://api.tvmaze.com/search/shows?q=${searchValue}`);
    const data = await api_call.json();
    console.log(data)
    if (searchValue) {
      this.setState({ series: data });
      console.log(this.state.series)

    }
    else {
      this.setState({
        series: undefined,
        error: "cannot find series"
      });
    }

  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1>Search Tv Series</h1>
        </header>
        <p>Enter a word to search for a Tv series</p>
        <Form findSeries={this.findSeries} />
        <Series
          series={this.state.series}
          error={this.state.error} />
      </div>
    );
  }
}

export default App;
