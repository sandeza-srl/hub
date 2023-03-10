import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IPagamentiInterventiPrivate } from './PagamentiInterventi.Types.Private';


/* --------
* Schema Definition
* -------- */
const PagamentiInterventiSchema = new mongoose.Schema<IPagamentiInterventiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdIntervento'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdPagamentoIntervento'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'AnnoMeseCreazione'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'AnnoMeseMovimentoPagamento'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'AnnoPagamentoIntervento'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodicePagamentoIntervento'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ConversioneValutaAPrincipale'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'ConversioneValutaSuPrincipale'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataPagamentoIntervento'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataRegistrazionePagamentoIntervento'
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataValuta'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagAggiornaValori'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagContanti'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagIn'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagNonContabilizzato'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagRiba'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagRitenuta'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountEmittente'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAccountPagamentoIntervento'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAccountPagatore'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdAccountTutti'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdCassaBancaEmittente'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdCassaBancaPagamentoIntervento'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdCassaBancaPagatore'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdCassaBancaTutti'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdMetodoPagamento'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdValuta'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'MesePagamentoIntervento'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'Note'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'Progressivo'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'SettimanaPagamentoIntervento'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'SimboloValuta'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'SimboloValutaRidotto'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtAccountPagamentoIntervento'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtCassaBancaPagamentoIntervento'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'TxtMetodoPagamento'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'TxtValuta'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'VEntrata'
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'VPagato'
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'VPagatoValuta'
  },
  __Dati_Numero017: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdAssociazione'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PagamentiInterventiSchema;