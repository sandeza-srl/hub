import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRisorsePrivate } from './Risorse.Types.Private';


/* --------
* Schema Definition
* -------- */
const RisorseSchema = new mongoose.Schema<IRisorsePrivate>({

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
    alias: 'IdRisorsa',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtRisorsa',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdFamigliaRisorsa',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountFornitore',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtAccountFornitore',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtRisorsaEstesa',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'NumeroAddetti',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'CostoOrarioTotaleAttrezzaggio',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'CostoOrarioTotaleProduzione',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'CostoOrarioTotaleFermoMacchina',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'CostoOrarioAddettoAggiuntivo',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'ResaT',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataAcquisto',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'GaranziaGg',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataScadenzaGaranzia',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagLavInternaPianificabile',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdReparto',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtReparto',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataCalcoloImpegno',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo009: {
    type: String,
    alias: 'FlagHDisponibili',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'FlagHLibere',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'PercImpegno',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'ColoreImpegno',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'Modello',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdAccountCostruttore',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdRubricaRefTecFornitore',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdRubricaRefCommFornitore',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'NomeRefCommFornitore',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'NomeRefTecnicoFornitore',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdRubricaOperatore',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtOperatore',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'GgPercImpegno',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtFamigliaRisorsa',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagImballoFinale',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'TxtAccountCostruttore',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'CodiceRisorsa',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'CodiceTxtRisorsa',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagLavEsterna',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagImballoParziale',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagLavInternaNonPianificabile',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'iBeacon_Id',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'iBeacon_Major',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'iBeacon_Minor',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'CollegamentoMacchine_PathCartellaOut',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'CollegamentoMacchine_PathCartellaIn',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'CollegamentoMacchine_IdRisorsaEsterno',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'TA_T',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'TD_T',

  },
  __Dati_Ora003: {
    type: String,
    alias: 'TAttraversamentoLinea_T',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'NUmOpzColpo_T',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'ProdUmOpzHP_T',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'CostoOrarioAddettoAttrezzaggio',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'CostoOrarioAddettoFermoMacchina',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'CostoOrarioAddettoProduzione',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'CostoOrarioMacchinaAttrezzaggio',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'CostoOrarioMacchinaFermoMacchina',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'CostoOrarioMacchinaProduzione',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'QuotaAddettoProduzione',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'QuotaAddettoAttrezzaggio',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'QuotaAddettoFermoMacchina',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'Note',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'AnnoInstallazione',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'AnnoMeseInstallazione',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'AnnoMeseStartUp',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'AnnoStartUp',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'AnnoVendita',

  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataCorrente',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataInstallazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data006: {
    type: Date,
    alias: 'DataStartUp',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero031: {
    type: Number,
    alias: 'FlagAggiornaValori01',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'GgEsercizio',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'NumeroSerie',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'QP',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'QS',

  },
  __Dati_Ora004: {
    type: String,
    alias: 'TPR',

  },
  __Dati_Ora005: {
    type: String,
    alias: 'TFR',

  },
  __Dati_Ora006: {
    type: String,
    alias: 'TAR',

  },
  __Dati_Ora007: {
    type: String,
    alias: 'TInattivaR',

  },
  __Dati_Ora008: {
    type: String,
    alias: 'TTR',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'QT',

  },
  __Dati_Ora009: {
    type: String,
    alias: 'TImpegnoT',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'FlagAttiva',

  },
  __Dati_Ora010: {
    type: String,
    alias: 'TDR',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'ResaR',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'PercImpiego',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'FlagAggiornaValori02',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'ValoreFrazionamentoTempo',

  },
  __Dati_Ora011: {
    type: String,
    alias: 'TT_Tt_Restante',

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
  __Dati_Testo037: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'CollegamentoMacchine_LinkVisualizzatore',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'MultiMagazzino_Materiale_IdMagazzinoGestito',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'MultiMagazzino_CaricoFiniti_IdMagazzinoGestito',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'MultiMagazzino_ScartoMateriale_IdMagazzinoGestito',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'MultiMagazzino_Utensili_IdMagazzinoGestito',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'MultiMagazzino_RottamazioneUtensili_IdMagazzinoGestito',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'CollegamentoMacchine_FlagAttivo',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'IdDocumentoPrincipale',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'FlagTempoProduzioneProposto',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'id',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'title',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'CollegamentoMacchine_FlagInvioProgrammaMacchina',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'CollegamentoMacchine_FlagInvioAutomaticoProgrammaMacchina',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'MultiMagazzino_FlagAggiornaDaMagazziniGestiti',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'MultiMagazzino_Tutti_IdMagazzinoGestito',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'MultiMagazzino_Utensili_IdMagazzinoFisico',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'MultiMagazzino_RottamazioneUtensili_IdMagazzinoFisico',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'MultiMagazzino_ScartoMateriale_IdMagazzinoFisico',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'MultiMagazzino_Materiale_IdMagazzinoFisico',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'MultiMagazzino_CaricoFiniti_IdMagazzinoFisico',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'MultiMagazzino_Tutti_IdMagazzinoFisico',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'MultiMagazzino_FlagMultiMagazzinoAttivo',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'IdSedeRisorsa',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'NomeSedeRisorsa',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'MultiMagazzino_CaricoFiniti_TxtMagazzinoGestito',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'MultiMagazzino_Materiale_TxtMagazzinoGestito',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'MultiMagazzino_RottamazioneUtensili_TxtMagazzinoGestito',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'MultiMagazzino_Utensili_TxtMagazzinoGestito',

  },
  __Dati_Testo060: {
    type: String,
    alias: 'Gruppo',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RisorseSchema;