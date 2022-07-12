import React, {Component} from 'react'
import {
    Text,
    TouchableOpacity,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import styles from './styles'
import Colors from '../../common/Colors'

export default class SecondaryButton extends Component {
    render() {
        const {style, titleStyle, title, onPress, iconName} = this.props

        return(
            <TouchableOpacity style={[styles.btnStyle, style]} onPress={onPress}>
                {title && <Text style={[titleStyle, styles.title]}>{title}</Text>}
                {iconName && <MaterialIcons name={iconName} color={Colors.secondary} size={30} />}
            </TouchableOpacity>
        )
    }
}