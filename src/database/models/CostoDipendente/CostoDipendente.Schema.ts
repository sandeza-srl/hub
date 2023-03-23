import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICostoDipendentePrivate } from './CostoDipendente.Types.Private';


/* --------
* Schema Definition
* -------- */
const CostoDipendenteSchema = new mongoose.Schema<ICostoDipendentePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdLuogo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdReparto',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtLuogo',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtReparto',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdOperatore',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtOperatore',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdCausale',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtCausale',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdCostoOperatoreLuogo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtCostoOperatoreLuogo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'CostoOrario',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdDipendente',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CostoDipendenteSchema;