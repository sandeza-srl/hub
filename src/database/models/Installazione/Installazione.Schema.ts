import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IInstallazionePrivate } from './Installazione.Types.Private';


/* --------
* Schema Definition
* -------- */
const InstallazioneSchema = new mongoose.Schema<IInstallazionePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },

}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InstallazioneSchema;