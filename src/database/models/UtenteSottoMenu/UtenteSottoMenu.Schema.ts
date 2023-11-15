import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUtenteSottoMenuPrivate } from './UtenteSottoMenu.Types.Private';


/* --------
* Schema Definition
* -------- */
const UtenteSottoMenuSchema = new mongoose.Schema<IUtenteSottoMenuPrivate>({

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
    alias: 'TxtUtente',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'IdSottomenu',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtSottomenu',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagSelezione',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'OrdineSottomenu',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdLingua',

  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ImgIcona',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagMobile',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagMobileiPad',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagPersonalizzato',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipoRuolo',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo006: {
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
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagRecordImportato',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'NumeroStessoSottomenuPerUtente',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UtenteSottoMenuSchema;