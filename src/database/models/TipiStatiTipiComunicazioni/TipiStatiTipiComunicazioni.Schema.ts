import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiStatiTipiComunicazioniPrivate } from './TipiStatiTipiComunicazioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiStatiTipiComunicazioniSchema = new mongoose.Schema<ITipiStatiTipiComunicazioniPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'OrdineTxtTipoStatoComunicazione',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagAperta',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagChiusa',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoStatoComunicazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoStatoComunicazione',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Zero',

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
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiStatiTipiComunicazioniSchema;