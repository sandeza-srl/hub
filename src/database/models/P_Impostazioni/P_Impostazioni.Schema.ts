import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IP_ImpostazioniPrivate } from './P_Impostazioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const P_ImpostazioniSchema = new mongoose.Schema<IP_ImpostazioniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataFineCalendarioAttuale',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataInizioCalendarioAttuale',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'DimensioneCalendarioAttuale',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataMassimaPianificazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataFineCalendarioDaCreare',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataInizioCalendarioDaCreare',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'DimensioneCalendarioDaCreare',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'TxtStatoCreazione',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaElaborazioneCalendari',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaPianificazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo002: {
    type: String,
    alias: 'NumSaltati',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'NumDaPianificare',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'NumPianificati',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'PercAvanzamentoPianificazione',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraInizioElaborazione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtOperazioneInCorso',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtResocontoOperazioni',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'PercAvanzamentoElaborazione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagCalcoli',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdRisorseAssociate',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'IntervalloPianificazione',

  },
  __Dati_Ora003: {
    type: String,
    alias: 'TempoMassimoAttrezzaggioRipetibile',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'MinimoPercentualeProduzioneDaPianificare',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraInizioElaborazionePianificazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraPrimoSlotElaborazionePianificazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagAggiornaFabbisogni',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagPrioritaPerDataConsegna',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagAggiornamentoDataPrevista',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdP_Impostazioni',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default P_ImpostazioniSchema;