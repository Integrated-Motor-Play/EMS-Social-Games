import React, {Component} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//screens
import Home from '../routes/Home/Home'
import Players from '../routes/Players/Players'
import Ready from '../routes/Ready/Ready'
import WhoTouched from '../routes/WhoTouched/WhoTouched'
import Scores from '../routes/Scores/Scores'
import GameOver from '../routes/GameOver/GameOver'

const Stack = createNativeStackNavigator()

export default class Navigator extends Component {
    render() {
        return(
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Players' component={Players} />
                <Stack.Screen name='Ready' component={Ready} />
                <Stack.Screen name='WhoTouched' component={WhoTouched} />
                <Stack.Screen name='Scores' component={Scores} />
                <Stack.Screen name='GameOver' component={GameOver} />
            </Stack.Navigator>
        )
    }
}