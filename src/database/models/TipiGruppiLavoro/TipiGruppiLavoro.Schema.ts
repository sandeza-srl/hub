import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiGruppiLavoroPrivate } from './TipiGruppiLavoro.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiGruppiLavoroSchema = new mongoose.Schema<ITipiGruppiLavoroPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoGruppoLavoro'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'NomeFormato'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'NomeScriptStampa'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'Note'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtTipoGruppoLavoro'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtUtenteCreazione'
  },
  __Dati_Testo009: {
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
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceTipoGruppoLavoro'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiorna_DaTipiRuoliTipiGruppoLavoro'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'NumeroTipiRuoliTipiGruppoLavoro'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdTipiRuoliPerTipoGruppoLavoro_Tutti'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdReferenteTipiRuoliTipiGruppoLavoro'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtTipiRuoliPerTipoGruppoLavoro_Tutti'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'TxtTipoRuoloReferente'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiGruppiLavoroSchema;