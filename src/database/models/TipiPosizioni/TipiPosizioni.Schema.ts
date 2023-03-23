import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiPosizioniPrivate } from './TipiPosizioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiPosizioniSchema = new mongoose.Schema<ITipiPosizioniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoPosizione',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoPosizione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdUtentiNoVisualizzazione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipiRuoliNoVisualizzazione',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

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
export default TipiPosizioniSchema;