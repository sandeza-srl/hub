import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiPrimoContattoPrivate } from './TipiPrimoContatto.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiPrimoContattoSchema = new mongoose.Schema<ITipiPrimoContattoPrivate>({

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
    alias: 'IdTipoPrimoContatto',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoPrimoContatto',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiPrimoContattoSchema;