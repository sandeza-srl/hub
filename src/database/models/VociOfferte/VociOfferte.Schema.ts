import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociOffertePrivate } from './VociOfferte.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociOfferteSchema = new mongoose.Schema<IVociOffertePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ConversioneValuta',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'VCostiTotale',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'VCostoUnitario',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdOfferta',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdVoceOfferta',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdValuta',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'MeseEsecuzione',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'VImponibile',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'VUnitario',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'QuantitaIniziale',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'VVariazioneUnitarioPercentuale',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'SimboloValuta',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtValuta',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'UnitaMisura',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'VIva',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'PercentualeIva',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'QuantitaVariazione',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VPreVariazioni',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'VImponibileDefinitivo',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'VPreVariazioniDefinitivo',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'VTotaleDefinitivo',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'VVariazioniTotaleDefinitivo',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'VVariazioniTotale',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'QuantitaDefinitiva',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'VTotale',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'VIvaDefinitivo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'Ordine',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdCapitolo',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'Lingua',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'VMargine',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'VMarginePercentuale',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagItem',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdListinoItem',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'QuantitaMinima',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdTipoFatturazione',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'FlagVendita',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'FlagVenditaVedi',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagNoleggio',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdTipoListino',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagContribuisceCosto',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'FlagContribuisceCostoVedi',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'FlagContribuiscePrezzo',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'FlagContribuiscePrezzoVedi',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'FlagIncluso',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'FlagInclusoOpzionaleVedi',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'FlagNoleggioVenditaVedi',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'Livello',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'OrdineVisualizzazione',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'LivelloConvertito',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdAliquota',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtAliquota',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataEsecuzione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero033: {
    type: Number,
    alias: 'VUnitarioDefinitivo',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'VVariazioneValore',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'VVariazioniTotalePerc',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'VCostiTotaleDefinitivo',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'TxInclusoOpzionale',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'FlagTitoloAuto',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'FlagTitoloAutoVedi',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'FlagNoteAuto',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'FlagNoteAutoVedi',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'TxtTitoloManuale',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'TxtTitoloItem',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtTitoloCalcolato',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdVoceOffertaPadre',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'TxtNoteItem',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'TxtNoteCalcolato',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'TxtNoteManuale',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'CodiceOfferta',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdFornituraItem',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdAccountClienteFinale',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdFamigliaItem',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdSottoFamigliaItem',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'TxtSottoFamigliaItem',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'TxtFamigliaItem',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'FlagRiassume',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'FlagRiassumeVedi',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'IdRiassuntoPadre',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'FlagRiassunto',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'FlagVariazioneManuale',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'FlagVariazioneManualeVedi',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'VRicaricoPercentuale',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'CodiceFamigliaItem',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'CodiceSottoFamigliaItem',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'IdAccountDistributore',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'VProvvigioni',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'VProvvigioniPercentuale',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'FlagEscludiProvvigioni',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataScadenza',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero047: {
    type: Number,
    alias: 'FlagInserisciDataConsegna',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'TestoLiberoVociOfferta',

  },
  __Dati_Numero048: {
    type: Number,
    alias: 'VTargetPrice',

  },
  __Dati_Numero049: {
    type: Number,
    alias: 'PercScostamentoTarget',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'IdRevisione',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'CampoStampaOffertaScaglioni',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero050: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero051: {
    type: Number,
    alias: 'Scaglione_FlagAggiornaDaCostBreakdown',

  },
  __Dati_Numero052: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTADT',

  },
  __Dati_Numero053: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTFT',

  },
  __Dati_Numero054: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTIngT',

  },
  __Dati_Numero055: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTLET',

  },
  __Dati_Numero056: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTLT',

  },
  __Dati_Numero057: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTMT_Buy',

  },
  __Dati_Numero058: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTPnT',

  },
  __Dati_Numero059: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTProgT',

  },
  __Dati_Numero060: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTPT',

  },
  __Dati_Numero061: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTQT',

  },
  __Dati_Numero062: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTST',

  },
  __Dati_Numero063: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTT',

  },
  __Dati_Numero064: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTTRAT',

  },
  __Dati_Numero065: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CTUt_Buy',

  },
  __Dati_Numero066: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUADT',

  },
  __Dati_Numero067: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUFT',

  },
  __Dati_Numero068: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUIngT',

  },
  __Dati_Numero069: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CULET',

  },
  __Dati_Numero070: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CULT',

  },
  __Dati_Numero071: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUMT_Buy',

  },
  __Dati_Numero072: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUPnT',

  },
  __Dati_Numero073: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUProgT',

  },
  __Dati_Numero074: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUPT',

  },
  __Dati_Numero075: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUQT',

  },
  __Dati_Numero076: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUST',

  },
  __Dati_Numero077: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUT',

  },
  __Dati_Numero078: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUTRAT',

  },
  __Dati_Numero079: {
    type: Number,
    alias: 'Scaglione_CostoRiclassificato_CUUt_Buy',

  },
  __Dati_Numero080: {
    type: Number,
    alias: 'Scaglione_CTADT',

  },
  __Dati_Numero081: {
    type: Number,
    alias: 'Scaglione_CTFT',

  },
  __Dati_Numero082: {
    type: Number,
    alias: 'Scaglione_CTIngT',

  },
  __Dati_Numero083: {
    type: Number,
    alias: 'Scaglione_CTLET',

  },
  __Dati_Numero084: {
    type: Number,
    alias: 'Scaglione_CTLT',

  },
  __Dati_Numero085: {
    type: Number,
    alias: 'Scaglione_CTMT',

  },
  __Dati_Numero086: {
    type: Number,
    alias: 'Scaglione_CTPnT',

  },
  __Dati_Numero087: {
    type: Number,
    alias: 'Scaglione_CTProgT',

  },
  __Dati_Numero088: {
    type: Number,
    alias: 'Scaglione_CTPT',

  },
  __Dati_Numero089: {
    type: Number,
    alias: 'Scaglione_CTQT',

  },
  __Dati_Numero090: {
    type: Number,
    alias: 'Scaglione_CTST',

  },
  __Dati_Numero091: {
    type: Number,
    alias: 'Scaglione_CTT',

  },
  __Dati_Numero092: {
    type: Number,
    alias: 'Scaglione_CTT_Ricarico',

  },
  __Dati_Numero093: {
    type: Number,
    alias: 'Scaglione_CTT_UnitaBuone',

  },
  __Dati_Numero094: {
    type: Number,
    alias: 'Scaglione_CTTRAT',

  },
  __Dati_Numero095: {
    type: Number,
    alias: 'Scaglione_CTUtT',

  },
  __Dati_Numero096: {
    type: Number,
    alias: 'Scaglione_CUADT',

  },
  __Dati_Numero097: {
    type: Number,
    alias: 'Scaglione_CUFT',

  },
  __Dati_Numero098: {
    type: Number,
    alias: 'Scaglione_CUIngT',

  },
  __Dati_Numero099: {
    type: Number,
    alias: 'Scaglione_CULET',

  },
  __Dati_Numero100: {
    type: Number,
    alias: 'Scaglione_CULT',

  },
  __Dati_Numero101: {
    type: Number,
    alias: 'Scaglione_CUMT',

  },
  __Dati_Numero102: {
    type: Number,
    alias: 'Scaglione_CUPnT',

  },
  __Dati_Numero103: {
    type: Number,
    alias: 'Scaglione_CUProgT',

  },
  __Dati_Numero104: {
    type: Number,
    alias: 'Scaglione_CUPT',

  },
  __Dati_Numero105: {
    type: Number,
    alias: 'Scaglione_CUQT',

  },
  __Dati_Numero106: {
    type: Number,
    alias: 'Scaglione_CUST',

  },
  __Dati_Numero107: {
    type: Number,
    alias: 'Scaglione_CUT',

  },
  __Dati_Numero108: {
    type: Number,
    alias: 'Scaglione_CUT_Ricarico',

  },
  __Dati_Numero109: {
    type: Number,
    alias: 'Scaglione_CUT_UnitaBuone',

  },
  __Dati_Numero110: {
    type: Number,
    alias: 'Scaglione_CUTRAT',

  },
  __Dati_Numero111: {
    type: Number,
    alias: 'Scaglione_CUUtT',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'IdScaglione',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Data004: {
    type: Date,
    alias: 'Fornitura_DataCostoAcquisto',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo053: {
    type: String,
    alias: 'Fornitura_DescrizioneCommerciale',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'Fornitura_Note',

  },
  __Dati_Numero112: {
    type: Number,
    alias: 'Fornitura_FlagAggiorna',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'Fornitura_CodiceRiferimentoFornitore',

  },
  __Dati_Numero113: {
    type: Number,
    alias: 'Scaglione_FlagCostBreakDownPresente',

  },
  __Dati_Numero114: {
    type: Number,
    alias: 'Fornitura_FlagAcquisto',

  },
  __Dati_Numero115: {
    type: Number,
    alias: 'Fornitura_FlagProduzione',

  },
  __Dati_Numero116: {
    type: Number,
    alias: 'Fornitura_Quantita',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'CodiceCommercialeItem',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'CodificaClienteItemPrincipale_CodiceItemCliente',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'CodificaClienteItemPrincipale_DescrizioneItemCliente',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'CodificaClienteItemPrincipale_NumeroRevisione',

  },
  __Dati_Testo060: {
    type: String,
    alias: 'Fornitura_TxtFornituraItem',

  },
  __Dati_Testo061: {
    type: String,
    alias: 'Fornitura_TxtFornituraItemDataAutomatico',

  },
  __Dati_Numero117: {
    type: Number,
    alias: 'FlagAccettataManuale',

  },
  __Dati_Numero118: {
    type: Number,
    alias: 'FlagAccettataAutomatica',

  },
  __Dati_Numero119: {
    type: Number,
    alias: 'QuantitaDefinitivaAccettata',

  },
  __Dati_Numero120: {
    type: Number,
    alias: 'VImponibileAccettato',

  },
  __Dati_Numero121: {
    type: Number,
    alias: 'VUnitarioDefinitivoAccettato',

  },
  __Dati_Numero122: {
    type: Number,
    alias: 'VIvaAccettata',

  },
  __Dati_Numero123: {
    type: Number,
    alias: 'VTotaleAccettato',

  },
  __Dati_Numero124: {
    type: Number,
    alias: 'FlagAggiorna01',

  },
  __Dati_Numero125: {
    type: Number,
    alias: 'VVariazioniTotaleAccettatoPerc',

  },
  __Dati_Numero126: {
    type: Number,
    alias: 'VVariazioniTotaleAccettato',

  },
  __Dati_Numero127: {
    type: Number,
    alias: 'VVariazioneUnitarioPercentualeAccettato',

  },
  __Dati_Numero128: {
    type: Number,
    alias: 'VMargineAccettato',

  },
  __Dati_Numero129: {
    type: Number,
    alias: 'VMarginePercentualeAccettato',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociOfferteSchema;