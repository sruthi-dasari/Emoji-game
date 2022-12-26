import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import {PassThrough} from 'stream'

class EmojiGame extends Component {
  state = {
    score: 0,
    totalScore: 0,
    previoslyClickedList: [],
    gameEnd: false,
    shuffledEmojisList: [],
  }

  shuffleEmojis = () => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    this.setState({shuffledEmojisList})
  }

  resetScore = () => {
    this.setState({score: 0})
  }

  updateScore = clickedId => {
    const {previoslyClickedList} = this.state

    if (previoslyClickedList.length() === 0) {
      this.setState(prevState => ({
        previoslyClickedList: [...prevState.previoslyClickedList, clickedId],
      }))
    }

    const isEmojiRepeated = previoslyClickedList.some(id => clickedId === id)

    if (isEmojiRepeated) {
      const {score, totalScore, gameEnd} = this.state

      if (score > totalScore) {
        this.setState({totalScore: score})
      }

      this.setState({gameEnd: true})
    } else {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState(prevState => ({
        previoslyClickedList: [...prevState.previoslyClickedList, clickedId],
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, totalScore, gameEnd, shuffledEmojisList} = this.state

    let authButton

    if (score === 12) {
      authButton = <WinOrLoseCard score={score} resetScore={this.resetScore} />
    } else if (gameEnd === true) {
      authButton = <WinOrLoseCard score={score} resetScore={this.resetScore} />
    }

    return (
      <div className="app-container">
        <NavBar score={score} totalScore={totalScore} />
        <div className="emojigame-container">
          {authButton}
          <ul className="emojicards-container">
            {shuffledEmojisList.map(eachEmoji => (
              <EmojiCard
                emojiDetails={eachEmoji}
                key={eachEmoji.id}
                updateScore={this.updateScore}
                shuffleEmojis={this.shuffleEmojis}
              />
            ))}
          </ul>
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
