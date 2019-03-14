// imports
import React from 'react';
import CharacterComponent from '../components/CharacterComponent';
import Search from '../components/Search';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rickAndMortyObj: [],
      rickAndMortyCards: [],
      searchResults: []
    }
    this.getData = this.getData.bind(this);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }

  componentDidMount() {
    const app = this;
    app.getData();
  }

  getData() {
    const app = this;
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(result => app.setState({
        searchResults: result.results, 
        rickAndMortyObj: result.results})
      );
  }

  handleSearchTerm(searchTerm) {
    const app = this;
    let characterObj = app.state.searchResults;
    let characters = characterObj.filter((character) => character.name.toLowerCase().includes(searchTerm));

    app.setState({
      rickAndMortyCards: [],
      rickAndMortyObj: characters
    }, app.createCards());
  }

  createCards() {
    const app = this;
    let rickMortyArray = app.state.rickAndMortyObj;

    rickMortyArray.forEach((value, key) => {
      app.state.rickAndMortyCards.push(
        <CharacterComponent image={value.image}
          name={value.name}
          species={value.species}
          gender={value.gender}
          status={value.status}
          location={value.location.name}
          origin={value.origin.name}
          id={value.id}
          key={key}>
        </CharacterComponent>
      );
    });
  }

  render() {
    const app = this;
    app.createCards();

    return (
      <div className="[ row ]">
        <div className="[ col-sm-12 ]">
          <h2>
            Home Page
          </h2>
        </div>
        <div className="[ col-sm-12 ]">
          <Search onSearchTerm={app.handleSearchTerm}></Search>
        </div>
        <div className="[ col-sm-12 ]">
          {app.state.rickAndMortyCards}
        </div>
      </div>
    );
  }
}
