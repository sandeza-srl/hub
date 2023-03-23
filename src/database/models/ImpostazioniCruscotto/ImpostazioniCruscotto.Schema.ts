import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IImpostazioniCruscottoPrivate } from './ImpostazioniCruscotto.Types.Private';


/* --------
* Schema Definition
* -------- */
const ImpostazioniCruscottoSchema = new mongoose.Schema<IImpostazioniCruscottoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdImpostazioneCruscotto',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'IndicatoreDataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'IndicatoreDataOraModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'NumeroSettimaneAutomatismo',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagConsideraRitardo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagDaFabbisognoSpecifico',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagCreaSeNoFornitura',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ImpostazioniCruscottoSchema;