import axios from 'axios';
import {setProducts, setLoading,setError} from '../slices/products';


export const getProducts = () => async (dispatch) =>{

   dispatch(setLoading(true));

   try {
       
      const {data} = await axios.get('/api/products');
      dispatch(setProducts(data))

      
   } catch (error) {

      dispatch(setError(
         error.response && error.response.data.message ? error.response.data.mesage :error.message ? error.message :"An error has occured"
      ))
      
   }


};