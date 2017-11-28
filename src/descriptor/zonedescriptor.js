/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.ZoneDescriptor');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


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
proto.ZoneDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ZoneDescriptor.repeatedFields_, null);
};
goog.inherits(proto.ZoneDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ZoneDescriptor.displayName = 'proto.ZoneDescriptor';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ZoneDescriptor.repeatedFields_ = [1];



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
proto.ZoneDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.ZoneDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ZoneDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ZoneDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: jspb.Message.getRepeatedField(msg, 1)
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
 * @return {!proto.ZoneDescriptor}
 */
proto.ZoneDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ZoneDescriptor;
  return proto.ZoneDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ZoneDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ZoneDescriptor}
 */
proto.ZoneDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<boolean>} */ (reader.readPackedBool());
      msg.setValuesList(value);
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
proto.ZoneDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ZoneDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ZoneDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ZoneDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedBool(
      1,
      f
    );
  }
};


/**
 * repeated bool values = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {!Array.<boolean>}
 */
proto.ZoneDescriptor.prototype.getValuesList = function() {
  return /** @type {!Array.<boolean>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array.<boolean>} value */
proto.ZoneDescriptor.prototype.setValuesList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!boolean} value
 * @param {number=} opt_index
 */
proto.ZoneDescriptor.prototype.addValues = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.ZoneDescriptor.prototype.clearValuesList = function() {
  this.setValuesList([]);
};

