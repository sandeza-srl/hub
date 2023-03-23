import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPosizioniPrivate } from './Posizioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const PosizioniSchema = new mongoose.Schema<IPosizioniPrivate>({

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
    alias: 'IdStatoPosizione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdPosizione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtMagazzinoFisico',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Linea',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdMagazzinoFisico',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'Scaffale',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'Piano',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'Posizione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'ClassePosizioneMagazzino',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtStatoPosizione',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'NumeroPacchi',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'CodicePosizione',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'CodiceMagazzinoFisico',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagStatoCompleto',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'iBeacon_Id',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'iBeacon_Major',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'iBeacon_Minor',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagDisponibilitaUnica',

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
  __Dati_Testo017: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'TxtUtenteModifica',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagAggiornaPosizione',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagStatoLibero',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'OrdineTxtStatoPosizione',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagDisponibilitaSempreDisponibile',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'CodiceTxtMagazzinoFisico',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PosizioniSchema;