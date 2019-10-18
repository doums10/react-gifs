//const Hello = (props) => {
// return <div> Hello, {props.name}</div>;
//}

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0,
    };
  }

  handleClick = () => {
    //Change the state
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1,
    });
  }

  render() {
    //Build and render HTML
    return (
      <div className={this.state.clicked ? 'clicked' : null} 
  		onClick = {this.handleClick}>
  		Hello{this.props.name} {this.state.counter}
  		</div>
    )

  }
}