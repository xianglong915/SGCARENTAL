import React from 'react';
import {Box,Flex,Heading,HStack,Stack,Link,useColorModeValue as mode,Spinner,Alert,AlertTitle,AlertIcon,AlertDescription,Wrap} from '@chakra-ui/react'
import {Link as ReactLink} from 'react-router-dom';
import cart from '../redux/slices/cart';
import { addCartItem } from '../redux/actions/cartAction';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../components/CartItem';
import CartOrderSummary from '../components/CartOrderSummary';


const CartScreen = () => {

  const cartList = useSelector((state) =>state.cart);
  const {error,loading,cart} =cartList;
  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
      {loading ?(
      <Stack direction='row' spacing={4}>
        <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='orange.500' size='xl'/>

      </Stack>
      ): error ? (
     <Alert status='error'>
      <AlertIcon/>
      <AlertTitle>We are sorry!</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
     </Alert>
      ):cart.length <=0 ? (
        <Alert status='warning'>
            <AlertIcon />
            <AlertTitle>
                Your cart is empty.
            </AlertTitle>
            <AlertDescription>
                <Link as={ReactLink} to ='/products'>Click here to check our Products</Link>
            </AlertDescription>
        </Alert>
        ):( 
           <Box masW={{base:'3xl',lg:'7xl'}} 
           mx='auto' 
           px={{base:'4',md:'8',lg:'12'}} 
           py={{base:'6',md:'8',lg:'12'}}>
            <Stack direction={{base:'column',lg:'row'}}
            align={{lg:'flex-start'}} spacing={{base:'8',md:'16'}}>

              <Stack spacing={{base:'8',md:'10'}} flex='2'>
            <Heading fontSize='2xl' fontWeight='extrabold'>
              Shopping Cart
            </Heading>
              <Stack spacing='6'>
               {cart.map((cartItem)=>(
                <CartItem key={cartItem.id} cartItem={cartItem}/>
               ))}
           
              </Stack>
              <Flex direction='column' align='center' flex='1'>
                <CartOrderSummary />

                <HStack mt='6' fontWeight='semibold'>
                  <p>or</p>
                  <Link as={ReactLink} to='/products' color={mode('orange.500','orange.200')}>
                    Continue Shopping

                  </Link>

                </HStack>
              </Flex>
            </Stack>
            </Stack>
           </Box>
        )
          
      
      }
        
    </Wrap>
  );
};

export default CartScreen

