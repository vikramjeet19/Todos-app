import React, { Component } from 'react';
import List from './List/list';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faTimesCircle,faEdit);
export default class App extends Component {

  state = {
    term: '',
    items: []
  }
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.term]
    });

  }
  deleteHandler = (index) => {
    let arr = [];
    arr = [...this.state.items];
    arr.splice(index, 1);
    this.setState({items:arr})
  }
  editHandler=()=>{
    let arr = [...this.state.items];
    arr.find(function(index){
      return console.log(this.state.items[index])}
    );
    
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1>To-Do List</h1>
        <form className="App" onSubmit={this.onSubmit}>
          <input className='field' value={this.state.term} onChange={this.onChange} />
          <button className='button'>Done!</button>
        </form>
        <List items={this.state.items}
          deleteHandler={(index) => this.deleteHandler(index)}
          editHandler={(index)=>{this.editHandler(index)}} />
      </div>
    );
  }
}