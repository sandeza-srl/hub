import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiUtensiliPerFaseProduzionePrivate } from './TipiUtensiliPerFaseProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiUtensiliPerFaseProduzioneSchema = new mongoose.Schema<ITipiUtensiliPerFaseProduzionePrivate>({

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
    alias: 'TxtTipoUtensile',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoUtensileEsteso',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoUtensile',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtArticolo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtCiclo',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'QuantitaPerUmOpz',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceTipoUtensile',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdAccountCompagnia',

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
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'CostoPerUmOpzione',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'CostoUnitarioTipoUtensile',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdTipoUtensilePerFaseProduzione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceTxtTipoUtensileAutomatico',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdOpzioneProd',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'QuantitaUtensiliReale',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'QuantitaUtensiliArrotondata',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'NumeroRichiesteInCorso',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagAggiorna',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'QtRichiesteInCorso',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'CodiceTxtArticoloAutomatico',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'CodiceArticolo',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'CodiceTxtDisegnoArticoloAutomatico',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdItemTipoUtensile',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'NumeroPreparazioniChiuse',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'QuantitaEffetivaPrelevata',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdMontaggioUtensiliFaseProduzione',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdMontaggioUtensiliAttrezzature',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiUtensiliPerFaseProduzioneSchema;