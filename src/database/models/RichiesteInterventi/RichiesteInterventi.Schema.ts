import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IRichiesteInterventiPrivate } from './RichiesteInterventi.Types.Private';


/* --------
* Schema Definition
* -------- */
const RichiesteInterventiSchema = new mongoose.Schema<IRichiesteInterventiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'TipoRichiesta'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataRichiesta'
  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraRichiesta'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataRisoluzione'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraPresaInCarico'
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraRichiesta'
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagAggiornaValori'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagUrgente'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'FlagUrgenteVedi'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagBloccoProduzione'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'FlagBloccoProduzioneVedi'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagPresaInCarico'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'FlagPresaInCaricoVedi'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccount'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountOperatore'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAreaRisorsa'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAttivitaControllo'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdImpianto'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdRisorsa'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdRubricaDestinatariReport'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdRubricaReferente'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdSchedaAttivitaControllo'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdSede'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdStrumento'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdTipoAttivitaControllo'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdTipoImpianto'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdTipologiaAccount'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdTipoStrumento'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdTipoUtensile'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdUtensile'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'NoteRichiesta'
  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraRisoluzione'
  },
  __Dati_Ora003: {
    type: String,
    alias: 'OraPresaInCarico'
  },
  __Dati_Ora004: {
    type: String,
    alias: 'TempoPresaInCarico'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'TxtAccountOperatore'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'TxtAttivitaControllo'
  },
  __Dati_Testo026: {
    type: String,
    alias: 'TxtStatoRichiesta'
  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtTipoAttivitaControllo'
  },
  __Dati_Testo028: {
    type: String,
    alias: 'TxtTipoOggettoAttivitaAutomatico'
  },
  __Dati_Testo029: {
    type: String,
    alias: 'TxtUtenteCreazione'
  },
  __Dati_Testo030: {
    type: String,
    alias: 'TxtUtenteUltimaModifica'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataPresaInCarico'
  },
  __Dati_DataOra005: {
    type: Date,
    alias: 'DataOraRisoluzione'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagRisolta'
  },
  __Dati_Testo031: {
    type: String,
    alias: 'FlagRisoltaVedi'
  },
  __Dati_Ora005: {
    type: String,
    alias: 'TempoRisoluzione'
  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdRichiestaIntervento'
  },
  __Dati_Testo033: {
    type: String,
    alias: 'CodiceAccount'
  },
  __Dati_Testo034: {
    type: String,
    alias: 'CodiceImpianto'
  },
  __Dati_Testo035: {
    type: String,
    alias: 'CodiceOggettoAttivitaAutomatico'
  },
  __Dati_Testo036: {
    type: String,
    alias: 'CodiceRisorsa'
  },
  __Dati_Testo037: {
    type: String,
    alias: 'CodiceStrumento'
  },
  __Dati_Testo038: {
    type: String,
    alias: 'CodiceTipoAttivita'
  },
  __Dati_Testo039: {
    type: String,
    alias: 'CodiceUtensile'
  },
  __Dati_Testo040: {
    type: String,
    alias: 'TxtAccount'
  },
  __Dati_Testo041: {
    type: String,
    alias: 'TxtAreaRisorsa'
  },
  __Dati_Testo042: {
    type: String,
    alias: 'TxtImpianto'
  },
  __Dati_Testo043: {
    type: String,
    alias: 'TxtOggettoAttivitaAutomatico'
  },
  __Dati_Testo044: {
    type: String,
    alias: 'TxtRisorsa'
  },
  __Dati_Testo045: {
    type: String,
    alias: 'TxtRubricaReferente'
  },
  __Dati_Testo046: {
    type: String,
    alias: 'TxtSede'
  },
  __Dati_Testo047: {
    type: String,
    alias: 'TxtStrumento'
  },
  __Dati_Testo048: {
    type: String,
    alias: 'TxtUtensile'
  },
  __Dati_Testo049: {
    type: String,
    alias: 'IdArticolo'
  },
  __Dati_Testo050: {
    type: String,
    alias: 'IdDocOperativo'
  },
  __Dati_Testo051: {
    type: String,
    alias: 'IdContenitore'
  },
  __Dati_Testo052: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Testo053: {
    type: String,
    alias: 'TxtContenitore'
  },
  __Dati_Testo054: {
    type: String,
    alias: 'TxtDocOperativo'
  },
  __Dati_Testo055: {
    type: String,
    alias: 'TxtItem'
  },
  __Dati_Testo056: {
    type: String,
    alias: 'TxtArticolo'
  },
  __Dati_Testo057: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RichiesteInterventiSchema;