import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Board } from './board/board';


function App() {
  return (
    <div className="App">
      <h3 className='bg-dark bg-gradient text-info m-0'>Tic-Tac-Toe</h3>
      <header className="App-header">
        <Board/>
      </header>
    </div>
  );
}

export default App;
