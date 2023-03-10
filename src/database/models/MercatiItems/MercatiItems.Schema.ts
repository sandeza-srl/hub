import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IMercatiItemsPrivate } from './MercatiItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const MercatiItemsSchema = new mongoose.Schema<IMercatiItemsPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoMercato'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'CodiceTipoMercato'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoMercato'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdMercatoItem'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceTxtItemAutomatico'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MercatiItemsSchema;