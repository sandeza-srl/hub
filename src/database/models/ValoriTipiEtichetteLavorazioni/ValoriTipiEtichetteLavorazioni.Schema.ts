import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IValoriTipiEtichetteLavorazioniPrivate } from './ValoriTipiEtichetteLavorazioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const ValoriTipiEtichetteLavorazioniSchema = new mongoose.Schema<IValoriTipiEtichetteLavorazioniPrivate>({

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
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdDescrizioneTipoEtichetta'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoEtichettaLavorazioni'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdValoreTipoEtichetta'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'ValoreNumerico'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'ValoreTesto'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'ValoreData'
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'ValoreDataOra'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'Lingua'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtUtente'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdRicorrenzaRecord'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ValoriTipiEtichetteLavorazioniSchema;