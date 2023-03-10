import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IMetodiPagamentoPrivate } from './MetodiPagamento.Types.Private';


/* --------
* Schema Definition
* -------- */
const MetodiPagamentoSchema = new mongoose.Schema<IMetodiPagamentoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'TxtMetodoPagamento'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagRiba'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagContanti'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdMetodoPagamento'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagRitenuta'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'CodiceCausaleContabileClienti'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'CodiceCausaleContabileFornitori'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagRID'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdCodificaMetodoPagamento'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodiceCodifica'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MetodiPagamentoSchema;