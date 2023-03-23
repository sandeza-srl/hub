import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDescrizioniTipiInterventiPrivate } from './DescrizioniTipiInterventi.Types.Private';


/* --------
* Schema Definition
* -------- */
const DescrizioniTipiInterventiSchema = new mongoose.Schema<IDescrizioniTipiInterventiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CondizioniGenerali',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'ContenutoMail',

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
  __Dati_Testo003: {
    type: String,
    alias: 'DestinatarioA',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'DestinatarioCC',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'DestinatarioCCN',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'Etichetta_A',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'Etichetta_B',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'Etichetta_C',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdDescrizioneTipoIntervento',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'OggettoMail',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'Lingua',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdTipoIntervento',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DescrizioniTipiInterventiSchema;