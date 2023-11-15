import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPostazioniOriginePrivate } from './PostazioniOrigine.Types.Private';


/* --------
* Schema Definition
* -------- */
const PostazioniOrigineSchema = new mongoose.Schema<IPostazioniOriginePrivate>({

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
    alias: 'FM_NomeUtente',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'Postazione_Nome',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdPostazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Postazione_SO',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'PathSave',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'FM_Versione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'FM_Lingua',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'AltezzaFinestra',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'LarghezzaFinestra',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'DistanzaSinistraFinestra',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'DistanzaSopraFinestra',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'Postazione_IndirizzoIP',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'Zoom',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagAggiorna',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'Postazione_VersioneSO',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'FM_PluginInstallati',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'Postazione_LinguaSO',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'Postazione_SODescrittivo',

  },
  __Dati_Testo014: {
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
export default PostazioniOrigineSchema;