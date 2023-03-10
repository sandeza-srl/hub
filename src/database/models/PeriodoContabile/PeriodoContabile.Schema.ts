import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IPeriodoContabilePrivate } from './PeriodoContabile.Types.Private';


/* --------
* Schema Definition
* -------- */
const PeriodoContabileSchema = new mongoose.Schema<IPeriodoContabilePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdPeriodoContabile'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtPeriodoContabile'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInizio'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataFine'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PeriodoContabileSchema;