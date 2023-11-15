import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IProtocolliPrivate } from './Protocolli.Types.Private';


/* --------
* Schema Definition
* -------- */
const ProtocolliSchema = new mongoose.Schema<IProtocolliPrivate>({

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
    alias: 'IdProtocollo',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtProtocollo',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'AnnoProtocollo',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Progressivo',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'AnnoSettimanaProtocollo',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataModifica',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'NomeRubricaEmittente',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdRubricaEmittente',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtAccountCompagnia',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdRubricaOperatore',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'NomeRubricaOperatore',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdFirma',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'LettereTxtProtocollo',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdAccountEmittente',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdAccountDestinatario',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'TxtAccountDestinatario',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtAccountEmittente',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdRubricaDestinatario',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'TxtInserimentoA',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtInserimentoB',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtInserimentoC',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'TxtInserimentoD',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'CodiceProtocollo',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdTipoProtocollo',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'TxtTipoProtocollo',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'NomeRubricaDestinatario',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagBloccato',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdAccountTutti',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdDocumentoAssociato',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataProtocollo',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdTraduzioneTipoProtocollo',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'Lingua',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'Sottotitolo',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'TestoProtocollo',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'TitoloProtocollo',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'TxtInserimentoE',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'AnnoMeseProtocollo',

  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataScadenza',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataCorrente',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagScaduto',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdTipoAttivita',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdUtentiNoVisualizzazione',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdAttivita',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'IdSedeDestinatario',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdSedeEmittente',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'NomeSedeEmittente',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'NomeSedeDestinatario',

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
  __Dati_Testo043: {
    type: String,
    alias: 'IdOfferta',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'IdDocContabile',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'IdUtenteCreazione',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'IdUtenteUltimaModifica',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'TxtUtenteUltimaModifica',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'RagioneSocialeAccountDestinatario',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'RagioneSocialeAccountEmittente',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ProtocolliSchema;