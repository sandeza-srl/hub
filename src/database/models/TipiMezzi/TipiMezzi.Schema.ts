import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiMezziPrivate } from './TipiMezzi.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiMezziSchema = new mongoose.Schema<ITipiMezziPrivate>({

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
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAnagrafica'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoMezzo'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtUtenteCreazione'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUtenteModifica'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'Codice'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'Descrizione'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Tara'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiMezziSchema;