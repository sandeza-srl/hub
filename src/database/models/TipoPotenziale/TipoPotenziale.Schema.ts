import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipoPotenzialePrivate } from './TipoPotenziale.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipoPotenzialeSchema = new mongoose.Schema<ITipoPotenzialePrivate>({

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
    alias: 'IdTipoPotenziale',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoPotenziale',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodicePotenziale',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ValoreRiferimento',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipoPotenzialeSchema;