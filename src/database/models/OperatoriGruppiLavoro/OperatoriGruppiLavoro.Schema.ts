import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IOperatoriGruppiLavoroPrivate } from './OperatoriGruppiLavoro.Types.Private';


/* --------
* Schema Definition
* -------- */
const OperatoriGruppiLavoroSchema = new mongoose.Schema<IOperatoriGruppiLavoroPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagAttivo'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountOperatore'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdOperatoreGruppoLavoro'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtAccountOperatore'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUtenteCreazione'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtUtenteModifica'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdTipoRuoloTipoGruppoLavoro'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtTipoRuolo'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagResponsabile'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagAggiorna_DaTipiRuoliTipiGruppoLavoro'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagAggiorna_DaAnagraficaOperatore'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdGruppoLavoro'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdTipoRuolo'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdOperatoreTipoRuolo'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdReferenteOperatoriGruppiLavoro'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OperatoriGruppiLavoroSchema;