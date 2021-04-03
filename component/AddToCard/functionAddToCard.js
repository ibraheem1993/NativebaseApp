import React from 'react';
import { Text, View } from 'react-native';
import {AppButton} from '../AppButton/index';
import styles from './style';
export function AddToCard (Props){
    const [quantity,setquantity]=React.useState(0);
   const  IncrementButtonHandler= ()=>{
    setquantity(quantity+1)
    }
    const DecrementButtonHAndler=()=>{
        setquantity(quantity-1)
    }
    const renderininit= ()=>
    {
     return <AppButton title='Add To Card' onPress={IncrementButtonHandler}/>
    };

    
    const renderIncreseDecreseButton = ()  =>{
        
        return(
            <View style={styles.increaseDecreaseContainer}>
                <Text style={styles.plusMinus} onPress={IncrementButtonHandler}>+</Text>
                <Text>{quantity}</Text>
                <Text style={styles.plusMinus} onPress={DecrementButtonHAndler}>-</Text>
            </View>

        );
       

    };
  
   return(
       <View style={styles.wrapper}>
           {quantity === 0 ?renderininit():renderIncreseDecreseButton()}
       </View>
   );
 
    }

 