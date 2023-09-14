import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiCampagnePrivate } from './TipiCampagne.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiCampagneSchema = new mongoose.Schema<ITipiCampagnePrivate>({

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
    alias: 'IdTipoCampagna',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoCampagna',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceTipoCampagna',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'GeneraCodice_FlagAnnuale',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'GeneraCodice_Testo',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'GeneraCodice_FlagAnnualeVedi',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'GeneraCodice_Progressivo',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'GeneraCodice_CifreProgressivo',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'GeneraCodice_FlagAnnoPrima',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'GeneraCodice_FlagAnnoPrimaVedi',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'GeneraCodice_ProssimoCodice',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'GeneraCodice_AnnoTest',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiCampagneSchema;