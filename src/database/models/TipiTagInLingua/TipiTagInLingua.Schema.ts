import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiTagInLinguaPrivate } from './TipiTagInLingua.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiTagInLinguaSchema = new mongoose.Schema<ITipiTagInLinguaPrivate>({

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
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoTagInLingua',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoTagInLingua',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdLingua',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagTagCritico',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiTagInLinguaSchema;