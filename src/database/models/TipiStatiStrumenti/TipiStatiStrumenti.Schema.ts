import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiStatiStrumentiPrivate } from './TipiStatiStrumenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiStatiStrumentiSchema = new mongoose.Schema<ITipiStatiStrumentiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
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
    alias: 'IdTipoStatoStrumento',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoStatoStrumento',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagDisponibile',

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
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagRiparazione',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagRottamato',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoStatoStrumentoAutomatico',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagInVerifica',

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
export default TipiStatiStrumentiSchema;