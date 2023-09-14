import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiProcessiPrivate } from './TipiProcessi.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiProcessiSchema = new mongoose.Schema<ITipiProcessiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoProcesso',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoProcesso',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtUtenteModifica',

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
    alias: 'RevisioneTipoProcesso',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataRevisioneTipoProcesso',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdUtenteRevisioneTipoProcesso',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtUtenteRevisioneTipoProcesso',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'NumeroTipiStepProcessi',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagAggiorna',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'ProgTipoProcesso',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'CodiceTipoProcesso',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceRiferimento',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagAttivo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'Argomento',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'DurataPrevistaGiorni',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'DurataPrevistaOre',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagSoloFeriali',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'GeneraCodice_AltroIdTipoProcessoPerCodice',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'GeneraCodice_CodiceTest',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'GeneraCodice_FlagUsaCodiceAltro',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'GeneraCodice_NumeroCifre',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'GeneraCodice_OrdineProgressivo',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'GeneraCodice_OrdineTesto',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'GeneraCodice_Progressivo',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'GeneraCodice_Testo',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'GeneraCodice_OrdineAnno',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'GeneraCodice_Anno',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'NomeFormato',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'NomeScriptStampa',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagAbilitaAperturaAutomaticaScheda',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagChiediDataScadenza',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagVisualizzazioneOffline',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagPersonalizzaGiorni',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'PersonalizzaGiorni_FlagContaLunedi',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'PersonalizzaGiorni_FlagContaMartedi',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'PersonalizzaGiorni_FlagContaMercoledi',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'PersonalizzaGiorni_FlagContaGiovedi',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'PersonalizzaGiorni_FlagContaVenerdi',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'PersonalizzaGiorni_FlagContaSabato',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'PersonalizzaGiorni_FlagContaDomenica',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiProcessiSchema;