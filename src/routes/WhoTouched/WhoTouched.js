import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import commonStyles from '../../common/styles'
import styles from './styles'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'

export default class WhoTouched extends Component {
    constructor(props) {
        super(props)

        let playerScores = []
        if ('playerScores' in this.props.route.params) {
            playerScores = this.props.route.params.playerScores
        }
        else {
            for (let i in this.props.route.params.playerNames) {
                playerScores.push(0)
            }
        }

        this.state = {
            playerNames: this.props.route.params.playerNames,
            guesser: this.props.route.params.guesser,
            timeRemaining: Math.floor(15 * 60 / this.props.route.params.playerNames.length),
            playerScores: playerScores,
            selectedPlayer: null,
            timer: null,
        }
    }

    componentDidMount() {
        this.startTimer()
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    startTimer = () => {
        const timer = setInterval(() => {
            this.setState({
                timeRemaining: this.state.timeRemaining - 1
            }, () => {
                if (this.state.timeRemaining === 0) {
                    this.props.navigation.replace('Scores', {
                        playerNames: this.state.playerNames,
                        guesser: this.state.guesser,
                        startGuesser: this.props.route.params.startGuesser,
                        playerScores: this.state.playerScores,
                    })
                }
            })
        }, 1000)

        this.setState({
            timer: timer,
        })
    }

    correctGuess = () => {
        this.state.playerScores[this.state.guesser]++
    }

    incorrectGuess = () => {
        for (let i = 0; i < this.state.playerNames.length; i++) {
            if (i !== this.state.guesser) {
                this.state.playerScores[i]++
                if (i === this.state.selectedPlayer) {
                    this.state.playerScores[i]++
                }
            }
        }
    }

    renderPlayerButtons = () => {
        return(
            <View style={styles.playerButtonsContainer}>
                <Text style={styles.subHeading}>Who Touched?</Text>
                <View style={[commonStyles.row, styles.row]}>
                    {this.state.playerNames.map((value, index) => {
                        if (index !== this.state.guesser) {
                            return(
                                <PrimaryButton key={index} title={value} style={[styles.button]} titleStyle={styles.buttonText} onPress={() => this.setState({selectedPlayer: index})} />
                            )
                        }
                    })}
                </View>
            </View>
        )
    }

    render() {
        return(
            <View style={[commonStyles.container]}>
                <Text style={styles.title}>{this.state.playerNames[this.state.guesser]}</Text>
                {this.renderPlayerButtons()}
                <View style={[styles.guessContainer]}>
                    <Text style={[styles.subHeading]}>Guess</Text>
                    <View style={[commonStyles.row, styles.row]}>
                        <PrimaryButton iconName={'done'} style={styles.button} onPress={this.correctGuess} />
                        <SecondaryButton iconName={'close'} style={styles.button} onPress={this.incorrectGuess} />
                    </View>
                </View>
                <View style={styles.timerContainer}>
                    <Text style={styles.timer}>{Math.floor(this.state.timeRemaining / 60)}:{("0" + (this.state.timeRemaining % 60)).slice(-2)}</Text>
                </View>
            </View>
        )
    }
}