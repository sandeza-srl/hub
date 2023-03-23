import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiInterventiPrivate } from './TipiInterventi.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiInterventiSchema = new mongoose.Schema<ITipiInterventiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoIntervento',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoIntervento',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdTipoDocOperativo',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TipoDocumento',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'SottoTipoDocumento',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagDocOperativoUnico',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagDdtCreabile',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagPagamentoAbilitato',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdTipoDocOperativoDdt',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'NomeFormatoStampa',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdTipoDocumento',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdSottoTipoDocumento',

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
  __Dati_Numero005: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdCassaBanca',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagErroriValori',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagErroriValoriTxt',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagEreditaScontoOrigine',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagFeedbackRichiesto',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'ContenutoMailFeedback',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'MailServerNome',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'MailServerIndirizzo',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'MailServerSMTP',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'MailServerPorta',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'MailServerUsername',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'MailServerPassword',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdTipoDocOperativoOrigineAutomatica',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagChiusuraAutomatica',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdAccountPagatore',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdSottoFamiglieAbilitate',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdFamiglieAbilitate',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagMostraInfoAggiuntive',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'FlagTipo_TipoLista',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdClasseInterventi',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiInterventiSchema;