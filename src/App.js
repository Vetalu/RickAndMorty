import './App.css';
import Header from './Header/Header';
import Content from './Components/Content';
import SearchContent from './Components/SearchContent';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchContent />
      <Content />
    </div>
  );
}

export default App;
