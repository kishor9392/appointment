import {Component} from 'react'

import {v4} from 'uuid'

import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    Title: '',
    date: '',
    items: [],
  }

  onTitle = event => {
    this.setState({Title: event.target.value})
  }

  onDate = event => {
    this.setState({date: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {Title, date} = this.state
    const d = format(new Date(date), 'dd MMMM yyyy,EEEE')
    const newItem = {
      id: v4(),
      Title,
      date: d,
      isStar: false,
    }
    this.setState(prevState => ({
      items: [...prevState.items, newItem],
      Title: '',
      date: '',
    }))
  }

  addStar = id => {
    this.setState(prevState => ({
      items: prevState.items.map(each => {
        if (id === each.id) {
          return {...each, isStar: !each.isStar}
        }
        return each
      }),
    }))
  }

  onPress = () => {
    this.setState(prevState => ({
      items: prevState.items.filter(each => each.isStar === true),
    }))
  }

  render() {
    const {Title, date, items} = this.state

    return (
      <div className="bg">
        <div className="bg2">
          <div className="bg3">
            <h1 className="h1">Add Appointment</h1>

            <div className="bg4">
              <form className="form" onSubmit={this.onAdd}>
                <label htmlFor="T" className="p">
                  Title
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Title"
                  onChange={this.onTitle}
                  value={Title}
                  id="T"
                />
                <label htmlFor="date" className="p">
                  Date
                </label>
                <input
                  type="date"
                  className="input"
                  placeholder="dd/mm/yyyy"
                  onChange={this.onDate}
                  id="date"
                  value={date}
                />

                <button type="submit" className="btn">
                  Add
                </button>
              </form>

              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="img1"
              />
            </div>
            <hr className="line" />

            <div className="bg5">
              <h1 className="h2">Appointments</h1>

              <button type="button" className="btn2" onClick={this.onPress}>
                Starred
              </button>
            </div>

            <ul className="bg6">
              {items.map(each => (
                <AppointmentItem
                  key={each.id}
                  list={each}
                  addStar={this.addStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
