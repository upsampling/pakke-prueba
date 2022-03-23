function CleanObject (req, res) {
  const bodyAttributes = req.body;

  if (Object.entries(bodyAttributes).length === 0) {
    return res.status(400).send('Void object');
  }
  const response = removeEmpty(bodyAttributes);
  return res.status(201).send(response);
}

function removeEmpty (obj) {
  return Object.entries(obj)
    .filter(([_, v]) => {
      if (v === null || v === 0) {
        return false;
      } else {
        return true;
      }
    })
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v === Object(v) ? removeEmpty(v) : v }), {});
}
module.exports = { CleanObject };
