import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    totalScore: 0,
    clickedEmojisList: [],
    isGameInProgress: true,
  }

  finishGameAndSetTopScore = currentScore => {
    const {totalScore} = this.state

    if (currentScore > totalScore) {
      this.setState({totalScore: currentScore, isGameInProgress: false})
    }
  }

  clickEmoji = id => {
    const {clickedEmojisList} = this.state
    const clickedEmojisLength = clickedEmojisList.length
    const isEmojiPresent = clickedEmojisList.includes(id)

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else if (clickedEmojisLength === 11) {
      console.log('Clicked 12th emoji')
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        isGameInProgress: false,
      }))
    } else {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojicards-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    const {totalScore, clickedEmojisList} = this.state

    if (clickedEmojisList.length > totalScore) {
      const topScore = clickedEmojisList.length
      this.setState({
        totalScore: topScore,
      })
    } else {
      this.setState({totalScore})
    }
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    console.log('Entered render score card')
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    console.log(clickedEmojisList.length)

    const isWon = emojisList.length === clickedEmojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        resetGame={this.resetGame}
      />
    )
  }

  render() {
    console.log('Render called')
    const {totalScore, isGameInProgress, clickedEmojisList} = this.state
    console.log(`clickedEmojisList length: ${clickedEmojisList.length}`)

    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          totalScore={totalScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="emojigame-container">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
