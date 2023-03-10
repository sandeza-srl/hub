import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IRepartiPrivate } from './Reparti.Types.Private';


/* --------
* Schema Definition
* -------- */
const RepartiSchema = new mongoose.Schema<IRepartiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdReparto'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtReparto'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodiceReparto'
  },
  __Dati_Numero002: {
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
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdSede'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtSede'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RepartiSchema;