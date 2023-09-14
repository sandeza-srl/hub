import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDisponibilitaRisorsePrivate } from './DisponibilitaRisorse.Types.Private';


/* --------
* Schema Definition
* -------- */
const DisponibilitaRisorseSchema = new mongoose.Schema<IDisponibilitaRisorsePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInizio',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraFine',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraInizio',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'AnnoMese',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'AnnoSettimana',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraInizio',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraFine',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataFine',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'GiornoSettimanaNumero',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagSlotLibero',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'ProgressivoSlotLiberi',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'NumeroSlotRisorsa',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagAggiornaImpostazioni',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'NumeroSlotRisorsaPrecedente',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'NumeroSlotRisorsa_UltimoLibero',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'ProgressivoSlotLiberiCalcolato',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdDisponibilitaRisorse',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DisponibilitaRisorseSchema;