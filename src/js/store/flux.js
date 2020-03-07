import { get } from "http";

const getState = ({ getStore, setStore }) => {
	return {
		actions: {
			loadContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/steph_agenda", {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ contacts: data });
					});
			}
		},
		store: {
			contacts: [{}],
			stephsContacts: [
				{
					full_name: "Brad Gibson",
					email: "brad.gibson@example.com",
					phone: "011-962-7516",
					address: "9278 new road, kilcoole waterford 93027",
					image: "https://randomuser.me/api/portraits/men/66.jpg"
				},
				{
					full_name: "Nathan Powell",
					email: "nathan.powell@example.com",
					phone: "(608)-251-2480",
					address: "8210 Locust Rd",
					image: "https://randomuser.me/api/portraits/men/97.jpg"
				},
				{
					full_name: "Levi Vasquez",
					email: "levi.vasquez@example.com",
					phone: "(634)-351-3249",
					address: "909 Northaven Rd",
					image: "https://randomuser.me/api/portraits/men/13.jpg"
				},
				{
					full_name: "Tina Gilbert",
					email: "tina.gilbert@example.com",
					phone: "(194)-562-9993",
					address: "744 Spring St",
					image: "https://randomuser.me/api/portraits/women/43.jpg"
				},
				{
					full_name: "Kristen Harris",
					email: "kristen.harris@example.com",
					phone: "(655)-763-8404",
					address: "595 Depaul Dr",
					image: "https://randomuser.me/api/portraits/women/67.jpg"
				}
			]
		}
	};
};

export default getState;
