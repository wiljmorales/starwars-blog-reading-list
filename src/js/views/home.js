import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context)
	return (
		<div className="text-center mt-5">
			<div>
				{store.characters.map(
					(character) => {
						return (
						<div key={character.uid}>
							{character.name}
						</div>
						)
					}
				)}
			</div>
		</div>
	)
};
