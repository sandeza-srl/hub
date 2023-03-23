import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IImmaginiDescrizioniItemsPrivate } from './ImmaginiDescrizioniItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const ImmaginiDescrizioniItemsSchema = new mongoose.Schema<IImmaginiDescrizioniItemsPrivate>({

  _id: {
    type: String,
    default: uuid.v4
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
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagAggiornaImmagine',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdDescrizioneItem',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdDocumentoImmagine',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'Immagine',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'Lingua',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdImmagineDescrizioneItem',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagImmaginePrincipale',

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
export default ImmaginiDescrizioniItemsSchema;