import './App.css';
import React from 'react'
import UserCard from './components/UserCard'

class App extends from React.Component {
    constructor() {
        super()
        this.state = {
            id: null,
            login: "",

        }
    }
componentDidMount(){
    axios
    .get('https://api.github.com/users/stevenpmcfarlane')
    .then((res) => {
        console.log(res)
        this.setState({
            id: res.data
        })
    })
    .catch((error) => {
        console.log("there was an error ", error)
    })
    }

  render(){
  return (
    <div className="App">
      <header className="App-header">
       <UserCard />
      </header>
    </div>
  );
  }
}

export default App;
