import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IChecklistSchedaAttivitaControlloPrivate } from './ChecklistSchedaAttivitaControllo.Types.Private';


/* --------
* Schema Definition
* -------- */
const ChecklistSchedaAttivitaControlloSchema = new mongoose.Schema<IChecklistSchedaAttivitaControlloPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoAttivitaControllo',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCheckSchedaAttivita',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagObbligatorio',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagTipoNumero',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagTipoTesto',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagTipoData',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagTipoDataOra',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagTipoFirma',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagTipoGeolocalizzazione',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagTipoFoto',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagTipoVideo',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagTipoAudio',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagTipoDocumento',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagValoriLiberi',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagValoriRange',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagValoriLista',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtCheckTipoAttivita',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'NoteEsecuzione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'NoteRegistrazione',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagValoriOkKo',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'TempoEsecuzionePrevisto',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceCheckTipoAttivita',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'FlagValoriTxt',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'GruppoCheck',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdSchedaAttivitaControllo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdAttivitaControllo',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'ValoreRilevatoTesto',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'ValoreRilevatoNumero',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'ValoreRilevatoData',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'ValoreRilevatoDataOra',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ValoreRilevatoContenitore',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdCheckTipoAttivita',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'ValoreRilevatoAutomatico',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagEseguito',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagDaEseguire',

  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraFineEsecuzione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Ora002: {
    type: String,
    alias: 'TempoEsecuzioneReale',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'NoteOperatore',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdDocumentoValore',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TimeStampControllo',

  },
  __Dati_DataOra005: {
    type: Date,
    alias: 'DataOraRevisioneValore',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo018: {
    type: String,
    alias: 'TxtUtenteRevisioneValore',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'NotaRevisione',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'CodiceLottoProduzione',

  },
  __Dati_DataOra006: {
    type: Date,
    alias: 'DataOraInizioEsecuzione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdStrumento',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'CodiceTxtStrumento',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'NumeroSerieStrumento',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagAggiornaDaScheda',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'CodiceTxtStrumentoNumeroSerie',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'ValoreEsitoAutomatico',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'ValoreRilevatoNumeroRevisionato',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagTipoControlloQualita',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdTipoControllo',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdFamigliaTipoControllo',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdTipoNormativa',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdTipoResponsabile',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdTipoStrumento',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'CodiceTipoControllo',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'CodiceTipoNormativa',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'CodiceTipoStrumento',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'CodiceTxtTipoControlloAutomatico',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'CodiceTxtTipoControlloPosizioneAutomatico',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'CodiceTxtTipoNormativaAutomatico',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'CodiceTxtTipoStrumentoAutomatico',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'Criticita',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagCalcoloMatematico',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagControlloMacchina',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'FlagSelezione',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'PosizioneControllo',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'CoordinateControlloQuotaX',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'CoordinateControlloQuotaY',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'CoordinateControlloQuotaZ',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'TxtFamigliaTipoControllo',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'TxtTipoControllo',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'TxtTipoNormativa',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'TxtTipoResponsabile',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'TxtTipoStrumento',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'UnitaMisura',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'TolleranzaMeno',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'TolleranzaPiu',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'ValoreNominale',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'ValoreRilevatoTestoRevisionato',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'FlagEsitoPositivoObbligatorio',

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
export default ChecklistSchedaAttivitaControlloSchema;