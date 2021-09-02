import Header from './Components/Header';
import Home from './Pages/Home';
import Single from './Pages/Single';
import { Route, Switch } from 'react-router';
import ThemeContext from './Components/ColorPalette';
import { useState } from 'react';
function App() {
  const [Theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={{ Theme, setTheme }}>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/:name' component={Single}></Route>
        </Switch>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
