import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiStatiTipiDocOperativiPrivate } from './TipiStatiTipiDocOperativi.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiStatiTipiDocOperativiSchema = new mongoose.Schema<ITipiStatiTipiDocOperativiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
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
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoStatoTipoDocOperativo',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'OrdineStato',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtStatoTipoDocOperativo',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'FlagTipoDocOperativoTxt',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'VariabiliCondizionate_Pv1_CodiceCreato',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'VariabiliBase_01_VociPresenti',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'VariabiliCondizionate_So1_ScaricoParziale',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'VariabiliCondizionate_So2_ScaricoTotale',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'VariabiliCondizionate_Sc1_ScaricoContabileParziale',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'VariabiliCondizionate_Sc2_ScaricoContabileTotale',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'VariabiliCondizionate_Ma1_MovimentazioneMagazzinoParziale',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'VariabiliCondizionate_Ma2_MovimentazioneMagazzinoTotale',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'VariabiliCondizionate_De1_DocOperativoDestCreato',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VariabiliCondizionate_Pr1_LancioProduzioneParziale',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'VariabiliCondizionate_Ch1_ChiusuraManualeData',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'VariabiliCondizionate_An1_Annullato',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'VariabiliBase_02_Inviato',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'Condizioni_Pv_ProvvisorioPossibile',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'Condizioni_So_DocOperativoCheScarica',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'Condizioni_Sc_InseribileDocContabili',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'Condizioni_Ma_MovimentazioneMagazzino',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'Condizioni_An_AnnullamentoPossibile',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'Condizioni_Ch_ChiusuraManuale',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'VariabiliCondizionate_Pr2_LancioProduzioneTotale',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'Condizioni_Pr_LancioProduzione',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'Condizioni_De_DocOperativoDestinazioneRichiesto',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'Condizioni_In_RichiestoInvio',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'VariabiliCondizionate_In1_Inviato',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagDocumentoChiuso',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'Condizioni_Va_ValidazioneRichiesta',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'VariabiliCondizionate_Va1_ValidazioneData',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipoDocOperativo',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'Condizioni_Ac_CreazioneAttivitaControllo',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'VariabiliCondizionate_Ca1_AttivitaControlloCreate',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'Condizioni_At_CreazioneAttivitaEvents',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'VariabiliCondizionate_At1_AttivitaEventsCreata',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiStatiTipiDocOperativiSchema;