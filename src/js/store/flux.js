const API_URL = "https://www.swapi.tech/api/"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {
			getCharacters: async () => {
					try {
						const response = await fetch(
						`https://www.swapi.tech/api/people`
					)
					const body = await response.json()
					if (response.status !==200) {
						alert("no pudimos cargar los personajes")
						return
					}
					setStore({
						characters: body.results
					})
				}
				catch(error) {
					alert("fallamos ='(")
					console.log(error)
				} 
			}
		}
	};
};

export default getState;
