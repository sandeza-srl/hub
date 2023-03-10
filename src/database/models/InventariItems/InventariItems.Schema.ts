import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IInventariItemsPrivate } from './InventariItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const InventariItemsSchema = new mongoose.Schema<IInventariItemsPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdInventarioItem'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInventario'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdFamigliaItem'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdSottoFamigliaItem'
  },
  __Dati_Numero002: {
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
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiornaQta01'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagInventarioCreato'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagAggiornaQta02'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagAggiornaQta03'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdDocOperativoIngresso'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdDocOperativoUscita'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'Descrizione'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InventariItemsSchema;