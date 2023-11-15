import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociOfferteAppoggioPrivate } from './VociOfferteAppoggio.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociOfferteAppoggioSchema = new mongoose.Schema<IVociOfferteAppoggioPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataEsecuzione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagContribuisceCosto',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagContribuiscePrezzo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagIncluso',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagItem',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagNoteAuto',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagTitoloAuto',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'IdAliquota',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdCapitolo',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdListinoItem',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdOfferta',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipoListino',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdValuta',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdVoceOfferta',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdVoceOffertaPadre',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Livello',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'Ordine',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtNoteManuale',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtTitoloManuale',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'VCostoUnitario',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'VUnitarioDefinitivo',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdNuovaVoceOfferta',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdNuovoCapitoloOfferta',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdNuovaVoceOffertaPadre',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdFornituraItem',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdTipoFatturazione',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'QuantitaFinale',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'QuantitaIniziale',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'QuantitaScontata',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'SimboloValuta',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'UnitaMisura',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'VUnitario',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'VUnitarioScontato',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'VVariazioneUnitarioPercentuale',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'VVariazioneValore',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagRiassume',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'FlagRiassumeVedi',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdRiassuntoPadre',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociOfferteAppoggioSchema;