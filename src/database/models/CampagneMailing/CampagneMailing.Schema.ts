import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ICampagneMailingPrivate } from './CampagneMailing.Types.Private';


/* --------
* Schema Definition
* -------- */
const CampagneMailingSchema = new mongoose.Schema<ICampagneMailingPrivate>({

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
    alias: 'DataOraModifica'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdEstrazioneContatti'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdCampagnaMailing'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtEstrazioneContatti'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtCampagnaMailing'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiorna'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'NumeroInviate'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'NumeroBounce'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'NumeroClick'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'NumeroDisiscritto'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'NumeroRicevuta'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'NumeroSpam'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'NumeroAperta'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'HtmlMail'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'OggettoMail'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'TestoMail'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdDocumentiAllegati'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'IndirizzoWebCampagna'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'NumeroContattiTotale'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CampagneMailingSchema;