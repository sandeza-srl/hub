import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDistintaPrimoLivelloPrivate } from './DistintaPrimoLivello.Types.Private';


/* --------
* Schema Definition
* -------- */
const DistintaPrimoLivelloSchema = new mongoose.Schema<IDistintaPrimoLivelloPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtFamigliaItem',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagDistintaBase',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'UnitaMisura',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdItemPadre',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Quantita',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdVocePrimoLivello',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtItemPadre',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'RelazionePerElaborazione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdFamigliaItem',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdSottoFamigliaItem',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo011: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'CodiceItemPadre',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'VAcquistoTotaleStandard',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'VVenditaTotaleStandard',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagAggiorna',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagContribuisceCosto',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagContribuiscePrezzo',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceTxtItemAutomaticoPadre',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdFamigliaItemPadre',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdSottoFamigliaItemPadre',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'TxtFamigliaItemPadre',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtSottoFamigliaItemPadre',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtSottoFamigliaItem',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'UnitaMisuraItemPadre',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'Note',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DistintaPrimoLivelloSchema;