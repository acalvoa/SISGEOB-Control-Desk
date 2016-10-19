/**
 * INFORMES.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  		ID_INFORME:{
	  		type: 'integer',
	  		primaryKey: true,
	  		autoIncrement: true
	  	},
	  	NOMBRE: 'string',
	  	DESCRIPCION: 'string',
  		ESTRUCTURA: 'json',
  		USER: {
  			model: 'USERS'
  		}
  	},
  	autoPK: false,
    tableName: 'INFORMES'
};

