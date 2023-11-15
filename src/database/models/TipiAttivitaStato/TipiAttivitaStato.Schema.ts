import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiAttivitaStatoPrivate } from './TipiAttivitaStato.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiAttivitaStatoSchema = new mongoose.Schema<ITipiAttivitaStatoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoAttivita',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtAccountOperatore',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoAttivita',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipoAttivitaStato',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdStato',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiAttivitaStatoSchema;