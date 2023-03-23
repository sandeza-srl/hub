import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPreparazioneFasiPrivate } from './PreparazioneFasi.Types.Private';


/* --------
* Schema Definition
* -------- */
const PreparazioneFasiSchema = new mongoose.Schema<IPreparazioneFasiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdPreparazioneFasi',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdRichiestaPreparazioneFasi',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdOpzioneProd',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdOperatoreProduzione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdTipoUtensileFaseProduzione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdItemOpzioneProd',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdVoceDocOperativo',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdRegistrazioneRisorsa',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdRegistrazioneFaseProduzione',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagRichiesta',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagPreparazione',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Qt',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagRichiestaChiusa',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagPreparazioneChiusa',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdTipoUtensile',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'QuantitaEffetivaPrelevata',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PreparazioneFasiSchema;