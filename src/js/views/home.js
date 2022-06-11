import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context)
	return (
		<div className="text-center mt-5">
			<div className="d-flex overflow-auto container-fluid mb-5">
				{store.characters.map(
					(character) => {
						return (
							<div key={character.uid}>
								<div >
									{character.name}
								</div>
								<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}/>
								{/* <img src={"https://starwars-visualguide.com/assets/img/characters/"+character.uid+".jpg"}/> */}
							</div>
						)
					}
				)}
			</div>
				<div className="d-flex overflow-auto container-fluid mb-5">
					{store.planets.map(
						planet => {
							return (
								<Card
									key={planet.uid}
									item={planet}
									resource={"planets"}
								/>
							)
						}
					)}
				</div>
		</div>
	)
};
