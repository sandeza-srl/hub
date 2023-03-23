import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IItemsPerFasiPrivate } from './ItemsPerFasi.Types.Private';


/* --------
* Schema Definition
* -------- */
const ItemsPerFasiSchema = new mongoose.Schema<IItemsPerFasiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdFase',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdOpzioneProd',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'CUMT',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'QtPerUmOpz',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'RelazionePerStampa',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagDaEliminare',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdItemFase',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdItemOpzioneProd',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero005: {
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
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
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
export default ItemsPerFasiSchema;