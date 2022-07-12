import {StyleSheet} from 'react-native'
import Colors from '../../common/Colors'

export default StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.secondary,
        marginBottom: '40%'
    },
    scoreboard: {
        width: '80%',
    },
    label: {
        fontSize: 24,
        color: Colors.secondary,
        fontWeight: '500'
    },
    score: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent,
    },
    row: {
        marginTop: '40%',
        width: '80%',
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
    },
})