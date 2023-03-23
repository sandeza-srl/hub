import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInstallazioneOriginePrivate } from './InstallazioneOrigine.Types.Private';


/* --------
* Schema Definition
* -------- */
const InstallazioneOrigineSchema = new mongoose.Schema<IInstallazioneOriginePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'LogoProdotto',

  },
  __Dati_Contenitore002: {
    type: String,
    alias: 'LogoProduttore',

  },
  __Dati_Contenitore003: {
    type: String,
    alias: 'LogoProdottoStampa',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'Produttore',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'VersioneProdotto',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'UtentiUfficioAbilitati',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInstallazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataUltimoAggiornamentoDati',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtProdotto',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdProdotto',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataScadenzaNoleggio',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagScadenzaNoleggio',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtInstallatore',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'UtentiGoAbilitati',

  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataUltimoIngresso',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataIngressoAttuale',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagScadutoNoleggio',

  },
  __Dati_Contenitore004: {
    type: String,
    alias: 'LogoProdottoZChiusa',

  },
  __Dati_Contenitore005: {
    type: String,
    alias: 'VideoProdotto',

  },
  __Dati_Contenitore006: {
    type: String,
    alias: 'LogoScuro',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'UtentiProduzioneAbilitati',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'UtentiWebAbilitati',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'UtentiGoDisponibili',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'UtentiUfficioDisponibili',

  },
  __Dati_Contenitore007: {
    type: String,
    alias: 'LogoProduttoreScuro',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'UtentiProduzioneDisponibili',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'NomeInstallazione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'MailHelp',

  },
  __Dati_Data006: {
    type: Date,
    alias: 'DataScadenzaAggiornamento',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagScadenzaAggiornamento',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagScadutoAggiornamento',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtRespCommerciale',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtRespLogistica',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtRespTecnico',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdPersistenteServer',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'JS_SandezaApp',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'CSS_FullCalendar',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CSS_jQueryUI',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'CSS_FrappeGantt',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CSS_SandezaUI',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'JS_AccountingJS',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'JS_AngularJS',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagDialogoGestionale',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagDialogoContabilita',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagDialogoEasycom',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagDialogoMacchine',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagDialogoWeb',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagFatturazioneElettronica',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'CollegamentoMacchine_FlagOrchestra',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'CollegamentoMacchine_Url_Orchestra',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'CollegamentoMacchine_FlagAEC',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'CollegamentoMacchine_Url_AEC',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'JS_FullCalendar',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'JS_jQuery',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'JS_jQueryUI',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'JS_MomentJS',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'JS_Lodash',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'JS_ChartJS',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'JS_FrappeGantt',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'JS_D3JS',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FlagDialogoTableau',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagDialogoTableau_Registries',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagDialogoTableau_AccountingDocs',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'FlagDialogoTableau_OperativeDocs',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagDialogoTableau_Items',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagDialogoTableau_Articles',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'FlagDialogoTableau_Addresses',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'FlagDialogoTableau_DataRecorded',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'FlagDialogoTableau_Offers',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'FlagDialogoTableau_Orders',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'FlagDialogoTableau_Events',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'FlagDialogoTableau_Stock',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'FlagDialogoTableau_Resources',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'ImportCustomNomeFile',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'JS_TreeTable',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'JS_TreeTableTest',

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
  __Dati_Numero036: {
    type: Number,
    alias: 'FlagDialogoGestionale_TipiUtensiliPerFaseProduzione',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'FlagDialogoGestionale_Registries',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'FlagDialogoGestionale_Items',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'FlagBloccoAggiornamenti',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraBloccoAggiornamenti',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo032: {
    type: String,
    alias: 'TxtUtenteBloccoAggiornamenti',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'RedboothWorkspaceID',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'Redbooth_API_Client_ID',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'Redbooth_API_Client_Secret',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'Field114',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'CollegamentoMacchine_FlagCamngo',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'FlagAbilitaCardNoteRelease',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'CollegamentoMacchine_FlagInvioProgrammaMacchina',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'CollegamentoMacchine_FlagRicezioneProgrammaMacchina',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'PrintNode_IndirizzoMail',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'PrintNode_Password',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'PrintNode_APIKey',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'ApiGateway_DB_Mongo',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InstallazioneOrigineSchema;