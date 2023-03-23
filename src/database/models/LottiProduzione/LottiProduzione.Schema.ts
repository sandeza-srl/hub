import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ILottiProduzionePrivate } from './LottiProduzione.Types.Private';


/* --------
* Schema Definition
* -------- */
const LottiProduzioneSchema = new mongoose.Schema<ILottiProduzionePrivate>({

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
    alias: 'IdArticolo',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCliente',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceRigaOrdine',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtAccountCliente',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtArticolo',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataInizioReale',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataFineReale',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataLimiteInizioLavorazioni',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataPrevistaConsegna',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataInizioPianificata',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data006: {
    type: Date,
    alias: 'DataFinePianificata',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'QP_Tt_Fin',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagStato01Nuovo',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagStato02AttesaInizio',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagStato03InProduzione',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagStato04Saldato',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtStatoLottoProduzione',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'UmFinito',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'PercentualeAvanzamento',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtCiclo',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'PercQtIniziale',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'QT_Tt_Fin',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'ProgLotto',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'SubPrioritaLotti',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtTipoLotto',

  },
  __Dati_Data007: {
    type: Date,
    alias: 'DataCreazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'AnnoCreazione',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'MeseCreazione',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'AnnoConsegna',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'AnnoLimiteInizioLavorazioni',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'MeseConsegna',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'MeseLimiteInizioLavorazioni',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'SettimanaConsegna',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'SettimanaLimiteInizioLavorazioni',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'FlagSelezione',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'QP_R_Fin',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'Priorita',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceLottoProduzione',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'CodiceArticolo',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceTipoCiclo',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'QT_R_Fin',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'CodiceDisegno',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'CodiceTxtArticoloAutomatico',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdAccountDestinatario',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdDocOperativoOrigine',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdTipoDocOperativoOrigine',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdSedeDestinazione',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdTipoRigaOrdine',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdTipoRigaOrdinePerCodice',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdStatoArticoloCiclo',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtStatoArticoloCiclo',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdLottoProduzioneOrigine',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'TxtAccountDestinatario',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'RevisioneCiclo',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'ProssimoLotto_TxtAvviso',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'AnnoMeseConsegna',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'AnnoSettimanaConsegna',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'AnnoMeseLimiteInizioLavorazioni',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'AnnoSettimanaLimiteInizioLavorazioni',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'CodiceTxtDisegnoArticoloAutomatico',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagAggiorna01DaFasi',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagAggiorna02Totali',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'RevisioneArticolo',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'RevisioneDisegno',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdVoceDocOperativoOrigine',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'IdItemArticolo',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'CodiceItemCliente',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'DescrizioneItemCliente',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'NumeroDecimaliValori',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'NumeroDecimaliQuantita',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'PercScartoPrevista',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'CTAD_R',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'CTAD_Tt',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'CTAD_Tp',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'CTF_R',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'CTF_Tt',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'CTF_Tp',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'CTL_R',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'CTL_Tt',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'CTL_Tp',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'CTLE_R',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'CTLE_Tt',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'CTLE_Tp',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'CTM_R',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'CTM_Tt',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'CTM_Tp',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'CTP_R',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'CTP_Tt',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'CTP_Tp',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'CTT_R',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'CTT_Tt',

  },
  __Dati_Numero047: {
    type: Number,
    alias: 'CTT_Tp',

  },
  __Dati_Numero048: {
    type: Number,
    alias: 'CTTRA_R',

  },
  __Dati_Numero049: {
    type: Number,
    alias: 'CTTRA_Tt',

  },
  __Dati_Numero050: {
    type: Number,
    alias: 'CTTRA_Tp',

  },
  __Dati_Numero051: {
    type: Number,
    alias: 'CTQ_R',

  },
  __Dati_Numero052: {
    type: Number,
    alias: 'CTQ_Tt',

  },
  __Dati_Numero053: {
    type: Number,
    alias: 'CTQ_Tp',

  },
  __Dati_Numero054: {
    type: Number,
    alias: 'CTUt_R',

  },
  __Dati_Numero055: {
    type: Number,
    alias: 'CTUt_Tt',

  },
  __Dati_Numero056: {
    type: Number,
    alias: 'CTUt_Tp',

  },
  __Dati_Numero057: {
    type: Number,
    alias: 'PercIncCTAD_R',

  },
  __Dati_Numero058: {
    type: Number,
    alias: 'PercIncCTF_R',

  },
  __Dati_Numero059: {
    type: Number,
    alias: 'PercIncCTAD_Tt',

  },
  __Dati_Numero060: {
    type: Number,
    alias: 'PercIncCTAD_Tp',

  },
  __Dati_Numero061: {
    type: Number,
    alias: 'PercIncCTF_Tt',

  },
  __Dati_Numero062: {
    type: Number,
    alias: 'PercIncCTF_Tp',

  },
  __Dati_Numero063: {
    type: Number,
    alias: 'PercIncCTL_R',

  },
  __Dati_Numero064: {
    type: Number,
    alias: 'PercIncCTL_Tt',

  },
  __Dati_Numero065: {
    type: Number,
    alias: 'PercIncCTL_Tp',

  },
  __Dati_Numero066: {
    type: Number,
    alias: 'PercIncCTLE_R',

  },
  __Dati_Numero067: {
    type: Number,
    alias: 'PercIncCTLE_Tt',

  },
  __Dati_Numero068: {
    type: Number,
    alias: 'PercIncCTLE_Tp',

  },
  __Dati_Numero069: {
    type: Number,
    alias: 'PercIncCTM_R',

  },
  __Dati_Numero070: {
    type: Number,
    alias: 'PercIncCTM_Tt',

  },
  __Dati_Numero071: {
    type: Number,
    alias: 'PercIncCTM_Tp',

  },
  __Dati_Numero072: {
    type: Number,
    alias: 'PercIncCTP_R',

  },
  __Dati_Numero073: {
    type: Number,
    alias: 'PercIncCTP_Tt',

  },
  __Dati_Numero074: {
    type: Number,
    alias: 'PercIncCTP_Tp',

  },
  __Dati_Numero075: {
    type: Number,
    alias: 'PercIncCTTRA_R',

  },
  __Dati_Numero076: {
    type: Number,
    alias: 'PercIncCTTRA_Tt',

  },
  __Dati_Numero077: {
    type: Number,
    alias: 'PercIncCTTRA_Tp',

  },
  __Dati_Numero078: {
    type: Number,
    alias: 'PercIncCTQ_R',

  },
  __Dati_Numero079: {
    type: Number,
    alias: 'PercIncCTQ_Tt',

  },
  __Dati_Numero080: {
    type: Number,
    alias: 'PercIncCTQ_Tp',

  },
  __Dati_Numero081: {
    type: Number,
    alias: 'PercIncCTUt_R',

  },
  __Dati_Numero082: {
    type: Number,
    alias: 'PercIncCTUt_Tt',

  },
  __Dati_Numero083: {
    type: Number,
    alias: 'PercIncCTUt_Tp',

  },
  __Dati_Numero084: {
    type: Number,
    alias: 'QS_R_Fin',

  },
  __Dati_Numero085: {
    type: Number,
    alias: 'CUAD_R',

  },
  __Dati_Numero086: {
    type: Number,
    alias: 'CUAD_Tt',

  },
  __Dati_Numero087: {
    type: Number,
    alias: 'CUF_R',

  },
  __Dati_Numero088: {
    type: Number,
    alias: 'CUF_Tt',

  },
  __Dati_Numero089: {
    type: Number,
    alias: 'CUL_R',

  },
  __Dati_Numero090: {
    type: Number,
    alias: 'CUL_Tt',

  },
  __Dati_Numero091: {
    type: Number,
    alias: 'CULE_R',

  },
  __Dati_Numero092: {
    type: Number,
    alias: 'CULE_Tt',

  },
  __Dati_Numero093: {
    type: Number,
    alias: 'CUM_R',

  },
  __Dati_Numero094: {
    type: Number,
    alias: 'CUM_Tt',

  },
  __Dati_Numero095: {
    type: Number,
    alias: 'CUP_Tt',

  },
  __Dati_Numero096: {
    type: Number,
    alias: 'CUP_R',

  },
  __Dati_Numero097: {
    type: Number,
    alias: 'CUQ_R',

  },
  __Dati_Numero098: {
    type: Number,
    alias: 'CUQ_Tt',

  },
  __Dati_Numero099: {
    type: Number,
    alias: 'CUUt_R',

  },
  __Dati_Numero100: {
    type: Number,
    alias: 'CUUt_Tt',

  },
  __Dati_Numero101: {
    type: Number,
    alias: 'CUT_R',

  },
  __Dati_Numero102: {
    type: Number,
    alias: 'CUT_Tt',

  },
  __Dati_Numero103: {
    type: Number,
    alias: 'CUTRA_R',

  },
  __Dati_Numero104: {
    type: Number,
    alias: 'CUTRA_Tt',

  },
  __Dati_Numero105: {
    type: Number,
    alias: 'QS_Tt_Fin',

  },
  __Dati_Numero106: {
    type: Number,
    alias: 'PercScartoReale',

  },
  __Dati_Numero107: {
    type: Number,
    alias: 'QT_Tp_Fin',

  },
  __Dati_Numero108: {
    type: Number,
    alias: 'QP_Tp_Fin',

  },
  __Dati_Numero109: {
    type: Number,
    alias: 'QS_Tp_Fin',

  },
  __Dati_Numero110: {
    type: Number,
    alias: 'CUAD_Tp',

  },
  __Dati_Numero111: {
    type: Number,
    alias: 'CUF_Tp',

  },
  __Dati_Numero112: {
    type: Number,
    alias: 'CUL_Tp',

  },
  __Dati_Numero113: {
    type: Number,
    alias: 'CULE_Tp',

  },
  __Dati_Numero114: {
    type: Number,
    alias: 'CUM_Tp',

  },
  __Dati_Numero115: {
    type: Number,
    alias: 'CUP_Tp',

  },
  __Dati_Numero116: {
    type: Number,
    alias: 'CUQ_Tp',

  },
  __Dati_Numero117: {
    type: Number,
    alias: 'CUT_Tp',

  },
  __Dati_Numero118: {
    type: Number,
    alias: 'CUTRA_Tp',

  },
  __Dati_Numero119: {
    type: Number,
    alias: 'CUUt_Tp',

  },
  __Dati_Numero120: {
    type: Number,
    alias: 'CTS_R',

  },
  __Dati_Numero121: {
    type: Number,
    alias: 'CTS_Tt',

  },
  __Dati_Numero122: {
    type: Number,
    alias: 'CTS_Tp',

  },
  __Dati_Numero123: {
    type: Number,
    alias: 'CTB_R',

  },
  __Dati_Numero124: {
    type: Number,
    alias: 'CTB_Tt',

  },
  __Dati_Numero125: {
    type: Number,
    alias: 'CTB_Tp',

  },
  __Dati_Numero126: {
    type: Number,
    alias: 'CUS_R',

  },
  __Dati_Numero127: {
    type: Number,
    alias: 'CUS_Tt',

  },
  __Dati_Numero128: {
    type: Number,
    alias: 'CUS_Tp',

  },
  __Dati_Numero129: {
    type: Number,
    alias: 'CUB_R',

  },
  __Dati_Numero130: {
    type: Number,
    alias: 'CUB_Tt',

  },
  __Dati_Numero131: {
    type: Number,
    alias: 'CUB_Tp',

  },
  __Dati_Numero132: {
    type: Number,
    alias: 'Diff_CUAD_TpR',

  },
  __Dati_Numero133: {
    type: Number,
    alias: 'Diff_CUF_TpR',

  },
  __Dati_Numero134: {
    type: Number,
    alias: 'Diff_CULE_TpR',

  },
  __Dati_Numero135: {
    type: Number,
    alias: 'Diff_CUM_TpR',

  },
  __Dati_Numero136: {
    type: Number,
    alias: 'Diff_CUP_TpR',

  },
  __Dati_Numero137: {
    type: Number,
    alias: 'Diff_CUS_TpR',

  },
  __Dati_Numero138: {
    type: Number,
    alias: 'Diff_CUT_TpR',

  },
  __Dati_Numero139: {
    type: Number,
    alias: 'Diff_CUUt_TpR',

  },
  __Dati_Numero140: {
    type: Number,
    alias: 'Diff_CUQ_TpR',

  },
  __Dati_Numero141: {
    type: Number,
    alias: 'Diff_CUAD_TtR',

  },
  __Dati_Numero142: {
    type: Number,
    alias: 'Diff_CULE_TtR',

  },
  __Dati_Numero143: {
    type: Number,
    alias: 'Diff_CUM_TtR',

  },
  __Dati_Numero144: {
    type: Number,
    alias: 'Diff_CUP_TtR',

  },
  __Dati_Numero145: {
    type: Number,
    alias: 'Diff_CUQ_TtR',

  },
  __Dati_Numero146: {
    type: Number,
    alias: 'Diff_CUS_TtR',

  },
  __Dati_Numero147: {
    type: Number,
    alias: 'Diff_CUT_TtR',

  },
  __Dati_Numero148: {
    type: Number,
    alias: 'Diff_CUUt_TtR',

  },
  __Dati_Numero149: {
    type: Number,
    alias: 'Diff_CUF_TtR',

  },
  __Dati_Numero150: {
    type: Number,
    alias: 'FlagSaldoManuale',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'CodiceAmministrativo',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'CodiceCommercialeItem',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'TxtAccountOperatore',

  },
  __Dati_Numero151: {
    type: Number,
    alias: 'PercDiffCUAD_RTp',

  },
  __Dati_Numero152: {
    type: Number,
    alias: 'PercDiffCUAD_RTt',

  },
  __Dati_Numero153: {
    type: Number,
    alias: 'PercDiffCUF_RTp',

  },
  __Dati_Numero154: {
    type: Number,
    alias: 'PercDiffCUF_RTt',

  },
  __Dati_Numero155: {
    type: Number,
    alias: 'PercDiffCULE_RTp',

  },
  __Dati_Numero156: {
    type: Number,
    alias: 'PercDiffCULE_RTt',

  },
  __Dati_Numero157: {
    type: Number,
    alias: 'PercDiffCUL_RTp',

  },
  __Dati_Numero158: {
    type: Number,
    alias: 'PercDiffCUL_RTt',

  },
  __Dati_Numero159: {
    type: Number,
    alias: 'PercDiffCUM_RTp',

  },
  __Dati_Numero160: {
    type: Number,
    alias: 'PercDiffCUM_RTt',

  },
  __Dati_Numero161: {
    type: Number,
    alias: 'PercDiffCUP_RTp',

  },
  __Dati_Numero162: {
    type: Number,
    alias: 'PercDiffCUP_RTt',

  },
  __Dati_Numero163: {
    type: Number,
    alias: 'PercDiffCUQ_RTp',

  },
  __Dati_Numero164: {
    type: Number,
    alias: 'PercDiffCUQ_RTt',

  },
  __Dati_Numero165: {
    type: Number,
    alias: 'PercDiffCUS_RTp',

  },
  __Dati_Numero166: {
    type: Number,
    alias: 'PercDiffCUS_RTt',

  },
  __Dati_Numero167: {
    type: Number,
    alias: 'PercDiffCUT_RTp',

  },
  __Dati_Numero168: {
    type: Number,
    alias: 'PercDiffCUT_RTt',

  },
  __Dati_Numero169: {
    type: Number,
    alias: 'PercDiffCUTRA_RTp',

  },
  __Dati_Numero170: {
    type: Number,
    alias: 'PercDiffCUTRA_RTt',

  },
  __Dati_Numero171: {
    type: Number,
    alias: 'PercDiffCUUt_RTp',

  },
  __Dati_Numero172: {
    type: Number,
    alias: 'PercDiffCUUt_RTt',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'TxtMassimoAumentoCostoPerc',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'IdClasseUmLunghezza',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'IdClasseUmPeso',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'IdClasseUmVolume',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'UmLunghezza',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'UmLunghezzaDefault',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'UmPeso',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'UmPesoDefault',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'UmVolume',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'UmVolumeDefault',

  },
  __Dati_Numero173: {
    type: Number,
    alias: 'VolumeTotale_Tt',

  },
  __Dati_Numero174: {
    type: Number,
    alias: 'VolumeTotaleUmDefault_Tt',

  },
  __Dati_Numero175: {
    type: Number,
    alias: 'VolumeUnitarioUmDefault',

  },
  __Dati_Numero176: {
    type: Number,
    alias: 'VolumeTotaleUmDefault_R',

  },
  __Dati_Numero177: {
    type: Number,
    alias: 'ConvMisuraLunghezza',

  },
  __Dati_Numero178: {
    type: Number,
    alias: 'ConvMisuraLunghezzaDefault',

  },
  __Dati_Numero179: {
    type: Number,
    alias: 'ConvMisuraPeso',

  },
  __Dati_Numero180: {
    type: Number,
    alias: 'ConvMisuraPesoDefault',

  },
  __Dati_Numero181: {
    type: Number,
    alias: 'ConvMisuraVolume',

  },
  __Dati_Numero182: {
    type: Number,
    alias: 'ConvMisuraVolumeDefault',

  },
  __Dati_Numero183: {
    type: Number,
    alias: 'VolumeTotale_R',

  },
  __Dati_Numero184: {
    type: Number,
    alias: 'PesoTotale_Tt',

  },
  __Dati_Numero185: {
    type: Number,
    alias: 'PesoTotaleUmDefault_Tt',

  },
  __Dati_Numero186: {
    type: Number,
    alias: 'PesoUnitarioUmDefault',

  },
  __Dati_Numero187: {
    type: Number,
    alias: 'PesoTotaleUmDefault_R',

  },
  __Dati_Numero188: {
    type: Number,
    alias: 'PesoTotale_R',

  },
  __Dati_Numero189: {
    type: Number,
    alias: 'LunghezzaTotale_R',

  },
  __Dati_Numero190: {
    type: Number,
    alias: 'LunghezzaTotale_Tt',

  },
  __Dati_Numero191: {
    type: Number,
    alias: 'LunghezzaTotaleUmDefault_R',

  },
  __Dati_Numero192: {
    type: Number,
    alias: 'LunghezzaTotaleUmDefault_Tt',

  },
  __Dati_Numero193: {
    type: Number,
    alias: 'LunghezzaUnitarioUmDefault',

  },
  __Dati_Numero194: {
    type: Number,
    alias: 'Diff_CUL_TpR',

  },
  __Dati_Numero195: {
    type: Number,
    alias: 'Diff_CUL_TtR',

  },
  __Dati_Numero196: {
    type: Number,
    alias: 'Diff_CUTRA_TtR',

  },
  __Dati_Numero197: {
    type: Number,
    alias: 'Diff_CUTRA_TpR',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'TxtMassimoAumentoCosto',

  },
  __Dati_Numero198: {
    type: Number,
    alias: 'PercRicarico',

  },
  __Dati_Numero199: {
    type: Number,
    alias: 'CUT_R_Ricarico',

  },
  __Dati_Numero200: {
    type: Number,
    alias: 'CUT_Tt_Ricarico',

  },
  __Dati_Numero201: {
    type: Number,
    alias: 'CUT_Tp_Ricarico',

  },
  __Dati_Numero202: {
    type: Number,
    alias: 'CTT_R_Ricarico',

  },
  __Dati_Numero203: {
    type: Number,
    alias: 'CTT_Tt_Ricarico',

  },
  __Dati_Numero204: {
    type: Number,
    alias: 'CTT_Tp_Ricarico',

  },
  __Dati_Numero205: {
    type: Number,
    alias: 'PercDiffCUB_RTp',

  },
  __Dati_Numero206: {
    type: Number,
    alias: 'PercDiffCUB_RTt',

  },
  __Dati_Numero207: {
    type: Number,
    alias: 'TempoLottoTeorico',

  },
  __Dati_Numero208: {
    type: Number,
    alias: 'ProssimoLotto_FlagAvviso',

  },
  __Dati_Data008: {
    type: Date,
    alias: 'DataBenestare',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data009: {
    type: Date,
    alias: 'DataStampaCartellinoProduzione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo060: {
    type: String,
    alias: 'TxtUtenteBenestare',

  },
  __Dati_Testo061: {
    type: String,
    alias: 'TxtUtenteStampaCartellinoProduzione',

  },
  __Dati_Numero209: {
    type: Number,
    alias: 'FlagBenestare',

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
  __Dati_Numero210: {
    type: Number,
    alias: 'OrdineStatoLottoProduzione',

  },
  __Dati_Testo062: {
    type: String,
    alias: 'IdDocOperativiFasiTutti',

  },
  __Dati_Testo063: {
    type: String,
    alias: 'CodiceRevisioneItemClienteAutomatico',

  },
  __Dati_Numero211: {
    type: Number,
    alias: 'FlagPianificazioneInRitardo',

  },
  __Dati_Testo064: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero212: {
    type: Number,
    alias: 'FlagRegistraNumeroSerie',

  },
  __Dati_Numero213: {
    type: Number,
    alias: 'NumeroDiSerialiCreati',

  },
  __Dati_Numero214: {
    type: Number,
    alias: 'LivelloMassimoDistinta',

  },
  __Dati_Numero215: {
    type: Number,
    alias: 'Priorita_FlagBloccata',

  },
  __Dati_Testo065: {
    type: String,
    alias: 'IdDocumentoPrincipale',

  },
  __Dati_Testo066: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo067: {
    type: String,
    alias: 'IdDocImgDisegno',

  },
  __Dati_Numero216: {
    type: Number,
    alias: 'FlagDocumentiDisegnoCopiati',

  },
  __Dati_Numero217: {
    type: Number,
    alias: 'FlagDocumentiNoteCopiati',

  },
  __Dati_Numero218: {
    type: Number,
    alias: 'FlagDocumentiQualitaCopiati',

  },
  __Dati_Numero219: {
    type: Number,
    alias: 'FlagDocumentiProgrammiMacchinaCopiati',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default LottiProduzioneSchema;