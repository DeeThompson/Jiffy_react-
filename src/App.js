import React, {Component} from 'react';
//we need to import our components from 
import loader from './images/loader.svg'

const Header = () => (
<div className="header grid">
  <h1 className="title">jiffy</h1>

</div>

);

const UserHint = ({loading, hintText}) => (
<div className='user-hint'>
 
  {loading ? <img className="block mx-auto" src={loader}/> :

hintText}

 </div>

);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      hintText: 'Hit Enter to search'

    };
  }
  //we want a function that searches the giphy api using 
  // fetch and puts the search term into the query url and 
  // then we can do something with the results 

  searchGiphy = async searchTerm => {

    
  }

  

  handleChange = event => {
    const {value} = event.target;
    this.setState((prevState, props) => ({
      // we take our old props  and spread them out here
      ...prevState,
      // and then we overwrite the ones we want after 
      searchTerm: value
    }));
    if (value.length > 2) {
     
    }
  };

  handleKeyPress = event => {
    const {value} = event.target
    
    if (value.length > 2 && event.key === 'Enter') {
      alert(`search for ${value}`);
    }

  };
 
  render() {
    // const searchTerm = this.state.searchTerm
    const { searchTerm } = this.state 
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
        value= {searchTerm}
        />
        
        
        </div>

        <UserHint />
         </div>
    );
  }
}



export default App;
