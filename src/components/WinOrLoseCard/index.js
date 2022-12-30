import './index.css'

const WinOrLoseCard = props => {
  const {score, resetGame, isWon} = props

  const onClickPlayAgain = () => {
    resetGame(score)
  }

  const WIN_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const imgUrl = isWon ? WIN_IMG : LOSE_IMG
  const winLoseText = isWon ? 'You Won' : 'You Lose'
  const scoreTitleText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="Win-lose-card-container">
      <img className="win-lose-img" src={imgUrl} alt="win or lose" />
      <h1 className="win-lose-text">{winLoseText}</h1>
      <p className="score-title-text">{scoreTitleText}</p>
      <p className="score-text">{score}/12</p>
      <button
        className="play-again-btn"
        type="button"
        onClick={onClickPlayAgain}
      >
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
