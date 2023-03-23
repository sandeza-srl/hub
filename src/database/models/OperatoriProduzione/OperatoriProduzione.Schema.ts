import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IOperatoriProduzionePrivate } from './OperatoriProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const OperatoriProduzioneSchema = new mongoose.Schema<IOperatoriProduzionePrivate>({

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
    alias: 'IdOperatoreProduzione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtOperatore',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagCapoTurno',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'Password',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdLingua',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagRespQualita',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagLogistica',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagPerformance',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagOperatoreAutomatico',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagRegistraPresenzeAbilitato',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagLoginNfcAttivo',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagPreparazioneContoLavoro',

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
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagUtilizzaSicurezzaAvanzata',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagVisualizzaOperatore',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceTxtOperatoreProduzione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'CodiceOperatore',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OperatoriProduzioneSchema;