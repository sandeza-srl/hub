import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICodificheTipiDocContabiliPrivate } from './CodificheTipiDocContabili.Types.Private';


/* --------
* Schema Definition
* -------- */
const CodificheTipiDocContabiliSchema = new mongoose.Schema<ICodificheTipiDocContabiliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdCodificaTipoDocContabili',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceCodifica',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'DescrizioneCodifica',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodiceDescrizione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CodificheTipiDocContabiliSchema;