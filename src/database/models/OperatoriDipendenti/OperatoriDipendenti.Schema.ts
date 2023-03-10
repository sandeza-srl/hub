import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IOperatoriDipendentiPrivate } from './OperatoriDipendenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const OperatoriDipendentiSchema = new mongoose.Schema<IOperatoriDipendentiPrivate>({

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
    alias: 'IdDipendente'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtDipendente'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagPartTime'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceBadge'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagBancaOre'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountOperatore'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'OreGiornaliere'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'Password'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagModificaTempiAttiva'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagModificaAltriGiorniAttiva'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdOperatoreProduzione'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagRiconocimentoNFCAttivo'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdUnivocoNFC'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OperatoriDipendentiSchema;