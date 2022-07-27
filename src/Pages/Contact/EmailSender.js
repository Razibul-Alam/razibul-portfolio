import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Form } from 'react-bootstrap';
import { message } from 'antd';

export const EmailSender = () => {
  const form = useRef();
  console.log(form)
  // success message
  const success = () => {
    message.success('Successfully Sent');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e)

    emailjs.sendForm('service_162ovjr', 'template_5u5gjfe',form.current,'user_ChN6fLlFhdYHhGAiAHjlQ')
      .then((result) => {
          console.log(result);
          success()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='row mt-5'>
      <div className='col-6 m-auto'>
      <Form ref={form} onSubmit={sendEmail}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
      <Form.Label>Name</Form.Label>
      <Form.Control type="Text" name="name" placeholder="Name" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email" placeholder="name@example.com" required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" name="message"  rows={3} required/>
    </Form.Group>
    <input type="submit" value="Send" style={{color:"black", padding:"10px 20px"}}/>
  </Form>
  </div>
    </div>
  );
};
