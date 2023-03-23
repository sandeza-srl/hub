import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiPianiCampionamentoPrivate } from './TipiPianiCampionamento.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiPianiCampionamentoSchema = new mongoose.Schema<ITipiPianiCampionamentoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodiceTipoPianoCampionamento',

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
    alias: 'FlagAttiva',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'FlagSelezione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdTipoPianoCampionamento',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtTipoPianoCampionamento',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'UtenteCreazione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'UtenteModifica',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagTipoNumeroControlli',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceTxtTipoPianoCampionamentoAutomatico',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdTipoNormativa',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtTipoNormativa',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdRicorrenzaRecord',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtUtente',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiPianiCampionamentoSchema;