import './index.css'

const WinOrLoseCard = props => {
  const {score, resetScore} = props

  let authButton

  const onClickPlayAgain = () => {
    resetScore()
  }

  if (score === 12) {
    authButton = (
      <div className="Win-card-container">
        <img
          className="win-lose-img"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win img"
        />
        <h1 className="win-lose-text">You Won</h1>
        <p className="score-title-text">Best Score</p>
        <h1 className="score-text">{score}/12</h1>
        <button
          className="play-again-btn"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
    )
  } else {
    authButton = (
      <div className="Lose-card-container">
        <img
          className="win-lose-img"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="lose img"
        />
        <h1 className="win-lose-text">You Lose</h1>
        <p className="score-title-text">Score</p>
        <h1 className="score-text">{score}/12</h1>
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

  return <div className="WinOrLoseCard-container">{authButton}</div>
}

export default WinOrLoseCard
