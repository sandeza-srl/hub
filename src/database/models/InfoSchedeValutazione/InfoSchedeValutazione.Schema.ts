import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInfoSchedeValutazionePrivate } from './InfoSchedeValutazione.Types.Private';


/* --------
* Schema Definition
* -------- */
const InfoSchedeValutazioneSchema = new mongoose.Schema<IInfoSchedeValutazionePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccount',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdSchedaValutazione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoSchedaValutazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Etichetta',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ValoreTestuale',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'ValoreNumerico',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagValoreCalcolato',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'ValoreLimiteInferioreNumerico',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'ValoreLimiteSuperioreNumerico',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'ValoreRiferimentoNumerico',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'ValoreRiferimentoTestuale',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagEsito',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'NoteValutazione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdTipoParametroValutazione',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtTipoParametroValutazione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdTipoInfoSchedaValutazione',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'Nota',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InfoSchedeValutazioneSchema;