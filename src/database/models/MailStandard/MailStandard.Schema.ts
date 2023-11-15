import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IMailStandardPrivate } from './MailStandard.Types.Private';


/* --------
* Schema Definition
* -------- */
const MailStandardSchema = new mongoose.Schema<IMailStandardPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdMail',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'OggettoIniziale',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TestoMail',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'HtmlMail',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'Allegato1',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'Allegato2',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'Allegato3',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'Allegato4',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'Allegato5',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtMail',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'NomeAllegato1',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'NomeAllegato2',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'NomeAllegato3',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'NomeAllegato4',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'NomeAllegato5',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MailStandardSchema;