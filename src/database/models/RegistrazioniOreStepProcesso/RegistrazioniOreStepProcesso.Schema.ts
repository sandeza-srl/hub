import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IRegistrazioniOreStepProcessoPrivate } from './RegistrazioniOreStepProcesso.Types.Private';


/* --------
* Schema Definition
* -------- */
const RegistrazioniOreStepProcessoSchema = new mongoose.Schema<IRegistrazioniOreStepProcessoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraRegistrazione'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdProcesso'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdRegistrazioneOreStepProcesso'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdStepProcesso'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'NotaRegistrazione'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtUtente'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountOperatore'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtAccountOperatore'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataRegistrazione'
  },
  __Dati_Ora001: {
    type: String,
    alias: 'OreEseguite'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdTipoStepProcesso'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdTipoProcesso'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'VCostoUnitarioOraOperatore'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'VCostoTotale'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RegistrazioniOreStepProcessoSchema;