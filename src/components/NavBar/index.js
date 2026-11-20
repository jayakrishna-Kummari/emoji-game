import './index.css'
const NavBar = props => {
  const {topScore, score, isGameProgress} = props
  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="image"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameProgress && (
        <div className="score-container">
          <p className="score-item">Score: {score}</p>
          <p className="top-score-item">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
