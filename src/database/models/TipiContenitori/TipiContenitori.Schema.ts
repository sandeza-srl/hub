import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiContenitoriPrivate } from './TipiContenitori.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiContenitoriSchema = new mongoose.Schema<ITipiContenitoriPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoContenitore'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoContenitore'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoContenitoreEsteso'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'Materiale'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'NumeroContenitoriAttivi'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'NumeroContenitoriRiparazione'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdFamigliaContenitore'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtFamigliaContenitore'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdImgIdentificativa'
  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ImgIdentificativa'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceTipoContenitore'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Progressivo'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagAggiornaValori'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'NumeroContenitoriRottamati'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'NumeroContenitoriTotali'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdAccountResponsabile'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtAccountResponsabile'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdRubricaContatti'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'NumeroContenitoriDisponibili'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceTxtTipoContenitoreAutomatico'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiContenitoriSchema;