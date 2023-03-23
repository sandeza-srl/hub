import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDistintaLottiPrivate } from './DistintaLotti.Types.Private';


/* --------
* Schema Definition
* -------- */
const DistintaLottiSchema = new mongoose.Schema<IDistintaLottiPrivate>({

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
  __Dati_Data001: {
    type: Date,
    alias: 'DataConsegna',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Qt',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagSelezione',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'QtOriginale',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Livello',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdArticoloPadre',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagVisibile',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagPiuMeno',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'ConvUm',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'ConvUmLvlUp',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdPersistenteUtente',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagArticoloConsolidato',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagArticoloDisponibileProduzione',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdDistintaLotto',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Zero',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DistintaLottiSchema;