const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com/apis/fake/contact/agenda/lvvargas-aponte',
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getAgenda: async () => {
				const store = getStore(store);
				try {
					const resp = await fetch(store.url);
					if (!resp.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await resp.json();
					console.log(data);
					setStore({ contacts: data });
				} catch (error) {
					console.error(`There was a proble with the fetch operation: ${error}`);
				}
			}
		}
	};
};

export default getState;
