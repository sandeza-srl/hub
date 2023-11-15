import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IP_FasiProduzionePrivate } from './P_FasiProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const P_FasiProduzioneSchema = new mongoose.Schema<IP_FasiProduzionePrivate>({

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
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'FaseCompleta_DataOraFine',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'FaseCompleta_DataOraInizio',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Priorita',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'GgLavorazione_T',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagLavInternaPianificabile',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagAttesaTotale',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'HAttesa',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'PrioritaLotto',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'TT_Tt_Restante',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodiceFaseProduzione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'NumeroFase',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'TD_Tt',

  },
  __Dati_Ora003: {
    type: String,
    alias: 'TA_Tt',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdOpzioneProd',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdOperatoreProduzioneDesignato',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'PercAvanzamento',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'NumeroAddetti',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'QuotaAddettoAttrezzaggio_T',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'QuotaAddettoProduzione_T',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'Regole_FlagTempoDivisibile',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'Regole_QtSlotMinimiDaPianificare',

  },
  __Dati_Ora004: {
    type: String,
    alias: 'Produzione_TempoDaPianificare',

  },
  __Dati_Ora005: {
    type: String,
    alias: 'Attrezzaggio_TempoDaPianificare',

  },
  __Dati_Ora006: {
    type: String,
    alias: 'Disattrezzaggio_TempoDaPianificare',

  },
  __Dati_Ora007: {
    type: String,
    alias: 'FaseCompleta_TempoDaPianificare',

  },
  __Dati_Ora008: {
    type: String,
    alias: 'Regole_IntervalloMinimoPianificazione',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FaseCompleta_QtSlotDaPianificare',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'Attrezzaggio_QtSlotDaPianificare',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'Disattrezzaggio_QtSlotDaPianificare',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'Produzione_QtSlotDaPianificare',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'Regole_PercMinimaDiProduzioneDaPianificare',

  },
  __Dati_Ora009: {
    type: String,
    alias: 'Regole_TempoMassimoAttrezzaggioRipetibile',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'Regole_QtSlotTempoMassimoAttrezzaggioRipetibile',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FaseCompleta_NumeroSlotFine',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FaseCompleta_NumeroSlotInizio',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'Risultati_FlagTempoDiviso',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'Attrezzaggio_NumeroSlotFine',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'Produzione_NumeroSlotInizio',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'Produzione_NumeroSlotFine',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'Disattrezzaggio_NumeroSlotInizio',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'Attrezzaggio_DataOraInizio',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'Attrezzaggio_DataOraFine',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra005: {
    type: Date,
    alias: 'Produzione_DataOraFine',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra006: {
    type: Date,
    alias: 'Produzione_DataOraInizio',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra007: {
    type: Date,
    alias: 'Disattrezzaggio_DataOraFine',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra008: {
    type: Date,
    alias: 'Disattrezzaggio_DataOraInizio',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdRigaPianificazione',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'Regole_QtSlotMinimiDiProduzioneDaPianificare',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'Risultati_FlagLottoPianificato',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'Regole_ValoreFrazionamentoTempo',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'Calcolo_PrimaFinePossibileSuTutto',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'Calcolo_PrimaFinePossibileSuMinimo',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'FlagProduzioneInCorsoAdesso',

  },
  __Dati_DataOra009: {
    type: Date,
    alias: 'Calcolo_DataOraPartenzaCalcolo',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero035: {
    type: Number,
    alias: 'Calcolo_NumeroSlotPartenzaCalcolo',

  },
  __Dati_DataOra010: {
    type: Date,
    alias: 'Regole_DataOraPrimoSlotElaborazionePianificazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero036: {
    type: Number,
    alias: 'Calcolo_FlagAggiorna',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'Regole_QtSlotDeltaMinimoPianificabileTutto',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'Calcolo_SlotOccupati',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'CodiceTxtFaseAutomatico',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceTxtArticoloAutomatico',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'Risultati_FlagFasePianificata',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdP_FasiProduzione',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'Pianificazione_DataMinimaInizioPianificazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_DataOra011: {
    type: Date,
    alias: 'Pianificazione_DataOraMinimaInizioPianificazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default P_FasiProduzioneSchema;