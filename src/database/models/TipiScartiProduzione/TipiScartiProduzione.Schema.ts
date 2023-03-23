import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiScartiProduzionePrivate } from './TipiScartiProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiScartiProduzioneSchema = new mongoose.Schema<ITipiScartiProduzionePrivate>({

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
    alias: 'IdTipoScartoProduzione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoScartoProduzione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TipologiaScarto',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagScartoMateriale',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodiceTipoScartoProduzione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagRottamato',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdRisorseAbilitate',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceTxtTipoScartoProduzioneAutomatico',

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
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiScartiProduzioneSchema;