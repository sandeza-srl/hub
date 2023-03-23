import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IMontaggioUtensiliAttrezzaturePrivate } from './MontaggioUtensiliAttrezzature.Types.Private';


/* --------
* Schema Definition
* -------- */
const MontaggioUtensiliAttrezzatureSchema = new mongoose.Schema<IMontaggioUtensiliAttrezzaturePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdMontaggioUtensiliAttrezzature',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdOpzioneProd',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdPosizione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtPosizione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtGruppo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'Note',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Offset',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAccountCompagnia',

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
  __Dati_Numero002: {
    type: Number,
    alias: 'NumeroTipiUtensili',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiorna',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdRicorrenzaRecord',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MontaggioUtensiliAttrezzatureSchema;