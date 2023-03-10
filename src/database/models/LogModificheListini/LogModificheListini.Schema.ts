import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ILogModificheListiniPrivate } from './LogModificheListini.Types.Private';


/* --------
* Schema Definition
* -------- */
const LogModificheListiniSchema = new mongoose.Schema<ILogModificheListiniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOra'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'Descrizione'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoListino'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdFornitore'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdListinoItem'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceTxtItemAutomatico'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtUtente'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdLogModificheListini'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default LogModificheListiniSchema;