import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ICollegamentiStepProcessiPrivate } from './CollegamentiStepProcessi.Types.Private';


/* --------
* Schema Definition
* -------- */
const CollegamentiStepProcessiSchema = new mongoose.Schema<ICollegamentiStepProcessiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagArticolo'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagAttivitaControllo'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagCreazione'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagItem'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagLottoProduzione'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagMantieniCollegamentiProcesso'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagOfferta'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagRigaOrdine'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagSchedaAttivitaControllo'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagTipoAttivitaControllo'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagTipoDocumentoOperativo'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagProcesso'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagTracciabilita'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCollegamentoStepProcesso'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdOggettoCollegato'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipiRuoloCollegamento'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdTipiRuoloCreazione'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdTipoProcesso'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdStepProcessoCollegato'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IstruzioniCollegamento'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtTipoOggettoCollegato'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdProcessoCollegato'
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagSottofamigliaItems'
  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagDocumentoOperativo'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdCollegamentoTipoStepProcessi'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtOggettoCollegato'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'Pid'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'Id'
  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagAggiorna'
  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagCollegamentoProcesso'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdProcessoStepCollegato'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdStepProcessoOrigineCollegamento'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'TxtProcessoOrigineCollegamento'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'TxtStepProcessoOrigineCollegamento'
  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagComunicazione'
  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagScarto'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CollegamentiStepProcessiSchema;