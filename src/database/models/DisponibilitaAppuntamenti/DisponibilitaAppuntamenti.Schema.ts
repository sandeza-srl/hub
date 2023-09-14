import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDisponibilitaAppuntamentiPrivate } from './DisponibilitaAppuntamenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const DisponibilitaAppuntamentiSchema = new mongoose.Schema<IDisponibilitaAppuntamentiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraInizioImpegnoLuogo',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdLuogo',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'IdAppuntamento',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraFineImpegnoLuogo',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraFineAppuntamento',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraInizioAppuntamento',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountOperatoriAbilitati',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'DataOraTutti',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountOperatoriImpegnati',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdDisponibilitaAppuntamenti',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DisponibilitaAppuntamentiSchema;