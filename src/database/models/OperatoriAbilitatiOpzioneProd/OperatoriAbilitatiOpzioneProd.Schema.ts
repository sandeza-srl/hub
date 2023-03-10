import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IOperatoriAbilitatiOpzioneProdPrivate } from './OperatoriAbilitatiOpzioneProd.Types.Private';


/* --------
* Schema Definition
* -------- */
const OperatoriAbilitatiOpzioneProdSchema = new mongoose.Schema<IOperatoriAbilitatiOpzioneProdPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdArticolo'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCiclo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAbilitazioneOperatore'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'Note'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdOpzioneProd'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdRisorsa'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountOperatore'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtOperatore'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'AbilitaAttrezzaggioTxtOperatoreAutomatico'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdTipoFase'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataModifica'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'UtenteCreazione'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'UtenteModifica'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagPredefinitoProduzione'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'AbilitaProduzione'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'AbilitaProduzioneTxtOperatoreAutomatico'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdOperatoreProduzione'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'AbilitaAttrezzaggio'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagPredefinitoAttrezzaggio'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagRisorsa'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagTipoFase'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagSelezione'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagAssegnaAutomaticamente'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'TxtUtente'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdRicorrenzaRecord'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OperatoriAbilitatiOpzioneProdSchema;