import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IP_VL_SlotVariazioniCalendarioPrivate } from './P_VL_SlotVariazioniCalendario.Types.Private';


/* --------
* Schema Definition
* -------- */
const P_VL_SlotVariazioniCalendarioSchema = new mongoose.Schema<IP_VL_SlotVariazioniCalendarioPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataFine',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataInizio',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraFine',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraInizio',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagAggiungi',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagRimuovi',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdVariazioniCalendario',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraFine',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraInizio',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdP_VL_SlotVariazioniCalendario',

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
export default P_VL_SlotVariazioniCalendarioSchema;