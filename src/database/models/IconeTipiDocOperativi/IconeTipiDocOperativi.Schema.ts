import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IIconeTipiDocOperativiPrivate } from './IconeTipiDocOperativi.Types.Private';


/* --------
* Schema Definition
* -------- */
const IconeTipiDocOperativiSchema = new mongoose.Schema<IIconeTipiDocOperativiPrivate>({

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
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'FlagTipo_TipoLista',

  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ImgIcona',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'IdPulsante',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagIn',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagOut',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagUtilizzaNuovaScheda012022',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdIconeTipiDocOperativi',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default IconeTipiDocOperativiSchema;