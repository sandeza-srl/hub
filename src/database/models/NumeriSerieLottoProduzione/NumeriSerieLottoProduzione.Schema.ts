import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { INumeriSerieLottoProduzionePrivate } from './NumeriSerieLottoProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const NumeriSerieLottoProduzioneSchema = new mongoose.Schema<INumeriSerieLottoProduzionePrivate>({

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
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdNumeroSerieLottoProduzione',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdItemArticolo',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'ProgressivoNumeroSerie',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'NumeroSerie',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdTracciabilita',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceLottoProduzione',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'ProgressivoLotto',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'NumeroSerieTemporaneo',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Anno',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdRigaOrdine',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default NumeriSerieLottoProduzioneSchema;