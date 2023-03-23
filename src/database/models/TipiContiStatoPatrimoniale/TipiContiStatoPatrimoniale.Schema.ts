import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiContiStatoPatrimonialePrivate } from './TipiContiStatoPatrimoniale.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiContiStatoPatrimonialeSchema = new mongoose.Schema<ITipiContiStatoPatrimonialePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoContoStatoPatrimoniale',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoContoStatoPatrimoniale',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagAttivo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtFattore',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagPassivo',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'ClasseTipoContoStatoPatrimoniale',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'SottoClasseTipoContoStatoPatrimoniale',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceContabile',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceTipoContoStatoPatrimoniale',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagFisco',

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
  __Dati_Numero005: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagIva',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagContiClienti',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagContiFornitori',

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
export default TipiContiStatoPatrimonialeSchema;