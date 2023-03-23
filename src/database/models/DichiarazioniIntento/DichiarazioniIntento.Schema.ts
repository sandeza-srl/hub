import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDichiarazioniIntentoPrivate } from './DichiarazioniIntento.Types.Private';


/* --------
* Schema Definition
* -------- */
const DichiarazioniIntentoSchema = new mongoose.Schema<IDichiarazioniIntentoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdDichiarazioneIntento',

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
    alias: 'DataOraModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccount',

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
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'NumProtocollo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Anno',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodiceContabile',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'NumDichiarazione',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataDichiarazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataProtocollo',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAliquota',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceAliquota',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtAliquota',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Valore',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'ValoreUtilizzato01',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'ValoreResiduo01',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagAggionaValori01',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataCorrente',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagAttiva01',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'ProtocolloTelematico1',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'ProtocolloTelematico2',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagIn',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagOut',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtDichiarazione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DichiarazioniIntentoSchema;