import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../styles/app.css'

const App = () => (
  <div>
    <h2>Todo List</h2>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App
