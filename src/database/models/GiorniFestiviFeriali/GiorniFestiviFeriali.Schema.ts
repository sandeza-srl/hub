import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IGiorniFestiviFerialiPrivate } from './GiorniFestiviFeriali.Types.Private';


/* --------
* Schema Definition
* -------- */
const GiorniFestiviFerialiSchema = new mongoose.Schema<IGiorniFestiviFerialiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdGiorniFestiviFeriali'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'CreationTimestamp'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'CreatedBy'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'ModificationTimestamp'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'ModifiedBy'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'Data'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagFestivo'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'GiornoSettimana'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'NomeGiornoSettimana'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Anno'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'MeseNumero'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'MeseNome'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'Descrizione'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagSabato'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default GiorniFestiviFerialiSchema;