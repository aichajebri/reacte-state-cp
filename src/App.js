import "./App.css";
import React from "react";
import witch from "./witch.JPG";
// --- test
class App extends React.Component {
  state = {
    Person: {
      imgsrc: witch,
      fullName: "Aisha Jebri",
      age: "21 years old",
      bio: "*She needs to sort out her priorities!*",
      profession: "Auror at the ministry of magic ",
    },
    count: 0,
    show: true,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  timer = () => {
    const Hours = `0${Math.floor(this.state.count / (60 * 60))}`.slice(-2);
    const Minutes = `0${Math.floor((this.state.count / 60) % 60)}`.slice(-2);
    const Seconds = `0${this.state.count % 60}`.slice(-2);
    return `${Hours}:${Minutes}:${Seconds}`;
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <center>
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <h1
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: "5px",
                borderStyle: "dotted solid",
                fontFamily: "Cursive",
                fontWeight: "bolder",
              }}
            >
              YOU HAVE BEEN WATCHING FOR {this.timer()} !!!
            </h1>
            {this.state.show && (
              <>
                <img
                  src={this.state.Person.imgsrc}
                  alt="witch"
                  style={{ height: "300px", width: "300px" }}
                ></img>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Cursive",
                    borderWidth: "5px",
                    borderStyle: "dotted solid",
                  }}
                >
                  <h2
                    style={{
                      color: "#613659",
                    }}
                  >
                    Witch name: {this.state.Person.fullName}
                  </h2>
                  <h4
                    style={{
                      color: "#D3B1C2",
                    }}
                  >
                    Age: {this.state.Person.age}
                  </h4>
                  <h2
                    style={{
                      color: "#D3B1C2",
                    }}
                  >
                    Biography :{this.state.Person.bio}
                  </h2>
                  <h3
                    style={{
                      color: "#D3B1C2",
                    }}
                  >
                    Profession: {this.state.Person.profession}
                  </h3>
                </div>
                <br></br>
              </>
            )}

            <button onClick={this.handleShowPerson}>click </button>
          </div>
        </center>
      </>
    );
  }
}

export default App;
// // Instructions
// Create a project using create-react-app.*
//  Transform the App.js into a class-based component.
//  Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
//   Add a button that toggles the show state.*
//    When the show state is true, the person's profile will appear. *
//    Create a field that shows the time interval since the last component was mounted using the component lifecycle.
//    Hint: use the setInterval method.
