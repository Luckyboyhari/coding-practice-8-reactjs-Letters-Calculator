// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg-con">
        <div className="bg-con1">
          <div className="card">
            <h1 className="heading">
              Calculate the <br /> Letters you <br /> enter
            </h1>
            <div className="input-con">
              <label htmlFor="para" className="paraa">
                Enter the phrase
              </label>
              <input
                id="para"
                type="text"
                className="input"
                placeholder="Calculator"
                onChange={this.onChangeInputPhrase}
                value={inputPhrase}
              />
            </div>
            <div className="button-container">
              <p className="button">No.of letters: {inputPhrase.length}</p>
            </div>
          </div>

          <div className="img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
