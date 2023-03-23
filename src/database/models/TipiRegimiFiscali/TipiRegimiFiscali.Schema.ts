import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiRegimiFiscaliPrivate } from './TipiRegimiFiscali.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiRegimiFiscaliSchema = new mongoose.Schema<ITipiRegimiFiscaliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdRegimeFiscale',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'CodiceRegimeFiscale',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtRegimeFiscale',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodiceDescrizione',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagPrincipale',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiRegimiFiscaliSchema;