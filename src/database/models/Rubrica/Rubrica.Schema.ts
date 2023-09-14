import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRubricaPrivate } from './Rubrica.Types.Private';


/* --------
* Schema Definition
* -------- */
const RubricaSchema = new mongoose.Schema<IRubricaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccount',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdRubrica',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'NomeRubrica',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoPosizione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'Note',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagVediClientiPrimari',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagVediCompagnie',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagVediDistributori',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagVediClientiFinali',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagVediOperatori',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagVediTutti',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagVediFornitori',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'LetteraInizialeNome',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'Appellativo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'DescrizioneStampabile',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'LettereNomeRubrica',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataNascita',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagMaschio',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagFemmina',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'CittaNascita',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdNazioneNascita',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'Nazionalita',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceFiscale',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'NomeNazioneNascitaIng',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdListeDiffusione',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceIdentificativo',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtAccountTutti',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdSede',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdTipoPosizione',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtSede',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'NomeRubricaPosizione',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'vCard',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagInvioDocumentiContabili',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagInvioDocumentiOperativi',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagInvioDocumentiCommerciali',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'TxtNome',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'TxtCognome',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdUtentiNoVisualizzazione',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataPrimoContatto',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataUltimoContatto',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo028: {
    type: String,
    alias: 'LingueParlate',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RubricaSchema;