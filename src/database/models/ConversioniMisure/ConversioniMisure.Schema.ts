import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IConversioniMisurePrivate } from './ConversioniMisure.Types.Private';


/* --------
* Schema Definition
* -------- */
const ConversioniMisureSchema = new mongoose.Schema<IConversioniMisurePrivate>({

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
    alias: 'UM',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ValoreConversione',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagUnitaBase',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdClasseUnitaMisura',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtClasseUnitaMisura',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagUnitaAttiva',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagUnitaDefault',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero',

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
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdConversioneMisura',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdRicorrenzaRecord',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ConversioniMisureSchema;