import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInventariItemsVociPrivate } from './InventariItemsVoci.Types.Private';


/* --------
* Schema Definition
* -------- */
const InventariItemsVociSchema = new mongoose.Schema<IInventariItemsVociPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdInventarioItemVoce',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInventario',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'QtGiacenzaContata',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodiceRiferimentoFornitore',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'QtGiacenza_DOp02',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'QtIngresso_DOp01',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'QtUscita_DOp01',

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
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraRettifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagAggiornaQta01',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagRettificaCreata',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'QtRettificaDaEffettuare03',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagAggiornaQta02',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagAggiornaQta03',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdVoceDocOperativo',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInventarioItem',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'QtRettificaEffettuata03',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdFamigliaItem',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdSottoFamigliaItem',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtFamigliaItem',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtSottoFamigliaItem',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdAccountRettifica',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InventariItemsVociSchema;