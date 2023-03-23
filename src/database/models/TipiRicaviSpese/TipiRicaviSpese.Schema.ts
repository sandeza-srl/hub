import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiRicaviSpesePrivate } from './TipiRicaviSpese.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiRicaviSpeseSchema = new mongoose.Schema<ITipiRicaviSpesePrivate>({

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
    alias: 'IdTipoRicavoSpesa',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoRicavoSpesa',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagIn',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtFattore',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagOut',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'ClasseTipoRicavoSpesa',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'SottoClasseTipoRicavoSpesa',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceContabile',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceTipoRicavoSpesa',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagNonConteggiare',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagFisco',

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
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagIva',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'ClasseContabile',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'ContoContabile',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'SottoContoContabile',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagFisso',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagVariabile',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'FlagFissoVariabileTxt',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiRicaviSpeseSchema;