import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPosizioniRiservateItemPrivate } from './PosizioniRiservateItem.Types.Private';


/* --------
* Schema Definition
* -------- */
const PosizioniRiservateItemSchema = new mongoose.Schema<IPosizioniRiservateItemPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdPosizioneRiservataItem',

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
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdPosizione',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdMagazzinoFisico',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaPosizioni',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodicePosizione',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'ClassePosizioneMagazzino',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'CodiceMagazzinoFisico',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtMagazzinoFisico',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceTxtMagazzinoFisico',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PosizioniRiservateItemSchema;