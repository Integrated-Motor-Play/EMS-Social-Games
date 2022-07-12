import React, {Component} from 'react'
import { 
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import commonStyles from '../../common/styles'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'
import styles from './styles'

export default class Home extends Component {

    whoTouchedButton = () => {
        this.props.navigation.navigate('Players', {game: 'whotouched'})
    }

    render() {
        return(
            <View style={[commonStyles.container, styles.container]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>EMS Social Games</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title={'Who Touched'} style={styles.button} titleStyle={styles.buttonText} onPress={this.whoTouchedButton} />
                    <PrimaryButton title={'Who\'s my Match'} style={styles.button} titleStyle={styles.buttonText} onPress={() => {}} />
                    <SecondaryButton title={'Exit'} style={styles.button} titleStyle={styles.buttonText} onPress={() => {}} />
                </View>
            </View>
        )
    }
}