import axios from "axios";

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		const key = "50086c8429d06c41f07d3f2eff00348e";
		// const proxy = "https://cors-anywhere.herokuapp.com/";
		const proxy = "http://allow-any-origin.appspot.com/";
		try {
			const res = await axios(
				`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${
					this.query
				}`
			);
			this.result = res.data.recipes;
			// console.log(this.result);
		} catch (error) {
			alert(error);
		}
	}
}
