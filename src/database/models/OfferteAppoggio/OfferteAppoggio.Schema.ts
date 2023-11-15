import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IOfferteAppoggioPrivate } from './OfferteAppoggio.Types.Private';


/* --------
* Schema Definition
* -------- */
const OfferteAppoggioSchema = new mongoose.Schema<IOfferteAppoggioPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'NoteFinali',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TitoloOfferta',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'IdAliquota',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'CondizioniPagamento',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdValuta',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'Lingua',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'NoteIniziali',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdFirma',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdOffertaAppoggio',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OfferteAppoggioSchema;