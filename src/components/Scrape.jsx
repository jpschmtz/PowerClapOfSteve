import React, { Component } from 'react';

class Scrape extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('/api/scrape')
      .then(response => response.json())
			.then(data => this.setState({ data }));
  }
}

export default Scrape;