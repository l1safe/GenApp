import Tasks from '../pages/tasks/tasks';
import './App.css';

// fetch('https://api.github.com/users/hacktivist123/repos')
function App() {
  return (
    <div className='main_div'>
    <header>
      <p>Задания</p>
      <p>Карта</p>
    </header>
    <Tasks />
    </div>
    );
}

export default App;
