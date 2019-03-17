import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="[ container ]">
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <nav class="[ header ] header_nav">
              <img src="https://www.seekpng.com/png/detail/12-121676_do-you-meme-rick-and-morty.png" alt="Rick and Morty" />
              <h1>React and Morty</h1>
            </nav>
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}