import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IItemRipartitoriPrivate } from './ItemRipartitori.Types.Private';


/* --------
* Schema Definition
* -------- */
const ItemRipartitoriSchema = new mongoose.Schema<IItemRipartitoriPrivate>({

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
    alias: 'IdItem'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtItem'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagDaEliminare'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagTipoAzione'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagTipoBene'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagTipoContratto'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagTipoLavorazione'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagTipoOraLavoro'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagInserimentoAutomaticoInterventi'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ItemRipartitoriSchema;