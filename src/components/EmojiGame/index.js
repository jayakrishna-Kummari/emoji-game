/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickEmojiList: [], topScore: 0, isGameProgress: true}

  finishGame = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameProgress: false})
  }

  clickEmojiToStoreFunction = id => {
    const {emojisList} = this.props
    const {clickEmojiList} = this.state
    const isEmojiIncludes = clickEmojiList.includes(id)
    const clickEmojiLength = clickEmojiList.length

    if (isEmojiIncludes) {
      this.finishGame(clickEmojiLength)
    } else {
      if (emojisList.length - 1 === clickEmojiLength) {
        this.finishGame(emojisList.length)
      }

      this.setState(prevState => ({
        clickEmojiList: [...prevState.clickEmojiList, id],
      }))
    }
  }
  // Emoji Shuffled fubnction to Click the emoji----11
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderImagesScorelist = () => {
    const shuffledList = this.shuffledEmojisList()
    return (
      <ul className="unorder-list">
        {shuffledList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            clickEmojiToStoreFunction={this.clickEmojiToStoreFunction}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickEmojiList: [], isGameProgress: true})
  }

  getWinAndLoseGame = () => {
    const {clickEmojiList} = this.state
    const {emojisList} = this.props
    const isWon = clickEmojiList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        clickEmojiList={clickEmojiList}
        onClickPlayAgain={this.resetGame}
        score={clickEmojiList.length}
      />
    )
  }

  render() {
    const {isGameProgress, topScore, clickEmojiList} = this.state
    return (
      <div className="app-container">
        <NavBar
          topScore={topScore}
          score={clickEmojiList.length}
          isGameProgress={isGameProgress}
        />
        {isGameProgress
          ? this.renderImagesScorelist()
          : this.getWinAndLoseGame()}
      </div>
    )
  }
}

export default EmojiGame
