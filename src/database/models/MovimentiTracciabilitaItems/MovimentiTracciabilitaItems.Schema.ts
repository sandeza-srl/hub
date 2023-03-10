import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IMovimentiTracciabilitaItemsPrivate } from './MovimentiTracciabilitaItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const MovimentiTracciabilitaItemsSchema = new mongoose.Schema<IMovimentiTracciabilitaItemsPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'QuantitaItemSegno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdFaseProduzione'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdRegistrazioneFaseProduzione'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdScarto'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'QuantitaResiduaMovimentazione'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagAggiornaDaMovimentiStock'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataVoce'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'QuantitaItem'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'AnnoMeseVoce'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'AnnoSettimanaVoce'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagItemEntrata'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdVoceDocOperativo'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdFornituraItem'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdDocOperativo'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtAutomaticoDocOperativoEntrata'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagAggiornaDaVoci'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdTracciabilitaItem'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagItemUscita'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'AnnoVoce'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'QuantitaItemEntrata'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'QuantitaItemUscita'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdLottoProduzione'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdMovimentoTracciabilita'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MovimentiTracciabilitaItemsSchema;