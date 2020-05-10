import React from 'react';
import './TodoListItem.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TodoListItem = ({ todo, onRemovePressed, onMarkAsCompletedPressed }) => (
    <Container className="todolist-item-container" fluid>
        <Row>
            <Col>
                <p>{todo.text}</p>
            </Col>
            <Col>
                <Button 
                    onClick={() => onMarkAsCompletedPressed(todo.text)}
                    className="completed-button"
                    variant="outline-success"
                    size="sm"
                    disabled={todo.isCompleted === true}>Mark As Completed</Button>
                <Button 
                    onClick={() => onRemovePressed(todo.text)}
                    className="remove-button"
                    variant="outline-danger"
                    size="sm">Remove</Button>
            </Col>
        </Row>
    </Container>
);

export default TodoListItem;