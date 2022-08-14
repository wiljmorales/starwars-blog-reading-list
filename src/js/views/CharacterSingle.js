import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterSingle = () => {
	const { actions, store } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getCharacter(params.theid)
	},[params.theid])

  return (
    <div className="container">
			<div className="card mb-3 col-10 justify-content-center">
  				<div className="row g-0">
    				<div className="col-md-4">
      					<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    				</div>
    				<div className="col-md-8">
      					<div className="card-body">
        					<h1 className="card-title" style={{margin: "5px", borderBottom: "4px solid #800000"}}>{store.singleCharacter.name}</h1>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Birth Year:`} <span className="text-dark">{`${store.singleCharacter.birth_year}`}</span></p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Gender:`} <span className="text-dark">{`${store.singleCharacter.gender}`}</span>    </p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Height: `} <span className="text-dark">{`${store.singleCharacter.height}`}</span>    </p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Mass: `} <span className="text-dark"> {`${store.singleCharacter.mass}`}</span></p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Eye Color: `} <span className="text-dark">{`${store.singleCharacter.eye_color}`}</span></p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Hair Color: `} <span className="text-dark">{`${store.singleCharacter.hair_color}`}</span> </p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Skin Color: `} <span className="text-dark">{`${store.singleCharacter.skin_color}`}</span> </p>
      					</div>
    				</div>
  				</div>
			</div>

			<Link to="/">
				<span className="btn btn-dark btn-lg text-danger" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
  )
}