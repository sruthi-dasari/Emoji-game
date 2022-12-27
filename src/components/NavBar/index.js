import './index.css'

const NavBar = props => {
  const {currentScore, totalScore, isGameInProgress} = props

  return (
    <div className="navbar-container">
      <div className="branding-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="game-logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="score-title">Score: {currentScore}</p>
          <p className="totalScore-title">Top Score: {totalScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
