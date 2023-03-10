import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IComunicazioniAnagraficaPrivate } from './ComunicazioniAnagrafica.Types.Private';


/* --------
* Schema Definition
* -------- */
const ComunicazioniAnagraficaSchema = new mongoose.Schema<IComunicazioniAnagraficaPrivate>({

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
    alias: 'Oggetto'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'Testo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdComunicazioneAnagrafica'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataEsecuzione'
  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraEsecuzione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraEsecuzione'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagMail'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUtente'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagFax'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagPosta'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagChiamata'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdComunicazioneAnagraficaOriginale'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagBloccato'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagIn'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagOut'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtTipoComunicazione'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdDocOperativo'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdDocContabile'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdIntervento'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdOfferta'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdProgetto'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdRigaOrdine'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ComunicazioniAnagraficaSchema;