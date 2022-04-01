import React from 'react'
import "./ContentCard.css"
import Button from "react-bootstrap/Button"

function ContentCard(props) {

  const isBlue = props.isBlue ? "content-card--blue" : "";
  return (
    <div className={`content-card ${isBlue}`}>
      <h2 className="content-card__header"> Header</h2>
      <h2 className="content-card__header content-card__header--green">Green Header</h2>
      <div className="content-card__button-container">
        <Button variant="success">Button</Button>
      </div>
    </div>
  )
}

export default ContentCard