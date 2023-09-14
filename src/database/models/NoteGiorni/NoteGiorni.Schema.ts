import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { INoteGiorniPrivate } from './NoteGiorni.Types.Private';


/* --------
* Schema Definition
* -------- */
const NoteGiorniSchema = new mongoose.Schema<INoteGiorniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Data001: {
    type: Date,
    alias: 'Data',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'Nota',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdNotaGiorno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default NoteGiorniSchema;