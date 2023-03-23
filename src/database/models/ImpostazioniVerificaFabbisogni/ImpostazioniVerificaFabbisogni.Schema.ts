import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IImpostazioniVerificaFabbisogniPrivate } from './ImpostazioniVerificaFabbisogni.Types.Private';


/* --------
* Schema Definition
* -------- */
const ImpostazioniVerificaFabbisogniSchema = new mongoose.Schema<IImpostazioniVerificaFabbisogniPrivate>({

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
    alias: 'IdImpostazioniVerificaFabbisogni',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'PercMinimaRealizzabileDelTotale',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'PercMinimaRealizzabileDelResiduo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagOrdinamentoPerPriorita',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'GiacenzaRiferimentoFinoASettimana',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagConsideraGiacenzaInRitardo',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagOrdinamentoPerDataPianificata',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagEsecuzioneInCorso',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdUtenteEsecuzioneInCorso',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ImpostazioniVerificaFabbisogniSchema;