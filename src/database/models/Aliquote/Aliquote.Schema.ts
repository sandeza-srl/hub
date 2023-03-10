import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IAliquotePrivate } from './Aliquote.Types.Private';


/* --------
* Schema Definition
* -------- */
const AliquoteSchema = new mongoose.Schema<IAliquotePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'PercentualeIva'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'TxtAliquota'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAliquota'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagImponibile'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'FlagImponibileVedi'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'CodiceAliquota'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'PercentualeIVADetraibile'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagAliquotaPrincipale_DASOSTITUIRE'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagAliquotaPrincipale'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdCodificaNaturaEsenzione'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceCodifica'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAliquotaOrigine'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'CodiceRegistroIVA'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagReverseCharge'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagMarcaBolloRichiesta'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'ValoreMarcaBollo'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdItemBolloIN'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdItemBolloOUT'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagDichiarazioneIntento'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AliquoteSchema;