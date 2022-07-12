import {StyleSheet} from 'react-native'
import Colors from '../../common/Colors'

export default StyleSheet.create({
    container: {
        width: '100%',
    },
    btnStyle: {
        backgroundColor: Colors.secondary,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    title: {
        color: Colors.primary,
    }
})