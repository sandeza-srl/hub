import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IItemsPerOpzioneProdPrivate } from './ItemsPerOpzioneProd.Types.Private';


/* --------
* Schema Definition
* -------- */
const ItemsPerOpzioneProdSchema = new mongoose.Schema<IItemsPerOpzioneProdPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdArticolo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdCiclo'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodiceFase'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdRisorsa'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdOpzioneProd'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'CUMT'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'QtPerUmO'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'RelazionePerStampa'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceItem'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdItemOpzioneProd'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'CTMT'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtItem'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Posizione'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagScaricoProduzione_QtProposta'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagScaricoProduzione_DeduzioneAutomatica'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'QtPerUmO_Finito'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'QtPerUmO_Netta'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'QtPerUmO_Sfrido'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'QtPerUmAlternativa_Netta'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'QtPerUmAlternativa_Sfrido'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'PercSfrido'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'UMAlternativa'
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'QtPerUmAlternativa'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceItemAlternativo'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceTxtItemAutomatico'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdFamigliaItem'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdSottoFamigliaItem'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ItemsPerOpzioneProdSchema;