import React,{Component } from 'react';
import './App.css';
import confirm from './components/confirm.js'
class App extends Component {
  async componentDidMount() {
    let res = await confirm('确定删除吗')
    console.log(res)

    if (res) {
      console.log('yes')
    } else {
      console.log('no')
    }
  }
  render() {
    return <></>
  }
}

export default App
