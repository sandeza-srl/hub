import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IFamiglieContenitoriPrivate } from './FamiglieContenitori.Types.Private';


/* --------
* Schema Definition
* -------- */
const FamiglieContenitoriSchema = new mongoose.Schema<IFamiglieContenitoriPrivate>({

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
    alias: 'IdFamigliaItem'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdSottoFamigliaContenitore'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdFamigliaContenitore'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtFamigliaContenitore'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'GeneraCodice_CifreProgressivo'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'GeneraCodice_Testo'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'GeneraCodice_Progressivo'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'GeneraCodice_ProssimoCodice'
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
    alias: 'Zero'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagControlloImpostazione'
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
export default FamiglieContenitoriSchema;