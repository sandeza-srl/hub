import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ILogCostiRisorsePrivate } from './LogCostiRisorse.Types.Private';


/* --------
* Schema Definition
* -------- */
const LogCostiRisorseSchema = new mongoose.Schema<ILogCostiRisorsePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'CostoOrarioAddettoAggiuntivo',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'CostoOrarioAddettoAttrezzaggio',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'CostoOrarioAddettoFermoMacchina',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'CostoOrarioAddettoProduzione',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'CostoOrarioMacchinaAttrezzaggio',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'CostoOrarioMacchinaFermoMacchina',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'CostoOrarioMacchinaProduzione',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'CostoOrarioTotaleAttrezzaggio',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'CostoOrarioTotaleFermoMacchina',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'CostoOrarioTotaleProduzione',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOra',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'QuotaAddettoAttrezzaggio',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'QuotaAddettoFermoMacchina',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'QuotaAddettoProduzione',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdUpdateCostiArticoli',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'ResaT',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'NumeroAddetti',

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
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdLogCostiRisorse',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default LogCostiRisorseSchema;