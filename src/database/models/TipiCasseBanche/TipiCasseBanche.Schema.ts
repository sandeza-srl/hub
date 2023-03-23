import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiCasseBanchePrivate } from './TipiCasseBanche.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiCasseBancheSchema = new mongoose.Schema<ITipiCasseBanchePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoCassaBanca',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoCassaBanca',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

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
export default TipiCasseBancheSchema;