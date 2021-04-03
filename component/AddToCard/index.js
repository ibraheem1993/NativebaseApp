import React from 'react';
import { Text, View } from 'react-native';
import {AppButton} from '../AppButton/index';
import styles from './style';
export class AddToCart extends React.Component{
    state={
        quantity:0,
    }
    IncrementButtonHandler= ()=>{
        this.setState(prevState=>({quantity:prevState.quantity +1}))
    }
    DecrementButtonHAndler=()=>{
        this.setState(prevState=>({quantity:prevState.quantity-1}))
    }
    renderininit= ()=>
    {
     return <AppButton title='Add To Card' onPress={this.IncrementButtonHandler}/>
    };

    
    renderIncreseDecreseButton = ()  =>{
        
        return(
            <View style={styles.increaseDecreaseContainer}>
                <Text style={styles.plusMinus} onPress={this.IncrementButtonHandler}>+</Text>
                <Text>{this.state.quantity}</Text>
                <Text style={styles.plusMinus} onPress={this.DecrementButtonHAndler}>-</Text>
            </View>

        );
       

    };
    render(){
   return(
       <View style={styles.wrapper}>
           {this.state.quantity === 0 ?this.renderininit():this.renderIncreseDecreseButton()}
       </View>
   );
    }
}
 