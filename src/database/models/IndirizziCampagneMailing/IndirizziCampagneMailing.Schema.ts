import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IIndirizziCampagneMailingPrivate } from './IndirizziCampagneMailing.Types.Private';


/* --------
* Schema Definition
* -------- */
const IndirizziCampagneMailingSchema = new mongoose.Schema<IIndirizziCampagneMailingPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'Cognome'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdRubrica'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'Nome'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'NomeRubrica'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraInvio'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraRicezione'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagSpam'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdCampagnaMailing'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtCampagnaMailing'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdEstrazioneContatti'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagBounce'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagRicevuta'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagClick'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagInviata'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagDisiscritto'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagAperta'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAccountCompagnia'
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
export default IndirizziCampagneMailingSchema;