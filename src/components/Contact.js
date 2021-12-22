import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMesssage] = React.useState("");
  const [error, setError] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www.form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Your message has been sent!"))
      .catch((error) => alert(error));
  }

  return (
    <form className="" name="contact">
      <h2 className="">Contact Me Here</h2>
      <p className="">Use the form below to send a message.</p>
      <div className="">
        <label htmlFor="name" className="">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className=""
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="email" className="">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className=""
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="message" className="">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className=""
          onChange={(e) => setMesssage(e.target.value)}
        />
      </div>
      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
}
