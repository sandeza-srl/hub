import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiMercatiPrivate } from './TipiMercati.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiMercatiSchema = new mongoose.Schema<ITipiMercatiPrivate>({

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
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiMercatiSchema;