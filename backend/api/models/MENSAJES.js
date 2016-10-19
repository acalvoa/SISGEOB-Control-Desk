/**
 * MENSAJES.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  		ID_MENSAJE:{
	  		type: 'integer',
	  		primaryKey: true,
	  		autoIncrement: true
	  	},
  		MENSAJE: 'string',
  		OBRA: {
  			model: 'OBRAS'
  		},
  		SERVICIO: {
  			model: 'SERVICIOS'
  		},
  		USER: {
  			model: 'USERS'
  		},
  		READ: {
  			type: 'boolean',
  			defaultsTo: false
  		},
  		FISCALIZADOR:{
  			type: 'boolean',
  			defaultsTo: false
  		}
  	},
  	autoPK: false,
    tableName: 'MENSAJES'
};

