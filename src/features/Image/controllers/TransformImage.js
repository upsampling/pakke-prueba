const axios = require('axios');
var fs = require('fs');
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

    let imageBase64;
    try {
        const response = await axios.get(bodyAttributes.link, { responseType: 'arraybuffer' });
        imageBase64 = Buffer.from(response.data, 'binary').toString('base64')        
    } catch (error) {
        return res.status(404).send('URL INVALID');
    }

    return res.status(201).send({ "base64": imageBase64});

}

module.exports = { TransformImage };