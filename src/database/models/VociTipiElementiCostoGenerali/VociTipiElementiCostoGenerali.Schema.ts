import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociTipiElementiCostoGeneraliPrivate } from './VociTipiElementiCostoGenerali.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociTipiElementiCostoGeneraliSchema = new mongoose.Schema<IVociTipiElementiCostoGeneraliPrivate>({

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
    alias: 'IdTipoElementoCostoGenerale',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Valore',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdVoceTipoElementoCostoGenerale',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtVoceTipoElementoCostoGenerale',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdPeriodoContabile',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtPeriodoContabile',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInizioPeriodoContabile',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataFinePeriodoContabile',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociTipiElementiCostoGeneraliSchema;