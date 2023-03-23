import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRegistrazioniFasiProduzionePrivate } from './RegistrazioniFasiProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const RegistrazioniFasiProduzioneSchema = new mongoose.Schema<IRegistrazioniFasiProduzionePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdFase',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'UmFinito',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'ConvUmOpzUmFin',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagImballoFinale',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagImballoParziale',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'FlagSelezione',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FrequenzaControllo',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'GgLavorazione_T',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'TA_T_Fase',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'TD_T_Fase',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdFamigliaRisorsa',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdTipoFase',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdOpzioneProd',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'NumeroAddetti_T',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'ProdUmOpzHPF_T',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'ProdUmOpzHP_T',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'ProdUmFinHPF_T',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'ProdUmFinHP_T',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'Resa_T',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtArticolo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtCiclo',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtFase',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtRisorsa',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'UmOpzione',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdAccountCliente',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagSaldoFaseProduzione',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'QP_R_Opz',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'QP_R_Fin',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'AltezzaImballo_T',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'AreaImballo_T',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInizio',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataFine',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero018: {
    type: Number,
    alias: 'GgLavorazione_R',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdDocOperativoOrigine',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'CHAD_T',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'CHAddettoAggiuntivo_T',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'CHP_T',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'CHF_T',

  },
  __Dati_Ora003: {
    type: String,
    alias: 'TA_R',

  },
  __Dati_Ora004: {
    type: String,
    alias: 'TD_R',

  },
  __Dati_Ora005: {
    type: String,
    alias: 'TF_R',

  },
  __Dati_Ora006: {
    type: String,
    alias: 'TP_R',

  },
  __Dati_Ora007: {
    type: String,
    alias: 'TT_R',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'QS_R_Opz',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'QS_R_Fin',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'Resa_R',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'QT_R_Fin',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'QT_R_Opz',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdRegistrazioneFaseProduzione',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdReparto',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdStazioneRaccoltaDati',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'ProdUmOpzHP_R_QP',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'CTAD_R',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'CTF_R',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'CTP_R',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'CTT_R',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'NumeroAddetti_R',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'PercIncCTTRA_R',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'PercScartoFase_R',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'Anno',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'GiornoSettimana',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdOperatore',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'Mese',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'TxtTurnoData',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'TxtOperatoreProduzione',

  },
  __Dati_Ora008: {
    type: String,
    alias: 'OraFine',

  },
  __Dati_Ora009: {
    type: String,
    alias: 'OraInizio',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'TxtMassimoAumentoCosto',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'PercDiffProdHPFTeoReale_QT',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'PercDiffProdHPTeoReale_QT',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'PercDiffCUMR_CUMT',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'PercDiffCUFR_CUFT',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'CTM_R',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'PercDiffCUPR_CUPT',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'CUP_R_Opz',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'CUM_R_Opz',

  },
  __Dati_Numero047: {
    type: Number,
    alias: 'PercIncCTAD_R',

  },
  __Dati_Numero048: {
    type: Number,
    alias: 'PercDiffCUTT_CUTR',

  },
  __Dati_Numero049: {
    type: Number,
    alias: 'PercDiffCUADR_CUADT',

  },
  __Dati_Numero050: {
    type: Number,
    alias: 'ProdUmOpzHP_R',

  },
  __Dati_Numero051: {
    type: Number,
    alias: 'ProdUmOpzHPF_R_QP',

  },
  __Dati_Numero052: {
    type: Number,
    alias: 'ProdUmOpzHPF_R',

  },
  __Dati_Numero053: {
    type: Number,
    alias: 'PercIncCTSFc_R',

  },
  __Dati_Numero054: {
    type: Number,
    alias: 'CTBFc_T',

  },
  __Dati_Numero055: {
    type: Number,
    alias: 'PercIncCTP_R',

  },
  __Dati_Numero056: {
    type: Number,
    alias: 'CUF_R_Opz',

  },
  __Dati_Numero057: {
    type: Number,
    alias: 'CUT_R_Opz',

  },
  __Dati_Ora010: {
    type: String,
    alias: 'TT_R_ConPausa',

  },
  __Dati_Numero058: {
    type: Number,
    alias: 'CUAD_R_Opz',

  },
  __Dati_Numero059: {
    type: Number,
    alias: 'PercIncCTF_R',

  },
  __Dati_Numero060: {
    type: Number,
    alias: 'CTLE_R',

  },
  __Dati_Numero061: {
    type: Number,
    alias: 'FlagLavInternaPianificabile',

  },
  __Dati_Numero062: {
    type: Number,
    alias: 'CULE_T_Opz',

  },
  __Dati_Numero063: {
    type: Number,
    alias: 'PercIncCTM_R',

  },
  __Dati_Numero064: {
    type: Number,
    alias: 'CULE_R_Opz',

  },
  __Dati_Numero065: {
    type: Number,
    alias: 'CUTRA_R_Opz',

  },
  __Dati_Numero066: {
    type: Number,
    alias: 'CTTRA_R',

  },
  __Dati_Ora011: {
    type: String,
    alias: 'TF_R_QS',

  },
  __Dati_Ora012: {
    type: String,
    alias: 'TP_R_QS',

  },
  __Dati_Ora013: {
    type: String,
    alias: 'TT_R_QS',

  },
  __Dati_Ora014: {
    type: String,
    alias: 'TF_R_QP',

  },
  __Dati_Ora015: {
    type: String,
    alias: 'TP_R_QP',

  },
  __Dati_Ora016: {
    type: String,
    alias: 'TT_R_QP',

  },
  __Dati_Numero067: {
    type: Number,
    alias: 'PercScartoFase_T',

  },
  __Dati_Numero068: {
    type: Number,
    alias: 'QS_T_Opz',

  },
  __Dati_Numero069: {
    type: Number,
    alias: 'QP_T_Opz',

  },
  __Dati_Ora017: {
    type: String,
    alias: 'TF_T_QP',

  },
  __Dati_Ora018: {
    type: String,
    alias: 'TF_T_QS',

  },
  __Dati_Ora019: {
    type: String,
    alias: 'TF_T',

  },
  __Dati_Ora020: {
    type: String,
    alias: 'TP_T_QP',

  },
  __Dati_Ora021: {
    type: String,
    alias: 'TP_T_QS',

  },
  __Dati_Ora022: {
    type: String,
    alias: 'TP_T',

  },
  __Dati_Ora023: {
    type: String,
    alias: 'TT_T_QP',

  },
  __Dati_Ora024: {
    type: String,
    alias: 'TT_T_QS',

  },
  __Dati_Ora025: {
    type: String,
    alias: 'TT_T',

  },
  __Dati_Numero070: {
    type: Number,
    alias: 'CTAD_T',

  },
  __Dati_Numero071: {
    type: Number,
    alias: 'CTF_T',

  },
  __Dati_Numero072: {
    type: Number,
    alias: 'CTLE_T',

  },
  __Dati_Numero073: {
    type: Number,
    alias: 'CTM_T',

  },
  __Dati_Numero074: {
    type: Number,
    alias: 'CTP_T',

  },
  __Dati_Numero075: {
    type: Number,
    alias: 'CTT_T',

  },
  __Dati_Numero076: {
    type: Number,
    alias: 'CTTRA_T',

  },
  __Dati_Numero077: {
    type: Number,
    alias: 'CUAD_T_Opz',

  },
  __Dati_Numero078: {
    type: Number,
    alias: 'CUF_T_Opz',

  },
  __Dati_Numero079: {
    type: Number,
    alias: 'CUM_T_Opz',

  },
  __Dati_Numero080: {
    type: Number,
    alias: 'CUP_T_Opz',

  },
  __Dati_Numero081: {
    type: Number,
    alias: 'CTBFc_R',

  },
  __Dati_Numero082: {
    type: Number,
    alias: 'CUT_T_Opz',

  },
  __Dati_Numero083: {
    type: Number,
    alias: 'CUTRA_T_Opz',

  },
  __Dati_Ora026: {
    type: String,
    alias: 'TA_T',

  },
  __Dati_Ora027: {
    type: String,
    alias: 'TD_T',

  },
  __Dati_Numero084: {
    type: Number,
    alias: 'PercIncCTAD_T',

  },
  __Dati_Numero085: {
    type: Number,
    alias: 'PercIncCTF_T',

  },
  __Dati_Numero086: {
    type: Number,
    alias: 'PercIncCTM_T',

  },
  __Dati_Numero087: {
    type: Number,
    alias: 'PercIncCTP_T',

  },
  __Dati_Numero088: {
    type: Number,
    alias: 'PercIncCTSFc_T',

  },
  __Dati_Numero089: {
    type: Number,
    alias: 'PercIncCTTRA_T',

  },
  __Dati_Numero090: {
    type: Number,
    alias: 'PercDiffCUSR_CUST',

  },
  __Dati_Numero091: {
    type: Number,
    alias: 'PercDiffCUTRAR_CUTRAT',

  },
  __Dati_Ora028: {
    type: String,
    alias: 'TPausa',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtReparto',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'TxtStazioneRaccoltaDati',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraFine',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraInizio',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero092: {
    type: Number,
    alias: 'FlagStatoRegistrazione',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'CodiceFase',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'CodiceArticolo',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'CodiceCiclo',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'CodiceRigaOrdine',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'CodiceRisorsa',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'CodiceLottoProduzione',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'CodiceFaseProduzione',

  },
  __Dati_Numero093: {
    type: Number,
    alias: 'FlagRegistrazioneAperta',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'TxtStatoRegistrazione',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'AnnoMese',

  },
  __Dati_Numero094: {
    type: Number,
    alias: 'OEE',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdTipoTurno',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'CodiceDisegno',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'CodiceTipoTurno',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'IdRegistrazioneRisorsa',

  },
  __Dati_Ora029: {
    type: String,
    alias: 'TAttraversamentoLinea_T',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'IdDocOperativoCaricoFiniti',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'IdDocOperativoFabbisognoLavorazioni',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'IdDocOperativoFabbisognoMateriali',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'IdDocOperativoOrdineLavorazioni',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'IdDocOperativoRientroLavorazioni',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'IdDocOperativoUscitaLavorazioni',

  },
  __Dati_Ora030: {
    type: String,
    alias: 'TEffettivoLavoroMacchina',

  },
  __Dati_Numero095: {
    type: Number,
    alias: 'SecondiUnitaRegistrazione',

  },
  __Dati_Numero096: {
    type: Number,
    alias: 'DistrTempi_SecondiTeoriciQT_R',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'FlagErrore',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'TxtErrore',

  },
  __Dati_Numero097: {
    type: Number,
    alias: 'AltezzaImballo_R',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'AnnoSettimana',

  },
  __Dati_Numero098: {
    type: Number,
    alias: 'AreaImballo_R',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'CodiceTxtRisorsaAutomatico',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'CodiceTxtArticoloAutomatico',

  },
  __Dati_Numero099: {
    type: Number,
    alias: 'FlagAggiornaDaRegistrazioneRisorsa',

  },
  __Dati_Numero100: {
    type: Number,
    alias: 'FlagAggiornaTotali',

  },
  __Dati_Numero101: {
    type: Number,
    alias: 'FlagLavInternaNonPianificabile',

  },
  __Dati_Numero102: {
    type: Number,
    alias: 'FlagLavEsterna',

  },
  __Dati_Numero103: {
    type: Number,
    alias: 'FlagProduzioneNested',

  },
  __Dati_Numero104: {
    type: Number,
    alias: 'DistrTempi_PercTempiPerRegistrazioneFase',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'TxtTipoTurno',

  },
  __Dati_Numero105: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero106: {
    type: Number,
    alias: 'FlagAggiornaDaCorrelate',

  },
  __Dati_Numero107: {
    type: Number,
    alias: 'NumeroFase',

  },
  __Dati_Numero108: {
    type: Number,
    alias: 'CTL_R',

  },
  __Dati_Numero109: {
    type: Number,
    alias: 'CTL_T',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'IdDispositivoRaccoltaDati',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'CodiceTxtFaseAutomatico',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'RevisioneArticolo',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'RevisioneDisegno',

  },
  __Dati_Testo060: {
    type: String,
    alias: 'CodiceRevisioneDisegnoAutomatica',

  },
  __Dati_Testo061: {
    type: String,
    alias: 'CodiceContenitore',

  },
  __Dati_Testo062: {
    type: String,
    alias: 'IdUtensiliUtilizzati',

  },
  __Dati_Testo063: {
    type: String,
    alias: 'IdDocOperativoScartoMateriali',

  },
  __Dati_Testo064: {
    type: String,
    alias: 'IdDocOperativoScaricoMateriali',

  },
  __Dati_Numero110: {
    type: Number,
    alias: 'DistrTempi_PercTAPerRegistrazioneFase',

  },
  __Dati_Numero111: {
    type: Number,
    alias: 'DistrTempi_PercTDPerRegistrazioneFase',

  },
  __Dati_Numero112: {
    type: Number,
    alias: 'CUSFc_T_Opz',

  },
  __Dati_Numero113: {
    type: Number,
    alias: 'CTSFc_R',

  },
  __Dati_Numero114: {
    type: Number,
    alias: 'NumeroDecimaliQuantita',

  },
  __Dati_Numero115: {
    type: Number,
    alias: 'NumeroDecimaliValori',

  },
  __Dati_Numero116: {
    type: Number,
    alias: 'CostoOrarioAddettoAttrezzaggio_T',

  },
  __Dati_Numero117: {
    type: Number,
    alias: 'CostoOrarioMacchinaAttrezzaggio_T',

  },
  __Dati_Numero118: {
    type: Number,
    alias: 'QuotaAddettoAttrezzaggio_T',

  },
  __Dati_Numero119: {
    type: Number,
    alias: 'QuotaAddettoAttrezzaggio_R',

  },
  __Dati_Numero120: {
    type: Number,
    alias: 'CHAD_R',

  },
  __Dati_Numero121: {
    type: Number,
    alias: 'CostoOrarioAddettoProduzione_T',

  },
  __Dati_Numero122: {
    type: Number,
    alias: 'CostoOrarioMacchinaProduzione_T',

  },
  __Dati_Numero123: {
    type: Number,
    alias: 'QuotaAddettoProduzione_T',

  },
  __Dati_Numero124: {
    type: Number,
    alias: 'QuotaAddettoProduzione_R',

  },
  __Dati_Numero125: {
    type: Number,
    alias: 'CHP_R',

  },
  __Dati_Numero126: {
    type: Number,
    alias: 'CostoOrarioAddettoFermoMacchina_T',

  },
  __Dati_Numero127: {
    type: Number,
    alias: 'CostoOrarioMacchinaFermoMacchina_T',

  },
  __Dati_Numero128: {
    type: Number,
    alias: 'QuotaAddettoFermoMacchina_T',

  },
  __Dati_Numero129: {
    type: Number,
    alias: 'QuotaAddettoFermoMacchina_R',

  },
  __Dati_Numero130: {
    type: Number,
    alias: 'CHF_R',

  },
  __Dati_Numero131: {
    type: Number,
    alias: 'CUUt_T_Opz',

  },
  __Dati_Numero132: {
    type: Number,
    alias: 'CTQ_T',

  },
  __Dati_Numero133: {
    type: Number,
    alias: 'CUQ_T_Opz',

  },
  __Dati_Numero134: {
    type: Number,
    alias: 'CTUt_T',

  },
  __Dati_Numero135: {
    type: Number,
    alias: 'CUUt_R_Opz',

  },
  __Dati_Numero136: {
    type: Number,
    alias: 'CTUt_R',

  },
  __Dati_Numero137: {
    type: Number,
    alias: 'CUQ_R_Opz',

  },
  __Dati_Numero138: {
    type: Number,
    alias: 'CTQ_R',

  },
  __Dati_Numero139: {
    type: Number,
    alias: 'CTSFc_T',

  },
  __Dati_Testo065: {
    type: String,
    alias: 'CodiceTxtDisegnoArticoloAutomatico',

  },
  __Dati_Testo066: {
    type: String,
    alias: 'CodiceTxtFaseRisorsaAutomatico',

  },
  __Dati_Numero140: {
    type: Number,
    alias: 'ConvUmFinUmOpz',

  },
  __Dati_Numero141: {
    type: Number,
    alias: 'ConvUmLavorazioneUmOpz',

  },
  __Dati_Numero142: {
    type: Number,
    alias: 'ConvUmOpzUmLavorazione',

  },
  __Dati_Numero143: {
    type: Number,
    alias: 'ConvUmOpzUmTrasporto',

  },
  __Dati_Numero144: {
    type: Number,
    alias: 'ConvUmTrasportoUmOpz',

  },
  __Dati_Testo067: {
    type: String,
    alias: 'UmOpzPerImballo',

  },
  __Dati_Numero145: {
    type: Number,
    alias: 'QT_T_Opz',

  },
  __Dati_Numero146: {
    type: Number,
    alias: 'CUL_T_Opz',

  },
  __Dati_Numero147: {
    type: Number,
    alias: 'CUL_R_Opz',

  },
  __Dati_Numero148: {
    type: Number,
    alias: 'CUP_R_Fin',

  },
  __Dati_Numero149: {
    type: Number,
    alias: 'CUP_T_Fin',

  },
  __Dati_Numero150: {
    type: Number,
    alias: 'CUAD_T_Fin',

  },
  __Dati_Numero151: {
    type: Number,
    alias: 'CUAD_R_Fin',

  },
  __Dati_Numero152: {
    type: Number,
    alias: 'CUF_R_Fin',

  },
  __Dati_Numero153: {
    type: Number,
    alias: 'CUF_T_Fin',

  },
  __Dati_Numero154: {
    type: Number,
    alias: 'CUL_R_Fin',

  },
  __Dati_Numero155: {
    type: Number,
    alias: 'CUL_T_Fin',

  },
  __Dati_Numero156: {
    type: Number,
    alias: 'CULE_T_Fin',

  },
  __Dati_Numero157: {
    type: Number,
    alias: 'QT_T_Fin',

  },
  __Dati_Numero158: {
    type: Number,
    alias: 'QS_T_Fin',

  },
  __Dati_Numero159: {
    type: Number,
    alias: 'QP_T_Fin',

  },
  __Dati_Numero160: {
    type: Number,
    alias: 'CULE_R_Fin',

  },
  __Dati_Numero161: {
    type: Number,
    alias: 'CUM_R_Fin',

  },
  __Dati_Numero162: {
    type: Number,
    alias: 'CUM_T_Fin',

  },
  __Dati_Numero163: {
    type: Number,
    alias: 'CUQ_T_Fin',

  },
  __Dati_Numero164: {
    type: Number,
    alias: 'CUQ_R_Fin',

  },
  __Dati_Numero165: {
    type: Number,
    alias: 'CUT_T_Fin',

  },
  __Dati_Numero166: {
    type: Number,
    alias: 'CUT_R_Fin',

  },
  __Dati_Numero167: {
    type: Number,
    alias: 'CUSFc_R_Fin',

  },
  __Dati_Numero168: {
    type: Number,
    alias: 'FlagRegistraContenitore',

  },
  __Dati_Numero169: {
    type: Number,
    alias: 'CUTRA_R_Fin',

  },
  __Dati_Numero170: {
    type: Number,
    alias: 'CUTRA_T_Fin',

  },
  __Dati_Numero171: {
    type: Number,
    alias: 'CUUt_R_Fin',

  },
  __Dati_Numero172: {
    type: Number,
    alias: 'CUUt_T_Fin',

  },
  __Dati_Numero173: {
    type: Number,
    alias: 'CUSFc_T_Fin',

  },
  __Dati_Numero174: {
    type: Number,
    alias: 'CUSFc_R_Opz',

  },
  __Dati_Numero175: {
    type: Number,
    alias: 'PercDiffCULR_CULT',

  },
  __Dati_Numero176: {
    type: Number,
    alias: 'PercDiffCULER_CULET',

  },
  __Dati_Numero177: {
    type: Number,
    alias: 'PercDiffCUQR_CUQT',

  },
  __Dati_Numero178: {
    type: Number,
    alias: 'PercDiffCUUtR_CUUtT',

  },
  __Dati_Numero179: {
    type: Number,
    alias: 'CTSFp_T',

  },
  __Dati_Numero180: {
    type: Number,
    alias: 'CTSFp_R',

  },
  __Dati_Numero181: {
    type: Number,
    alias: 'CTS_R',

  },
  __Dati_Numero182: {
    type: Number,
    alias: 'CTS_T',

  },
  __Dati_Numero183: {
    type: Number,
    alias: 'CTT_R_Totale',

  },
  __Dati_Numero184: {
    type: Number,
    alias: 'CTT_T_Totale',

  },
  __Dati_Numero185: {
    type: Number,
    alias: 'CUT_R_Totale_Fin',

  },
  __Dati_Numero186: {
    type: Number,
    alias: 'CUT_R_Totale_Opz',

  },
  __Dati_Numero187: {
    type: Number,
    alias: 'CUT_T_Totale_Fin',

  },
  __Dati_Numero188: {
    type: Number,
    alias: 'CUT_T_Totale_Opz',

  },
  __Dati_Numero189: {
    type: Number,
    alias: 'CUBFc_R_Fin',

  },
  __Dati_Numero190: {
    type: Number,
    alias: 'CUBFc_R_Opz',

  },
  __Dati_Numero191: {
    type: Number,
    alias: 'CUBFc_T_Fin',

  },
  __Dati_Numero192: {
    type: Number,
    alias: 'CUBFc_T_Opz',

  },
  __Dati_Numero193: {
    type: Number,
    alias: 'PercIncCTBFc_R',

  },
  __Dati_Numero194: {
    type: Number,
    alias: 'PercIncCTBFc_T',

  },
  __Dati_Numero195: {
    type: Number,
    alias: 'PercIncCTL_T',

  },
  __Dati_Numero196: {
    type: Number,
    alias: 'PercIncCTL_R',

  },
  __Dati_Numero197: {
    type: Number,
    alias: 'PercIncCTLE_T',

  },
  __Dati_Numero198: {
    type: Number,
    alias: 'PercIncCTLE_R',

  },
  __Dati_Numero199: {
    type: Number,
    alias: 'PercIncCTQ_T',

  },
  __Dati_Numero200: {
    type: Number,
    alias: 'PercIncCTQ_R',

  },
  __Dati_Numero201: {
    type: Number,
    alias: 'PercIncCTUt_R',

  },
  __Dati_Numero202: {
    type: Number,
    alias: 'PercIncCTUt_T',

  },
  __Dati_Numero203: {
    type: Number,
    alias: 'FlagScartoRilavorabile',

  },
  __Dati_Numero204: {
    type: Number,
    alias: 'PercTEffettivoLavoroMacchina',

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
  __Dati_Testo068: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo069: {
    type: String,
    alias: 'IdNumeroSerieLottoProduzione',

  },
  __Dati_Numero205: {
    type: Number,
    alias: 'FlagQtScaricoNonCoerente',

  },
  __Dati_Numero206: {
    type: Number,
    alias: 'FlagEliminazioneInEsecuzione',

  },
  __Dati_Numero207: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaRisorsa',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RegistrazioniFasiProduzioneSchema;