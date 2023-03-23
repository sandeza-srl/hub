import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IScadenzeDocContabiliPrivate } from './ScadenzeDocContabili.Types.Private';


/* --------
* Schema Definition
* -------- */
const ScadenzeDocContabiliSchema = new mongoose.Schema<IScadenzeDocContabiliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'AnnoMesePrevisto',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'AnnoPrevisto',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ConversioneValutaSuPrincipale',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataPrevistaPagamento',
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
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagRiba',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdDocContabile',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdScadenza',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'MesePrevisto',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtMetodoPagamento',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'PercentualeSuTotaleDoc',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'SimboloValuta',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'VScadenzaValuta',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'VScadenza',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'VPagato',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'VPagatoValuta',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VDaPagareValuta',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'VDaPagare',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagPagatoTutto',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceDocContabile',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceEsterno',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceVisualizza',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataDocContabile',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdAccountEmittente',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdAccountPagatore',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdAccountTutti',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdCassaBancaEmittente',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdCassaBancaPagatore',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'VScadenzaSegno',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'VPagatoSegno',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'VDaPagareSegno',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtAccountOperatore',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataRegistrazioneDocContabile',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdPeriodoContabile',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'TxtPeriodoContabile',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdMetodoPagamento',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdRegolaScadenze',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdValuta',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'ConversioneValutaAPrincipale',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagRitenuta',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'TxtAccountEmittente',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'TxtAccountPagatore',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'TxtAccountDocContabile',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'SimboloValutaRidotto',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'LinguaDocumento',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'LinguaPrincipale',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'DescrizioneMetodoPagamento',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'DescrizioneMetodoPagamento_LinguaPrincipale',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'DescrizioneRegolaScadenze',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'DescrizioneRegolaScadenze_LinguaPrincipale',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagRibaDaInviare',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagRibaInviata',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FlagRibaSelezionata',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagRibaBloccata',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdLogInvioRiBa',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'ProgressivoRiba',

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
  __Dati_Numero026: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdAccountDocContabile',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagAggiornaValori',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'VScadenzaValutaSegno',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'VDaPagareValutaSegno',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'NumeroScadenza',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdCassaBancaEmittenteAppoggioRiBa',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdIntermediario',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdComunicazione01',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdComunicazione02',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'IdComunicazione03',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'FlagInviaSollecito',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'FlagRID',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'FlagRIDBloccato',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'FlagRIDInviato',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'FlagRIDDaInviare',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'FlagRIDSelezionato',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdCassaBancaScadenza',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ScadenzeDocContabiliSchema;