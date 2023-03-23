import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IMercatiAnagraficaPrivate } from './MercatiAnagrafica.Types.Private';


/* --------
* Schema Definition
* -------- */
const MercatiAnagraficaSchema = new mongoose.Schema<IMercatiAnagraficaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodiceTipoMercato',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccount',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoMercato',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoMercato',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdMercatoAnagrafica',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MercatiAnagraficaSchema;