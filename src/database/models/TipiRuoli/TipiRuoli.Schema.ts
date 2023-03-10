import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiRuoliPrivate } from './TipiRuoli.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiRuoliSchema = new mongoose.Schema<ITipiRuoliPrivate>({

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
    alias: 'IdTipoRuolo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoRuolo'
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
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAttivo'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'NumOperatoriAttivi'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountOperatori'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagAggiorna'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagFirmaStatoArticolo'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'Note'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'Area'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtOperatoriTutti'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtTipoRuoloOperatoriTutti'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiRuoliSchema;