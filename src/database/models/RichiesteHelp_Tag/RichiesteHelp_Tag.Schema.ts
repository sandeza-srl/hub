import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRichiesteHelp_TagPrivate } from './RichiesteHelp_Tag.Types.Private';


/* --------
* Schema Definition
* -------- */
const RichiesteHelp_TagSchema = new mongoose.Schema<IRichiesteHelp_TagPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'Redbooth_IdTag',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTag',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagTipoTagStato',

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
    alias: 'Uno',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTag',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RichiesteHelp_TagSchema;