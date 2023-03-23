import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiTurnoPrivate } from './TipiTurno.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiTurnoSchema = new mongoose.Schema<ITipiTurnoPrivate>({

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
    alias: 'IdTipoTurno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'CodiceTipoTurno',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoTurno',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraInizio',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'Durata',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdReparto',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceTxtTipoTurnoAutomatico',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagSaltaData',

  },
  __Dati_Ora003: {
    type: String,
    alias: 'OraFine',

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
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiTurnoSchema;