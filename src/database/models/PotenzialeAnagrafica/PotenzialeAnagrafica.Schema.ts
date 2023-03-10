import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IPotenzialeAnagraficaPrivate } from './PotenzialeAnagrafica.Types.Private';


/* --------
* Schema Definition
* -------- */
const PotenzialeAnagraficaSchema = new mongoose.Schema<IPotenzialeAnagraficaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodicePotenziale'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccount'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoPotenziale'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoPotenziale'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ValoreRiferimento'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdPotenzialeAnagrafica'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Anno'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'ValoreRisultato'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'PercRisultato'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PotenzialeAnagraficaSchema;