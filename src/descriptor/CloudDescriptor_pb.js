/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.CloudDescriptor', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CloudDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CloudDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CloudDescriptor.displayName = 'proto.CloudDescriptor';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CloudDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.CloudDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CloudDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    frequency: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    octavecount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    persistance: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    lacunarity: +jspb.Message.getFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CloudDescriptor}
 */
proto.CloudDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CloudDescriptor;
  return proto.CloudDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CloudDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CloudDescriptor}
 */
proto.CloudDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFrequency(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOctavecount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPersistance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLacunarity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CloudDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CloudDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CloudDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrequency();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOctavecount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPersistance();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getLacunarity();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.CloudDescriptor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.CloudDescriptor.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double frequency = 2;
 * @return {number}
 */
proto.CloudDescriptor.prototype.getFrequency = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.CloudDescriptor.prototype.setFrequency = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional uint32 octaveCount = 3;
 * @return {number}
 */
proto.CloudDescriptor.prototype.getOctavecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.CloudDescriptor.prototype.setOctavecount = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double persistance = 4;
 * @return {number}
 */
proto.CloudDescriptor.prototype.getPersistance = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.CloudDescriptor.prototype.setPersistance = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double lacunarity = 5;
 * @return {number}
 */
proto.CloudDescriptor.prototype.getLacunarity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.CloudDescriptor.prototype.setLacunarity = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


goog.object.extend(exports, proto);
