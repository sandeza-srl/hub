import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiMagazziniPrivate } from './TipiMagazzini.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiMagazziniSchema = new mongoose.Schema<ITipiMagazziniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoMagazzino',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoMagazzino',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagNonDisponibile',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagPrenotato',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceTipoMagazzino',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagDisponibileInternamente',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagDisponibileAltrove',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodiceTxtTipoMagazzinoAutomatico',

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
  __Dati_Testo006: {
    type: String,
    alias: 'UtenteCreazione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'UtenteModifica',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiMagazziniSchema;