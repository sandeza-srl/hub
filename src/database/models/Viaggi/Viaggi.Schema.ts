import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IViaggiPrivate } from './Viaggi.Types.Private';


/* --------
* Schema Definition
* -------- */
const ViaggiSchema = new mongoose.Schema<IViaggiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdViaggi'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraModifica'
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
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountPartenza'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountArrivo'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdSedeArrivo'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdSedePartenza'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountOperatore'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdInterventoArrivo'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdInterventoPartenza'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtAccountArrivo'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtAccountOperatore'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtAccountPartenza'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtSedeArrivo'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'TxtSedePartenza'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataPartenza'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataArrivo'
  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraArrivo'
  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraPartenza'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'TempoViaggioNumerico'
  },
  __Dati_Ora003: {
    type: String,
    alias: 'TempoViaggioTime'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'KmViaggio'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'CapPartenza'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'CittaPartenza'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'LatitudinePartenza'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'LongitudinePartenza'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'ProvinciaPartenza'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'ViaPartenza'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdNazionePartenza'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'NomeNazionePartenza'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'NomeNazioneIngPartenza'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'CapArrivo'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'CittaArrivo'
  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdNazioneArrivo'
  },
  __Dati_Testo027: {
    type: String,
    alias: 'LatitudineArrivo'
  },
  __Dati_Testo028: {
    type: String,
    alias: 'LongitudineArrivo'
  },
  __Dati_Testo029: {
    type: String,
    alias: 'NomeNazioneIngArrivo'
  },
  __Dati_Testo030: {
    type: String,
    alias: 'NomeNazioneArrivo'
  },
  __Dati_Testo031: {
    type: String,
    alias: 'ProvinciaArrivo'
  },
  __Dati_Testo032: {
    type: String,
    alias: 'ViaArrivo'
  },
  __Dati_Testo033: {
    type: String,
    alias: 'CodiceInterventoPartenza'
  },
  __Dati_Testo034: {
    type: String,
    alias: 'CodiceInterventoArrivo'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'KmViaggioStimato'
  },
  __Dati_Ora004: {
    type: String,
    alias: 'TempoViaggioTimeStimato'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'TempoViaggioNumericoStimato'
  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdDocumentoCollegato'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagViaggioTerminato'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagViaggioInCorso'
  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdInterventoTutti'
  },
  __Dati_Ora005: {
    type: String,
    alias: 'InizioPausaTime'
  },
  __Dati_Ora006: {
    type: String,
    alias: 'FinePausaTime'
  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ViaggiSchema;