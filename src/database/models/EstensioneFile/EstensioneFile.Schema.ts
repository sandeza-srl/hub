import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IEstensioneFilePrivate } from './EstensioneFile.Types.Private';


/* --------
* Schema Definition
* -------- */
const EstensioneFileSchema = new mongoose.Schema<IEstensioneFilePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdEstensioneFile'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtEstensioneFile'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraModifica'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtUtenteCreazione'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtUtenteModifica'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'TipologiaEstensioneFile'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default EstensioneFileSchema;