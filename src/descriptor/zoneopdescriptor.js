/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.ZoneOpDescriptor');
goog.provide('proto.ZoneOpDescriptor.ZoneOp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.CloudDescriptor');
goog.require('proto.ConstantDescriptor');
goog.require('proto.PulseDescriptor');
goog.require('proto.SineDoubleDescriptor');
goog.require('proto.SineSingleDescriptor');
goog.require('proto.ZoneDescriptor');


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
proto.ZoneOpDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ZoneOpDescriptor.oneofGroups_);
};
goog.inherits(proto.ZoneOpDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ZoneOpDescriptor.displayName = 'proto.ZoneOpDescriptor';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ZoneOpDescriptor.oneofGroups_ = [[2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.ZoneOpDescriptor.DescriptorCase = {
  DESCRIPTOR_NOT_SET: 0,
  SELECTIONZONE: 2,
  CLOUDSTREAM: 3,
  CONSTANTSTREAM: 4,
  PULSESTREAM: 5,
  SINESINGLESTREAM: 6,
  SINEDOUBLESTREAM: 7
};

/**
 * @return {proto.ZoneOpDescriptor.DescriptorCase}
 */
proto.ZoneOpDescriptor.prototype.getDescriptorCase = function() {
  return /** @type {proto.ZoneOpDescriptor.DescriptorCase} */(jspb.Message.computeOneofCase(this, proto.ZoneOpDescriptor.oneofGroups_[0]));
};



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
proto.ZoneOpDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.ZoneOpDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ZoneOpDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ZoneOpDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    op: jspb.Message.getFieldWithDefault(msg, 1, 0),
    selectionzone: (f = msg.getSelectionzone()) && proto.ZoneDescriptor.toObject(includeInstance, f),
    cloudstream: (f = msg.getCloudstream()) && proto.CloudDescriptor.toObject(includeInstance, f),
    constantstream: (f = msg.getConstantstream()) && proto.ConstantDescriptor.toObject(includeInstance, f),
    pulsestream: (f = msg.getPulsestream()) && proto.PulseDescriptor.toObject(includeInstance, f),
    sinesinglestream: (f = msg.getSinesinglestream()) && proto.SineSingleDescriptor.toObject(includeInstance, f),
    sinedoublestream: (f = msg.getSinedoublestream()) && proto.SineDoubleDescriptor.toObject(includeInstance, f)
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
 * @return {!proto.ZoneOpDescriptor}
 */
proto.ZoneOpDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ZoneOpDescriptor;
  return proto.ZoneOpDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ZoneOpDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ZoneOpDescriptor}
 */
proto.ZoneOpDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ZoneOpDescriptor.ZoneOp} */ (reader.readEnum());
      msg.setOp(value);
      break;
    case 2:
      var value = new proto.ZoneDescriptor;
      reader.readMessage(value,proto.ZoneDescriptor.deserializeBinaryFromReader);
      msg.setSelectionzone(value);
      break;
    case 3:
      var value = new proto.CloudDescriptor;
      reader.readMessage(value,proto.CloudDescriptor.deserializeBinaryFromReader);
      msg.setCloudstream(value);
      break;
    case 4:
      var value = new proto.ConstantDescriptor;
      reader.readMessage(value,proto.ConstantDescriptor.deserializeBinaryFromReader);
      msg.setConstantstream(value);
      break;
    case 5:
      var value = new proto.PulseDescriptor;
      reader.readMessage(value,proto.PulseDescriptor.deserializeBinaryFromReader);
      msg.setPulsestream(value);
      break;
    case 6:
      var value = new proto.SineSingleDescriptor;
      reader.readMessage(value,proto.SineSingleDescriptor.deserializeBinaryFromReader);
      msg.setSinesinglestream(value);
      break;
    case 7:
      var value = new proto.SineDoubleDescriptor;
      reader.readMessage(value,proto.SineDoubleDescriptor.deserializeBinaryFromReader);
      msg.setSinedoublestream(value);
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
proto.ZoneOpDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ZoneOpDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ZoneOpDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ZoneOpDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOp();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSelectionzone();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ZoneDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getCloudstream();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.CloudDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getConstantstream();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ConstantDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getPulsestream();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.PulseDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getSinesinglestream();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.SineSingleDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getSinedoublestream();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.SineDoubleDescriptor.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ZoneOpDescriptor.ZoneOp = {
  ADD: 0,
  MULT: 1,
  ENTERSTREAM: 3,
  ENTERZONE: 4
};

/**
 * optional ZoneOp op = 1;
 * @return {!proto.ZoneOpDescriptor.ZoneOp}
 */
proto.ZoneOpDescriptor.prototype.getOp = function() {
  return /** @type {!proto.ZoneOpDescriptor.ZoneOp} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.ZoneOpDescriptor.ZoneOp} value */
proto.ZoneOpDescriptor.prototype.setOp = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ZoneDescriptor selectionZone = 2;
 * @return {?proto.ZoneDescriptor}
 */
proto.ZoneOpDescriptor.prototype.getSelectionzone = function() {
  return /** @type{?proto.ZoneDescriptor} */ (
    jspb.Message.getWrapperField(this, proto.ZoneDescriptor, 2));
};


/** @param {?proto.ZoneDescriptor|undefined} value */
proto.ZoneOpDescriptor.prototype.setSelectionzone = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.ZoneOpDescriptor.oneofGroups_[0], value);
};


proto.ZoneOpDescriptor.prototype.clearSelectionzone = function() {
  this.setSelectionzone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ZoneOpDescriptor.prototype.hasSelectionzone = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CloudDescriptor cloudStream = 3;
 * @return {?proto.CloudDescriptor}
 */
proto.ZoneOpDescriptor.prototype.getCloudstream = function() {
  return /** @type{?proto.CloudDescriptor} */ (
    jspb.Message.getWrapperField(this, proto.CloudDescriptor, 3));
};


/** @param {?proto.CloudDescriptor|undefined} value */
proto.ZoneOpDescriptor.prototype.setCloudstream = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.ZoneOpDescriptor.oneofGroups_[0], value);
};


proto.ZoneOpDescriptor.prototype.clearCloudstream = function() {
  this.setCloudstream(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ZoneOpDescriptor.prototype.hasCloudstream = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ConstantDescriptor constantStream = 4;
 * @return {?proto.ConstantDescriptor}
 */
proto.ZoneOpDescriptor.prototype.getConstantstream = function() {
  return /** @type{?proto.ConstantDescriptor} */ (
    jspb.Message.getWrapperField(this, proto.ConstantDescriptor, 4));
};


/** @param {?proto.ConstantDescriptor|undefined} value */
proto.ZoneOpDescriptor.prototype.setConstantstream = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.ZoneOpDescriptor.oneofGroups_[0], value);
};


proto.ZoneOpDescriptor.prototype.clearConstantstream = function() {
  this.setConstantstream(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ZoneOpDescriptor.prototype.hasConstantstream = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PulseDescriptor pulseStream = 5;
 * @return {?proto.PulseDescriptor}
 */
proto.ZoneOpDescriptor.prototype.getPulsestream = function() {
  return /** @type{?proto.PulseDescriptor} */ (
    jspb.Message.getWrapperField(this, proto.PulseDescriptor, 5));
};


/** @param {?proto.PulseDescriptor|undefined} value */
proto.ZoneOpDescriptor.prototype.setPulsestream = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.ZoneOpDescriptor.oneofGroups_[0], value);
};


proto.ZoneOpDescriptor.prototype.clearPulsestream = function() {
  this.setPulsestream(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ZoneOpDescriptor.prototype.hasPulsestream = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SineSingleDescriptor sineSingleStream = 6;
 * @return {?proto.SineSingleDescriptor}
 */
proto.ZoneOpDescriptor.prototype.getSinesinglestream = function() {
  return /** @type{?proto.SineSingleDescriptor} */ (
    jspb.Message.getWrapperField(this, proto.SineSingleDescriptor, 6));
};


/** @param {?proto.SineSingleDescriptor|undefined} value */
proto.ZoneOpDescriptor.prototype.setSinesinglestream = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.ZoneOpDescriptor.oneofGroups_[0], value);
};


proto.ZoneOpDescriptor.prototype.clearSinesinglestream = function() {
  this.setSinesinglestream(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ZoneOpDescriptor.prototype.hasSinesinglestream = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SineDoubleDescriptor sineDoubleStream = 7;
 * @return {?proto.SineDoubleDescriptor}
 */
proto.ZoneOpDescriptor.prototype.getSinedoublestream = function() {
  return /** @type{?proto.SineDoubleDescriptor} */ (
    jspb.Message.getWrapperField(this, proto.SineDoubleDescriptor, 7));
};


/** @param {?proto.SineDoubleDescriptor|undefined} value */
proto.ZoneOpDescriptor.prototype.setSinedoublestream = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.ZoneOpDescriptor.oneofGroups_[0], value);
};


proto.ZoneOpDescriptor.prototype.clearSinedoublestream = function() {
  this.setSinedoublestream(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ZoneOpDescriptor.prototype.hasSinedoublestream = function() {
  return jspb.Message.getField(this, 7) != null;
};

