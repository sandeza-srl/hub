import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IUpdateItemsPrivate } from './UpdateItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const UpdateItemsSchema = new mongoose.Schema<IUpdateItemsPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdSessione'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdUpdateItems'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UpdateItemsSchema;