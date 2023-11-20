//import './App.css';

//import App1 from './App1'
import { ChakraProvider } from '@chakra-ui/react'
import App2 from './App2'


function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <App2 />
      </div>
    </ChakraProvider>

  );
}

export default App;
