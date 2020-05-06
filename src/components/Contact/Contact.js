import React, { useState, useRef, useEffect } from 'react'
import Button from '../Button/Button'
import { validateEmail, validateSubject } from '../../utils/validation'

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [errors,setErrors] = useState({});
    const inputSubjectRef = useRef(null)

    const handleChangeInputSubject = (event) => {
      if (validateSubject(event.target.value)) {
        setSubject(event.target.value);
        setErrors({
          ...errors,
          subject: null,
        });
      } else {
        setErrors({
          ...errors,
          subject: "Subject must be more than 8 characters",
        });
      }
    };

    const handleChangeInputEmail = (event) => {
        if (validateEmail(event.target.value)){
            setEmail(event.target.value);
            setErrors({
                ...errors,
                email: null,
            })
        }else {
            setErrors({
              ...errors,
              email: 'Email is not valid'
            });
        }
    };

    const handleChangeTextArea = (event) => {
      setDescription(event.target.value);
    };

    const handleSubmit = () => {
      console.log("subject", subject);
      console.log("email", email);
      console.log("description", description);
    };

    useEffect(()=>{
      inputSubjectRef.current.focus();
    }, [])

    return (
      <div className="Contact">
        <div className="formControl">
          <input
            ref={inputSubjectRef}
            onChange={handleChangeInputSubject}
            type="text"
            placeholder="subject"
          />
          {errors.subject && <span>{errors.subject}</span>}
        </div>
        <div className="formControl">
          <input
            onChange={handleChangeInputEmail}
            type="email"
            placeholder="Email"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="formControl">
          <textarea onChange={handleChangeTextArea}>Your request here</textarea>
        </div>
        <div className="formControl">
          <Button handleClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    );
};

export default Contact