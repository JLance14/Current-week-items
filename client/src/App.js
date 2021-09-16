import Typography from '@material-ui/core/Typography';
import './App.css';
import CurrentWeekItemsList from './components/CurrentWeekItemsList/CurrentWeekItemsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Cook It</Typography>
        <Typography variant="h2">This week's items</Typography>
        <CurrentWeekItemsList />
      </header>
    </div>
  );
}

export default App;
