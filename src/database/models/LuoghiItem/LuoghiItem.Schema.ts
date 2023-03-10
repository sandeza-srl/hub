import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ILuoghiItemPrivate } from './LuoghiItem.Types.Private';


/* --------
* Schema Definition
* -------- */
const LuoghiItemSchema = new mongoose.Schema<ILuoghiItemPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdLuogo'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdLuogoItem'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'NumeroMaxPartecipanti'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'NumeroMinPartecipanti'
  },
  __Dati_Ora001: {
    type: String,
    alias: 'TempoPreparazione'
  },
  __Dati_Ora002: {
    type: String,
    alias: 'TempoRipristino'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdReparto'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default LuoghiItemSchema;