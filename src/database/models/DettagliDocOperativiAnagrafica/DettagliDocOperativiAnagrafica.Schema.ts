import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IDettagliDocOperativiAnagraficaPrivate } from './DettagliDocOperativiAnagrafica.Types.Private';


/* --------
* Schema Definition
* -------- */
const DettagliDocOperativiAnagraficaSchema = new mongoose.Schema<IDettagliDocOperativiAnagraficaPrivate>({

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
    alias: 'DataOraModifica'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdDettagliDocOperativiAnagrafica'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccount'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoDocOperativo'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiorna'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtAccount'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtTipoDocOperativo'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceTipoDocOperativo'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceAccount'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Banca_FlagProponi'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Economici_FlagProponi'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Resa_FlagProponi'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Pagamento_FlagProponi'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Vettore_FlagProponi'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'Banca_IdCassaBancaAppoggio'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'Banca_IdCassaBancaRiferimento'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'Economici_IdAccountIntermediario'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'Pagamento_IdMetodoPagamento'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'Pagamento_IdRegolaScadenza'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'Pagamento_NoteCondizioni'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'Pagamento_NotePagamento'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'Resa_AspettoEsteriore'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'Resa_CausaleTrasporto'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'Resa_Porto'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'Resa_IdIncoterm'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'Vettore_IdAccountVettore'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'Vettore_IdAccountSecondoVettore'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'Vettore_TipoVettore'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'Pagamento_TerminiDiPagamento'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DettagliDocOperativiAnagraficaSchema;