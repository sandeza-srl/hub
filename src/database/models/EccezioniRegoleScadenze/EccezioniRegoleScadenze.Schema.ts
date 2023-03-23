import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IEccezioniRegoleScadenzePrivate } from './EccezioniRegoleScadenze.Types.Private';


/* --------
* Schema Definition
* -------- */
const EccezioniRegoleScadenzeSchema = new mongoose.Schema<IEccezioniRegoleScadenzePrivate>({

  _id: {
    type: String,
    default: uuid.v4
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
  __Dati_Data001: {
    type: Date,
    alias: 'DataScadenza',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdEccezioneRegoleScadenze',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataInizio',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataFine',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdRegolaScadenza',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'MeseGiornoDataInizio',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'MeseGiornoDataFine',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagScalaAnno',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'DataEccezioneLista',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'DataEccFlagScalaAnno',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default EccezioniRegoleScadenzeSchema;