import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IProcessiPrivate } from './Processi.Types.Private';


/* --------
* Schema Definition
* -------- */
const ProcessiSchema = new mongoose.Schema<IProcessiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdProcesso',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoProcesso',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtProcesso',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataFineRichiesta',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraPrimoStepCompletato',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimoStepCompletato',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'NumeroStepProcesso',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagCompletato',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataCompletato',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCollegato',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdDocContabile',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdOfferta',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdIntervento',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraCompletato',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra005: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtUtenteCompletato',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtUtenteModifica',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'TxtAccountCollegato',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdTipoAttivitaControllo',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataPrimoStepCompletato',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataPrimoStepPianificato',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataUltimoStepCompletato',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data006: {
    type: Date,
    alias: 'DataUltimoStepPianificato',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'AnnoInizio',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'AnnoMeseInizio',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'AnnoSettimanaInizio',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'AnnoFine',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'AnnoMeseFine',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'AnnoSettimanaFine',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagCompletatoManuale',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagAggiornaDaStepProcesso',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'TxtTipoProcesso',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'Argomento',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'CodiceRiferimento',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'CodiceTipoProcesso',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagAggiornaTotali',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'DurataEffettivaOre',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'DurataEffettivaGiorni',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'DurataPrevistaGiorni',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'DurataPrevistaOre',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'DiffDurataGiorni',

  },
  __Dati_Ora003: {
    type: String,
    alias: 'DiffDurataOre',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdAttivitaControllo',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdSchedaAttivitaControllo',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdImpianto',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdProgetto',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdTipoUtensile',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdTipoImpianto',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdTipoStrumento',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdStrumento',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdUtensile',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'TxtStatoAutomatico',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'PercAvanzamento',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'TxtProcessoAccountAutomatico',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'IdProtocollo',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'IdDocumento',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'DurataPianificataGiorni',

  },
  __Dati_Ora004: {
    type: String,
    alias: 'DurataPianificataOre',

  },
  __Dati_DataOra006: {
    type: Date,
    alias: 'DataOraPrimoStepPianificato',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra007: {
    type: Date,
    alias: 'DataOraUltimoStepPianificato',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagSoloFeriali',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'Progressivo',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'CodiceProcesso',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'IdTipoProcessoPerCodifica',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'AnnoCreazione',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'CodiceTxtProcessoAutomatico',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'CodiceTxtProcessoAccountAutomatico',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'IdVoceDocOperativo',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ProcessiSchema;