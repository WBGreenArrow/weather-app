import { useState, useEffect } from 'react';

import api from './services/api/config';
import { Card } from './components/Card';

function App() {
  const [count, setCount] = useState<any>(0);

  const params = { q: 'Marabá ' };

  useEffect(() => {
    api
      .get('', { params })
      .then((response) => setCount(response.data.name))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
