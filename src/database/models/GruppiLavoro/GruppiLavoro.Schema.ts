import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IGruppiLavoroPrivate } from './GruppiLavoro.Types.Private';


/* --------
* Schema Definition
* -------- */
const GruppiLavoroSchema = new mongoose.Schema<IGruppiLavoroPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdGruppoLavoro',

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
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'NomeFormato',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'NomeScriptStampa',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtGruppoLavoro',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtUtenteModifica',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceGruppoLavoro',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiorna_DaOperatoriGruppiLavoro',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdReferenteTipiRuoliTipiGruppoLavoro',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdOperatoriGruppoLavoro_Tutti',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdTipoGruppoLavoro',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'TxtTipoGruppoLavoro',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtOperatoreResponsabileGruppoLavoro',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'TxtOperatoriGruppoLavoro_Tutti',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdReferenteGruppoLavoro',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default GruppiLavoroSchema;