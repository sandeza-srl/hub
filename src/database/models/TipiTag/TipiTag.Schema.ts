import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiTagPrivate } from './TipiTag.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiTagSchema = new mongoose.Schema<ITipiTagPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoTag',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagTagCritico',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTag',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiTagSchema;