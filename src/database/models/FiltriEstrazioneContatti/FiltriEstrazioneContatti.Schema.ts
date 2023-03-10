import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IFiltriEstrazioneContattiPrivate } from './FiltriEstrazioneContatti.Types.Private';


/* --------
* Schema Definition
* -------- */
const FiltriEstrazioneContattiSchema = new mongoose.Schema<IFiltriEstrazioneContattiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdEstrazioneContatti'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdFiltroEstrazione'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'NomeFiltro'
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
export default FiltriEstrazioneContattiSchema;