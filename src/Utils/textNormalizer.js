export default str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z0-9]+/ig, "+").toLowerCase()
