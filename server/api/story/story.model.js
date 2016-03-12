'use strict';

import mongoose from 'mongoose';
import {Schema} from 'mongoose';


var StorySchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  creator: {
    //FIXME reference user object instead of string
    //type: Schema.ObjectId,
    //ref: 'user'
    type: String,
    default: '',
  },
  game: {
    type: String,
    default: '',
  }
});

export default mongoose.model('Story', StorySchema);
