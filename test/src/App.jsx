import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([]);

      const updateItems = () => {
        const newItems = [];
        for (let i = 1; i <= 1000; i++) {
          newItems.push(`Item ${i}`);
        }
        setItems(newItems);  // React handles Virtual DOM diffing and only applies necessary changes
      };

      return (
        <div>
          <button onClick={updateItems}>Update Items</button>
          <div id="items">
            {items.map((item, index) => (
              <div key={index} className="item">{item}</div>
            ))}
          </div>
        </div>
      )
}

export default App
