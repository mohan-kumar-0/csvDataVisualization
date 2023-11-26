import './App.css';
import LineGraph from './graphs/LineGraph';
import BarGraph from './graphs/BarGraph';
import ScatterPlot from './graphs/ScatterPlot';
import StackedBarGraph from './graphs/StackedBarGraph';
import StackedGroupedGraph from './graphs/StackedGroupedGraph';
import SideBar from './sidebar/SideBar';
import { useState } from 'react';

function App() {
  const maxSize = 50;
  const [option,setOption] = useState(0);
  return (
    <div className="App">
      {
        SideBar(option,setOption)
      }
      {
        option===0 && ScatterPlot(maxSize)
      }
      {
        option===1 && LineGraph(maxSize)
      }
      {
        option===2 && BarGraph(maxSize)
      }
      {
        option===3 && StackedBarGraph(maxSize)
      }
      {
        option===4 && StackedGroupedGraph(maxSize)
      }
    </div>
  );
}

export default App;
