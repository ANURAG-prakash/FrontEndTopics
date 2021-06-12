import logo from './logo.svg';
import './App.css';
import PortalDemo from './components/PortalDemo'
import ComponentsC from './components/ComponentsC'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import Counter from './components/Counter'
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      

      {/* <UserProvider value="Anurag" >
      <ComponentsC />
      </UserProvider> */}

      {/* <PortalDemo/> */}

      <ClickCounter />
      <HoverCounter />


      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Anurag' : 'Guest'} /> */}
       {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )} />

        
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        )} />  */}

    </div>
  );
}

export default App;
