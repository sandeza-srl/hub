import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRichiesteHelpPrivate } from './RichiesteHelp.Types.Private';


/* --------
* Schema Definition
* -------- */
const RichiesteHelpSchema = new mongoose.Schema<IRichiesteHelpPrivate>({

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
    alias: 'IdRichiestaHelp',

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
    alias: 'IdUtenteCreazione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Richiesta_Titolo',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'Richiesta_Descrizione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'Richiesta_TagPriorita',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'Richiesta_TagStato',

  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'Richiesta_Allegato01',

  },
  __Dati_Contenitore002: {
    type: String,
    alias: 'Richiesta_Allegato02',

  },
  __Dati_Contenitore003: {
    type: String,
    alias: 'Richiesta_Allegato03',

  },
  __Dati_Contenitore004: {
    type: String,
    alias: 'Richiesta_Allegato04',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagRichiestaInviata',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagRichiestaScartata',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagRichiestaAperta',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdUtenteInvio',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtUtenteInvio',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'DataOraInvio',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'Richiesta_MailAssegnatario',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'AuthorizeWebViewer_Toggle',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'API_Authorize_Token',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'API_Access_Token',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'API_Refresh_Token',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'Curl_Return',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'OriginDoc',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'OriginLayout',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'Task_Link',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'Richiesta_Localization',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagRichiestaCompleted',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'Richiesta_Titolo_Original',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'Richiesta_Descrizione_Original',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'Richiesta_Localization_Original',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'SetOriginal',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagAggiorna',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'FM_Lingua',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'FM_NomeUtente',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'FM_PluginInstallati',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'FM_Versione',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'Postazione_IndirizzoIP',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'Postazione_LinguaSO',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'Postazione_Nome',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'Postazione_SO',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'Postazione_SODescrittivo',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'Postazione_VersioneSO',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RichiesteHelpSchema;