import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IControlliOpzionePrivate } from './ControlliOpzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const ControlliOpzioneSchema = new mongoose.Schema<IControlliOpzionePrivate>({

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
    alias: 'IdOpzioneProd',

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
    alias: 'UnitaMisura',

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
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagCalcoloMatematico',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdTipoControllo',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdControlloOpzione',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceTipoControllo',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'CodiceTipoStrumento',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdTipoResponsabile',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'Gruppo',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdDocumentoPorzioneDisegno',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdTipoPianoCampionamento',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtTipoPianoCampionamento',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagAggiornaDaControlloArticolo',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagAggiornaDaOpzione',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'LimiteInferiore',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'LimiteSuperiore',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'CodiceTxtTipoControlloAutomatico',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdTipoNormativa',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'CodiceTipoNormativa',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'CodiceTxtTipoNormativaAutomatico',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtTipoNormativa',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'QuotaX',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'QuotaY',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'QuotaZ',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagControlloMacchina',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdFamigliaTipoControllo',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'TxtFamigliaTipoControllo',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdTipoUtensile',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'TxtTipoUtensile',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'TxtRisorsa',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'CUQ_T',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'CUQ_T_UmOpzione',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagRegistraMatricola',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagFrequenzaStandard',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FlagFrequenzaPianiCampionamento',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'CodiceTipoResponsabile',

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
    alias: 'IdInstallazione',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdRicorrenzaRecord',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'CodiceTipoContenitore',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdTipoContenitore',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'TxtTipoContenitore',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ControlliOpzioneSchema;