import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { INazioniPrivate } from './Nazioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const NazioniSchema = new mongoose.Schema<INazioniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdNazione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'NomeNazione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'Prefisso',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'NomeNazioneIng',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagPredefinita',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagCEE',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default NazioniSchema;