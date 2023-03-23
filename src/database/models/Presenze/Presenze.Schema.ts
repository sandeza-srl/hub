import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPresenzePrivate } from './Presenze.Types.Private';


/* --------
* Schema Definition
* -------- */
const PresenzeSchema = new mongoose.Schema<IPresenzePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdLuogo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdReparto',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtLuogo',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtReparto',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'OreStraordinario',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'OreLavoro',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'OrePausa',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'OreFerie',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'OreMutua',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'OrePermesso',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'OreFestivo',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdPresenza',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInizio',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataFine',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraInizio',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraFine',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdDipendente',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtOperatore',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdCausale',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtCausale',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagAggiorna',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'Anno',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Mese',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'CostoGiornata',

  },
  __Dati_Testo011: {
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
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PresenzeSchema;