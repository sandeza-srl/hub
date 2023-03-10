import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiStatiImpiantiPrivate } from './TipiStatiImpianti.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiStatiImpiantiSchema = new mongoose.Schema<ITipiStatiImpiantiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagAttivo'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoStatoImpianto'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoStatoImpianto'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagDisponibile'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'FlagAttivoVedi'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'FlagDisponibileVedi'
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
    alias: 'FlagRiparazione'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'FlagRiparazioneVedi'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagRottamato'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'FlagRottamatoVedi'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Ordine'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtTipoStatoImpiantoAutomatico'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiStatiImpiantiSchema;