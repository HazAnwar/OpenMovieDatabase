import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import Search from './Search';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsError: false,
      results: [],
      loading: false
    };
  }

  updateSearch = event => {
    this.setState({ loading: true });
    event.target.value.length > 1
      ? fetch(`http://www.omdbapi.com/?apikey=18465ea1&s=${event.target.value}`)
          .then(res =>
            res.status === 200
              ? res.text()
              : this.setState({ networkError: true })
          )
          .then(res => {
            const resultObject = JSON.parse(res);
            console.log(resultObject);
            resultObject.Response === 'True'
              ? this.setState({
                  results: resultObject.Search,
                  resultsError: false,
                  loading: false
                })
              : this.setState({
                  results: [],
                  resultsError: true,
                  loading: false
                });
          })
      : this.setState({ results: [], resultsError: false, loading: false });
  };

  render() {
    return (
      <div className="home">
        <Header />
        <Search onChange={this.updateSearch} />

        {!this.state.loading &&
        !this.state.resultsError &&
        this.state.results < 1 ? (
          <h1 className="text-center tertiary">
            Please enter a title of a movie or a TV series into the search bar
            above
          </h1>
        ) : null}

        {this.state.loading ? (
          <h1 className="text-center tertiary">Please wait, loading...</h1>
        ) : null}

        {this.state.resultsError && !this.state.loading ? (
          <h1 className="text-center tertiary">
            Oops, it looks like there is an error, please check the information
            you have entered is correct or try again later.
          </h1>
        ) : null}

        <div className="card-grid">
          {this.state.results.map(movie => (
            <Card
              key={movie.imdbID}
              image={movie.Poster}
              heading={movie.Title}
              subtitle={movie.Year}
              callout={movie.Type}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
