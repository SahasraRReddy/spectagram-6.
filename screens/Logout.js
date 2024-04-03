import { Component } from "react"
import React from "react-native"
import { Text, View } from 'react-native'; 

export default class Logout extends Component {
    componentDidMount(){
        const auth = getAuth()
        signOut(auth).then(()=>{
            this.props.navigation.replace('login')
        })

        .catch((error)=>{
            Alert.alert(error.message)
        })
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Logout</Text>
            </View>
        )
    }
}