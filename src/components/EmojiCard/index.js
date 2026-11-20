import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmojiToStoreFunction} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const clickEmoji = () => {
    clickEmojiToStoreFunction(id)
  }
  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-card" />
      </button>
    </li>
  )
}

export default EmojiCard
