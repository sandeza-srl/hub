import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociTipiZonePrivate } from './VociTipiZone.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociTipiZoneSchema = new mongoose.Schema<IVociTipiZonePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodiceZona',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagCap',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagCitta',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagLibero',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagNazione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdZona',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtZona',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdVoceTipoZona',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtVoceTipoZona',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociTipiZoneSchema;