import './assets/css/App.css';
import './components/Room.js';
import './components/Session.js';
import './components/Time.js';
import './components/Speaker.js';

function App() {
  return (
    <div className="App">
      <header><b>Software Engineering</b>
        <ul><a href="" target="_blank"><div><em>Add a Session</em></div></a></ul>
        <ul><a href="" target="_blank"><div><em>Add a Speaker</em></div></a></ul>
        <ul><a href="" target="_blank"><div><em>Add a Room</em></div></a></ul>
      </header>
    </div>
  );
}

export default App;
