import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiImballiPrivate } from './TipiImballi.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiImballiSchema = new mongoose.Schema<ITipiImballiPrivate>({

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
    alias: 'IdTipoImballo'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoImballo'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'LarghezzaImballo'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'LunghezzaImballo'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'AltezzaImballo'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'AreaImballo'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'VolumeImballo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceTipoImballo'
  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ImgImballo'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'TaraImballo'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataModifica'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'UtenteCreazione'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'UtenteModifica'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceTxtTipoImballoAutomatico'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdRicorrenzaRecord'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtUtente'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiImballiSchema;