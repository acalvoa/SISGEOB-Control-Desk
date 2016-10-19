/**
 * LIBRO.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
	  	ID_REGISTRO:{
	  		type: 'integer',
	  		primaryKey: true,
	  		autoIncrement: true
	  	},
  		TITULO:'string',
  		TIPO:'string',
  		MENSAJE: 'string',
  		OBRA: {
  			model: 'OBRAS'
  		}
  	},
    autoPK: false,
    tableName: 'LIBRO'
};

