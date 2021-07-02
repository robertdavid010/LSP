import SimpleSchema from "simpl-schema";

const ImageSchema = new SimpleSchema({
  width: Number,
  height: Number,
  hashFunction: String,
  hash:String,
  url: {
    type: String,
  }
});

const linkSchema = new SimpleSchema({
  title: String,
  url: String, // TODO: valid url check needed
});

export const LSP3Profile = new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  links: {
    type: Array
  },
  "links.$": {
    type: linkSchema
  },
  tags: {
    type: Array,
  },
  "tags.$": {
    type: String
  },
  profileImage: { 
    type: Array
  },
  "profileImage.$": {
    type: ImageSchema
  },
  backgroundImage: { 
    type: Array
  },
  "backgroundImage.$": {
    type: ImageSchema
  }
})
