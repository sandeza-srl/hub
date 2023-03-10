import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IRevisioniCodificheClientiItemsPrivate } from './RevisioniCodificheClientiItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const RevisioniCodificheClientiItemsSchema = new mongoose.Schema<IRevisioniCodificheClientiItemsPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataModifica'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraModifica'
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataRevisione'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCodificaClienteItem'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdRevisione'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'Note'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'NumeroRevisione'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtUtente'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'UtenteCreazione'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'UtenteModifica'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'CodiceRevisioneAutomatico'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'Protocollo'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RevisioniCodificheClientiItemsSchema;