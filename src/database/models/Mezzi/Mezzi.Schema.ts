import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IMezziPrivate } from './Mezzi.Types.Private';


/* --------
* Schema Definition
* -------- */
const MezziSchema = new mongoose.Schema<IMezziPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'TxtUtenteCreazione'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtUtenteModifica'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdMezzo'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia'
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
    alias: 'IdTipoMezzo'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'Descrizione'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'Targa'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Tara'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'Nfc'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAnagrafica'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'Note'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'CodiceTipo'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'Seriale'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'Codice'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'BeaconMajor'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'BeaconMinor'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdBeacon'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MezziSchema;