import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUpdatesContenutiInLinguaPrivate } from './UpdatesContenutiInLingua.Types.Private';


/* --------
* Schema Definition
* -------- */
const UpdatesContenutiInLinguaSchema = new mongoose.Schema<IUpdatesContenutiInLinguaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdContenuto',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'LinkFile',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdContenutoInLingua',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdLingua',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUpdateContenutoInLingua',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdTagTutti',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagPubblicato',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdUpdateContenutoInLingua',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'LinkVideo',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraPubblicato',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo009: {
    type: String,
    alias: 'DescrizioneUpdate',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdNotaRelease',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UpdatesContenutiInLinguaSchema;