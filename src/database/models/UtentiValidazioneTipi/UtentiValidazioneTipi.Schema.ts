import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUtentiValidazioneTipiPrivate } from './UtentiValidazioneTipi.Types.Private';


/* --------
* Schema Definition
* -------- */
const UtentiValidazioneTipiSchema = new mongoose.Schema<IUtentiValidazioneTipiPrivate>({

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
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoDocOperativo',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceStato',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'NuoviStati_IdTipoStatoTipoDocOperativo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'NuoviStati_IdTipoRuolo',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'NuoviStati_TxtTipoRuolo',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UtentiValidazioneTipiSchema;