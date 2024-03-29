/**
 * PROFILE.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  		ID_PROFILE:{
	  		type: 'integer',
	  		primaryKey: true,
	  		autoIncrement: true
	  	},
  		RUT: 'string',
  		LOCATION: 'string',
  		USER: {
  			model: 'USERS'
  		},
  		IS_COMPANY: 'boolean',
  		GIRO: 'string'
  	},
  	autoPK: false,
    tableName: 'PROFILES'
};

