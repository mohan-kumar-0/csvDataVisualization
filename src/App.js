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
        window.location.pathname==='/scatter' && ScatterPlot(maxSize)
      }
      {
        window.location.pathname==='/line' && LineGraph(maxSize)
      }
      {
        window.location.pathname==='/bar' && BarGraph(maxSize)
      }
      {
        window.location.pathname==='/stacked' && StackedBarGraph(maxSize)
      }
      {
        window.location.pathname==='/grouped' && StackedGroupedGraph(maxSize)
      }
    </div>
  );
}

export default App;
