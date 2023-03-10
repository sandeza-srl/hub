import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ISupportoCalendarioPrivate } from './SupportoCalendario.Types.Private';


/* --------
* Schema Definition
* -------- */
const SupportoCalendarioSchema = new mongoose.Schema<ISupportoCalendarioPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'Giorno01_'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'Giorno02'
  },
  __Dati_Data003: {
    type: Date,
    alias: 'Giorno03'
  },
  __Dati_Data004: {
    type: Date,
    alias: 'Giorno04'
  },
  __Dati_Data005: {
    type: Date,
    alias: 'Giorno05'
  },
  __Dati_Data006: {
    type: Date,
    alias: 'Giorno06'
  },
  __Dati_Data007: {
    type: Date,
    alias: 'Giorno07'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Ciccione'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdSupportoCalendario'
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
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SupportoCalendarioSchema;