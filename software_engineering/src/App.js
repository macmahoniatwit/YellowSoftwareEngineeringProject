import './assets/css/App.css';
import './components/AddSession';
import './components/ListSession';
import './components/ViewSession';

function App() {
  return (
    <div className="App">
      <header id="header"><b>Software Engineering Project</b>
        <nav>
          <ul class="Nav">
            <li><a href="#" target="_self"><em>Session List</em></a></li>
            <li><a href="#" target="_self"><em>Add a Session</em></a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
