import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiEtichetteItemsPrivate } from './TipiEtichetteItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiEtichetteItemsSchema = new mongoose.Schema<ITipiEtichetteItemsPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'TxtTipoEtichetta'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoEtichetta'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdTipoEtichettaOrigine'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagTipoData'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagTipoNumero'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagTipoTesto'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagValoriLiberi'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagValoriLista'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagValoriOkKo'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagValoriRange'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'FlagValoriTxt'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagAggiornaDaValori'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'NumValoriTipiEtichette'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagUtilizzataItems'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagUtilizzataOfferte'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiEtichetteItemsSchema;