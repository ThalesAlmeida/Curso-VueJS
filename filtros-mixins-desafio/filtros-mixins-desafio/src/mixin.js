export default {
    filters:{
		replace(valor){
			const arr = valor.replace(/,?\s+/g, ", ")
			return arr
		},

		count(valor){
			const arr = valor.split('')
			return arr.length
		}
	},
}