
import './App.css';
import Input from './components/Input';
import List from './components/List';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome my todo list</h1>
      </header>
      <body>
<Input />
<List />
      </body>
    </div>
  );
}

export default App;
