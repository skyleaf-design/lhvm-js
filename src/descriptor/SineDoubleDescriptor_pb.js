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

goog.exportSymbol('proto.SineDoubleDescriptor', null, global);

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
proto.SineDoubleDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SineDoubleDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SineDoubleDescriptor.displayName = 'proto.SineDoubleDescriptor';
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
proto.SineDoubleDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.SineDoubleDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SineDoubleDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SineDoubleDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amplitude: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    wavelength: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    phase: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    offset: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    timescale: +jspb.Message.getFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.SineDoubleDescriptor}
 */
proto.SineDoubleDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SineDoubleDescriptor;
  return proto.SineDoubleDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SineDoubleDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SineDoubleDescriptor}
 */
proto.SineDoubleDescriptor.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAmplitude(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWavelength(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPhase(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOffset(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimescale(value);
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
proto.SineDoubleDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SineDoubleDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SineDoubleDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SineDoubleDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmplitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getWavelength();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPhase();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getTimescale();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.SineDoubleDescriptor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SineDoubleDescriptor.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double amplitude = 2;
 * @return {number}
 */
proto.SineDoubleDescriptor.prototype.getAmplitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.SineDoubleDescriptor.prototype.setAmplitude = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double wavelength = 3;
 * @return {number}
 */
proto.SineDoubleDescriptor.prototype.getWavelength = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.SineDoubleDescriptor.prototype.setWavelength = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double phase = 4;
 * @return {number}
 */
proto.SineDoubleDescriptor.prototype.getPhase = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.SineDoubleDescriptor.prototype.setPhase = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double offset = 5;
 * @return {number}
 */
proto.SineDoubleDescriptor.prototype.getOffset = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.SineDoubleDescriptor.prototype.setOffset = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double timeScale = 6;
 * @return {number}
 */
proto.SineDoubleDescriptor.prototype.getTimescale = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.SineDoubleDescriptor.prototype.setTimescale = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


goog.object.extend(exports, proto);