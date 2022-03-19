const { validate } = require('jsonschema');

const imageSchema = require('../validators/imageSchema.json');

async function TransformImage (req, res){
    const bodyAttributes = req.body;

    if(Object.entries(bodyAttributes).length === 0){
        return res.status(400).send('Void object');
    }

    const { valid, errors } = validate(bodyAttributes, imageSchema);

    if (!valid) {
        return res.status(400).send({"message": errors.map(item => { return item.message;})})
    }

    console.log('hola');
    return res.status(201).send('todo ok');

}

module.exports = { TransformImage };