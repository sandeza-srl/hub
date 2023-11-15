import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IOperatoriAppuntamentoPrivate } from './OperatoriAppuntamento.Types.Private';


/* --------
* Schema Definition
* -------- */
const OperatoriAppuntamentoSchema = new mongoose.Schema<IOperatoriAppuntamentoPrivate>({

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
    alias: 'IdAccountOperatore',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'IdAppuntamento',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtAccountOperatore',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraFineImpegnoLuogo',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraFineAppuntamento',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraInizioImpegnoLuogo',
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
  __Dati_Testo003: {
    type: String,
    alias: 'DataOraTutti',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdOperatoriApputamento',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OperatoriAppuntamentoSchema;