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

    const [ tasks, setTasks ] = useState<Task[]>([]);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_ENDPOINT + 'todo')
            .then(res => {
                setTasks(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        // <section>
        //     <ListGroup>
        //         <ListGroup.Item>Cras justo odio</ListGroup.Item>
        //         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        //         <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        //         <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        //         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        //     </ListGroup>
        // </section>

        <section className="row my-2">
            <ul className="col-md-6 offset-md-3 list-group">
                {tasks.map(task => (
                    <li key={task.ID} className="list-group-item d-flex justify-content-between">
                        <h3>{task.Title}</h3>
                        <Link to={'/${task.ID}'}>
                            <Button variant="primary" className="mr-2">Get Details</Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Tasks;