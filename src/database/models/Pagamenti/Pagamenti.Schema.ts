import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPagamentiPrivate } from './Pagamenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const PagamentiSchema = new mongoose.Schema<IPagamentiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdDocContabile',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'SimboloValuta',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'AnnoEffettivo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'AnnoMeseEffettivo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'ConversioneValutaAPrincipale',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataEffettivaPagamento',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'MeseEffettivo',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'SettimanaEffettiva',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'VPagato',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'VPagatoSegno',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'VPagatoValuta',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagOut',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdCassaBancaEmittente',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdCassaBancaPagatore',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdCassaBancaTutti',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtMetodoPagamento',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagRiba',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagIn',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'VEntrata',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VUscita',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataPrevistaPagamento',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdPagamento',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdCassaBancaPagamento',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'AnnoMesePrevisto',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'AnnoPrevisto',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'MesePrevisto',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdScadenza',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtCassaBancaPagamento',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceDocContabile',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceEsterno',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'CodiceVisualizza',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdAccountEmittente',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdAccountPagatore',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdAccountTutti',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'GiorniRitardo',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdMovimentoCassa',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataRegistrazioneDocContabile',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataDocContabile',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data005: {
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
  __Dati_Numero017: {
    type: Number,
    alias: 'ConversioneValutaSuPrincipale',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdMetodoPagamento',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'SimboloValutaRidotto',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'TxtValuta',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdPeriodoContabile',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtPeriodoContabile',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdAccountDocContabile',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'FlagResoconto',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdValuta',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagContabilizzabile',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagDaContabilizzare',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagContabilizzato',

  },
  __Dati_Testo031: {
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
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagRID',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PagamentiSchema;