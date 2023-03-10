import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IFasiPrivate } from './Fasi.Types.Private';


/* --------
* Schema Definition
* -------- */
const FasiSchema = new mongoose.Schema<IFasiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdFase'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCiclo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdArticolo'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdOpzioneProd'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdRisorsa'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'IncidenzaScarto'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtFase'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtRisorsa'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'PercScartoFaseSuTotaleScarto'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'HAttesa'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagAttesaTotale'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceFase'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'CodiceRisorsa'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'NumeroFase'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagAggiornaFase'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'CodiceTxtFaseAutomatico'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'CodiceTxtFaseRisorsaAutomatico'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceTxtRisorsaAutomatico'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'FlagSelezione'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'PercScartoSingolaFase'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'PercQtEntrataFase'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'PercScartoImpostata'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaRisorsa'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtUtente'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdRicorrenzaRecord'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default FasiSchema;