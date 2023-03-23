import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDescrizioniItemsPrivate } from './DescrizioniItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const DescrizioniItemsSchema = new mongoose.Schema<IDescrizioniItemsPrivate>({

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
    alias: 'Uno',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'Lingua',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Descrizione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdDocumentoImmagine',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'CodiceFamigliaItem',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceSottoFamigliaItem',

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
    alias: 'TxtFamigliaItem',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'TxtSottoFamigliaItem',

  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ImgDescrizioneItem',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdDescrizioneItem',

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
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagAggiornaImmagine',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdDescrizioneItemOrigine',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdItemOrigine',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'NumeroImmagini',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DescrizioniItemsSchema;