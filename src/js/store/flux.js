const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com/apis/fake/contact',
			agenda: 'agenda/lvvargas-aponte',
			contacts: [],
			inputValue: '',
		},
		actions: {
			// Use getActions to call a function within a fuction
			getAgenda: async () => {
				const store = getStore();
				try {
					const resp = await fetch(`${store.url}/${store.agenda}`);
					if (!resp.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await resp.json();
					//console.log(data);
					setStore({ contacts: data });
				} catch (error) {
					console.error(`There was a proble with the fetch operation: ${error}`);
				}
			},
			addContact: async (requestBody) => {
				const store = getStore();
				try {
					const resp = await fetch((`${store.url}`), {
						method: 'POST',
						body: JSON.stringify(requestBody),
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (!resp.ok) {
						throw new Error('Network response was not ok');
					}
				} catch (error) {
					console.error(`There was a problem with the fetch operation: ${error}`);
				}
			},
			updateContact: async (requestBody, id) => {
				const store = getStore();
				try {
					const resp = await fetch((`${store.url}/${store.agenda_slug}/${id}`), {
						method: 'PUT',
						body: JSON.stringify(requestBody),
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (!resp.ok) {
						throw new Error('Network response was not ok');
					}
				} catch (error) {
					console.error(`There was a problem with the fetch operation: ${error}`);
				}
			},
			deleteContact: async (id) => {
				const store = getStore();
				try {
					const resp = await fetch((`${store.url}/${store.agenda_slug}/${id}`), {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (!resp.ok) {
						throw new Error('Network response was not ok');
					}
				} catch (error) {
					console.error(`There was a problem with the fetch operation: ${error}`);
				}
			},
			handleInputChange: (e) => {
				console.log('handle input change funct start');
				const { name, value } = e.target;
				setStore((prevState) => ({
					...prevState,
					requestBody: {
						...prevState.requestBody,
						[name]: value
					}
				}));
			},
			handleInputUpdate: (contactIndex) => {
				const store = getStore();
				const actions = getActions();
				const updatedContact = { ...store.requestBody };
				if (contactIndex >= 0) {
					actions.updateContact(updatedContact, store.contacts.id);
				} else {
					actions.addContact(updatedContact);
				}
			},
			handleSave: (id, contactIndex, history) => {
				console.log('handleSave funct');
				const actions = getActions();
				if (id) {
					actions.handleInputUpdate(contactIndex);
				} else {
					actions.addContact();
				}
				history.push('/');
			}
		}
	};
};

export default getState;
