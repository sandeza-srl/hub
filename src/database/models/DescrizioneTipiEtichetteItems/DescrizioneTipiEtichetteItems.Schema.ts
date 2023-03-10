import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IDescrizioneTipiEtichetteItemsPrivate } from './DescrizioneTipiEtichetteItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const DescrizioneTipiEtichetteItemsSchema = new mongoose.Schema<IDescrizioneTipiEtichetteItemsPrivate>({

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
    alias: 'DescrizioneTipoEtichetta'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoEtichetta'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'Lingua'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipoEtichettaOrigine'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdDescrizioneTipoEtichetta'
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
export default DescrizioneTipiEtichetteItemsSchema;