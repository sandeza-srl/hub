import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IAreeRisorsePrivate } from './AreeRisorse.Types.Private';


/* --------
* Schema Definition
* -------- */
const AreeRisorseSchema = new mongoose.Schema<IAreeRisorsePrivate>({

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
    alias: 'IdItem',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAreaRisorsa',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtAreaRisorsa',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCostruttore',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountFornitore',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdRubricaRefCommFornitore',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdRubricaRefTecFornitore',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'Modello',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'NumeroSerie',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataAcquisto',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataInstallazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataScadenzaGaranzia',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataStartUp',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'GaranziaGg',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtAccountCostruttore',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtAccountFornitore',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceTxtRisorsa',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtRisorsa',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceRisorsa',

  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataCorrente',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'GgEsercizio',

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
  __Dati_Testo017: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AreeRisorseSchema;