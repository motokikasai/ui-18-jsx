import React from "react";
// import logo from "./assets/logo.svg";
import "./styles/App.scss";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <h2>People List</h2>
      <ul>
        {data.map(person => {
          return (
            <li key={person.id}>
              <div className="profile">
                <img src={person.avatar} alt="" />
                <div className="profile-top">
                  <div className="full-name">
                    <span>{person.firstName}</span>
                    <span>{person.lastName}</span>
                    {person.isAdmin && <span className="admin">admin</span>}
                  </div>
                  <div className="job-title">
                    <span>{person.title}</span>
                  </div>
                </div>
              </div>
              <div className="contact-info">
                <span>{person.contact.phone}</span>
                <span>{person.contact.email}</span>
                <span>{person.contact.url}</span>
              </div>
              <div className="since">{person.memberSince}</div>
            </li>
          );
        })}
      </ul>
      {/* <header className="App-header">
          </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
