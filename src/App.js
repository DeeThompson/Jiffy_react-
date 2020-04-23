import React, {Component} from 'react';
//we need to import our components from 
const Header = () => (
<div className="header grid">
  <h1 className="title">jiffy</h1>

</div>

);

class App extends Component {
  // with create react app we can write our methods as arrow
  //functions, meaning we don't need the constructor and bind

  handleChange = event => {
    const {value} = event.target;
    if (value.length > 2) {
     
    }
  };

  handleyKeyPress = event => {
    const {value} = event.target
    
    if (value.length > 2 && event.key === 'Enter') {
      alert(`search for ${value}`)
    }

  };
 
  render() {
    return (
      <div className="page">

        <Header />
        <div className="search grid">
        {/* stack of gif images */}
        <input 
        className="input grid-item"
        placeholder="Type something"
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        />
        
        
        </div>
         </div>
    );
  }
}



export default App;
