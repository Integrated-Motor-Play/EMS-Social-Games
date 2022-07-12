import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import commonStyles from '../../common/styles'
import styles from './styles'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'

export default class Scores extends Component {
    constructor(props) {
        super(props)

    }

    continue = () => {

        const newGuesser = (this.props.route.params.guesser + 1) % this.props.route.params.playerNames.length

        if (newGuesser === this.props.route.params.startGuesser) {
            this.props.navigation.replace('GameOver', {
                playerNames: this.props.route.params.playerNames,
                playerScores: this.props.route.params.playerScores,
            })
        }
        else {
            this.props.navigation.replace('Ready', {
                playerNames: this.props.route.params.playerNames,
                guesser: newGuesser,
                startGuesser: this.props.route.params.startGuesser,
                playerScores: this.props.route.params.playerScores,
            })
        }
    }

    renderScores = () => {
        return(
            <View style={[styles.scoreboard]}>
                {this.props.route.params.playerNames.map((value, index) => {
                    return(
                        <View key={index} style={[commonStyles.row]}>
                            <Text style={styles.label}>{value}</Text>
                            <Text style={styles.score}>{this.props.route.params.playerScores[index]}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }

    render() {
        return(
            <View style={[commonStyles.container]}>
                <Text style={styles.title}>Scores</Text>
                {this.renderScores()}
                <View style={[commonStyles.row, styles.row]}>
                    <SecondaryButton title={'Exit'} style={styles.button} titleStyle={styles.buttonText} onPress={() => {}} />
                    <PrimaryButton title={'Continue'} style={styles.button} titleStyle={styles.buttonText} onPress={this.continue} />
                </View>
            </View>
        )
    }
}