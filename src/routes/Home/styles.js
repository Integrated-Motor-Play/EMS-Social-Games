import {StyleSheet} from 'react-native'
import Colors from '../../common/Colors'

export default StyleSheet.create({
    container: {
        
    },
    titleContainer: {
        marginBottom: '30%',
        marginHorizontal: '20%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.secondary,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: '50%',
    },
    button: {
        paddingVertical: 10,
        width: 200,
        marginVertical: 20,
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 18,
    },
})