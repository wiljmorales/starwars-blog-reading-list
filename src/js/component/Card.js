import React from "react"
import PropTypes from "prop-types"

export const Card = ({item, resource}) =>{
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={`https://starwars-visualguide.com/assets/img/${resource}/${item.uid}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

Card.prototype = {
  item: PropTypes.object,
  resource: PropTypes.string
}