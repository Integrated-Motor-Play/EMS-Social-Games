import {StyleSheet} from 'react-native'
import Colors from '../../common/Colors'

export default StyleSheet.create({
    title: {
        marginBottom: '40%',
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.secondary,
    },
    guesserName: {
        fontWeight: 'bold',
        color: Colors.secondary,
    },
    message: {
        fontSize: 20,
        color: Colors.accent,
        textAlign: 'center',
        marginHorizontal: '10%',
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