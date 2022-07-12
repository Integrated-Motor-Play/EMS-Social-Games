import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import commonStyles from '../../common/styles'
import styles from './styles'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'

export default class Ready extends Component {

    exitButton = () => {
        this.props.navigation.goBack()
    }

    startButton = () => {

        const passObject = {
            playerNames: this.props.route.params.playerNames,
            guesser: this.props.route.params.guesser,
            startGuesser: this.props.route.params.startGuesser,
        }

        if ('playerScores' in this.props.route.params) {
            passObject.playerScores = this.props.route.params.playerScores
        }

        this.props.navigation.replace('WhoTouched', passObject)
    }

    render() {
        const {playerNames, guesser} = this.props.route.params

        return(
            <View style={[commonStyles.container]}>
                <Text style={[styles.title]}>Place Electrodes</Text>
                <Text style={styles.message}><Text style={styles.guesserName}>{playerNames[guesser]}</Text> is the guesser{'\n\n'}Please place the EMS Electrodes accordingly and click 'Start' to begin the game</Text>
                <View style={[commonStyles.row, styles.row]}>
                    <SecondaryButton title={'Exit'} style={styles.button} titleStyle={styles.buttonText} onPress={this.exitButton} />
                    <PrimaryButton title={'Start'} style={styles.button} titleStyle={styles.buttonText} onPress={this.startButton} />
                </View>
            </View>
        )
    }
}