import React from 'react';
//import dataCreator from './services/dataCreator';

import AHGrid from './components/AHGrid';


const App = () => {
  //const data = React.useMemo(() => dataCreator(100000), []);
 
   return (
     <div>
         <AHGrid
              //options={{ useCache: true }}
               //options={{ manual: true }}
               //refetchOptions={{ useCache: true }}
            />
          </div>
   )};

  //;

    
export default App;
