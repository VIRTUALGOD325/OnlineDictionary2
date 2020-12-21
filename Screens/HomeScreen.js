import React from 'react'
import {Text,TextInput,TouchableOpacity,View} from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <TextInput
            style={styles.inputBox}
            onChangeText={=>{
                this.setState({
                    text: text,
                    isSearchPressed: false,
                    word: "Loading...",
                    lexicalCategory: '',
                    examples: [],
                    defination: ""
                });
            }}
                value={this.state.text}
            />
        )       
    }
}