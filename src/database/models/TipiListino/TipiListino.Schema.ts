import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiListinoPrivate } from './TipiListino.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiListinoSchema = new mongoose.Schema<ITipiListinoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoListino'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoListino'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagVendita'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Priorita'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagListinoPrincipale'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'VariazionePercentuale'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'VariazioneUnitaria'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoListinoDiRiferimento'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoListinoDiRiferimento'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdFamigliaItem'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdSottoFamigliaItem'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInizioValidita'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataFineValidita'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagValidoSempre'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagValiditaData'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagValiditaFamiglia'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagValiditaSottoFamiglia'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagValoreRicarico'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagValoreFisso'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'PercentualeRicarico'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdTipoListinoOrigine'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagDaEsportare'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdFamigliaItemOrigine'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdSottoFamigliaItemOrigine'
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagListinoIvato'
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'QuantitaMinima'
  },
  __Dati_Numero017: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiListinoSchema;