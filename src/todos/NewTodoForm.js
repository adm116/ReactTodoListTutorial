import React, { useState } from 'react';
import './NewTodoForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { createTodo } from './actions';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    const processCreateTodo = (event) => {
        event.preventDefault();
        
        const isDuplicateText = todos.some(todo => todo.text === inputValue);
        if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue('');
        }
    };

    return (
        <Container className="new-todo-form-container" fluid>
            <Form className="new-todo-form" onSubmit={processCreateTodo}>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Control 
                            type="text"
                            className="new-todo-input"
                            placeholder="Type your new todo here"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}/>
                    </Col>
                    <Col>
                        <Button
                            type="submit"
                            className="new-todo-button"
                            variant="outline-success"
                            size="sm">Create Todo</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    );
};

// need todos state from redux in order to check for duplicates
const mapStateToProps = state => ({
    todos: state.todos
});

// create function through redux to add new todo to redux todos store
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);