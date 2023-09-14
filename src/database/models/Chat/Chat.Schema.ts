import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IChatPrivate } from './Chat.Types.Private';


/* --------
* Schema Definition
* -------- */
const ChatSchema = new mongoose.Schema<IChatPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdUtentiChat',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtUtenteMittente',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'Messaggio',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagNuovo',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdUtenteMittente',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraInvio',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo005: {
    type: String,
    alias: 'MessaggioVisualizza',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdUtenteDestinatario',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'ChiaveUtentiChat',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdChat',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdDocumentoChat',

  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'Allegato',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'NomeAllegato',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ChatSchema;