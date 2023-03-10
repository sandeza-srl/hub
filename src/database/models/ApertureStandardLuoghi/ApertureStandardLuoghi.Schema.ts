import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IApertureStandardLuoghiPrivate } from './ApertureStandardLuoghi.Types.Private';


/* --------
* Schema Definition
* -------- */
const ApertureStandardLuoghiSchema = new mongoose.Schema<IApertureStandardLuoghiPrivate>({

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
  __Dati_Numero002: {
    type: Number,
    alias: 'GiornoSettimana'
  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraApertura'
  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraChiusura'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'OreGiornataLuogo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdApertureStandardLuoghi'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ApertureStandardLuoghiSchema;