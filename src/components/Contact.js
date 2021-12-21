import React from "react";

export default function Contact() {
  return (
    <form className="">
      <h2 className="">Contact Me Here</h2>
      <p className="">Use the form below to send me a message.</p>
      <div className="">
        <label htmlFor="name" className="">
          Name
        </label>
        <input type="text" id="name" name="name" className="" />
      </div>
      <div className="">
        <label htmlFor="email" className="">
          Email
        </label>
        <input type="email" id="email" className="" />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Message
        </label>
        <textarea id="" className="" />
      </div>
      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
}
