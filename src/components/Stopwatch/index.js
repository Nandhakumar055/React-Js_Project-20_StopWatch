import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    seconds: 0,
    minutes: 0,
  }

  componentWillUnmount() {
    this.clearIntervalMethod()
  }

  clearIntervalMethod = () => clearInterval(this.timeId)

  onClickStartButton = () => {
    this.timeId = setInterval(this.secondesTimeFormat, 1000)
  }

  secondesTimeFormat = () => {
    const {seconds} = this.state
    this.setState(prevState => ({seconds: prevState.seconds + 1}))

    if (seconds === 59) {
      this.setState({seconds: 0})
      this.setState(prevState => ({minutes: prevState.minutes + 1}))
    }
  }

  time = () => {
    const {seconds, minutes} = this.state
    const displaySeconds = seconds <= 9 ? `0${seconds}` : seconds
    const displayMinutes = minutes <= 9 ? `0${minutes}` : minutes

    return `${displayMinutes}:${displaySeconds}`
  }

  onClickStopButton = () => {
    this.clearIntervalMethod()
  }

  onClickResetButton = () => {
    this.clearIntervalMethod()
    this.setState({seconds: 0, minutes: 0})
  }

  render() {
    return (
      <div className="stop-watch-app-container">
        <div className="stop-watch-container">
          <h1 className="stop-watch-heading">Stopwatch</h1>
          <div className="timer-icon-items">
            <img
              className="timer-image"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-text"> Timer </p>
          </div>
          <h1 className="display-timer">{this.time()}</h1>
          <div className="buttons-container">
            <button
              className="button start-button"
              type="button"
              onClick={this.onClickStartButton}
            >
              Start
            </button>
            <button
              className="button stop-button"
              type="button"
              onClick={this.onClickStopButton}
            >
              Stop
            </button>
            <button
              className="button reset-button"
              type="button"
              onClick={this.onClickResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
