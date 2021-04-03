import React from 'react';
import {Text,ActivityIndicator} from 'react-native';
import {PlatFormTouchable} from '../Touchable'
import styles from './style';

export class AppButton extends React.Component{
     
   render(){
    const {title}=this.props;
    const {onPress}=this.props;
       isLoading=false;

    return(
        <PlatFormTouchable disabled={isLoading} style={styles.wrapper}>
            {
                isLoading?<ActivityIndicator></ActivityIndicator>:<Text style={styles.title} onPress={onPress} >{title}</Text>
            }
        
        </PlatFormTouchable>
    );
   }

}