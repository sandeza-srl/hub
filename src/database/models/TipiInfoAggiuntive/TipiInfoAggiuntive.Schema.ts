import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiInfoAggiuntivePrivate } from './TipiInfoAggiuntive.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiInfoAggiuntiveSchema = new mongoose.Schema<ITipiInfoAggiuntivePrivate>({

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
    alias: 'Etichetta',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoInfoAggiuntiva',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipologiaAccount',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodiceTipologiaAccount',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipoEtichetta',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero002: {
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
export default TipiInfoAggiuntiveSchema;