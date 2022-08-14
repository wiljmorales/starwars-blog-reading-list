import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Context } from "../store/appContext"

export const Card = ({item, resource}) =>{
  const {actions, store} = useContext(Context)
  const [ isFavotrite, setIsFavorite] = useState(false)
  useEffect(() =>{
    if (store.favorites.find(favorite => item.name == favorite.name)) {
        setIsFavorite(true)
    }
},[])
  return (
    <div className="mx-3">
    <div className="card border border-2" style={{width: "18rem"}}>
      <img src={`https://via.placeholder.com/150`} srcSet={`https://starwars-visualguide.com/assets/img/${resource}/${item.uid}.jpg`}className="card-img-top" alt={`photo of ${item.name}`} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="d-flex justify-content-between mt-3">
          <Link to={`/${resource}/${item.uid}`} className="btn btn-primary">Learn More</Link>
              {isFavotrite?
              (<button 
                type="button" 
                className="btn btn-ligth text-danger"
                onClick={() => {
                  actions.removeFavorite(item.name)
                  setIsFavorite(false)
                }}
              >
                <i className="fa-solid fa-heart"></i>
              </button>)
              :
              (<button 
                type="button" 
                className="btn btn-outline-danger"
                onClick={() => {
                  actions.addFavorite({name: item.name, link: `/${resource}/${item.uid}`})
                  setIsFavorite(true)
                }}
              >
                <i className="fa-regular fa-heart"></i>
              </button>)
              }
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