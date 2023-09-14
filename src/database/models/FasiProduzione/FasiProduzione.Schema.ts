import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFasiProduzionePrivate } from './FasiProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const FasiProduzioneSchema = new mongoose.Schema<IFasiProduzionePrivate>({

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
    alias: 'FlagLavEsterna',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagImballoFinale',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagImballoParziale',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagLavInternaPianificabile',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'FlagSelezione',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FrequenzaControllo',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'GgLavorazione_T',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'TA_Tt',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'TD_Tt',

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
    alias: 'IdItemLavorazione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdTipoImballo',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdOpzioneProd',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'IncidenzaScarto',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'NoteAttrezzaggio',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'NoteImballo',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'NoteMovimentazione',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'NoteProduzione',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'NoteUtensili',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'NumeroAddetti',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'ProdUmOpzHPF_T',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'ProdUmOpzHP_T',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'ProdUmFinHPF_T',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'ProdUmFinHP_T',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'Resa_T',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtArticolo',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'TxtCiclo',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'TxtFase',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtTipoImballo',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtRisorsa',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'UmOpzione',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'PercIncremento',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdAccountCliente',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagStato02AttesaInizio',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagStato03InProduzione',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagStato04Saldato',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtStatoFaseProduzione',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'PercAvanzamento',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'QT_Tt_Fin',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'QT_Tp_Opz',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'QP_R_Opz',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'QP_R_Fin',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'QDaProdurre_Opz',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'QDaProdurre_Fin',

  },
  __Dati_Ora003: {
    type: String,
    alias: 'TT_Tp',

  },
  __Dati_Ora004: {
    type: String,
    alias: 'TT_Tt_Restante',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'AltezzaImballo',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'AreaImballo',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'LarghezzaImballo',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'LunghezzaImballo',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'UmOpzPerImballo',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'VolumeImballo',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdFornituraLavorazione',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInizioPianificato',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataFinePianificato',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataInizioReale',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataFineReale',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero033: {
    type: Number,
    alias: 'GgLavorazione_R',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdDocOperativoOrigine',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'QPronta_Opz',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'QPronta_Fin',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'PercScartoSingolaFase_R',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'QS_R_Opz',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'Resa_R',

  },
  __Dati_Ora005: {
    type: String,
    alias: 'TA_R',

  },
  __Dati_Ora006: {
    type: String,
    alias: 'TD_R',

  },
  __Dati_Ora007: {
    type: String,
    alias: 'TF_R',

  },
  __Dati_Ora008: {
    type: String,
    alias: 'TPausaTurno',

  },
  __Dati_Ora009: {
    type: String,
    alias: 'TP_R',

  },
  __Dati_Ora010: {
    type: String,
    alias: 'TT_R',

  },
  __Dati_Ora011: {
    type: String,
    alias: 'TP_Tp',

  },
  __Dati_Ora012: {
    type: String,
    alias: 'TF_Tp',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'DeviazionePercProduttivitaNetta',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'DeviazionePercProduttivitaLorda',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'QP_Tp_Opz',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'QS_Tp_Opz',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'QP_Tp_Fin',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'ProdUmOpzHP_QP_R',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'ProdUmOpzHPF_QP_R',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'ProdUmOpzHP_QT_R',

  },
  __Dati_Numero047: {
    type: Number,
    alias: 'ProdUmOpzHPF_QT_R',

  },
  __Dati_Ora013: {
    type: String,
    alias: 'TT_R_ConPausa',

  },
  __Dati_Numero048: {
    type: Number,
    alias: 'QT_R_Opz',

  },
  __Dati_Numero049: {
    type: Number,
    alias: 'QT_R_Fin',

  },
  __Dati_Numero050: {
    type: Number,
    alias: 'PercScartoSingolaFase_T',

  },
  __Dati_Ora014: {
    type: String,
    alias: 'TF_R_QP',

  },
  __Dati_Ora015: {
    type: String,
    alias: 'TF_Tp_QP',

  },
  __Dati_Ora016: {
    type: String,
    alias: 'TF_R_QS',

  },
  __Dati_Ora017: {
    type: String,
    alias: 'TF_Tp_QS',

  },
  __Dati_Ora018: {
    type: String,
    alias: 'TP_R_QP',

  },
  __Dati_Ora019: {
    type: String,
    alias: 'TP_Tp_QP',

  },
  __Dati_Ora020: {
    type: String,
    alias: 'TP_R_QS',

  },
  __Dati_Ora021: {
    type: String,
    alias: 'TP_Tp_QS',

  },
  __Dati_Ora022: {
    type: String,
    alias: 'TT_R_QP',

  },
  __Dati_Ora023: {
    type: String,
    alias: 'TT_Tp_QP',

  },
  __Dati_Ora024: {
    type: String,
    alias: 'TT_R_QS',

  },
  __Dati_Ora025: {
    type: String,
    alias: 'TT_Tp_QS',

  },
  __Dati_Ora026: {
    type: String,
    alias: 'TA_Tp',

  },
  __Dati_Ora027: {
    type: String,
    alias: 'TD_Tp',

  },
  __Dati_Numero051: {
    type: Number,
    alias: 'PercDiffProdHPFTeoReale_QT',

  },
  __Dati_Numero052: {
    type: Number,
    alias: 'PercDiffProdHPTeoReale_QT',

  },
  __Dati_Numero053: {
    type: Number,
    alias: 'CHAD_T',

  },
  __Dati_Numero054: {
    type: Number,
    alias: 'CHAddettoAggiuntivo_T',

  },
  __Dati_Numero055: {
    type: Number,
    alias: 'CHF_T',

  },
  __Dati_Numero056: {
    type: Number,
    alias: 'CHP_T',

  },
  __Dati_Numero057: {
    type: Number,
    alias: 'CTAD_R',

  },
  __Dati_Numero058: {
    type: Number,
    alias: 'CTAD_Tp',

  },
  __Dati_Numero059: {
    type: Number,
    alias: 'CTF_R',

  },
  __Dati_Numero060: {
    type: Number,
    alias: 'CTF_Tp',

  },
  __Dati_Numero061: {
    type: Number,
    alias: 'CTLE_R',

  },
  __Dati_Numero062: {
    type: Number,
    alias: 'CTLE_Tp',

  },
  __Dati_Numero063: {
    type: Number,
    alias: 'CTM_R',

  },
  __Dati_Numero064: {
    type: Number,
    alias: 'CTM_Tp',

  },
  __Dati_Numero065: {
    type: Number,
    alias: 'CTP_R',

  },
  __Dati_Numero066: {
    type: Number,
    alias: 'CTP_Tp',

  },
  __Dati_Numero067: {
    type: Number,
    alias: 'CTT_R',

  },
  __Dati_Numero068: {
    type: Number,
    alias: 'CTT_Tp',

  },
  __Dati_Numero069: {
    type: Number,
    alias: 'CTTRA_R',

  },
  __Dati_Numero070: {
    type: Number,
    alias: 'CTTRA_Tp',

  },
  __Dati_Numero071: {
    type: Number,
    alias: 'CUAD_R_Fin',

  },
  __Dati_Numero072: {
    type: Number,
    alias: 'CUAD_Tp_Fin',

  },
  __Dati_Numero073: {
    type: Number,
    alias: 'CUF_R_Fin',

  },
  __Dati_Numero074: {
    type: Number,
    alias: 'CUF_Tp_Fin',

  },
  __Dati_Numero075: {
    type: Number,
    alias: 'CULE_R_Fin',

  },
  __Dati_Numero076: {
    type: Number,
    alias: 'CULE_Tp_Fin',

  },
  __Dati_Numero077: {
    type: Number,
    alias: 'CUM_R_Fin',

  },
  __Dati_Numero078: {
    type: Number,
    alias: 'CUM_Tp_Fin',

  },
  __Dati_Numero079: {
    type: Number,
    alias: 'CUP_R_Fin',

  },
  __Dati_Numero080: {
    type: Number,
    alias: 'CUP_Tp_Fin',

  },
  __Dati_Numero081: {
    type: Number,
    alias: 'CTSFc_Tp',

  },
  __Dati_Numero082: {
    type: Number,
    alias: 'CTSFc_R',

  },
  __Dati_Numero083: {
    type: Number,
    alias: 'CUT_R_Opz',

  },
  __Dati_Numero084: {
    type: Number,
    alias: 'CUT_Tp_Opz',

  },
  __Dati_Numero085: {
    type: Number,
    alias: 'CUTRA_R_Opz',

  },
  __Dati_Numero086: {
    type: Number,
    alias: 'CUTRA_Tp_Opz',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'TxtMassimoAumentoCosto',

  },
  __Dati_Numero087: {
    type: Number,
    alias: 'PercDiffCUSFc_RTt',

  },
  __Dati_Numero088: {
    type: Number,
    alias: 'QS_R_Fin',

  },
  __Dati_Numero089: {
    type: Number,
    alias: 'CTSFc_Tt',

  },
  __Dati_Numero090: {
    type: Number,
    alias: 'CTSFp_R',

  },
  __Dati_Numero091: {
    type: Number,
    alias: 'Priorita',

  },
  __Dati_Numero092: {
    type: Number,
    alias: 'HAttesa',

  },
  __Dati_Numero093: {
    type: Number,
    alias: 'FlagAttesaTotale',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdOperatoreProduzioneDesignato',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'TxtOperatoreDesignato',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdAccountDestinatario',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'CodiceFaseProduzione',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'CodiceArticolo',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'CodiceCiclo',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'CodiceLottoProduzione',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'CodiceRigaOrdine',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'CodiceFase',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'CodiceRisorsa',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero094: {
    type: Number,
    alias: 'PrioritaCapoTurno',

  },
  __Dati_Numero095: {
    type: Number,
    alias: 'Diff_CUAD_TpR',

  },
  __Dati_Numero096: {
    type: Number,
    alias: 'Diff_CUF_TpR',

  },
  __Dati_Numero097: {
    type: Number,
    alias: 'Diff_CULE_TpR',

  },
  __Dati_Numero098: {
    type: Number,
    alias: 'Diff_CUM_TpR',

  },
  __Dati_Numero099: {
    type: Number,
    alias: 'Diff_CUP_TpR',

  },
  __Dati_Numero100: {
    type: Number,
    alias: 'Diff_CUSFc_TpR',

  },
  __Dati_Numero101: {
    type: Number,
    alias: 'Diff_CUT_TpR',

  },
  __Dati_Numero102: {
    type: Number,
    alias: 'FlagStato01AttesaBenestare',

  },
  __Dati_Numero103: {
    type: Number,
    alias: 'QS_Tp_Fin',

  },
  __Dati_Numero104: {
    type: Number,
    alias: 'FlagNestedPossibile',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'IdFasiProduzioneInNesting',

  },
  __Dati_Numero105: {
    type: Number,
    alias: 'QDaLavorareSuPronta_Opz',

  },
  __Dati_Numero106: {
    type: Number,
    alias: 'QDaLavorareSuPronta_Fin',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'CodiceDisegno',

  },
  __Dati_Numero107: {
    type: Number,
    alias: 'FlagTempoManualePossibile',

  },
  __Dati_Numero108: {
    type: Number,
    alias: 'NumeroFase',

  },
  __Dati_Numero109: {
    type: Number,
    alias: 'NumeroAlternativa',

  },
  __Dati_Numero110: {
    type: Number,
    alias: 'FlagAggiornaDaOpzione',

  },
  __Dati_Numero111: {
    type: Number,
    alias: 'FlagAggiorna01DaRegistrazioni',

  },
  __Dati_Numero112: {
    type: Number,
    alias: 'FlagAggiorna02Totali',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'CodiceTxtArticoloAutomatico',

  },
  __Dati_Numero113: {
    type: Number,
    alias: 'FlagLavInternaNonPianificabile',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'IdTipoDocOperativoOrigine',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'IdDocOperativoCaricoFiniti',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'IdDocOperativoFabbisognoLavorazioni',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'IdDocOperativoFabbisognoMateriali',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'IdDocOperativoOrdineLavorazioni',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'IdDocOperativoRientroLavorazioni',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'IdDocOperativoScaricoMateriali',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'IdDocOperativoUscitaLavorazioni',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'IdFornituraTrasporto',

  },
  __Dati_Numero114: {
    type: Number,
    alias: 'NumeroAddettiStandardRisorsa',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'TxtFaseRisorsaAutomatico',

  },
  __Dati_Numero115: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'IdFaseProduzioneOrigine',

  },
  __Dati_Numero116: {
    type: Number,
    alias: 'CostoResiduo_Opz',

  },
  __Dati_Numero117: {
    type: Number,
    alias: 'CostoResiduo_Fin',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'AnnoMesePianificato',

  },
  __Dati_Numero118: {
    type: Number,
    alias: 'SettimanaPianificato',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'CodiceTxtRisorsa',

  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataPrevistaConsegna',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Ora028: {
    type: String,
    alias: 'TPF_R',

  },
  __Dati_Numero119: {
    type: Number,
    alias: 'SettimanaFineReale',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'AnnoFineReale',

  },
  __Dati_Data006: {
    type: Date,
    alias: 'AnnoMeseReale',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo059: {
    type: String,
    alias: 'CodiceTxtFaseAutomatico',

  },
  __Dati_Testo060: {
    type: String,
    alias: 'CodiceTxtFaseRisorsaAutomatico',

  },
  __Dati_Numero120: {
    type: Number,
    alias: 'CTL_R',

  },
  __Dati_Numero121: {
    type: Number,
    alias: 'CTL_Tp',

  },
  __Dati_Numero122: {
    type: Number,
    alias: 'FlagDaBenestariare',

  },
  __Dati_Testo061: {
    type: String,
    alias: 'IdDocImballo',

  },
  __Dati_Testo062: {
    type: String,
    alias: 'IdDocImgImballo',

  },
  __Dati_Testo063: {
    type: String,
    alias: 'IdDocImgNoteAttrezzaggio',

  },
  __Dati_Testo064: {
    type: String,
    alias: 'IdDocImgNoteMovimentazione',

  },
  __Dati_Testo065: {
    type: String,
    alias: 'IdDocImgNoteProduzione',

  },
  __Dati_Testo066: {
    type: String,
    alias: 'IdDocImgNoteQualita',

  },
  __Dati_Testo067: {
    type: String,
    alias: 'IdDocImgNoteUtensili',

  },
  __Dati_Testo068: {
    type: String,
    alias: 'NoteQualita',

  },
  __Dati_Testo069: {
    type: String,
    alias: 'TxtItemLavorazione',

  },
  __Dati_Numero123: {
    type: Number,
    alias: 'PercQtEntrataFase',

  },
  __Dati_Testo070: {
    type: String,
    alias: 'RevisioneArticolo',

  },
  __Dati_Testo071: {
    type: String,
    alias: 'RevisioneDisegno',

  },
  __Dati_Testo072: {
    type: String,
    alias: 'CodiceRevisioneDisegnoAutomatica',

  },
  __Dati_Testo073: {
    type: String,
    alias: 'IdVoceDocOperativoOrigine',

  },
  __Dati_Testo074: {
    type: String,
    alias: 'NumeroDecimaliValori',

  },
  __Dati_Testo075: {
    type: String,
    alias: 'NumeroDecimaliQuantita',

  },
  __Dati_Numero124: {
    type: Number,
    alias: 'CHPF_T',

  },
  __Dati_Numero125: {
    type: Number,
    alias: 'ConvUmFinUmOpz',

  },
  __Dati_Numero126: {
    type: Number,
    alias: 'ConvUmLavorazioneUmOpz',

  },
  __Dati_Numero127: {
    type: Number,
    alias: 'ConvUmOpzUmLavorazione',

  },
  __Dati_Ora029: {
    type: String,
    alias: 'TT_Tt',

  },
  __Dati_Ora030: {
    type: String,
    alias: 'TAttraversamentoLinea_T',

  },
  __Dati_Ora031: {
    type: String,
    alias: 'TPF_Tt_Restante',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraInizioPianificato',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraFinePianificato',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero128: {
    type: Number,
    alias: 'CUT_R_Opz_Cumulato',

  },
  __Dati_Testo076: {
    type: String,
    alias: 'CodiceTxtDisegnoArticoloAutomatico',

  },
  __Dati_Numero129: {
    type: Number,
    alias: 'CostoOrarioMacchinaAttrezzaggio_T',

  },
  __Dati_Numero130: {
    type: Number,
    alias: 'CostoOrarioAddettoAttrezzaggio_T',

  },
  __Dati_Numero131: {
    type: Number,
    alias: 'QuotaAddettoAttrezzaggio_T',

  },
  __Dati_Numero132: {
    type: Number,
    alias: 'CostoOrarioMacchinaProduzione_T',

  },
  __Dati_Numero133: {
    type: Number,
    alias: 'CostoOrarioAddettoProduzione_T',

  },
  __Dati_Numero134: {
    type: Number,
    alias: 'QuotaAddettoProduzione_T',

  },
  __Dati_Numero135: {
    type: Number,
    alias: 'CostoOrarioMacchinaFermoMacchina_T',

  },
  __Dati_Numero136: {
    type: Number,
    alias: 'CostoOrarioAddettoFermoMacchina_T',

  },
  __Dati_Numero137: {
    type: Number,
    alias: 'QuotaAddettoFermoMacchina_T',

  },
  __Dati_Numero138: {
    type: Number,
    alias: 'CUT_Tp_Opz_Cumulato',

  },
  __Dati_Numero139: {
    type: Number,
    alias: 'ConvUmOpzUmTrasporto',

  },
  __Dati_Numero140: {
    type: Number,
    alias: 'ConvUmTrasportoUmOpz',

  },
  __Dati_Numero141: {
    type: Number,
    alias: 'FlagAlternativaPianificabile',

  },
  __Dati_Numero142: {
    type: Number,
    alias: 'FlagRegistraContenitore',

  },
  __Dati_Testo077: {
    type: String,
    alias: 'IdTipoContenitore',

  },
  __Dati_Testo078: {
    type: String,
    alias: 'IdItemTrasporto',

  },
  __Dati_Numero143: {
    type: Number,
    alias: 'NumeroControlliFase',

  },
  __Dati_Numero144: {
    type: Number,
    alias: 'ProdUmFinHP_QP_R',

  },
  __Dati_Numero145: {
    type: Number,
    alias: 'ProdUmFinHP_QT_R',

  },
  __Dati_Numero146: {
    type: Number,
    alias: 'ProdUmFinHPF_QP_R',

  },
  __Dati_Numero147: {
    type: Number,
    alias: 'ProdUmFinHPF_QT_R',

  },
  __Dati_Testo079: {
    type: String,
    alias: 'TxtItemTrasporto',

  },
  __Dati_Testo080: {
    type: String,
    alias: 'TxtTipoContenitore',

  },
  __Dati_Numero148: {
    type: Number,
    alias: 'FlagBenestareDato',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraBenestare',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo081: {
    type: String,
    alias: 'IdAccountOperatoreBenestare',

  },
  __Dati_Testo082: {
    type: String,
    alias: 'TxtAccountOperatoreBenestare',

  },
  __Dati_Numero149: {
    type: Number,
    alias: 'FlagSaldoManuale',

  },
  __Dati_Numero150: {
    type: Number,
    alias: 'CTAD_Tt',

  },
  __Dati_Ora032: {
    type: String,
    alias: 'TP_Tt',

  },
  __Dati_Ora033: {
    type: String,
    alias: 'TF_Tt',

  },
  __Dati_Numero151: {
    type: Number,
    alias: 'CTF_Tt',

  },
  __Dati_Numero152: {
    type: Number,
    alias: 'CUL_Tt_Opz',

  },
  __Dati_Numero153: {
    type: Number,
    alias: 'CUL_Tt_Fin',

  },
  __Dati_Numero154: {
    type: Number,
    alias: 'CTL_Tt',

  },
  __Dati_Numero155: {
    type: Number,
    alias: 'CULE_Tt_Opz',

  },
  __Dati_Numero156: {
    type: Number,
    alias: 'CTLE_Tt',

  },
  __Dati_Numero157: {
    type: Number,
    alias: 'CULE_Tt_Fin',

  },
  __Dati_Numero158: {
    type: Number,
    alias: 'CTM_Tt',

  },
  __Dati_Numero159: {
    type: Number,
    alias: 'CUAD_Tp_Opz',

  },
  __Dati_Numero160: {
    type: Number,
    alias: 'CUAD_R_Opz',

  },
  __Dati_Numero161: {
    type: Number,
    alias: 'CUAD_Tt_Opz',

  },
  __Dati_Numero162: {
    type: Number,
    alias: 'CUAD_Tt_Fin',

  },
  __Dati_Numero163: {
    type: Number,
    alias: 'CUF_R_Opz',

  },
  __Dati_Numero164: {
    type: Number,
    alias: 'CUF_Tp_Opz',

  },
  __Dati_Numero165: {
    type: Number,
    alias: 'CUF_Tt_Opz',

  },
  __Dati_Numero166: {
    type: Number,
    alias: 'CUF_Tt_Fin',

  },
  __Dati_Numero167: {
    type: Number,
    alias: 'CUL_R_Opz',

  },
  __Dati_Numero168: {
    type: Number,
    alias: 'CUL_R_Fin',

  },
  __Dati_Numero169: {
    type: Number,
    alias: 'CUL_Tp_Opz',

  },
  __Dati_Numero170: {
    type: Number,
    alias: 'CUL_Tp_Fin',

  },
  __Dati_Numero171: {
    type: Number,
    alias: 'CULE_R_Opz',

  },
  __Dati_Numero172: {
    type: Number,
    alias: 'CULE_Tp_Opz',

  },
  __Dati_Numero173: {
    type: Number,
    alias: 'CUM_R_Opz',

  },
  __Dati_Numero174: {
    type: Number,
    alias: 'CUM_Tp_Opz',

  },
  __Dati_Numero175: {
    type: Number,
    alias: 'CUM_Tt_Fin',

  },
  __Dati_Numero176: {
    type: Number,
    alias: 'CUM_Tt_Opz',

  },
  __Dati_Numero177: {
    type: Number,
    alias: 'CUP_R_Opz',

  },
  __Dati_Numero178: {
    type: Number,
    alias: 'CUP_Tp_Opz',

  },
  __Dati_Numero179: {
    type: Number,
    alias: 'CUP_Tt_Fin',

  },
  __Dati_Numero180: {
    type: Number,
    alias: 'CTP_Tt',

  },
  __Dati_Numero181: {
    type: Number,
    alias: 'CUP_Tt_Opz',

  },
  __Dati_Numero182: {
    type: Number,
    alias: 'CUQ_Tt_Opz',

  },
  __Dati_Numero183: {
    type: Number,
    alias: 'CUQ_Tt_Fin',

  },
  __Dati_Numero184: {
    type: Number,
    alias: 'CTQ_Tt',

  },
  __Dati_Numero185: {
    type: Number,
    alias: 'CTQ_R',

  },
  __Dati_Numero186: {
    type: Number,
    alias: 'CTQ_Tp',

  },
  __Dati_Numero187: {
    type: Number,
    alias: 'CUT_R_Fin',

  },
  __Dati_Numero188: {
    type: Number,
    alias: 'CUT_Tp_Fin',

  },
  __Dati_Numero189: {
    type: Number,
    alias: 'CUT_R_Fin_Cumulato',

  },
  __Dati_Numero190: {
    type: Number,
    alias: 'CUT_Tp_Fin_Cumulato',

  },
  __Dati_Numero191: {
    type: Number,
    alias: 'CUT_Tt_Fin',

  },
  __Dati_Numero192: {
    type: Number,
    alias: 'CTTRA_Tt',

  },
  __Dati_Numero193: {
    type: Number,
    alias: 'CTUt_R',

  },
  __Dati_Numero194: {
    type: Number,
    alias: 'CTUt_Tp',

  },
  __Dati_Numero195: {
    type: Number,
    alias: 'CTUt_Tt',

  },
  __Dati_Numero196: {
    type: Number,
    alias: 'CTT_Tt',

  },
  __Dati_Numero197: {
    type: Number,
    alias: 'CUT_Tt_Opz',

  },
  __Dati_Numero198: {
    type: Number,
    alias: 'CUT_Tt_Fin_Cumulato',

  },
  __Dati_Numero199: {
    type: Number,
    alias: 'CUT_Tt_Opz_Cumulato',

  },
  __Dati_Numero200: {
    type: Number,
    alias: 'CUQ_R_Fin',

  },
  __Dati_Numero201: {
    type: Number,
    alias: 'CUQ_R_Opz',

  },
  __Dati_Numero202: {
    type: Number,
    alias: 'CUQ_Tp_Fin',

  },
  __Dati_Numero203: {
    type: Number,
    alias: 'CUQ_Tp_Opz',

  },
  __Dati_Numero204: {
    type: Number,
    alias: 'CUTRA_R_Fin',

  },
  __Dati_Numero205: {
    type: Number,
    alias: 'CUTRA_Tp_Fin',

  },
  __Dati_Numero206: {
    type: Number,
    alias: 'CUTRA_Tt_Fin',

  },
  __Dati_Numero207: {
    type: Number,
    alias: 'CUTRA_Tt_Opz',

  },
  __Dati_Numero208: {
    type: Number,
    alias: 'CUUt_R_Fin',

  },
  __Dati_Numero209: {
    type: Number,
    alias: 'CUUt_R_Opz',

  },
  __Dati_Numero210: {
    type: Number,
    alias: 'CUUt_Tp_Fin',

  },
  __Dati_Numero211: {
    type: Number,
    alias: 'CUUt_Tp_Opz',

  },
  __Dati_Numero212: {
    type: Number,
    alias: 'CUUt_Tt_Fin',

  },
  __Dati_Numero213: {
    type: Number,
    alias: 'CUUt_Tt_Opz',

  },
  __Dati_Numero214: {
    type: Number,
    alias: 'CTSFp_Tp',

  },
  __Dati_Numero215: {
    type: Number,
    alias: 'QS_Tt_Opz',

  },
  __Dati_Numero216: {
    type: Number,
    alias: 'QS_Tt_Fin',

  },
  __Dati_Numero217: {
    type: Number,
    alias: 'QT_Tp_Fin',

  },
  __Dati_Numero218: {
    type: Number,
    alias: 'QT_Tt_Opz',

  },
  __Dati_Numero219: {
    type: Number,
    alias: 'QP_Tt_Opz',

  },
  __Dati_Numero220: {
    type: Number,
    alias: 'QP_Tt_Fin',

  },
  __Dati_Numero221: {
    type: Number,
    alias: 'CTSFp_Tt',

  },
  __Dati_Numero222: {
    type: Number,
    alias: 'CTBFc_R',

  },
  __Dati_Numero223: {
    type: Number,
    alias: 'CTBFc_Tp',

  },
  __Dati_Numero224: {
    type: Number,
    alias: 'CTBFc_Tt',

  },
  __Dati_Numero225: {
    type: Number,
    alias: 'CTS_R',

  },
  __Dati_Numero226: {
    type: Number,
    alias: 'CTS_Tp',

  },
  __Dati_Numero227: {
    type: Number,
    alias: 'CTS_Tt',

  },
  __Dati_Numero228: {
    type: Number,
    alias: 'CTT_Tt_Totale',

  },
  __Dati_Numero229: {
    type: Number,
    alias: 'CTT_R_Totale',

  },
  __Dati_Numero230: {
    type: Number,
    alias: 'CTT_Tp_Totale',

  },
  __Dati_Numero231: {
    type: Number,
    alias: 'CUSFc_Tt_Opz',

  },
  __Dati_Numero232: {
    type: Number,
    alias: 'CUSFc_Tt_Fin',

  },
  __Dati_Numero233: {
    type: Number,
    alias: 'CUSFc_Tp_Fin',

  },
  __Dati_Numero234: {
    type: Number,
    alias: 'CUSFc_Tp_Opz',

  },
  __Dati_Numero235: {
    type: Number,
    alias: 'CUSFc_R_Opz',

  },
  __Dati_Numero236: {
    type: Number,
    alias: 'CUSFc_R_Fin',

  },
  __Dati_Numero237: {
    type: Number,
    alias: 'CUBFc_Tt_Opz',

  },
  __Dati_Numero238: {
    type: Number,
    alias: 'CUBFc_Tt_Fin',

  },
  __Dati_Numero239: {
    type: Number,
    alias: 'CUBFc_Tp_Fin',

  },
  __Dati_Numero240: {
    type: Number,
    alias: 'CUBFc_Tp_Opz',

  },
  __Dati_Numero241: {
    type: Number,
    alias: 'CUBFc_R_Opz',

  },
  __Dati_Numero242: {
    type: Number,
    alias: 'CUBFc_R_Fin',

  },
  __Dati_Numero243: {
    type: Number,
    alias: 'CUT_Tt_Totale_Opz',

  },
  __Dati_Numero244: {
    type: Number,
    alias: 'CUT_Tt_Totale_Fin',

  },
  __Dati_Numero245: {
    type: Number,
    alias: 'CUT_Tp_Totale_Opz',

  },
  __Dati_Numero246: {
    type: Number,
    alias: 'CUT_Tp_Totale_Fin',

  },
  __Dati_Numero247: {
    type: Number,
    alias: 'CUT_R_Totale_Opz',

  },
  __Dati_Numero248: {
    type: Number,
    alias: 'CUT_R_Totale_Fin',

  },
  __Dati_Numero249: {
    type: Number,
    alias: 'PercIncCTAD_Tt',

  },
  __Dati_Numero250: {
    type: Number,
    alias: 'PercIncCTF_Tt',

  },
  __Dati_Numero251: {
    type: Number,
    alias: 'PercIncCTL_Tt',

  },
  __Dati_Numero252: {
    type: Number,
    alias: 'PercIncCTLE_Tt',

  },
  __Dati_Numero253: {
    type: Number,
    alias: 'PercIncCTM_Tt',

  },
  __Dati_Numero254: {
    type: Number,
    alias: 'PercIncCTP_Tt',

  },
  __Dati_Numero255: {
    type: Number,
    alias: 'PercIncCTQ_Tt',

  },
  __Dati_Numero256: {
    type: Number,
    alias: 'PercIncCTTRA_Tt',

  },
  __Dati_Numero257: {
    type: Number,
    alias: 'PercIncCTUt_Tt',

  },
  __Dati_Numero258: {
    type: Number,
    alias: 'PercIncCTSFc_Tt',

  },
  __Dati_Numero259: {
    type: Number,
    alias: 'PercIncCTBFc_Tt',

  },
  __Dati_Numero260: {
    type: Number,
    alias: 'PercIncCTAD_R',

  },
  __Dati_Numero261: {
    type: Number,
    alias: 'PercIncCTBFc_R',

  },
  __Dati_Numero262: {
    type: Number,
    alias: 'PercIncCTF_R',

  },
  __Dati_Numero263: {
    type: Number,
    alias: 'PercIncCTL_R',

  },
  __Dati_Numero264: {
    type: Number,
    alias: 'PercIncCTLE_R',

  },
  __Dati_Numero265: {
    type: Number,
    alias: 'PercIncCTM_R',

  },
  __Dati_Numero266: {
    type: Number,
    alias: 'PercIncCTP_R',

  },
  __Dati_Numero267: {
    type: Number,
    alias: 'PercIncCTQ_R',

  },
  __Dati_Numero268: {
    type: Number,
    alias: 'PercIncCTSFc_R',

  },
  __Dati_Numero269: {
    type: Number,
    alias: 'PercIncCTTRA_R',

  },
  __Dati_Numero270: {
    type: Number,
    alias: 'PercIncCTUt_R',

  },
  __Dati_Numero271: {
    type: Number,
    alias: 'PercIncCTAD_Tp',

  },
  __Dati_Numero272: {
    type: Number,
    alias: 'PercIncCTBFc_Tp',

  },
  __Dati_Numero273: {
    type: Number,
    alias: 'PercIncCTF_Tp',

  },
  __Dati_Numero274: {
    type: Number,
    alias: 'PercIncCTL_Tp',

  },
  __Dati_Numero275: {
    type: Number,
    alias: 'PercIncCTLE_Tp',

  },
  __Dati_Numero276: {
    type: Number,
    alias: 'PercIncCTM_Tp',

  },
  __Dati_Numero277: {
    type: Number,
    alias: 'PercIncCTP_Tp',

  },
  __Dati_Numero278: {
    type: Number,
    alias: 'PercIncCTQ_Tp',

  },
  __Dati_Numero279: {
    type: Number,
    alias: 'PercIncCTSFc_Tp',

  },
  __Dati_Numero280: {
    type: Number,
    alias: 'PercIncCTTRA_Tp',

  },
  __Dati_Numero281: {
    type: Number,
    alias: 'PercIncCTUt_Tp',

  },
  __Dati_Numero282: {
    type: Number,
    alias: 'Diff_CUAD_TtR',

  },
  __Dati_Numero283: {
    type: Number,
    alias: 'Diff_CUF_TtR',

  },
  __Dati_Numero284: {
    type: Number,
    alias: 'Diff_CULE_TtR',

  },
  __Dati_Numero285: {
    type: Number,
    alias: 'Diff_CUM_TtR',

  },
  __Dati_Numero286: {
    type: Number,
    alias: 'Diff_CUP_TtR',

  },
  __Dati_Numero287: {
    type: Number,
    alias: 'Diff_CUSFc_TtR',

  },
  __Dati_Numero288: {
    type: Number,
    alias: 'Diff_CUT_TtR',

  },
  __Dati_Numero289: {
    type: Number,
    alias: 'PercDiffCUAD_RTp',

  },
  __Dati_Numero290: {
    type: Number,
    alias: 'PercDiffCUF_RTp',

  },
  __Dati_Numero291: {
    type: Number,
    alias: 'PercDiffCULE_RTp',

  },
  __Dati_Numero292: {
    type: Number,
    alias: 'PercDiffCUM_RTp',

  },
  __Dati_Numero293: {
    type: Number,
    alias: 'PercDiffCUP_RTp',

  },
  __Dati_Numero294: {
    type: Number,
    alias: 'PercDiffCUTRA_RTp',

  },
  __Dati_Numero295: {
    type: Number,
    alias: 'PercDiffCUT_RTp',

  },
  __Dati_Numero296: {
    type: Number,
    alias: 'PercDiffCUUt_RTp',

  },
  __Dati_Numero297: {
    type: Number,
    alias: 'PercDiffCUQ_RTp',

  },
  __Dati_Numero298: {
    type: Number,
    alias: 'Diff_CUUt_TpR',

  },
  __Dati_Numero299: {
    type: Number,
    alias: 'Diff_CUUt_TtR',

  },
  __Dati_Numero300: {
    type: Number,
    alias: 'Diff_CUQ_TpR',

  },
  __Dati_Numero301: {
    type: Number,
    alias: 'Diff_CUQ_TtR',

  },
  __Dati_Numero302: {
    type: Number,
    alias: 'PercDiffCUAD_RTt',

  },
  __Dati_Numero303: {
    type: Number,
    alias: 'PercDiffCUF_RTt',

  },
  __Dati_Numero304: {
    type: Number,
    alias: 'PercDiffCULE_RTt',

  },
  __Dati_Numero305: {
    type: Number,
    alias: 'PercDiffCUM_RTt',

  },
  __Dati_Numero306: {
    type: Number,
    alias: 'PercDiffCUP_RTt',

  },
  __Dati_Numero307: {
    type: Number,
    alias: 'PercDiffCUQ_RTt',

  },
  __Dati_Numero308: {
    type: Number,
    alias: 'PercDiffCUT_RTt',

  },
  __Dati_Numero309: {
    type: Number,
    alias: 'PercDiffCUTRA_RTt',

  },
  __Dati_Numero310: {
    type: Number,
    alias: 'PercDiffCUUt_RTt',

  },
  __Dati_Numero311: {
    type: Number,
    alias: 'PercDiffCUSFc_RTp',

  },
  __Dati_Numero312: {
    type: Number,
    alias: 'PercDiffCUL_RTp',

  },
  __Dati_Numero313: {
    type: Number,
    alias: 'PercDiffCUL_RTt',

  },
  __Dati_Numero314: {
    type: Number,
    alias: 'FlagScartoRilavorabile',

  },
  __Dati_Numero315: {
    type: Number,
    alias: 'PercDiffCUBFc_RTp',

  },
  __Dati_Numero316: {
    type: Number,
    alias: 'PercDiffCUBFc_RTt',

  },
  __Dati_Numero317: {
    type: Number,
    alias: 'Diff_CUL_TtR',

  },
  __Dati_Numero318: {
    type: Number,
    alias: 'Diff_CUL_TpR',

  },
  __Dati_Ora034: {
    type: String,
    alias: 'TEffettivoLavoroMacchina',

  },
  __Dati_Testo083: {
    type: String,
    alias: 'IdDocOperativoScartoMateriali',

  },
  __Dati_Numero319: {
    type: Number,
    alias: 'Diff_CUTRA_TtR',

  },
  __Dati_Numero320: {
    type: Number,
    alias: 'Diff_CUTRA_TpR',

  },
  __Dati_Numero321: {
    type: Number,
    alias: 'TT_Tt_Restante_Num',

  },
  __Dati_Numero322: {
    type: Number,
    alias: 'TA_Tt_Num',

  },
  __Dati_Numero323: {
    type: Number,
    alias: 'TD_Tt_Num',

  },
  __Dati_Numero324: {
    type: Number,
    alias: 'QDaSpedire_Fin',

  },
  __Dati_Numero325: {
    type: Number,
    alias: 'QDaSpedire_Opz',

  },
  __Dati_Numero326: {
    type: Number,
    alias: 'PercTEffettivoLavoroMacchina',

  },
  __Dati_Numero327: {
    type: Number,
    alias: 'FlagPianificata',

  },
  __Dati_Numero328: {
    type: Number,
    alias: 'NumeroAddettiReale',

  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra005: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero329: {
    type: Number,
    alias: 'OrdineStatoFaseProduzione',

  },
  __Dati_Data007: {
    type: Date,
    alias: 'DataLimiteInizioLavorazioni',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero330: {
    type: Number,
    alias: 'AnnoLimiteInizioLavorazioni',

  },
  __Dati_Testo084: {
    type: String,
    alias: 'AnnoMeseLimiteInizioLavorazioni',

  },
  __Dati_Testo085: {
    type: String,
    alias: 'AnnoSettimanaLimiteInizioLavorazioni',

  },
  __Dati_Numero331: {
    type: Number,
    alias: 'SettimanaLimiteInizioLavorazioni',

  },
  __Dati_Testo086: {
    type: String,
    alias: 'IdDocOperativoChiusuraPrenotazioneContoTrasformazione',

  },
  __Dati_Testo087: {
    type: String,
    alias: 'IdDocOperativoFabbisognoContoTrasformazione',

  },
  __Dati_Testo088: {
    type: String,
    alias: 'IdDocOperativoFabbisognoTrasporto',

  },
  __Dati_Testo089: {
    type: String,
    alias: 'IdDocOperativoFabbisognoUtensili',

  },
  __Dati_Testo090: {
    type: String,
    alias: 'IdDocOperativoOrdineFornitoreContoTrasformazione',

  },
  __Dati_Testo091: {
    type: String,
    alias: 'IdDocOperativoOrdineFornitoreTrasporto',

  },
  __Dati_Testo092: {
    type: String,
    alias: 'IdDocOperativoPreparazioneMateriali',

  },
  __Dati_Testo093: {
    type: String,
    alias: 'IdDocOperativoPreparazioneMaterialiContoTrasformazione',

  },
  __Dati_Testo094: {
    type: String,
    alias: 'IdDocOperativoRientroContoTrasformazione',

  },
  __Dati_Testo095: {
    type: String,
    alias: 'IdDocOperativoSpedizioneMaterialeContoTrasformazione',

  },
  __Dati_Testo096: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero332: {
    type: Number,
    alias: 'QtPerBenestare',

  },
  __Dati_Numero333: {
    type: Number,
    alias: 'CUT_R_Fin_Cumulato_Ricarico',

  },
  __Dati_Numero334: {
    type: Number,
    alias: 'CUT_Tp_Fin_Cumulato_Ricarico',

  },
  __Dati_Numero335: {
    type: Number,
    alias: 'CUT_Tt_Fin_Cumulato_Ricarico',

  },
  __Dati_Numero336: {
    type: Number,
    alias: 'ProgrammaMacchina_FlagInviato',

  },
  __Dati_DataOra006: {
    type: Date,
    alias: 'ProgrammaMacchina_DataOraInvio',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo097: {
    type: String,
    alias: 'ProgrammaMacchina_IdUtenteInvio',

  },
  __Dati_Testo098: {
    type: String,
    alias: 'ProgrammaMacchina_TxtUtenteInvio',

  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ProgrammaMacchina_FileZip',

  },
  __Dati_Testo099: {
    type: String,
    alias: 'ProgrammaMacchina_IdProgrammaMacchina',

  },
  __Dati_Testo100: {
    type: String,
    alias: 'ProgrammaMacchina_PathZip',

  },
  __Dati_Testo101: {
    type: String,
    alias: 'ProgrammaMacchina_IdOperatoreInvio',

  },
  __Dati_Testo102: {
    type: String,
    alias: 'ProgrammaMacchina_TxtOperatoreInvio',

  },
  __Dati_Numero337: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaRisorsa',

  },
  __Dati_Testo103: {
    type: String,
    alias: 'ControlliQualita_TxtAvvisoFisso',

  },
  __Dati_Numero338: {
    type: Number,
    alias: 'ControlliQualita_FlagAvvisoFisso',

  },
  __Dati_Numero339: {
    type: Number,
    alias: 'NUmFinColpo_T',

  },
  __Dati_Numero340: {
    type: Number,
    alias: 'NUmOpzColpo_T',

  },
  __Dati_Numero341: {
    type: Number,
    alias: 'CreazionePosteriori_FlagFaseCreataPosteriori',

  },
  __Dati_Testo104: {
    type: String,
    alias: 'CreazionePosteriori_IdUtenteCreazione',

  },
  __Dati_Testo105: {
    type: String,
    alias: 'CreazionePosteriori_TxtUtenteCreazione',

  },
  __Dati_DataOra007: {
    type: Date,
    alias: 'CreazionePosteriori_DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default FasiProduzioneSchema;