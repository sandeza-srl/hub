import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IControlliDocContabiliPrivate } from './ControlliDocContabili.Types.Private';


/* --------
* Schema Definition
* -------- */
const ControlliDocContabiliSchema = new mongoose.Schema<IControlliDocContabiliPrivate>({

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
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagTotaliDocContabile',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagScadenze',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagVociDocContabile',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagDatiGenerali',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdDocContabile',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagRicaviSpese',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagPagamenti',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtAutomatico',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'OrdineAutomatico',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagDocumento',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagProblemaAvviso',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtProblemaAvviso',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdControlloDocContabile',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ControlliDocContabiliSchema;