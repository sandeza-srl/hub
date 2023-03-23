import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IItemsComplementariPrivate } from './ItemsComplementari.Types.Private';


/* --------
* Schema Definition
* -------- */
const ItemsComplementariSchema = new mongoose.Schema<IItemsComplementariPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdItemPadre',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdItemComplementare',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'CodiceItemPadre',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceTxtItemAutomaticoPadre',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdItemTutti',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtItemPadre',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ItemsComplementariSchema;