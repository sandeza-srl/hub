import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDistintaImpiantoPrivate } from './DistintaImpianto.Types.Private';


/* --------
* Schema Definition
* -------- */
const DistintaImpiantoSchema = new mongoose.Schema<IDistintaImpiantoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdFamigliaItem',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtSottoFamigliaItem',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtFamigliaItem',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'UnitaMisura',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdItemInziale',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtImpianto',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Quantita',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdImpianto',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdRigaDistintaImpianto',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdTipoImpianto',

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
  __Dati_Testo012: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceFamigliaItem',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceImpianto',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceSottoFamigliaItem',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdAccountCliente',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'TxtAccountCliente',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtAccountDestinatario',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdAccountDestinatario',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdSottoFamigliaItem',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagAttivo',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'FlagAttivoVedi',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'NumeroSerie',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'Lotto',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataScadenza',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagRegistraLotto',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagRegistraNumeroSerie',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagRegistraScadenza',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdOperatoreInstallatore',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'TxtOperatoreInstallatore',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdRigaDistintaImpiantoAttiva',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataInstallazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'iBeacon_Id',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'iBeacon_Major',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'iBeacon_Minor',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'TxtAttivitaEseguita',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'TxtAttivitaDaEseguire',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataProssimaAttivita',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataEsecuzioneAttivita',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'QuantitaAggiuntiva',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdIntervento',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'Due',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'Tre',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Quattro',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'Cinque',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'Sei',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'Sette',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'Otto',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'Nove',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'Dieci',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'Undici',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'Dodici',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'Tredici',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'Quattordici',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'Quindici',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdAttivitaControllo',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdSchedaAttivitaControllo',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'IdDistintaImpianto',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DistintaImpiantoSchema;