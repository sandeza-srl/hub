import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IDistintaCompletaPrivate } from './DistintaCompleta.Types.Private';


/* --------
* Schema Definition
* -------- */
const DistintaCompletaSchema = new mongoose.Schema<IDistintaCompletaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdItemPadre'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Quantita'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtItem'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'UnitaMisura'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Livello'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdItemIniziale'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'LivelloConvertito'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtFamigliaItem'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtSottoFamigliaItem'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraElaborazioneDistinta'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagContribuiscePrezzo'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagContribuisceCosto'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagIncluso'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'FlagInclusoOpzionaleVedi'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagDistinta'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdVoceDistinta'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdVocePadre'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'CodiceItem'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagVisibile'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Ordine'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdVociDipendenti'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdVoceUnivoco'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'VAcquistoTotaleStandard'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'VVenditaTotaleStandard'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceTxtItemAutomatico'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'LivelloConvertitoNoQtaUM'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdDistintaCompleta'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DistintaCompletaSchema;