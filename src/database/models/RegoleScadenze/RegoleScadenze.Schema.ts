import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRegoleScadenzePrivate } from './RegoleScadenze.Types.Private';


/* --------
* Schema Definition
* -------- */
const RegoleScadenzeSchema = new mongoose.Schema<IRegoleScadenzePrivate>({

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
    alias: 'TxtRegolaScadenza',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdRegolaScadenza',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'NumeroMassimoScadenze',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'GiornoFisso',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'NumeroPrimaScadenza',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagGiornoFisso',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'IntervalloScadenze',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'MeseFisso1',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'EsempioDataAttivazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'MeseFisso2',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'MeseFisso3',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'MeseFisso4',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'MeseFisso5',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'MeseFisso6',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'NumeroMesiFissi',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'EsempioTotale',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagImportoProporzionale',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'EsempioNumeroScadenze',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'Zero',

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
  __Dati_Numero018: {
    type: Number,
    alias: 'EsempioVIvaVoci',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'FlagTipoMeseGiorno',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'EsempioIdMetodoPagamento',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'EsempioImponibile',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'EsempioGiorniTotali',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'EsempioVImponibileVoci',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'EsempioIva',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'FlagTxtTipoMeseGiorno',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FlagScriptInCorso',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagDocOperativi',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagSoloFeriali',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'GiorniAggiuntivi',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagGiorniAggiuntivi',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'NumeroGiorniDaAggiungere',

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
export default RegoleScadenzeSchema;