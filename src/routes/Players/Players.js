import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import commonStyles from '../../common/styles'
import styles from './styles'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'
// import TextField from '../../components/TextField/TextField'

export default class Players extends Component {

    constructor(props) {
        super(props)

        this.state = {
            numPlayers: 3,
            playerNames: [],
        }
    }

    decrementPlayers = () => {
        this.setState({
            numPlayers: this.state.numPlayers > 3 ? this.state.numPlayers - 1 : this.state.numPlayers
        })
    }

    incrementPlayers = () => {
        this.setState({
            numPlayers: this.state.numPlayers < 5 ? this.state.numPlayers + 1 : this.state.numPlayers
        })
    }

    backButton = () => {
        this.props.navigation.goBack()
    }

    nextButton = () => {
        const guesser = Math.floor(Math.random() * this.state.numPlayers)
        console.log(this.state.playerNames[guesser])
        this.props.navigation.navigate('Ready', {
            playerNames: this.state.playerNames,
            guesser: guesser,
            startGuesser: guesser,
        })
    }

    renderPlayerForm = () => {
        const players = []
        for (let i = 0; i < this.state.numPlayers; i++) {
            players.push(i)
        }
        return(
            <View style={styles.playerFormContainer}>
                {players.map((value, index) => {
                    return(
                        <View key={index} style={[commonStyles.row, styles.row]}>
                            <Text style={styles.label}>Player-{value + 1} Name</Text>
                            <TextInput
                                style={styles.playerNameInput}
                                placeholder={'Player Name'}
                                onChangeText={(text) => {
                                    this.state.playerNames[index] = text
                                }}
                            />
                        </View>
                    )
                })}
            </View>
        )
    }

    render() {
        return(
            <View style={commonStyles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Players</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={[commonStyles.row, styles.row, styles.numPlayersRow]}>
                        <Text style={styles.label}>Number of Players</Text>
                        <PrimaryButton iconName={'remove'} style={styles.iconButton} onPress={this.decrementPlayers} />
                        <Text style={styles.label}>{this.state.numPlayers}</Text>
                        <PrimaryButton iconName={'add'} style={styles.iconButton} onPress={this.incrementPlayers} />
                    </View>
                    {this.renderPlayerForm()}
                </View>
                <View style={[commonStyles.row, styles.buttonRow]}>
                    <SecondaryButton title={'Back'} style={styles.button} titleStyle={styles.buttonText} onPress={this.backButton} />
                    <PrimaryButton title={'Next'} style={styles.button} titleStyle={styles.buttonText} onPress={this.nextButton} />
                </View>
            </View>
        )
    }
}