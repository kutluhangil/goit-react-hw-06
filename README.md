<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React Homework 06 — Phonebook with Redux Toolkit</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
      background-color: #0f0f12;
      color: #eaeaf0;
      line-height: 1.6;
      padding: 40px;
      max-width: 1000px;
      margin: auto;
    }

    h1, h2, h3 {
      color: #ffffff;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    h2 {
      margin-top: 40px;
      border-bottom: 1px solid #2a2a35;
      padding-bottom: 6px;
    }

    p, li {
      color: #cfd1ff;
    }

    ul {
      padding-left: 20px;
    }

    code, pre {
      background: #1a1a23;
      color: #b4b7ff;
      padding: 6px 10px;
      border-radius: 6px;
      display: inline-block;
    }

    pre {
      display: block;
      padding: 16px;
      overflow-x: auto;
    }

    a {
      color: #7b7dff;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .section {
      margin-top: 30px;
    }

    .footer {
      margin-top: 60px;
      text-align: center;
      opacity: 0.7;
    }
  </style>
</head>
<body>

  <h1>📱 React Homework 06 — Phonebook with Redux Toolkit</h1>

  <p>
    This project is an upgraded version of the <strong>Phonebook application</strong>,
    rebuilt using <strong>Redux Toolkit</strong> instead of local React state.
  </p>

  <p>
    The main goal of this homework is to practice
    <strong>global state management</strong>,
    <strong>Redux slices</strong>,
    and <strong>state persistence</strong> using Redux Persist.
  </p>

  <h2>🔗 Project Links</h2>
  <ul>
    <li>
      <strong>GitHub Repository:</strong><br />
      <a href="https://github.com/kutluhangil/goit-react-hw-06" target="_blank">
        https://github.com/kutluhangil/goit-react-hw-06
      </a>
    </li>
    <li>
      <strong>Live Demo (Vercel):</strong><br />
      <a href="https://goit-react-hw-06-psi-gold.vercel.app/" target="_blank">
        https://goit-react-hw-06-psi-gold.vercel.app/
      </a>
    </li>
  </ul>

  <h2>🛠️ Technologies & Libraries</h2>
  <ul>
    <li>React</li>
    <li>Vite</li>
    <li>Redux Toolkit</li>
    <li>React Redux</li>
    <li>Redux Persist</li>
    <li>Formik & Yup</li>
    <li>nanoid</li>
    <li>CSS Modules</li>
    <li>Prettier</li>
  </ul>

  <h2>📦 Installed Dependencies</h2>
  <pre>
npm install @reduxjs/toolkit react-redux redux-persist
npm install formik yup nanoid
  </pre>

  <h2>📂 Project Structure</h2>
  <pre>
src
 ├── components
 │   ├── Contact
 │   ├── ContactForm
 │   ├── ContactList
 │   └── SearchBox
 ├── redux
 │   ├── contactsSlice.js
 │   ├── filtersSlice.js
 │   └── store.js
 ├── App.jsx
 ├── App.module.css
 └── main.jsx
  </pre>

  <h2>📖 Application Overview</h2>
  <p>
    The Phonebook application allows users to add, delete, and filter contacts.
    All application state is managed globally via Redux Toolkit.
  </p>

  <h2>✨ Core Features</h2>
  <ul>
    <li>Add new contacts with validation</li>
    <li>Delete existing contacts</li>
    <li>Filter contacts by name</li>
    <li>Persist data using localStorage</li>
    <li>Premium UI built with CSS Modules</li>
  </ul>

  <h2>🧠 Redux State Structure</h2>
  <pre>
{
  contacts: {
    items: []
  },
  filters: {
    name: ""
  }
}
  </pre>

  <h2>🔹 Redux Slices</h2>

  <h3>Contacts Slice</h3>
  <ul>
    <li>Add contact</li>
    <li>Delete contact</li>
    <li>Select contacts list</li>
  </ul>

  <h3>Filters Slice</h3>
  <ul>
    <li>Update name filter</li>
    <li>Select filter value</li>
  </ul>

  <h2>💾 State Persistence</h2>
  <p>
    Contacts are persisted using <strong>Redux Persist</strong>.
    The state is automatically saved to and restored from localStorage.
  </p>

  <h2>🔄 Data Flow</h2>
  <ol>
    <li>User interacts with UI</li>
    <li>Redux action is dispatched</li>
    <li>Reducer updates the store</li>
    <li>Subscribed components re-render</li>
  </ol>

  <h2>🪜 Homework Goals Achieved</h2>
  <ul>
    <li>Redux Toolkit integration</li>
    <li>Multiple Redux slices</li>
    <li>Selectors instead of prop drilling</li>
    <li>Persistent global state</li>
    <li>Clean, scalable architecture</li>
  </ul>

  <div class="footer">
    <p>Happy coding 🚀 — React + Redux Toolkit</p>
  </div>

</body>
</html>
