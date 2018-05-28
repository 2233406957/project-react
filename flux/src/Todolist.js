import React, { Component } from 'react';

// import logo from './logo.svg';
import store from './store';
import { getInputChangeAction,getAddItemAction ,getDeleteItemAction} from "./actionCreator"
import dispatcher from './dispatcher';
import './App.css';
import TodolistUi from './TodolistUi';
export default class todolist extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    store.on("change",this.handleStoreChange.bind(this))
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() {
    return(
      <TodolistUi 
      inputValue={this.state.inputValue}
      handleInputChange = {this.handleInputChange}
      handleAddClick = {this.handleAddClick}
      handleDelete = {this.handleDelete}
      list = {this.state.list}
      ></TodolistUi>)
    
  }
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    dispatcher.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleAddClick(){
    const  action =getAddItemAction()
    dispatcher.dispatch(action)
  }
  handleDelete(e){
    const index = e.target.getAttribute("data-index")
    const  action = getDeleteItemAction(index)
    dispatcher.dispatch(action)
  }
}

