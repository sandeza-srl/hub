import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiDocumentiPrivate } from './TipiDocumenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiDocumentiSchema = new mongoose.Schema<ITipiDocumentiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'TxtTipoDocumento',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoDocumento',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdInstallazione',

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
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiDocumentiSchema;