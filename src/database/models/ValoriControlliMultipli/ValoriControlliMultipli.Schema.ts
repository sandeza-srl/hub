import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IValoriControlliMultipliPrivate } from './ValoriControlliMultipli.Types.Private';


/* --------
* Schema Definition
* -------- */
const ValoriControlliMultipliSchema = new mongoose.Schema<IValoriControlliMultipliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdValoreRilevato'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoEtichettaLavorazione'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoControllo'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdControlloRegistrazione'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtTipoEtichettaLavorazione'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'ValoreRilevato'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdValoriControlliMultipli'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdControllI'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ValoriControlliMultipliSchema;