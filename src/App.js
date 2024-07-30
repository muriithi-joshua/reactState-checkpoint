import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Lionel Messi",
        bio: "Best footballer of all time.(G.O.A.T",
        imgSrc: "https://th.bing.com/th?id=OIP.N68d32QsYjMtoyg4X8v1TgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        profession: "footballer"
      },
      shows: false,
      mountedTime: new Date(),
      intervalId: null,
      timeSinceMounted: 0
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({
        timeSinceMounted: Math.floor((new Date() - this.state.mountedTime) / 1000)
      });
    }, 1000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeSinceMounted } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide" : "Show"} Profile
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <h2>{person.profession}</h2>
          </div>
        )}
        <p>Time since component mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
