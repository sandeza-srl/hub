import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IMovimentiPrivate } from './Movimenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const MovimentiSchema = new mongoose.Schema<IMovimentiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'ClassePosizioneMagazzino',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'CodiceRiferimentoFornitore',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataEsecuzione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceDocOperativo',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountFornitore',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdPacco',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdPosizione',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'QuantitaTemporanea',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'FattoreCalcolo',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtFattoreMovimento',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdMovimento',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'NoteCorrezione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdTipoMagazzino',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdStazioneRaccoltaDati',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'QuantitaEffettivaSegno',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagIN',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagOUT',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'UnitaMisura',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'AnnoMeseEsecuzione',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdRegistrazioneRisorsa',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdProgetto',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagMovimentoEffettivo',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'CodicePacco',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'QuantitaEffettiva',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'TxtAccountFornitore',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdCollo',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdFornituraItem',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraEsecuzione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo027: {
    type: String,
    alias: 'Tracciabilita_NumeroSerie',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'VUnitario',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'VTotale',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdSedeDestinazione',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'TxtAccountOperatore',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdVoceProgetto',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'AnnoSettimanaEsecuzione',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdMagazzinoFisico',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdTipoDocOperativo',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataRegistrazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraEsecuzione',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraRegistrazione',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraRegistrazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo034: {
    type: String,
    alias: 'CodiceTipoMagazzino',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'CodiceMagazzinoFisico',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'CodicePosizione',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'Tracciabilita_CodiceLotto',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'Tracciabilita_DataScadenza',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo039: {
    type: String,
    alias: 'TxtTipoMagazzino',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'TxtMagazzinoFisico',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'IdAssociazioneMovimento',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'IdVoceDocOperativo',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'VTotaleSegno',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagCorrezione',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagDisponibileAltrove',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagDisponibileInternamente',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagNonDisponibile',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagPrenotato',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'IdMagazzinoGestito',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'QuantitaProgressivaMagazzino',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagGiacenzaGenerale',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'TxtAutomaticoDocOperativo',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'TxtMagazzinoGestito',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'QuantitaProgressivaGenerale',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'iBeacon_Id',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'iBeacon_Major',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'iBeacon_Minor',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'MillisecondiCreazione',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'Tracciabilita_Taglia',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'Tracciabilita_Colore',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'IdRegistrazioneFaseProduzione',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo055: {
    type: String,
    alias: 'IdTracciabilitaItem',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'IdMovimentoTracciabilita',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'AnnoEsecuzione',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'Tracciabilita_CodiceAutomatico',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagAggiornaDaTracciabilita',

  },
  __Dati_Testo060: {
    type: String,
    alias: 'Tracciabilita_TxtAutomatico',

  },
  __Dati_Testo061: {
    type: String,
    alias: 'Tracciabilita_InfoExtra',

  },
  __Dati_Testo062: {
    type: String,
    alias: 'Tracciabilita_CodiceTxtAutomatico',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagAggiornaMovimento',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MovimentiSchema;