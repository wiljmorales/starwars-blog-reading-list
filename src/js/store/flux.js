const API_URL = "https://www.swapi.tech/api/"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {
			getResourceList: async (resource) => {
					try {
						const response = await fetch(
						`${API_URL}${resource}`
					)
					const body = await response.json()
					if (response.status !==200) {
						alert(`no pudimos cargar los ${resource}`)
						return
					}
					if (resource === 'people') {
						setStore({
							characters: body.results
						})
					}
					if (resource === 'planets') {
						setStore({
							planets: body.results
						})
					}
					if (resource === 'vehicles') {
						setStore({
							vehicles: body.results
						})
					}
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
