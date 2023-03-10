import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IAnalisiCostoArticoli_VariabiliPrivate } from './AnalisiCostoArticoli_Variabili.Types.Private';


/* --------
* Schema Definition
* -------- */
const AnalisiCostoArticoli_VariabiliSchema = new mongoose.Schema<IAnalisiCostoArticoli_VariabiliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAnalisiCosto'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoEtichetta'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TestoInformazione'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagArticolo'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagItem'
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
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdVariabileAnalisiCosto'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdTipoEtichetta'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdRicorrenzaRecord'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtUtente'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AnalisiCostoArticoli_VariabiliSchema;