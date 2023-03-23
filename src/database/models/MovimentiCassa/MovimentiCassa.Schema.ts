import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IMovimentiCassaPrivate } from './MovimentiCassa.Types.Private';


/* --------
* Schema Definition
* -------- */
const MovimentiCassaSchema = new mongoose.Schema<IMovimentiCassaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'AnnoMovimentoCassa',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'AnnoMeseMovimentoCassa',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ConversioneValutaSuPrincipale',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataMovimentoCassa',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagIn',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagOut',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountEmittente',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountPagatore',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountTutti',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdCassaBancaEmittente',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdCassaBancaMovimentoCassa',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdCassaBancaPagatore',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdCassaBancaTutti',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdMovimentoCassa',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'MeseMovimentoCassa',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtMetodoPagamento',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'SettimanaMovimentoCassa',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'SimboloValuta',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtCassaBancaMovimentoCassa',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'VEntrata',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'VPagato',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'VPagatoSegno',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'VPagatoValuta',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'VUscita',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdValuta',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'ConversioneValutaAPrincipale',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataValuta',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
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
  __Dati_Testo015: {
    type: String,
    alias: 'IdMetodoPagamento',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagContanti',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagRiba',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagRitenuta',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'SimboloValutaRidotto',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtValuta',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdAccountMovimentoCassa',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'TxtAccountMovimentoCassa',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataRegistrazioneMovimentoCassa',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagAggiornaValori',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'VDaInserireValuta',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'Progressivo',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'CodiceMovimentoCassa',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'AnnoMeseCreazione',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdProgramma',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdAssociazione',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagCambioCassa',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagNonContabilizzato',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdLogInvioRiBa',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'Note',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FlagRID',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'DescrizionePerStampa',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagContabilizzabile',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagDaContabilizzare',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'FlagContabilizzato',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdUtenteContabilizzazione',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraDaContabilizzare',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraContabilizzato',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdIntervento',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MovimentiCassaSchema;