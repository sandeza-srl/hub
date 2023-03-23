import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFamiglieItemPrivate } from './FamiglieItem.Types.Private';


/* --------
* Schema Definition
* -------- */
const FamiglieItemSchema = new mongoose.Schema<IFamiglieItemPrivate>({

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
    alias: 'IdFamigliaItem',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtFamigliaItem',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagTipoAzione',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagTipoBene',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagTipoContratto',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagTipoLavorazione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodiceFamigliaItem',

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
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdFamigliaItemOrigine',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'GeneraCodiceItem_AltroIdFamigliaItemPerCodice',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'GeneraCodiceItem_CodiceTest',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'GeneraCodiceItem_FlagTipoCodice_AltraFamiglia',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'GeneraCodiceItem_NumeroCifre',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'GeneraCodiceItem_OrdineProgressivo',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'GeneraCodiceItem_OrdineTesto',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'GeneraCodiceItem_Progressivo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'GeneraCodiceItem_Testo',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'GeneraCodiceItem_Espressione',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'GeneraCodiceItem_CodiceEsempio',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'GeneraCodiceItem_FlagTipoCodice_Standard',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'GeneraCodiceItem_FlagCodiceValidato',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagTipoOraLavoro',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'UnitaDiMisura',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'GeneraCodiceItem_FlagTipoCodice_Proprio',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'GeneraCodiceItem_FlagProgressivoContinuo',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'GeneraCodiceItem_FlagProgressivoAnnuale',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'GeneraCodiceItem_FlagProgressivoMensile',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'GeneraCodiceItem_FlagModificaCodicePermessa',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'GeneraCodiceItem_TxtTipoCodice',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default FamiglieItemSchema;