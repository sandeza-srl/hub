import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IIntegrazioniMagazzini_StoricoVociPrivate } from './IntegrazioniMagazzini_StoricoVoci.Types.Private';


/* --------
* Schema Definition
* -------- */
const IntegrazioniMagazzini_StoricoVociSchema = new mongoose.Schema<IIntegrazioniMagazzini_StoricoVociPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdStoricoVoce',

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
  __Dati_Testo002: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdVoceDocOperativo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagEsitoOperazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'InterconnessioneMagazzino_IdTipoComunicazione',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'QuantitaRichiesta',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceDocOperativo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtDocOperativo',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'QuantitaEseguita',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'InterconnessioneMagazzino_IdTipoComunicazioneMagazzino',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'InterconnessioneMagazzino_IdMagazzinoAutomatico',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraEsecuzione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'CodiceTxtMagazzinoAutomaticoAutomatico',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceTxtTipoComunicazioneAutomatico',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default IntegrazioniMagazzini_StoricoVociSchema;