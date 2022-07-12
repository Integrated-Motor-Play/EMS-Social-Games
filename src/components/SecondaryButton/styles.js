import {StyleSheet} from 'react-native'
import Colors from '../../common/Colors'

export default StyleSheet.create({
    container: {
        width: '100%',
    },
    btnStyle: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        color: Colors.secondary,
    }
})