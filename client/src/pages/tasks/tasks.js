import { useState, useEffect } from 'react';
import './tasks.css';
import './list_generator'
import Filter from './filter'
import list_generator from './list_generator';

// fetch('https://api.github.com/users/hacktivist123/repos')

function Tasks() {
  const [contentt, setContent] = useState([{'title': 'загрузка...'}]);
  useEffect(() => {
    async function getAPI(){
      let api = await fetch('http://localhost:4000/api');
      let content = await api.json();
      setContent(content)
      return 1
    }
    getAPI();
  }, [])

  console.log(contentt[0])
  return (
    <div className='tasks_div'>
        <Filter />
        <div className='tasks'>
          {list_generator(contentt)}
        </div>
    </div>
    );
}

export default Tasks;
