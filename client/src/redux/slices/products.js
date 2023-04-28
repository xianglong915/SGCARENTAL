import {createSlice} from '@reduxjs/toolkit';

const initialState ={

    loading:false,
    error:null,
    products:[]
};

export const productSlice = createSlice({
   name:'product',
   initialState,
   reducers:{
       setLoading:(state)=>{
        state.loading=true
       },
       setProducts:(state,{payload})=>{
          state.loading=false;
          state.error=null;
          state.products=payload

       },
       setError:(state,{payload})=>{
          state.error=payload;
          state.loading=false

       }
   }
});

export const {setLoading,setProducts,setError} = productSlice.actions;
export default productSlice.reducer;

export const productSelector= (state) =>{
    return state.products
}