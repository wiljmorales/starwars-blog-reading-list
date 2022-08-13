import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const Card = ({item, resource}) =>{
  return (
    <div className="mx-3">
    <div className="card border border-2" style={{width: "18rem"}}>
      <img src={`https://via.placeholder.com/150`} srcSet={`https://starwars-visualguide.com/assets/img/${resource}/${item.uid}.jpg`}className="card-img-top" alt={`photo of ${item.name}`} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="d-flex justify-content-between mt-3">
          <Link to={`/single/${item.id}`} className="btn btn-primary">Learn More</Link>
          <button type="button" class="btn btn-outline-danger"><i class="fa-regular fa-heart"></i></button>
        </div>
      </div>
    </div>
    </div>
  )
}

Card.prototype = {
  item: PropTypes.object,
  resource: PropTypes.string
}