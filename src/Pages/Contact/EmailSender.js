import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Form } from 'react-bootstrap';

export const EmailSender = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e)

    emailjs.sendForm('service_162ovjr', 'template_5u5gjfe',form.current,'user_ChN6fLlFhdYHhGAiAHjlQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <div className='row mt-5'>
      <div className='col-6 m-auto'>
      <Form ref={form} onSubmit={sendEmail}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name="user_email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" name="message"  rows={3} />
    </Form.Group>
    <input type="submit" value="Send" />
  </Form>
  </div>
    </div>
  );
};
