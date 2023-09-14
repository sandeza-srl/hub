import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IIndirizziRubricaPrivate } from './IndirizziRubrica.Types.Private';


/* --------
* Schema Definition
* -------- */
const IndirizziRubricaSchema = new mongoose.Schema<IIndirizziRubricaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'Cap',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'Cellulare',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'Citta',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdRubrica',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'Mail',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'SkypeUser',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'Telefono',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtLiberoIndirizzo',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'Via',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdZona',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdNazione',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'NomeNazione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'NomeNazioneIng',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'OrdineIndirizzi',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdIndirizzoRubrica',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtIndirizzoRubrica',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'DescrizioneStampabile',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'Fax',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IndirizzoCompletoVCard',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagConValori',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'Social',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'Linkedin',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'PasswordWeb',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagWebAttivo',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagDisiscrittoMailingList',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'Facebook',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'Twitter',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'Instagram',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdTipiRuoliNoVisualizzazione',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdUtentiNoVisualizzazione',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'InternoTelefono',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default IndirizziRubricaSchema;