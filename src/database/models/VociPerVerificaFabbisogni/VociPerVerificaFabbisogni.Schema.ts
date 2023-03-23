import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociPerVerificaFabbisogniPrivate } from './VociPerVerificaFabbisogni.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociPerVerificaFabbisogniSchema = new mongoose.Schema<IVociPerVerificaFabbisogniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
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
  __Dati_Testo001: {
    type: String,
    alias: 'IdVociPerVerificaFabbisogni',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'IdItem',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagAggiornaValori',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdVoceDocOperativo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'QuantitaAssegnata',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'QuantitaUtilizzabileTotale',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'QuantitaTotaleFabbisogno',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'PercAssegnazione',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociPerVerificaFabbisogniSchema;