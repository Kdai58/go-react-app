import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ListGroup, Card, Container, Button, Accordion } from 'react-bootstrap';
import ITask from '../type';

export interface TodoListProps { }

const TodoList: React.FC<TodoListProps> = props => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const getTasks =  () => {
    const fetch = async () => {
      const response: AxiosResponse<ITask[]> = await axios.get(process.env.REACT_APP_API_ENDPOINT + 'todo');
      setTasks(response.data);
    }
    fetch();
  }

  useEffect(getTasks, []);


  return (
    <>
      <Container>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header as="h5">Todo</Card.Header>
          </Card>
          {tasks.map(task => (
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={`${task.ID}`} >
                  {task.Title}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={`${task.ID}`}>
                <Card.Body style={{ whiteSpace: "pre-line" }}>{task.Text}</Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </Container>
    </>
  );
}

export default TodoList;
