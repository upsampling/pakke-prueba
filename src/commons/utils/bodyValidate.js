module.exports.bodyValidate = {
    verify: (req, res, buf, encoding) => {
      try {
        JSON.parse(buf);
      } catch (e) {
        res.status(404).send('Data Invalid');
        throw Error('invalid JSON');
      }
    }
  };
  