import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IInfoAggiuntiveAnagraficaPrivate } from './InfoAggiuntiveAnagrafica.Types.Private';


/* --------
* Schema Definition
* -------- */
const InfoAggiuntiveAnagraficaSchema = new mongoose.Schema<IInfoAggiuntiveAnagraficaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccount'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'Etichetta'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'Contenuto'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdTipoInfoAggiuntiva'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipologiaAnagrafica'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceTipologiaAnagrafica'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdTipoEtichetta'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'ContenutoData'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ContenutoNumero'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdUtentiNoVisualizzazione'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdInfoAggiuntivaAnagrafica'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero'
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
export default InfoAggiuntiveAnagraficaSchema;