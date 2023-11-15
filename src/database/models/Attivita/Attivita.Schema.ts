import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IAttivitaPrivate } from './Attivita.Types.Private';


/* --------
* Schema Definition
* -------- */
const AttivitaSchema = new mongoose.Schema<IAttivitaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'TxtAttivita',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdSocieta',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtSocieta',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'ClassificazioneAttivita',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'IdAttivita',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'Data',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo005: {
    type: String,
    alias: 'MailOggettoIniziale',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'MailTesto',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagConclusa',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'FlagConclusaVedi',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdCampagna',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'PrioritaNumero',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'PrioritaTesto',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Tempo',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'IdAttivitaStandard',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraInizio',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraFine',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'MailNome',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'MailAllegato1',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'MailAllegato2',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'MailAllegato3',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'MailAllegato4',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'MailAllegato5',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'MailHtml',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'MailBody',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'MailIdentita',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'MailDestinatario',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'MailUser',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'MailOggetto',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdMail',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AttivitaSchema;