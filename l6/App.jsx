import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [e, setE] = useState({});

  const submit = (x) => {
    x.preventDefault();
    let err = {};

    if (!name.trim()) err.name = "Enter name";
    if (!/\S+@\S+\.\S+/.test(email)) err.email = "Enter valid email";
    if (pass.length < 6) err.pass = "Password must be 6 characters";

    setE(err);

    if (Object.keys(err).length === 0)
      alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <form onSubmit={submit}>
      <h2>Form Validation</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(x) => setName(x.target.value)}
        style={{ border: e.name ? "2px solid red" : "" }}
      />
      <div>{e.name}</div>

      <input
        placeholder="Email"
        value={email}
        onChange={(x) => setEmail(x.target.value)}
        style={{ border: e.email ? "2px solid red" : "" }}
      />
      <div>{e.email}</div>

      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        value={pass}
        onChange={(x) => setPass(x.target.value)}
        style={{ border: e.pass ? "2px solid red" : "" }}
      />
      <div>{e.pass}</div>

      <input type="checkbox" onChange={() => setShow(!show)} />
      Show Password
      <br /><br />

      <button>Submit</button>
    </form>
  );
}
