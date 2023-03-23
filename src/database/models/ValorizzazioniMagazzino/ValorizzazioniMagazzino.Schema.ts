import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IValorizzazioniMagazzinoPrivate } from './ValorizzazioniMagazzino.Types.Private';


/* --------
* Schema Definition
* -------- */
const ValorizzazioniMagazzinoSchema = new mongoose.Schema<IValorizzazioniMagazzinoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
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
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagValorizzaCostoMedioPonderato',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagValorizzaFifo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagValorizzaLifo',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagValorizzaUltimoCosto',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagValorizzaWipConsuntivo',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagValorizzaWipPreventivo',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagWipQuantita',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagWipTotale',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdValorizzazioneMagazzino',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataValorizzazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'VGiacenza',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'VWip',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VGiacenza_Cespiti',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'VGiacenza_MateriaPrima',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'VTotale',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'VGiacenza_Semilavorati',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'VGiacenza_ProdottiFiniti',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'AnnoMeseValorizzazione',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'AnnoSettimanaValorizzazione',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'AnnoValorizzazione',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagValorizzazioneConsolidata',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdUtenteCreazione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdUtenteModifica',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtUtenteModifica',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'PercVGiacenza',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'PercVGiacenza_Cespiti',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'PercVGiacenza_MateriaPrima',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'PercVGiacenza_ProdottiFiniti',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'PercVGiacenza_Semilavorati',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'PercVWip',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagAggiornaTotali',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ValorizzazioniMagazzinoSchema;