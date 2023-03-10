import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ICausaliTimbraturePrivate } from './CausaliTimbrature.Types.Private';


/* --------
* Schema Definition
* -------- */
const CausaliTimbratureSchema = new mongoose.Schema<ICausaliTimbraturePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCausale'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtCausale'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagLavoro'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagMutua'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagFestivo'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagStraordinario'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagPermesso'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagFerie'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagPausa'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagPredefinito'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodiceCausale'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CausaliTimbratureSchema;