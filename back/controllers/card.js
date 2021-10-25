const Card = require('../models/card')


module.exports.getCard = (req, res) =>{
    Card.find({})
        .then(card => res.send({data: card}))
        .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
}

module.exports.createCard = (req, res)=>{
    // const { id, data } = req.body
    // Card.create({ id, data })
    //     .then(card => res.send({ data: card }))
    //     .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
    req.body.map((el)=>{
       let id = el.id
        let data = el.data
        Card.create({id, data})
            .then(card=> res.send({data: card}))
            .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));

    })
}

module.exports.deleteCard = (req, res) =>{
    Card.deleteMany({})
        .then(()=>res.send({message: "Удаление выполнено успешно"}))
        .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));

}
