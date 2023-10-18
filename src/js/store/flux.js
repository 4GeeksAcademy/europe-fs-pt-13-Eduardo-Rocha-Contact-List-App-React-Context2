const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com/apis/fake/contact',
			agenda: 'lvvargas-aponte',
			contacts: [],
			requestBody: {},
			showDelModal: false,
		},
		actions: {
			getAgenda: async () => {
				const store = getStore();
				try {
					const resp = await fetch(`${store.url}/agenda/${store.agenda}`);
					if (!resp.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await resp.json();
					//console.log(data);
					setStore({ contacts: [...data] });
				} catch (error) {
					console.error(`There was a proble with the fetch operation: ${error}`);
				}
			},
			handleInputChange: (e) => {
				const store = getStore();
				// console.log('handle input change funct start');
				// console.log('handle input change e and e.target.value', e, e.target.value);
				setStore({ requestBody: { ...store.requestBody, [e.target.id]: e.target.value } });
				// console.log('handle input change funct end requestbody', store.requestBody);
			},
			handleInputUpdate: (contactIndex) => {
				const store = getStore();
				const actions = getActions();
				const updatedContact = {};
				// console.log('input update func updateContact', updatedContact);
				const propertiesToUpdate = ['full_name', 'email', 'address', 'phone'];


				if (contactIndex) {
					// console.log('input update func contactIndex and updatedContact', contactIndex, updatedContact);
					propertiesToUpdate.forEach(property => {
						if (store.requestBody[property] !== undefined) {
							updatedContact[property] = store.requestBody[property];
						} else {
							updatedContact[property] = store.contacts[contactIndex][property];
						}
					});
					updatedContact.agenda_slug = store.agenda;
					setStore({ requestBody: updatedContact });
					// console.log('input update func updateContact', updatedContact);
					actions.updateContact(updatedContact, store.contacts[contactIndex].id);
				} else {
					propertiesToUpdate.forEach(property => {
						updatedContact[property] = store.requestBody[property];
					})
					updatedContact.agenda_slug = store.agenda;
					setStore({ requestBody: updatedContact });
					// console.log('input update func addContact else updateContact and requestBody', updatedContact, store.requestBody);
					actions.addContact(updatedContact);
				}
			},
			handleSave: (id, navigate) => {
				//console.log('handleSave funct');
				const actions = getActions();
				if (id) {
					actions.handleInputUpdate(id);
				} else {
					actions.handleInputUpdate();
				}
				navigate('/');
			},
			addContact: async (requestBody) => {
				const store = getStore();
				const actions = getActions();
				requestBody.agenda_slug = store.agenda;
				//console.log('addContact requestBody', store.requestBody);
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
					actions.getAgenda();
				} catch (error) {
					console.error(`There was a problem with the fetch operation: ${error}`);
				}
			},
			updateContact: async (requestBody, id) => {
				const store = getStore();
				const actions = getActions();
				//console.log('updateContact funct start', requestBody);
				try {
					const resp = await fetch((`${store.url}/${id}`), {
						method: 'PUT',
						body: JSON.stringify(requestBody),
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (!resp.ok) {
						throw new Error('Network response was not ok');
					}
					actions.getAgenda();

				} catch (error) {
					console.error(`There was a problem with the fetch operation: ${error}`);
				}
			},
			showDelModal: () => {
				setStore({ showDelModal: true });
				//console.log('end showDelModal', store.showDelModal);

			},
			hideDelModal: () => {
				setStore({ showDelModal: false })
			},
			confirmDelete: (contactId) => {
				const actions = getActions();
				//console.log('confirm delete', contactId);
				if (contactId) {
					actions.deleteContact(contactId);
					setStore({ showDelModal: false });
				}
			},
			deleteContact: async (id) => {
				const store = getStore();
				const actions = getActions();
				if (id) {
					try {
						const resp = await fetch((`${store.url}/${id}`), {
							method: 'DELETE',
							headers: {
								'Content-Type': 'application/json'
							}
						});
						if (!resp.ok) {
							throw new Error('Network response was not ok');
						}
						actions.getAgenda();
					} catch (error) {
						console.error(`There was a problem with the fetch operation: ${error}`);
					}
				}
			}
		}
	};
};

export default getState;
