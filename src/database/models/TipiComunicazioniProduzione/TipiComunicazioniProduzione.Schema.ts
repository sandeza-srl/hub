import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiComunicazioniProduzionePrivate } from './TipiComunicazioniProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiComunicazioniProduzioneSchema = new mongoose.Schema<ITipiComunicazioniProduzionePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdTipoComunicazioneProduzione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoComunicazioneProduzione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceTipoComunicazioneProduzione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'FamigliaTipoComunicazioneProduzione',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagNonConformita',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdRisorseAbilitate',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdRubricaDestinatari',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtRubricaDestinatari',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'CodiceTxtTipoComunicazioneProduzione',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagModificaProgramma',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagRichiestaManutenzione',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagSuggerimento',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdAccountOperatoriDestinatari',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdTipoAttivitaConseguenza',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdTipoDocumento',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdSottoTipoDocumento',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagNotificaUrgente',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdTipoStatoComunicazioneIniziale',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'OrdineTxtTipoStatoComunicazione',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'CollegamentoAllegati_Articoli_FlagDisattiva',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'CollegamentoAllegati_Lotti_FlagDisattiva',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'NotificaMail_FlagAllegati',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagInvioNotificaMail',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'NotificaMail_Oggetto',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'NotificaMail_Testo',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'NotificaMail_FlagInviaSubito',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiComunicazioniProduzioneSchema;