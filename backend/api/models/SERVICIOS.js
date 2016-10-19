/**
 * SERVICIOS.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  		ID_SERVICIO:{
	  		type: 'integer',
	  		primaryKey: true,
	  		autoIncrement: true
	  	},
  		NOMBRE:'string',
  		OBRAS: {
  			collection: 'OBRAS',
  			via: 'SERVICIO'
  		},
  		MENSAJES: {
  			collection: 'MENSAJES',
  			via: 'SERVICIO'
  		},
      ALERTAS:{
        collection: 'ALERTAS',
        via: 'SERVICIO'
      },
      toJSON: function() {
        var obj = this.toObject();
        var cantidad = 0;
        if(typeof obj.ALERTAS == "undefined" || obj.ALERTAS.length == 0){
          obj.ALERTAS = []; 
        }
        return obj;
      }
  	},
  	autoPK: false,
    tableName: 'SERVICIOS'
};

