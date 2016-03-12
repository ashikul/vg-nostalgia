'use strict';

import mongoose from 'mongoose';
import {Schema} from 'mongoose';


var ThingSchema = new mongoose.Schema({
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
    type: Schema.ObjectId,
    ref: 'user'
  },
  game: {
    type: String,
    default: '',
  }
});

export default mongoose.model('Story', ThingSchema);
