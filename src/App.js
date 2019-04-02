import React, { Component } from 'react';
import List from './List/list';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faTimesCircle, faEdit);
export default class App extends Component {

  state = {
    term: '',
    items: [],
    edit: false
  }
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.edit) {
      const allItems = this.state.items;
      allItems[this.state.editItemIndex] = this.state.term
      this.setState({
        items: allItems,
        edit: false,
        term: ''
      });
      return;
    }
    this.setState({
      items: [...this.state.items, this.state.term],
      term: ''
    });

  }
  deleteHandler = (index) => {
    let arr = [];
    arr = [...this.state.items];
    arr.splice(index, 1);
    this.setState({ items: arr })
  }
  editHandler = (index) => {

    this.setState({ edit: true, term: this.state.items[index], editItemIndex: index });
  }

  render() {

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>To-Do List</h1>
        <form className="App" onSubmit={this.onSubmit}>
          <input className='field' value={this.state.term} onChange={this.onChange} />
          <button className='button'>Done!</button>
        </form>
        <List items={this.state.items}
          deleteHandler={(index) => this.deleteHandler(index)}
          editHandler={(index) => { this.editHandler(index) }} />

      </div>
    );
  }
}