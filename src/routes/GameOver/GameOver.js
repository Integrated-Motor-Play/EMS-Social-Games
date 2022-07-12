import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import commonStyles from '../../common/styles'
import styles from './styles'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

export default class GameOver extends Component {
    constructor(props) {
        super(props)
        const {playerNames, playerScores} = this.props.route.params
        const winners = []
        const maxScore = Math.max(...playerScores)
        for (let i = 0; i < playerScores.length; i++) {
            if (playerScores[i] === maxScore) {
                winners.push(playerNames[i])
            }
        }

        this.state = {
            winners: winners
        }
    }

    menuButton = () => {
        this.props.navigation.replace('Home')
    }

    getWinners = () => {
        winnersString = ''
        for (let i in this.state.winners) {
            winnersString += this.state.winners[i] + ", "
        }
        return winnersString.slice(0, winnersString.lastIndexOf(','))
    }

    render() {
        return(
            <View style={[commonStyles.container]}>
                <Text style={styles.title}>{this.getWinners()} win{this.state.winners.length === 1 ? 's' : null}!</Text>
                <PrimaryButton title={'Menu'} style={styles.button} titleStyle={styles.buttonText} onPress={this.menuButton} />
            </View>
        )
    }
}