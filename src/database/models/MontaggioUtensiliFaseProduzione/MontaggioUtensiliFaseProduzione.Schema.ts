import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IMontaggioUtensiliFaseProduzionePrivate } from './MontaggioUtensiliFaseProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const MontaggioUtensiliFaseProduzioneSchema = new mongoose.Schema<IMontaggioUtensiliFaseProduzionePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdMontaggioUtensiliFaseProduzione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdOpzioneProd',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdPosizione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtGruppo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtPosizione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdMontaggioUtensiliAttrezzature',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'Offset',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'NumeroTipiUtensili',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagAggiorna',

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
  __Dati_Testo013: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdRigaOrdine',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MontaggioUtensiliFaseProduzioneSchema;