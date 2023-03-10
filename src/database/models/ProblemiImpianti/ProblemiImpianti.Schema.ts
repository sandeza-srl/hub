import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IProblemiImpiantiPrivate } from './ProblemiImpianti.Types.Private';


/* --------
* Schema Definition
* -------- */
const ProblemiImpiantiSchema = new mongoose.Schema<IProblemiImpiantiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoProblema'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoProblema'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdImpianto'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtImpianto'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ComplessitaNumero'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'ComplessitaTesto'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdProblemaImpianto'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'Note'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagRisolto'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtRisolto'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'FlagRisoltoVedi'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagAzioneCreata'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'FlagAzioneCreataVedi'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdFamigliaItem'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdSottoFamigliaItem'
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
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdTipoImpianto'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceImpianto'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataRilevazione'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataRisoluzione'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdTipoSoluzione'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ProblemiImpiantiSchema;