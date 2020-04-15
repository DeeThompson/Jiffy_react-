import React, {Component} from 'react';
//we need to import our components from 
const Header = () => (
<div className="header grid">
  <h1 className="title">jiffy</h1>

</div>

);

class App extends Component {
  render() {
    return (
      <div className="page">

        <Header />
      

 
      </div>
    );
  }
}



export default App;
