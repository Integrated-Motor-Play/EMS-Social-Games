import { cloneElement } from 'react'
import {StyleSheet} from 'react-native'
import Colors from '../../common/Colors'

export default StyleSheet.create({
    titleContainer: {
        marginBottom: '50%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.secondary,
    },
    formContainer: {
        width: '80%',
    },
    label: {
        fontSize: 18,
        fontWeight: '500'
    },
    numPlayersRow: {
        marginBottom: '20%',
    },
    playerFormContainer: {
        
    },
    playerNameInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.secondary,
        paddingVertical: 2,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    row: {
        marginBottom: 20,
    },
    iconButton: {

    },
    buttonRow: {
        marginTop: '10%',
        width: '80%',
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
    }
})