import * as React from 'react';
import { useState, useEffect } from 'react';
import { Task } from './Tasks';
import { RouteComponentProps } from 'react-router-dom';
import axios from "axios";

export interface DetailsProps extends RouteComponentProps<{ id: string; }> { }

const Details: React.FC<DetailsProps> = ({ match: { params: { id } } }) => {

    const [ task, setTask ] = useState<Task>({
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        DeletedAt: null,
        Title: '',
        Text: '',
        Status: null
    });

    const getTask = () => {
        axios
            .get(process.env.REACT_APP_API_ENDPOINT + 'todo/${id}')
            .then(res => {
                setTask(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }

    useEffect(getTask, []);

    return (
        <h1>hoge</h1>
    );

}

export default Details