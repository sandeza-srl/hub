import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IStepProcessoPrivate } from './StepProcesso.Types.Private';


/* --------
* Schema Definition
* -------- */
const StepProcessoSchema = new mongoose.Schema<IStepProcessoPrivate>({

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
    alias: 'DataInizioPianificata',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo001: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdStepProcesso',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtStepProcesso',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'NoteGenerali',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountOperatoreResponsabile',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'NomeRubricaOperatoreResponsabile',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdRubricaOperatoreResponsabile',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataCorrente',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
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
  __Dati_Testo008: {
    type: String,
    alias: 'TxtSezioneCreazione',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraInizioPianificata',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraFinePianificata',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAccountOperatoriInvitati',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdAccountTutti',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdTipoStepProcessi',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagDaPianificare',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagCalendario',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagCompletato',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'AnnoSettimanaInizioPianificato',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdSedeEsecuzione',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'Luogo_NomeSede',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'Luogo_Citta',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataFinePianificata',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdAccountCollegato',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtAccountCollegato',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdRubricaAccountCollegato',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'NomeRubricaCollegato',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdProcesso',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraInizioPianificato',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraFinePianificata',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdOfferta',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagAllegatiPresenti',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'AnnoInizioPianificato',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdTipoProcesso',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdStepProcessoCollegato',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagCollegato',

  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataFineEffettiva',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagCommentiPresenti',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'AnnoMeseInizioPianificato',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdDocContabile',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdIntervento',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'TxtUtenteModifica',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'TxtUtenteCompletato',

  },
  __Dati_DataOra005: {
    type: Date,
    alias: 'DataOraFineEffettiva',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdAccountOperatoriNotifica',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdTipoStepProcessiConnesso',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'GiorniDaPrecedente',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'TxtAccountOperatoreResponsabile',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagAttivo',

  },
  __Dati_Ora003: {
    type: String,
    alias: 'DurataPianificata',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagNotifica',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_DataOra006: {
    type: Date,
    alias: 'DataOraUltimoInvioNotifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagModificato',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'TxtProcesso',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'Luogo_Via',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'Luogo_NomeNazioneIng',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'Luogo_Cap',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'Luogo_FlagLuogoEsecuzione',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'IdReferentiAccountCollegato',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'TxtReferentiAccountCollegato',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'NoteModificabili',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'IdTipoAttivitaControllo',

  },
  __Dati_DataOra007: {
    type: Date,
    alias: 'DataOraInizioEffettivo',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'AnnoFineEffettiva',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'AnnoMeseFineEffettiva',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'AnnoSettimanaFineEffettiva',

  },
  __Dati_Ora004: {
    type: String,
    alias: 'OraInizioEffettiva',

  },
  __Dati_Ora005: {
    type: String,
    alias: 'DurataEffettiva',

  },
  __Dati_Ora006: {
    type: String,
    alias: 'OraFineEffettiva',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'NoteInput',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'NoteOutput',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagAggiorna',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'IdSedeSelezionataManuale',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'TxtOrdineStepProcessoAutomatico',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'IdAttivitaControllo',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'IdDocumento',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'IdImpianto',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'IdProtocollo',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'IdProgetto',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'IdSchedaAttivitaControllo',

  },
  __Dati_Testo060: {
    type: String,
    alias: 'IdStrumento',

  },
  __Dati_Testo061: {
    type: String,
    alias: 'IdTipoImpianto',

  },
  __Dati_Testo062: {
    type: String,
    alias: 'IdTipoStrumento',

  },
  __Dati_Testo063: {
    type: String,
    alias: 'IdTipoUtensile',

  },
  __Dati_Testo064: {
    type: String,
    alias: 'IdUtensile',

  },
  __Dati_Testo065: {
    type: String,
    alias: 'TxtTipoProcesso',

  },
  __Dati_Testo066: {
    type: String,
    alias: 'IdTipoRuoloRespEsecuzione',

  },
  __Dati_Testo067: {
    type: String,
    alias: 'IdTipoRuoloNotifica',

  },
  __Dati_Testo068: {
    type: String,
    alias: 'IdTipoRuoloInvitatiEsecuzione',

  },
  __Dati_Testo069: {
    type: String,
    alias: 'IdTipoRuoloTutti',

  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataInizioEffettiva',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo070: {
    type: String,
    alias: 'IdAccountOperatoriFirma',

  },
  __Dati_Testo071: {
    type: String,
    alias: 'IdTipoRuoloFirma',

  },
  __Dati_Testo072: {
    type: String,
    alias: 'IdVoceDocOperativo',

  },
  __Dati_Testo073: {
    type: String,
    alias: 'TxtAccountOperatoriInvitati',

  },
  __Dati_Testo074: {
    type: String,
    alias: 'TxtAccountOperatoriNotifica',

  },
  __Dati_Testo075: {
    type: String,
    alias: 'TxtAccountOperatoriFirma',

  },
  __Dati_Ora007: {
    type: String,
    alias: 'OreEseguite',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'VCostoTotaleOreEseguite',

  },
  __Dati_Testo076: {
    type: String,
    alias: 'IdAccountOperatoriAttiviEvento',

  },
  __Dati_Testo077: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo078: {
    type: String,
    alias: 'Id',

  },
  __Dati_Testo079: {
    type: String,
    alias: 'IdRubricaAnagrafica',

  },
  __Dati_Testo080: {
    type: String,
    alias: 'IdDocumentoAssociato',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default StepProcessoSchema;