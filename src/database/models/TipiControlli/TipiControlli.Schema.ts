import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiControlliPrivate } from './TipiControlli.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiControlliSchema = new mongoose.Schema<ITipiControlliPrivate>({

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
    alias: 'IdTipoControllo'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoControllo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoStrumento'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Criticita'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoResponsabile'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtTipoStrumento'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'UnitaMisura'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagCalcoloMatematico'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceTipoStrumento'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceTipoControllo'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'CodiceTxtTipoControlloAutomatico'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdTipoResponsabile'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'FlagSelezione'
  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'IconaTipoControllo'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'CalcoloValoriMultipliVisibile'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'CalcoloValoriMultipli'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtFamigliaStrumento'
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
  __Dati_Testo016: {
    type: String,
    alias: 'UtenteCreazione'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'UtenteModifica'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'CodiceTxtTipoControlloStrumentoAutomatico'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'CUQ_T'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagControlloMacchina'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdFamigliaTipoControllo'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtFamigliaTipoControllo'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagValoriMultipli'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'NumValoriMultipli'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagValidazioneCalcolo'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagMatricolaStrumento'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdTipoPianoCampionamento'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'TxtTipoPianoCampionamento'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagPianoCampionamento_VinceTipoControllo'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdRicorrenzaRecord'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo026: {
    type: String,
    alias: 'TxtUtente'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiControlliSchema;