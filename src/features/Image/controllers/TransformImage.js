const { validate } = require('jsonschema');

// const objectSchema = require('../validators/objectSchema.json');

function TransformImage (req, res){

    console.log('hola');
    return res.status(201).send('todo ok');

}

module.exports = { TransformImage };