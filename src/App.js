
import React from 'react';
import './App.css';
import Header from './Header'
import Meme from './Meme'
import Counter from './Counter';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      mount: true
    }
    this.mountCounter = () => this.setState({mount: true})
  }
  render(){
    return <>
      <Counter />
     </>

    
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Meme/>
      
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

export default App;
