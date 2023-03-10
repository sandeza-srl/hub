import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiStatiArticoloCicloPrivate } from './TipiStatiArticoloCiclo.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiStatiArticoloCicloSchema = new mongoose.Schema<ITipiStatiArticoloCicloPrivate>({

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
    alias: 'IdStatoArticoloCiclo'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtStatoArticoloCiclo'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagProduzione'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Ordinamento'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceStatoArticoloCiclo'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagAttivo'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodiceTxtOrdinamentoStatoAutomatico'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Zero'
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
  __Dati_Testo006: {
    type: String,
    alias: 'UtenteCreazione'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'UtenteModifica'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagArticolo'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagCiclo'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtOrdinamentoStatoAutomatico'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagGeneraRevisione'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagFirmaStatoArticolo'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdTipoRuoloFirma'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdRicorrenzaRecord'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtUtente'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiStatiArticoloCicloSchema;