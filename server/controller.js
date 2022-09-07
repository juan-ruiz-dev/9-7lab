let house = require('./db.json')
let globalID = 4;
module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(house)
    },
    deleteHouse: (req, res) => {
        let index = house.findIndex(elem => elem.id === +req.params.id)
        house.splice(index, 1)
        res.status(200).send(house)
}, 
    createHouse: (req, res) => {
        const {address, rating, imageURL} = req.body
        let newHouse = {
            address,
            price: +rating,
            imageURL,
            id: globalID
        }
        house.push(newHouse)
        globalID++
        res.status(200).send(house)
    },

        updateHouse: (req, res) => {

        const {type} = req.body;
        let index = house.findIndex(elem => elem.id === +req.params.id)
        if(type === 'minus'){
            house[index].price -= 10000
            res.status(200).send(house)
        }else if (type === 'plus'){
            house[index].price += 10000
            res.status(200).send(house)
        } else {
            res.status(400).send('invalid price')
        }
    }

}

