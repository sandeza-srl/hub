import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFestivitaPrivate } from './Festivita.Types.Private';


/* --------
* Schema Definition
* -------- */
const FestivitaSchema = new mongoose.Schema<IFestivitaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdFestivita',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtFestivita',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtDescrizioneFestivita',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdZona',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagVincoloZona',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInizio',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataFine',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraInizio',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraFine',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagRicorrente',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default FestivitaSchema;