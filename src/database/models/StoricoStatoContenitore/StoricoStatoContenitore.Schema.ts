import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IStoricoStatoContenitorePrivate } from './StoricoStatoContenitore.Types.Private';


/* --------
* Schema Definition
* -------- */
const StoricoStatoContenitoreSchema = new mongoose.Schema<IStoricoStatoContenitorePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoStatoContenitore'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoStatoContenitore'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdContenitore'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'Data'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtUtente'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'Note'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdStoricoTipoStatoContenitore'
  },
  __Dati_Ora001: {
    type: String,
    alias: 'Ora'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOra'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtTipoStatoContenitoreAutomatico'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default StoricoStatoContenitoreSchema;