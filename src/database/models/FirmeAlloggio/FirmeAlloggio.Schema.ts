import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFirmeAlloggioPrivate } from './FirmeAlloggio.Types.Private';


/* --------
* Schema Definition
* -------- */
const FirmeAlloggioSchema = new mongoose.Schema<IFirmeAlloggioPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

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
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAbbinamento',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagNonRichiesta',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagRichiesta',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagNonPresente',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtAbbinamento',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'FirmaClienteMatricola',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdIntervento',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraFirma',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'FirmaCliente',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'FirmaClienteEstesa',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'GeolocalizzazioneFirma',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdFirmaAlloggio',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdImpianto',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default FirmeAlloggioSchema;