import React from 'react';
import Components from './components/Components';
import ScrolToTop from './components/Elements/ScrolToTop';
import Loader from "./components/Elements/Loader";

const App = () => {
  
  return (
    <div className="App">
      <Components />
      <ScrolToTop/>
      <Loader/>  
    </div>
  );
}

export default App;