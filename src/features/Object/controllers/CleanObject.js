
function CleanObject (req, res){
    console.log('Estoy dentro del enpoint jijij');
    return res.status(200).send('pong');
}

module.exports = { CleanObject };