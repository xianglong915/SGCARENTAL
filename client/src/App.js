import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from '../src/components/Navbar';
import ProductScreen from './screens/ProductScreen';



function App() {
  return (
  <ChakraProvider>
    <Router>
      <Navbar />
      <main>
        <Routes>
        <Route path='/products' element={<ProductScreen />}>
        </Route>
        </Routes>
      </main>
    </Router>
  </ChakraProvider>
  );
}

export default App;
