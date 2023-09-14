import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICalendarioInterventiPrivate } from './CalendarioInterventi.Types.Private';


/* --------
* Schema Definition
* -------- */
const CalendarioInterventiSchema = new mongoose.Schema<ICalendarioInterventiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCalendarioInterventi',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'Data',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Anno',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Mese',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'AnnoMese',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'NumProgrammati',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'NumEseguiti',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Settimana',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'AnnoSettimana',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagAggiornaTotali',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtAccountOperatore',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'NumOreEseguite',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'ValoreGenerato',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'UltimoIntervento_Codice',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'UltimoIntervento_Destinatario',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'UltimoIntervento_Txt',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'PrevalenteIntervento_Codice',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'PrevalenteIntervento_Destinatario',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'PrevalenteIntervento_Txt',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdClasseInterventi',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CalendarioInterventiSchema;