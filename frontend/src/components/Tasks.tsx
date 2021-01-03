import * as React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import axios from "axios";


export interface TasksProps { }

export interface Task {
    ID: number | null,
    CreatedAt: Date | null,
    UpdatedAt: Date | null,
    DeletedAt: Date | null,
    Title: string,
    Text: string,
    Status: number | null
}

const Tasks: React.FC<TasksProps> = (props) => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const getTasks = () => {
        axios
        .get(process.env.REACT_APP_API_ENDPOINT + 'todo')
        .then(res => {
            setTasks(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error));
    }

    useEffect(getTasks, []);

    return (
        <section>
            <ListGroup>
                {tasks.map(task => (
                    <ListGroup.Item key={task.ID}>
                        <h3>{task.Title}</h3>
                        <Link to={'/${task.ID}'}>
                            <Button variant="primary" className="mr-2">Get Details</Button>
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </section>
    );
}

export default Tasks;
