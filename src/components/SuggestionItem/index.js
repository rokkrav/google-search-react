import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, updateSearchInput} = props
  const {suggestion} = suggestionsList

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
