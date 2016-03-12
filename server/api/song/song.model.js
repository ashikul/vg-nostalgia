'use strict';

import mongoose from 'mongoose';

var SongSchema = new mongoose.Schema({
  name: String,
  game: {
    type: String,
    default: '',
  },
  likes: {
    type: Double,
    default: 0
  }
});

export default mongoose.model('Song', SongSchema);
