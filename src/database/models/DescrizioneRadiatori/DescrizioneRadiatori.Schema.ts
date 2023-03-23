import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDescrizioneRadiatoriPrivate } from './DescrizioneRadiatori.Types.Private';


/* --------
* Schema Definition
* -------- */
const DescrizioneRadiatoriSchema = new mongoose.Schema<IDescrizioneRadiatoriPrivate>({

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
    alias: 'IdDescrizioneRipartitori',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtDescrizioneRipartitori',

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
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'PortataMinima',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'PortataMassima',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'Interasse',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'Diametro',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'TipoSensore',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TipoMisurazione',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdMaterialiRadiatori',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'CoefficienteDispersioneVolumica',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DescrizioneRadiatoriSchema;