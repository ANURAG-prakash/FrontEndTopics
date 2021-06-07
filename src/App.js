import logo from './logo.svg';
import './App.css';
import ComponentsC from './components/ComponentsC'
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Anurag" >
      <ComponentsC />
      </UserProvider>
     
    </div>
  );
}

export default App;
