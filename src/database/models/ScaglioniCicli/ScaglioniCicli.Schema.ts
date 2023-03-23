import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IScaglioniCicliPrivate } from './ScaglioniCicli.Types.Private';


/* --------
* Schema Definition
* -------- */
const ScaglioniCicliSchema = new mongoose.Schema<IScaglioniCicliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataModifica',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagAggiornaDati01',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagFornituraCreata',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdScaglione',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'CTLET',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'CTLT',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'CTMT',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'CTPT',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'CTST',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'CTT',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'CTT_Ricarico',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'CTTRAT',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'CUT',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'CUT_Ricarico',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataInvio',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'PercCUADT',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'PercCULET',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'PercCULT',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'PercCUMT',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'PercCUPT',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'PercCUST',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'PercCUTRAT',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'Quantita',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtUtenteModifica',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtScaglione',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'CTADT',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'CUPT',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'CULT',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'CULET',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'CUADT',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'CUMT',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'CUTRAT',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'CUST',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'CTPnT',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'CTFT',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'CUFT',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'CUPnT',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'CTT_UnitaBuone',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'CUT_UnitaBuone',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'PercCUPnTsuCUPT',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'PercCUFTsuCUPT',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'PercCUT_UnitaBuone',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'PercCUPnT',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'PercCUFT',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'FlagAttivo',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'CTQT',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'CTUtT',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'CUQT',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'CUUtT',

  },
  __Dati_Numero047: {
    type: Number,
    alias: 'PercCUQT',

  },
  __Dati_Numero048: {
    type: Number,
    alias: 'PercCUUtT',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdScaglionePrecedente',

  },
  __Dati_Numero049: {
    type: Number,
    alias: 'VariazioneScaglionePrecedente',

  },
  __Dati_Numero050: {
    type: Number,
    alias: 'VariazionePercScaglionePrecedente',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtUtenteInvio',

  },
  __Dati_Numero051: {
    type: Number,
    alias: 'PercCProg',

  },
  __Dati_Numero052: {
    type: Number,
    alias: 'PercCIng',

  },
  __Dati_Numero053: {
    type: Number,
    alias: 'CTProgT',

  },
  __Dati_Numero054: {
    type: Number,
    alias: 'CTIngT',

  },
  __Dati_Numero055: {
    type: Number,
    alias: 'CUProgT',

  },
  __Dati_Numero056: {
    type: Number,
    alias: 'CUIngT',

  },
  __Dati_Numero057: {
    type: Number,
    alias: 'GiorniApprovvigionamento',

  },
  __Dati_Numero058: {
    type: Number,
    alias: 'FlagCalcoloInCorso',

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
  __Dati_Testo010: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdTipoScaglioneTipoArticolo',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdUtenteCreazione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdUtenteInvio',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdUtenteModifica',

  },
  __Dati_Numero059: {
    type: Number,
    alias: 'GiorniLavorazioniNonPianificabili',

  },
  __Dati_Numero060: {
    type: Number,
    alias: 'GiorniProduzione',

  },
  __Dati_Numero061: {
    type: Number,
    alias: 'OreTotaliProduzione',

  },
  __Dati_Numero062: {
    type: Number,
    alias: 'FlagAggiornaDaCostBreakdown',

  },
  __Dati_Numero063: {
    type: Number,
    alias: 'CostoRiclassificato_CTADT',

  },
  __Dati_Numero064: {
    type: Number,
    alias: 'CostoRiclassificato_CTFT',

  },
  __Dati_Numero065: {
    type: Number,
    alias: 'CostoRiclassificato_CTIngT',

  },
  __Dati_Numero066: {
    type: Number,
    alias: 'CostoRiclassificato_CTLET',

  },
  __Dati_Numero067: {
    type: Number,
    alias: 'CostoRiclassificato_CTLT',

  },
  __Dati_Numero068: {
    type: Number,
    alias: 'CostoRiclassificato_CTMT_Buy',

  },
  __Dati_Numero069: {
    type: Number,
    alias: 'CostoRiclassificato_CTPnT',

  },
  __Dati_Numero070: {
    type: Number,
    alias: 'CostoRiclassificato_CTProgT',

  },
  __Dati_Numero071: {
    type: Number,
    alias: 'CostoRiclassificato_CTPT',

  },
  __Dati_Numero072: {
    type: Number,
    alias: 'CostoRiclassificato_CTQT',

  },
  __Dati_Numero073: {
    type: Number,
    alias: 'CostoRiclassificato_CTST',

  },
  __Dati_Numero074: {
    type: Number,
    alias: 'CostoRiclassificato_CTTRAT',

  },
  __Dati_Numero075: {
    type: Number,
    alias: 'CostoRiclassificato_CTUt_Buy',

  },
  __Dati_Numero076: {
    type: Number,
    alias: 'CostoRiclassificato_CUADT',

  },
  __Dati_Numero077: {
    type: Number,
    alias: 'CostoRiclassificato_CUFT',

  },
  __Dati_Numero078: {
    type: Number,
    alias: 'CostoRiclassificato_CUIngT',

  },
  __Dati_Numero079: {
    type: Number,
    alias: 'CostoRiclassificato_CULET',

  },
  __Dati_Numero080: {
    type: Number,
    alias: 'CostoRiclassificato_CULT',

  },
  __Dati_Numero081: {
    type: Number,
    alias: 'CostoRiclassificato_CUMT_Buy',

  },
  __Dati_Numero082: {
    type: Number,
    alias: 'CostoRiclassificato_CUPnT',

  },
  __Dati_Numero083: {
    type: Number,
    alias: 'CostoRiclassificato_CUProgT',

  },
  __Dati_Numero084: {
    type: Number,
    alias: 'CostoRiclassificato_CUPT',

  },
  __Dati_Numero085: {
    type: Number,
    alias: 'CostoRiclassificato_CUQT',

  },
  __Dati_Numero086: {
    type: Number,
    alias: 'CostoRiclassificato_CUST',

  },
  __Dati_Numero087: {
    type: Number,
    alias: 'CostoRiclassificato_CUTRAT',

  },
  __Dati_Numero088: {
    type: Number,
    alias: 'CostoRiclassificato_CUUt_Buy',

  },
  __Dati_Numero089: {
    type: Number,
    alias: 'CostoRiclassificato_CTT',

  },
  __Dati_Numero090: {
    type: Number,
    alias: 'CostoRiclassificato_CUT',

  },
  __Dati_Numero091: {
    type: Number,
    alias: 'CostBreakdown_FlagForzaAggiornamentoFigli',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdRicorrenzaRecord',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtUtente',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ScaglioniCicliSchema;