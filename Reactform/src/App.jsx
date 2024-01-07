import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber) {
      alert("Please fill out all required fields.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <div className="app">
        <div className="box">
          <div className="flex">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label className={!firstName ? "show-label" : ""}>Please enter your first name</label>
              <input
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <label className={!lastName ? "show-label" : ""}>Please enter your last name</label>
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className={!email ? "show-label" : ""}>Please enter your email address</label>
              <input
                placeholder="Phone number"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <label className={!phoneNumber ? "show-label" : ""}>Please enter your phone number</label>
              <button type="submit" id="submit" onClick={handleSubmit}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;