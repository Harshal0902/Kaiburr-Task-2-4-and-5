import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [servers, setServers] = useState([]);
  const [newServer, setNewServer] = useState({ name: '', language: '', framework: '' });

  useEffect(() => {
    axios.get('/api/v1/servers')
      .then(res => setServers(res.data.servers))
      .catch(err => console.error(err));
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewServer(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/v1/servers', newServer)
      .then(res => {
        setServers(prevState => [...prevState, res.data.server]);
        setNewServer({ name: '', language: '', framework: '' });
      })
      .catch(err => console.error(err));
  };

  const handleDelete = id => {
    axios.delete(`/api/v1/servers/${id}`)
      .then(() => setServers(prevState => prevState.filter(server => server.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <h1>Server Management</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newServer.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Language:
          <input type="text" name="language" value={newServer.language} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Framework:
          <input type="text" name="framework" value={newServer.framework} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Create Server</button>
      </form>
      <ul>
        {servers.map(server => (
          <li key={server.id}>
            {server.name} - {server.language} - {server.framework}
            <button onClick={() => handleDelete(server.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;