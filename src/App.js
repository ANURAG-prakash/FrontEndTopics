import logo from './logo.svg';
import './App.css';
import ComponentsC from './components/ComponentsC'
import { UserProvider } from './components/userContext';
import PortalDemo from './components/PortalDemo'

function App() {
  return (
    <div className="App">
      <UserProvider value="Anurag" >
      <ComponentsC />
      </UserProvider>
       <PortalDemo/>
     
    </div>
  );
}

export default App;
