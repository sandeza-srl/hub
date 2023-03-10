import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiSoluzioniPrivate } from './TipiSoluzioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiSoluzioniSchema = new mongoose.Schema<ITipiSoluzioniPrivate>({

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
    alias: 'IdTipoSoluzione'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoImpianto'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoSoluzione'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
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
export default TipiSoluzioniSchema;