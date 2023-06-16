import { React, useState } from 'react';
import { Button, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { UserAuth } from '../context/AuthContext';
import './Account.css';
import { ImPlus } from 'react-icons/im';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { MagnifyingGlass } from "phosphor-react";

function Account() {

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  };

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');



  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase()));

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText }
        }
        return todo;
      })
    )
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
      })
    )
  }

  return (
    <div>
      <div className='d-flex align-content-center justify-content-center mt-4'>
        <h2 style={{ fontFamily: 'sans-serif' }}>Welcome {user?.displayName}!</h2>
      </div>
      <br />
      <Container className='container mt-5'>
        <Row>
          <Col className='w-25'>
            <h2 style={{ fontFamily: 'fantasy' }}>Add Todo</h2>
            <br />
            <Form>
              <Form.Group className='d-flex align-content-center w-75'>
                <Form.Control
                  type='text'
                  placeholder='Enter a new todo'
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button
                  variant='success'
                  color='white'
                  onClick={addTodo}
                  style={{ marginLeft: '10px' }}>
                  <ImPlus />
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h2 style={{ fontFamily: 'fantasy' }}>Todo List</h2>
            <br />
            <Form>
              <Form.Group className='d-flex justify-content-center w-50'>
                <Form.Control
                  type='text'
                  placeholder='Search'
                  value={search}
                  onChange={handleSearch}
                />
                <MagnifyingGlass size={32} />
              </Form.Group>
            </Form>
            {
              filterTodos.map((todo) => {
                return (
                  <div key={todo.id} className='d-flex align-content-center mt-3 todo-item'>
                    <ListGroup>
                      <ListGroupItem className='d-flex align-content-center w-100'>
                        <Form.Check
                          type='checkbox'
                          checked={todo.completed}
                          onChange={() => handleToggle(todo.id)}
                          label={todo.completed ? <del>{todo.text}</del> : todo.text}
                        />
                      </ListGroupItem>
                    </ListGroup>
                    <Button
                      onClick={() => {
                        const newText = prompt('Enter New Text', todo.text);
                        if (newText) {
                          updateTodo(todo.id, newText);
                        }
                      }}
                      style={{ marginLeft: '10px' }}>
                      <FaEdit />
                    </Button>
                    <Button
                      variant='danger'
                      color='white'
                      onClick={() => deleteTodo(todo.id)}
                      style={{ marginLeft: '10px' }}>
                      <RiDeleteBin6Line />
                    </Button>
                  </div>
                );
              })
            }
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Account;