import logo from './logo.svg';
import './App.css';
import ComponentsC from './components/ComponentsC'
import { UserProvider } from './components/userContext';
import PortalDemo from './components/PortalDemo'
import ClickCounter from './components/ClickCounter'
 import HoverCounter from './components/HoverCounter'
 
function App() {
  return (
    <div className="App">
      <UserProvider value="Anurag" >
      <ComponentsC />
      </UserProvider>
       <PortalDemo/>
         <ClickCounter/>
     <HoverCounter/> 
     
    </div>
  );
}

export default App;
