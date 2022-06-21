const Joi = require('joi');


const NEWDATA = Joi.object({
  codigo: Joi.number().required(),
  descricao: Joi.string().required(),
  preco: Joi.number().required(),
});

const validateData = (req, res, next) => {
  const { codigo, descricao, preco } = req.body;

  const { error } = NEWDATA.validate({ codigo, descricao, preco });

  if (error) next({ status: 400, message: error.message });
  // console.log(error);

  next();
};
module.exports = validateData;