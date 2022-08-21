import React, { useState, useRef } from "react";
import "../component/form.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const [inputfield, setInputField] = useState("");

  const emailValue = (e) => {
    setInputField(e.target.value);
  };

  const emailCheck = () => {
    if (inputfield.length > 0) {
      console.log(inputfield);
    } else {
      alert("please enter email");
    }

  };

  const submitHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_d1k02dz",
        "website-template",
        form.current,
        "UoEF4-fB-baM4gVRr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email has been sent to mostafa.mohammedi.home@gmail.com")
        },
        (error) => {
          console.log(error.text);
        }
      );
      setInputField("");

  };

  return (
    <form className="form-content" onSubmit={submitHandler} ref={form}>
      <label>Contact</label>

      <input
        className="form-name"
        placeholder="Write Email"
        type="email"
        name="email"
        value={inputfield}
        onChange={emailValue}
      />
      <input className="form-button" type="submit" onClick={emailCheck} />
    </form>
  );
};

export default Form;
