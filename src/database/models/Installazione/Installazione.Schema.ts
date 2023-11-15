import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInstallazionePrivate } from './Installazione.Types.Private';


/* --------
* Schema Definition
* -------- */
const InstallazioneSchema = new mongoose.Schema<IInstallazionePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagMongoDB',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InstallazioneSchema;