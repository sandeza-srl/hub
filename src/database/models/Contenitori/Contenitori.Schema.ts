import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IContenitoriPrivate } from './Contenitori.Types.Private';


/* --------
* Schema Definition
* -------- */
const ContenitoriSchema = new mongoose.Schema<IContenitoriPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountFornitore'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoContenitore'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtAccountFornitore'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoContenitore'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdContenitore'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'NumeroContenitore'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAttivo'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceRiferimentoFornitore'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtTipoStatoContenitore'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'PosizioneMagazzino'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdFornituraItem'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceContenitore'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataFornitura'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagDisponibile'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtFornitura'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdTipoStatoContenitore'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceTipoContenitore'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtFamigliaContenitore'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdFamigliaContenitore'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataScadenzaGaranzia'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagRiparazione'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagRottamato'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagAggiornaValori'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdReparto'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'TxtReparto'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdAccountResponsabile'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdRubricaContatti'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtTipoStatoContenitoreAutomatico'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'NumeroSerie'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'iBeacon_Id'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'iBeacon_Major'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'iBeacon_Minor'
  },
  __Dati_Testo026: {
    type: String,
    alias: 'CodiceTxtContenitoreAutomatico'
  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtTipoStatoPosizioneContenitoreAutomatico'
  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ContenitoriSchema;