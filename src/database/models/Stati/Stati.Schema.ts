import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IStatiPrivate } from './Stati.Types.Private';


/* --------
* Schema Definition
* -------- */
const StatiSchema = new mongoose.Schema<IStatiPrivate>({

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
    alias: 'IdStato',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtStato',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagAccettata',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'FlagAccettataVedi',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagRifiutata',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'FlagRifiutataVedi',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagChiusa',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'FlagChiusaVedi',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'PercProbabilitaSuccesso',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtStatoOrdine',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagInviaSollecito',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdTipiRuoliAbilitati',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdInstallazione',

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
  __Dati_Numero008: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagTipoRuoloRichiesto',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default StatiSchema;