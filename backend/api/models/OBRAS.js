/**
 * OBRAS.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
	  	ID_OBRA:{
	  		type: 'integer',
	  		primaryKey: true,
	  		autoIncrement: true
	  	},
  		NOMBRE:'string',
  		SERVICIO: {
  			model: 'SERVICIOS'
  		},
  		MENSAJES:{
  			collection: 'MENSAJES',
  			via: 'OBRA'
  		},
  		FECHA_ENTREGA: 'datetime',
  		AVANCE_FISICO: 'integer',
  		AVANCE_FINANCIERO: 'integer',
  		MONTO: 'integer',
  		LAT: 'float',
  		LNG: 'float',
  		toJSON: function() {
	      var obj = this.toObject();
	      var cantidad = 0;
	      if(typeof obj.MENSAJES != "undefined"){
	      	 for(i=0;i<obj.MENSAJES.length;i++){
		      	if(!obj.MENSAJES[i].READ && obj.MENSAJES[i].FISCALIZADOR) cantidad++;
		      }
	      }
	      obj.MENSAJES = cantidad;
	      return obj;
	    }
  	},
    autoPK: false,
    tableName: 'OBRAS'
};

