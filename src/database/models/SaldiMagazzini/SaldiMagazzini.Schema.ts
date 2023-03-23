import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISaldiMagazziniPrivate } from './SaldiMagazzini.Types.Private';


/* --------
* Schema Definition
* -------- */
const SaldiMagazziniSchema = new mongoose.Schema<ISaldiMagazziniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdMagazzinoGestito',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Quantita',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimoMovimento',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtMagazzinoGestito',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'UnitaMisura',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagDisponibileAltrove',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagDisponibileInternamente',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagNonDisponibile',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagPrenotato',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione',
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
  __Dati_Testo009: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagAggiornaDaMovimenti',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagAggiornaDaItems',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdSaldoMagazzino',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SaldiMagazziniSchema;