const { validate } = require('jsonschema');

const objectSchema = require('../validators/objectSchema.json');

function CleanObject (req, res){

    const bodyAttributes = req.body;

    if(Object.entries(bodyAttributes).length === 0){
        return res.status(400).send('Void object');
    }

    const { valid, errors } = validate(bodyAttributes, objectSchema);

    if (!valid) {
        return res.status(400).send({"message": errors.map(item => { return item.message;})})
    }

    let objectClean = Object.fromEntries(Object.entries(bodyAttributes).filter(([_, v]) => v != null));
    objectClean.hola = Object.fromEntries(Object.entries(objectClean.hola).filter(([_, v]) => v != null));
    
    return res.status(201).send(objectClean);

}

module.exports = { CleanObject };