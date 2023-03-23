import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRevisioniDocumentiPrivate } from './RevisioniDocumenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const RevisioniDocumentiSchema = new mongoose.Schema<IRevisioniDocumentiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdDocumento',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ImgDocumento',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdRevisioneDocumento',

  },
  __Dati_Contenitore002: {
    type: String,
    alias: 'ImgDocumentoProtetta',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagDocumentoProtetto',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtRevisione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo008: {
    type: String,
    alias: 'File_AttributiContenitore',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'File_DimensioneEsterna',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'File_DimensioneSuDB',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'File_Estensione',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'File_Nome',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagAggiornaAttributiFile',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdSottoTipoDocumento',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdTipoDocumento',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtSottoTipoDocumento',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'TxtTipoDocumento',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'LinkWeb',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagFileDaLinkWeb',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagFileDaPercorso',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraCreazioneVersione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraCreazioneRevisione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RevisioniDocumentiSchema;