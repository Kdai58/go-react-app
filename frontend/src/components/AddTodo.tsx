import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Navbar, Form, FormControl, Button, Modal, Container } from 'react-bootstrap';
import ITask from '../type';

interface AddTodoProps { }

const AddTodo: React.FC<AddTodoProps> = props => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const addTodo = () => {
    const Post = async (data: {Title: string}) => {
      const response: AxiosResponse<ITask[]> = await axios.post(process.env.REACT_APP_API_ENDPOINT + "todo", data)
    }
    const data = {
      Title: title,
      Text: text
    }
    Post(data);
  }

  const handleShow = () => { setShow(true); }


  const handleClose = () => { setShow(false); }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    // <Navbar className="bg-light justify-content-between">
    //   <Form inline onSubmit={addTodo}>
    //     <FormControl type="text" placeholder="新しいタスク" className=" mr-sm-2" value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setInput(e.target.value)}} />
    //     <Button type="submit">追加</Button>
    //   </Form>
    // </Navbar>

    <>
      <Container>
        <Button variant="primary" onClick={handleShow}>追加</Button>
      </Container>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>タスクを追加する</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addTodo}>
            <Form.Group>
              <Form.Label>タイトル</Form.Label>
              <Form.Control type="text" placeholder="買い物に行く" className=" mr-sm-2" value={title} onChange={handleChangeTitle} />
            </Form.Group>
            <Form.Group>
              <Form.Label>内容</Form.Label>
              <Form.Control as="textarea" size="lg" value={text} onChange={handleChangeText} />
            </Form.Group>
            <Button type="submit">追加</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTodo;
