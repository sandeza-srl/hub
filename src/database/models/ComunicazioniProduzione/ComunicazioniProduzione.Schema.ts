import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IComunicazioniProduzionePrivate } from './ComunicazioniProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const ComunicazioniProduzioneSchema = new mongoose.Schema<IComunicazioniProduzionePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdRegistrazioneFaseProduzione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'CodiceComunicazioneProduzione',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'Ora',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TestoComunicazioneProduzione',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ProgComunicazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdComunicazioneProduzione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipoComunicazioneProduzione',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Anno',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'AnnoMese',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'AnnoSettimana',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceArticolo',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'CodiceCiclo',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'CodiceDisegno',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'CodiceFase',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'CodiceFaseProduzione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceLottoProduzione',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceRigaOrdine',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'CodiceRisorsa',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceTipoTurno',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'Data',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOra',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagAperta',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'FlagSelezione',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'GiornoSettimana',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Mese',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Settimana',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdAccountCliente',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdAccountOperatoreCreazione',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdDispositivoRaccoltaDati',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdFase',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdOperatoreCreazione',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdRegistrazioneRisorsa',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdReparto',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdStazioneRaccoltaDati',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdTipoFase',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdTipoTurno',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdOpzioneProd',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'RevisioneArticolo',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'RevisioneDisegno',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'TxtArticolo',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'TxtCiclo',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'TxtFase',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'TxtOperatore',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'TxtReparto',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'TxtRisorsa',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'TxtStazioneRaccoltaDati',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'TxtTipoTurno',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'TxtTurnoData',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagNonConformita',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagRichiestaManutenzione',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagSuggerimento',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagModificaProgramma',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'CodiceTipoComunicazioneProduzione',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'CodiceTxtTipoComunicazioneProduzione',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'FamigliaTipoComunicazioneProduzione',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'IdAccountOperatoriDestinatari',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'IdTipoAttivitaConseguenza',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'TxtTipoComunicazioneProduzione',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'IdDocumentoCollegato',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'IdTipoStatoComunicazione',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'OrdineTxtTipoStatoComunicazione',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'OrdineTipoStatoComunicazione',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'CollegamentoAllegati_Lotti_FlagDisattivato',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'CollegamentoAllegati_Articoli_FlagDisattivato',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'CodiceTxtArticoloAutomatico',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'CodiceTxtDisegnoArticoloAutomatico',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'CodiceTxtFaseAutomatico',

  },
  __Dati_Testo060: {
    type: String,
    alias: 'CodiceTxtRisorsaAutomatico',

  },
  __Dati_Testo061: {
    type: String,
    alias: 'CodiceTxtFaseRisorsaAutomatico',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo062: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagChiusa',

  },
  __Dati_Testo063: {
    type: String,
    alias: 'TxtTipoStatoComunicazione',

  },
  __Dati_Testo064: {
    type: String,
    alias: 'IdNumeroSerieLottoProduzione',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'NotificaMail_FlagInviata',

  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'NotificaMail_DataOraInvio',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero017: {
    type: Number,
    alias: 'NotificaMail_FlagInvioRichiesto',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ComunicazioniProduzioneSchema;