import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiProtocolliPrivate } from './TipiProtocolli.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiProtocolliSchema = new mongoose.Schema<ITipiProtocolliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoProtocollo',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoProtocollo',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'EtichettaJoinE',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'EtichettaJoinF',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'EtichettaJoinG',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'GeneraCodice_AnnoTest',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'GeneraCodice_CifreProgressivo',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'GeneraCodice_FlagAnnoPrima',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'GeneraCodice_FlagAnnoPrimaVedi',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'GeneraCodice_FlagAnnuale',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'GeneraCodice_FlagAnnualeVedi',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'GeneraCodice_Progressivo',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'GeneraCodice_ProssimoCodice',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'GeneraCodice_Testo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtAccountCompagnia',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'EtichettaJoinH',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'EtichettaJoinI',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdSottotipoDocumento',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtSottotipoDocumento',

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
  __Dati_Testo016: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdUtentiNoVisualizzazione',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdTipoAttivita',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdTipoDocumento',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'Stampa_NomeFormato',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'CodiceTipoProtocollo',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'TxtTipoDocumento',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'Stampa_NomeScriptStampa',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'Stampa_NomeScriptImpostazioni',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'Stampa_NomeScriptStampaPdf',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiProtocolliSchema;