import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUtentiCampagnePrivate } from './UtentiCampagne.Types.Private';


/* --------
* Schema Definition
* -------- */
const UtentiCampagneSchema = new mongoose.Schema<IUtentiCampagnePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UtentiCampagneSchema;