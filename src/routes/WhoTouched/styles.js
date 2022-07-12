import {StyleSheet} from 'react-native'
import Colors from '../../common/Colors'

export default StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.secondary,
        marginBottom: '40%'
    },
    playerButtonsContainer: {
        width: '80%',
    },
    guessContainer: {
        marginTop: 60,
        width: '80%',
    },
    subHeading: {
        fontSize: 24,
        marginBottom: 20,
        color: Colors.accent,
        marginHorizontal: 20,
    },
    timerContainer: {
        marginTop: 100,
        backgroundColor: Colors.secondary,
        borderRadius: 100,
        padding: 20,
    },
    timer: {
        color: Colors.primary,
        fontSize: 24,
    },
    row: {
        
    },
    button: {
        flex: 1,
        marginHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
    },
    
})