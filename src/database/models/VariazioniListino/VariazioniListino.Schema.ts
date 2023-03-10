import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IVariazioniListinoPrivate } from './VariazioniListino.Types.Private';


/* --------
* Schema Definition
* -------- */
const VariazioniListinoSchema = new mongoose.Schema<IVariazioniListinoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccount'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'FlagCosaIncludeVedi'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagPercentuale'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagSoloItem'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagTuttaFamiglia'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagTuttaSottoFamiglia'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagTutto'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdFamigliaItem'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdSottoFamigliaItem'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdVariazioneListino'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'PrezzoFisso'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'VariazionePrezzoDiretta'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'VariazionePrezzoPercentuale'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagVendita'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagAcquisto'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtVenditaAcquisto'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAccountClientePrimario'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagProduttore'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtAccountProduttore'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceTxtItemAutomatico'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtSottoFamigliaItem'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtFamigliaItem'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInizio'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataFine'
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataCorrente'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagScaduto'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'Note'
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagAttivo'
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceItem'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtItem'
  },
  __Dati_Numero017: {
    type: Number,
    alias: 'QuantitaMinima'
  },
  __Dati_Numero018: {
    type: Number,
    alias: 'QuantitaMassima'
  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagVincoloQuantita'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_Numero020: {
    type: Number,
    alias: 'VariazioneQtaPercentuale'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VariazioniListinoSchema;