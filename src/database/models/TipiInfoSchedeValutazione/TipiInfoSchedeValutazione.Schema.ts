import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiInfoSchedeValutazionePrivate } from './TipiInfoSchedeValutazione.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiInfoSchedeValutazioneSchema = new mongoose.Schema<ITipiInfoSchedeValutazionePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoSchedaValutazione'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoInfoSchedaValutazione'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'Etichetta'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagValoreCalcolato'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'ValoreRiferimentoTestuale'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'ValoreRiferimentoNumerico'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'ValoreLimiteInferioreNumerico'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'ValoreLimiteSuperioreNumerico'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'Nota'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiInfoSchedeValutazioneSchema;