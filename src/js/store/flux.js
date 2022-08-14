import { element } from "prop-types";

const API_URL = "https://www.swapi.tech/api/"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			singleCharacter: {},
			singlePlanet: {},
			singleVehicle: {},
			favorites: [],
		},
		actions: {
			updateResourceList: async (resource, list) => {
				const actions = getActions()
				const resourceList = await actions.getResources(resource)
				// for(element of resourceList) {
				// 	const details = await getResources(`${resource}/${element.uid}`, true)
				// 	element.details = details
				// }
				setStore({
					[list]: resourceList
				})
			},
			updateAllLists: async () =>{
				const actions = getActions()
				await actions.updateResourceList('people', 'characters')
				await actions.updateResourceList('planets', 'planets')
				await actions.updateResourceList('vehicles', 'vehicles')
			},

			getResources: async  (resource, detalis = false) => {
				try {
					const response = await fetch(
					`${API_URL}${resource}`
				)
				const body = await response.json()
				if (response.status !==200) {
					alert(`no pudimos cargar los ${resource}`)
					return
				}	
					if (detalis) {
						return body.result
					}
					return body.results
				}
				catch(error) {
					alert("fallamos ='(")
					console.log(error)
				} 
			},
			getCharacter: async (id) => {
				const actions = getActions()
				const character = await actions.getResources(`people/${id}`, true)
				setStore({
					singleCharacter: {
						...character.properties,
						uid: character.uid,
						description: character.description
					}
				})
			},
			getPlanet: async (id) => {
				const actions = getActions()
				const planet = await actions.getResources(`planets/${id}`, true)
				setStore({
					singlePlanet: {
						...planet.properties,
						uid: planet.uid,
						description: planet.description
					}
				})
			},
			getVehicle: async (id) => {
				const actions = getActions()
				const vehicle = await actions.getResources(`vehicles/${id}`, true)
				setStore({
					singleVehicle: {
						...vehicle.properties,
						uid: vehicle.uid,
						description: vehicle.description
					}
				})
			},
			addFavorite: (favorite) => {
				const store = getStore()
				const newFavorites = [...store.favorites, favorite]
				setStore({
					favorites: newFavorites
				})
			},
			removeFavorite: (favoriteName) => {
				const store = getStore()
				const newFavorites = store.favorites.filter(favorite => favorite.name !== favoriteName)
				setStore({
					favorites: newFavorites
				})
			}
		}
	};
};



export default getState;
