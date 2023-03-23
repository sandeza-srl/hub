import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICodificheClientiItemsPrivate } from './CodificheClientiItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const CodificheClientiItemsSchema = new mongoose.Schema<ICodificheClientiItemsPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdCodificaClienteItem',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountClienteFinale',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtAccountClienteFinale',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodiceItemCliente',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'DescrizioneItemCliente',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia',

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
  __Dati_Testo008: {
    type: String,
    alias: 'NumeroRevisioneCodiceItemCliente',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataRevisioneCodiceItemCliente',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdSedeClienteFinale',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceItemClienteRevisioneAutomatico',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdFamigliaItem',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdSottoFamigliaItem',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagCodificaPrincipale',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CodificheClientiItemsSchema;