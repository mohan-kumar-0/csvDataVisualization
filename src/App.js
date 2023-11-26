import './App.css';
import LineGraph from './graphs/LineGraph';
import BarGraph from './graphs/BarGraph';
import ScatterPlot from './graphs/ScatterPlot';
import StackedBarGraph from './graphs/StackedBarGraph';
import StackedGroupedGraph from './graphs/StackedGroupedGraph';
import SideBar from './sidebar/SideBar';

function App() {
  const maxSize = 50;
  return (
    <div className="App">
      {
        SideBar()
      }
      {
        ScatterPlot(maxSize)
      }
    </div>
  );
}

export default App;
