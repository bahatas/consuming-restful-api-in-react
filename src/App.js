import React, { Component } from "react";
import Baha from "./Baha";
import Tokens from "./components/Tokens";

class App extends Component {
    

  render() {
  
    return <Tokens tokens={this.state.tokens} />;
  }

  state = {
    tokens: [],
  };
  componentDidMount() {
    fetch('localhost:9111/token')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  
//   componentDidMount() {
//   fetch(
//     "http://localhost:9111/makepayment",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         username: "admin", password: "admin" 
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   ).then((response) => {
//     if (response.ok) {
//         console.log("data retrived")
    
//     }
//   });
//   }
}
export default App;




//     fetch("http://localhost:9111/makepayment", {
//       method: "POST",
//       body: JSON.stringify({ username: "admin", password: "admin" }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({ tokens: data });
//       })
//       .catch(console.log);
//   }