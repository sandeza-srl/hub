import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipoScadenzeAccountPrivate } from './TipoScadenzeAccount.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipoScadenzeAccountSchema = new mongoose.Schema<ITipoScadenzeAccountPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdRegolaScadenza',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccount',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtRegolaScadenza',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtMetodoPagamento',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdMetodoPagamento',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'FlagIncassoImmediato',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagAcquisto',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagVendita',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdTipoScadenzeAccount',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtMetodoRegola',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipoScadenzeAccountSchema;