import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import Navbar from '../NavBar'

class EmojiGame extends Component {
  state = {
    score: 0,
    totalScore: 0,
  }

  render() {
    const {emojisList} = this.props
    const {score, totalScore} = this.state
    return (
      <div className="app-container">
        <NavBar score={score} totalScore={totalScore} />
        <div className="emojigame-container">
          <ul className="emojicards-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard emojiDetails={eachEmoji} key={eachEmoji.id} />
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
