import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from './actions';

const TodoList = ({ todos = [], onRemovePressed, onMarkAsCompletedPressed }) => (
    <Jumbotron className="list-wrapper">
        <ListGroup>
            {todos.map((todo, index) => 
                <ListGroup.Item key={index}>
                    <TodoListItem
                        todo={todo}
                        onRemovePressed={onRemovePressed}
                        onMarkAsCompletedPressed={onMarkAsCompletedPressed} />
                </ListGroup.Item>
            )}
            <ListGroup.Item key={todos.length}>
                <NewTodoForm />
            </ListGroup.Item>
        </ListGroup>
    </Jumbotron>
);

// need to use state from redux store
const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkAsCompletedPressed: text => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);