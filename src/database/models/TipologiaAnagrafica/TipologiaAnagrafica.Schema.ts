import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipologiaAnagraficaPrivate } from './TipologiaAnagrafica.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipologiaAnagraficaSchema = new mongoose.Schema<ITipologiaAnagraficaPrivate>({

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
    alias: 'IdTipologiaAccount'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipologiaAccount'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagFornitore'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagClientePrimario'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagDistributore'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagClienteFinale'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagCompagnia'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagOperatore'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagAttivo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodiceTipologiaAccount'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagCreatoMobile'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipiRuoliNoVisualizzazione'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdUtentiNoVisualizzazione'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagPersonaFisica'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagPersonaGiuridica'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagPubblicaAmministrazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipologiaAnagraficaSchema;