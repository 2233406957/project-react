import React, { Component } from 'react';

import store from "./store"

import TodolistUI from "./TodolistUI"

import {getInputChangeAction,getAddItemAction} from "./actionCreator"

class Todolist extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    store.subscribe(this.handleStoreChange.bind(this))
  }
  render() {
    return (<TodolistUI 
    {...this.state}
    handleChange = {this.handleChange}
    handleSubmit = {this.handleSubmit}
    />)
  }
  handleChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleSubmit(){
    const action = getAddItemAction()
    store.dispatch(action)
  }
}

export default Todolist;
