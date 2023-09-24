import './index.css'

const AppointmentItem = props => {
  const {list, addStar} = props
  const {id, Title, date, isStar} = list

  const onTap = () => {
    addStar(id)
  }

  const i = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list">
      <div className="bg7">
        <div className="bg8">
          <p className="h4">{Title}</p>
          <button
            className="btn3"
            type="button"
            data-testid="star"
            onClick={onTap}
          >
            <img src={i} alt="star" className="img2" />
          </button>
        </div>

        <p className="p2">Date: {date}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
