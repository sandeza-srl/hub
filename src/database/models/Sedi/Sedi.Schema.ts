import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ISediPrivate } from './Sedi.Types.Private';


/* --------
* Schema Definition
* -------- */
const SediSchema = new mongoose.Schema<ISediPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccount'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdSede'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtAccount'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'Cap'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'Citta'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'Fax'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'NomeSede'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'NomeNazione'
  },
  __Dati_001: {
    type: String,
    alias: 'Tel'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'Via'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtLiberoIndirizzo'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'NomeNazioneIng'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdNazione'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'DescrizioneStampabile'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'TxtZona'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'NoteTrasporti'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataModificaNoteTrasporti'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'UtenteModificaNoteTrasporti'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataModificaNoteAlloggio'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'NoteAlloggio'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'UtenteModificaNoteAlloggio'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'NoteVitto'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'UtenteModificaNoteVitto'
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataModificaNoteVitto'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'NoteVarie'
  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataModificaNoteVarie'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'UtenteModificaNoteVarie'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'KmDaSede'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'OreViaggioDaSede'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Priorita'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagLegale'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'FlagLegaleVedi'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagSpedizione'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'FlagSpedizioneVedi'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'GiorniTrasporto'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'ChiusureSettimanali'
  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdZona'
  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagImpiantoCreato'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Latitudine'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'Longitudine'
  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdPeriodoChiusura'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'GiorniProduzione'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'GiorniApprovvigionamento'
  },
  __Dati_Testo029: {
    type: String,
    alias: 'IndirizzoCompleto'
  },
  __Dati_Testo030: {
    type: String,
    alias: 'Latitudine_Longitudine_JSON'
  },
  __Dati_Testo031: {
    type: String,
    alias: 'CodiceSede'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagAggiornaSede'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SediSchema;