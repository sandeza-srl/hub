import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IzzzItemsProduzionePrivate } from './zzzItemsProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const zzzItemsProduzioneSchema = new mongoose.Schema<IzzzItemsProduzionePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'ClassePosizioneMagazzino',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'UnitaMisura',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdFase',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtFase',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdOpzioneProd',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'CUM_T',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'QtPerUmO',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'QtFabbTotaleT',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'CTM_T',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'QtFabbRestanteSuPronta',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'QtUtilizzataR',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'QtFabbRestanteT',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'CTM_R',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'CUM_R',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdTipoFase',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdItemProduzione',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagAggiornaDaRegistrazioni',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagAggiornaDaItem',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default zzzItemsProduzioneSchema;