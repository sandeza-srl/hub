import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IControlliFaseProduzionePrivate } from './ControlliFaseProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const ControlliFaseProduzioneSchema = new mongoose.Schema<IControlliFaseProduzionePrivate>({

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
    alias: 'IdArticolo',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdOpzione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdControlloArticolo',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtTipoControllo',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ValoreNominale',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'TolleranzaPiu',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'TolleranzaMeno',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FrequenzaControllo',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Criticita',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtTipoResponsabile',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtTipoStrumento',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdTipoStrumento',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'UM',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'PosizioneControllo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'UmOpzione',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FrequenzaControlloOpzione',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'NumeroControlliTotale',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'NumeroControlliFatti',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'NumeroControlliRestanti',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagCalcoloMatematico',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdControlloOpzione',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdControlloFaseProduzione',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagSelezione',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'CodiceTipoControllo',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdTipoControllo',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'CodiceTipoStrumento',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdTipoResponsabile',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'CodiceTipoNormativa',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'CodiceTxtTipoControlloAutomatico',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'CodiceTxtTipoNormativaAutomatico',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagAggiornaDaControlloOpzione',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagControlloMacchina',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdTipoNormativa',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'LimiteInferiore',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'LimiteSuperiore',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'Note',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'QuotaX',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'QuotaY',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'QuotaZ',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtTipoNormativa',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagAggiornaCalcoli',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'Gruppo',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdDocumentoPorzioneDisegno',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdTipoPianoCampionamento',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'TxtTipoPianoCampionamento',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'CodiceTxtTipoStrumentoAutomatico',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'CUQ_T_UmOpzione',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'CUQ_T',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagRegistraMatricola',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'FlagFrequenzaStandard',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagFrequenzaPianiCampionamento',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagTipoNumeroControlli',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'QDaProdurre_Opz',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'CodiceTipoResponsabile',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'FlagResponsabileProduzione',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdInstallazione',

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
  __Dati_Testo035: {
    type: String,
    alias: 'IdDocumentoNormativa',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'FlagCreatoAPosteriori',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ControlliFaseProduzioneSchema;