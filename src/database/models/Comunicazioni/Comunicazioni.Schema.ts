import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IComunicazioniPrivate } from './Comunicazioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const ComunicazioniSchema = new mongoose.Schema<IComunicazioniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodiceTipoComunicazione',

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
    alias: 'FlagInvioDocContabile',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'IntervalloSollecito01_02',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagSollecito01',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'IntervalloSollecito02_03',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagSollecito02',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtSollecitoAutomatico',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagSollecito03',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdSottoTipoDocumento',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipoComunicazione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdTipoDocumento',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtTipoComunicazione',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdDocContabile',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'LinguaDocumento',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdScadenza',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagInviata',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'IntervalloSollecito00_01',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagValidata',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataProssimoSollecito',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdComunicazione',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdDocumentoCollegato',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceComunicazione',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdAccount',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Progressivo',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtAccount',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'AnnoComunicazione',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'AnnoMeseComunicazione',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataComunicazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'SettimanaComunicazione',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'SettimanaAnnoComunicazione',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtStatoAutomatico',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'OrdineStatoAutomatico',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'InvioCC',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'InvioCCN',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'OggettoComunicazione',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'TestoComunicazione',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'InvioA',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagTipoScadenze',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagTipoOfferte',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'Note',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagTipoDocOperativi',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagInvioDocOperativo',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagInvioOfferta',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdOfferta',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdIntervento',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ComunicazioniSchema;