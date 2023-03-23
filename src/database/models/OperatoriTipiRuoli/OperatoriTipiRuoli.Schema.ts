import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IOperatoriTipiRuoliPrivate } from './OperatoriTipiRuoli.Types.Private';


/* --------
* Schema Definition
* -------- */
const OperatoriTipiRuoliSchema = new mongoose.Schema<IOperatoriTipiRuoliPrivate>({

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
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagAttivo',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdOperatoreTipoRuolo',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtAccountOperatore',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtUtenteModifica',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdTipoRuolo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtTipoRuolo',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagResponsabile',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OperatoriTipiRuoliSchema;