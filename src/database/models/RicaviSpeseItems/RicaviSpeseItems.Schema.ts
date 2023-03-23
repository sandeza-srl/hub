import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRicaviSpeseItemsPrivate } from './RicaviSpeseItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const RicaviSpeseItemsSchema = new mongoose.Schema<IRicaviSpeseItemsPrivate>({

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
    alias: 'IdFamigliaItem',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdSottoFamigliaItem',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtSottoFamigliaItem',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'ClasseTipoRicavoSpesa',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceContabile',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceTipoRicavoSpesa',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagIn',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagOut',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdTipoRicavoSpesa',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'SottoClasseTipoRicavoSpesa',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtFattore',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtTipoRicavoSpesa',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagPrincipale',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtFamigliaItem',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceSottoFamigliaItem',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'CodiceFamigliaItem',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'MesiCompetenza',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'PercentualeUtilizzo',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Zero',

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
    alias: 'DataOraModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdRicaviSpeseItems',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RicaviSpeseItemsSchema;