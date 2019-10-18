import React, { Component } from 'react';

class Gif extends Component {
  render() {
  	const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;