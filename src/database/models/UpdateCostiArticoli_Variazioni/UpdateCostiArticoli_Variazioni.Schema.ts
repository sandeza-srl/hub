import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IUpdateCostiArticoli_VariazioniPrivate } from './UpdateCostiArticoli_Variazioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const UpdateCostiArticoli_VariazioniSchema = new mongoose.Schema<IUpdateCostiArticoli_VariazioniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdUpdateCostiArticoli'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'UtenteCreazione'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'UtenteModifica'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdArticolo'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdUpdateCostiArticoli_Variazioni'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdScaglione'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'CUT_Vecchio'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'CUT_Nuovo'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtArticolo'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'QtScaglione'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'DiffVarCUT'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'CodiceTxtRisorsa'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdRisorsa'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceArticolo'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceTxtDisegnoArticoloAutomatico'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdRicorrenzaRecord'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtUtente'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UpdateCostiArticoli_VariazioniSchema;