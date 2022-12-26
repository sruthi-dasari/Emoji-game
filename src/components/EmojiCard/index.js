import './index.css'

const EmojiCard = props => {
  const {emojiDetails, updateScore, shuffleEmojis} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmoji = () => {
    updateScore(id)
    shuffleEmojis()
  }

  return (
    <li className="list-item-container">
      <button className="emoji-btn" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
