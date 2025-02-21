import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociDocContabiliPrivate } from './VociDocContabili.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociDocContabiliSchema = new mongoose.Schema<IVociDocContabiliPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdDocContabile',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'IdVoceDocContabile',

},
__Dati_Testo003: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo004: {
type: String,
alias: 'LinguaDocumento_NoteItem',

},
__Dati_Numero002: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo005: {
type: String,
alias: 'Note',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagImponibile',

},
__Dati_Numero004: {
type: Number,
alias: 'PercentualeIva',

},
__Dati_Numero005: {
type: Number,
alias: 'QuantitaItem',

},
__Dati_Numero006: {
type: Number,
alias: 'QuantitaDefinitivoItem',

},
__Dati_Numero007: {
type: Number,
alias: 'QuantitaVariazioneItem',

},
__Dati_Numero008: {
type: Number,
alias: 'VIvaValuta',

},
__Dati_Numero009: {
type: Number,
alias: 'VUnitarioItemValuta',

},
__Dati_Numero010: {
type: Number,
alias: 'VTotaleValuta',

},
__Dati_Numero011: {
type: Number,
alias: 'VImponibileValuta',

},
__Dati_Data001: {
type: Date,
alias: 'DataDocContabile',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo006: {
type: String,
alias: 'UnitaMisuraItem',

},
__Dati_Testo007: {
type: String,
alias: 'SimboloValuta',

},
__Dati_Testo008: {
type: String,
alias: 'IdAliquota',

},
__Dati_Testo009: {
type: String,
alias: 'LinguaDocumento_DescrizioneAliquota',

},
__Dati_Testo010: {
type: String,
alias: 'IdItem',

},
__Dati_Numero012: {
type: Number,
alias: 'VTotale',

},
__Dati_Numero013: {
type: Number,
alias: 'VImponibile',

},
__Dati_Numero014: {
type: Number,
alias: 'VIva',

},
__Dati_Numero015: {
type: Number,
alias: 'ConversioneValutaSuPrincipale',

},
__Dati_Testo011: {
type: String,
alias: 'LinguaDocumento_DescrizioneItem',

},
__Dati_Testo012: {
type: String,
alias: 'LinguaDocumento',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagItem',

},
__Dati_Numero017: {
type: Number,
alias: 'VPercVariazioneUnitario',

},
__Dati_Numero018: {
type: Number,
alias: 'VPercVariazioniTotale',

},
__Dati_Numero019: {
type: Number,
alias: 'VUnitarioDefinitivoItemValuta',

},
__Dati_Numero020: {
type: Number,
alias: 'VUnitarioDefinitivoItem',

},
__Dati_Numero021: {
type: Number,
alias: 'VUnitarioItem',

},
__Dati_Numero022: {
type: Number,
alias: 'FlagIn',

},
__Dati_Numero023: {
type: Number,
alias: 'FlagOut',

},
__Dati_Testo013: {
type: String,
alias: 'IdAccountEmittente',

},
__Dati_Testo014: {
type: String,
alias: 'IdAccountPagatore',

},
__Dati_Testo015: {
type: String,
alias: 'IdProgetto',

},
__Dati_Testo016: {
type: String,
alias: 'IdFaseProgetto',

},
__Dati_Testo017: {
type: String,
alias: 'IdListinoItem',

},
__Dati_Testo018: {
type: String,
alias: 'IdTipoListino',

},
__Dati_Numero024: {
type: Number,
alias: 'ConversioneUmFornitura',

},
__Dati_Testo019: {
type: String,
alias: 'IdFornituraItem',

},
__Dati_Numero025: {
type: Number,
alias: 'VUnitarioFornituraValuta',

},
__Dati_Numero026: {
type: Number,
alias: 'VUnitarioDefinitivoFornituraValuta',

},
__Dati_Numero027: {
type: Number,
alias: 'VUnitarioDefinitivoFornitura',

},
__Dati_Numero028: {
type: Number,
alias: 'QuantitaFornitura',

},
__Dati_Testo020: {
type: String,
alias: 'UnitaMisuraFornitura',

},
__Dati_Numero029: {
type: Number,
alias: 'FlagVoceLibera',

},
__Dati_Testo021: {
type: String,
alias: 'IdVoceProgetto',

},
__Dati_Testo022: {
type: String,
alias: 'CodiceItem',

},
__Dati_Testo023: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo024: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Testo025: {
type: String,
alias: 'TxtFamigliaItem',

},
__Dati_Testo026: {
type: String,
alias: 'TxtSottoFamigliaItem',

},
__Dati_Numero030: {
type: Number,
alias: 'QuantitaVariazioneFornitura',

},
__Dati_Numero031: {
type: Number,
alias: 'FlagUmDiverse',

},
__Dati_Testo027: {
type: String,
alias: 'CodiceRiferimentoFornitore',

},
__Dati_Numero032: {
type: Number,
alias: 'QuantitaDefinitivoFornitura',

},
__Dati_Numero033: {
type: Number,
alias: 'VUnitarioFornitura',

},
__Dati_Numero034: {
type: Number,
alias: 'VImportoPreVariazioni',

},
__Dati_Numero035: {
type: Number,
alias: 'VVariazioniTotale',

},
__Dati_Testo028: {
type: String,
alias: 'CodiceDocContabile',

},
__Dati_Testo029: {
type: String,
alias: 'CodiceEsterno',

},
__Dati_Testo030: {
type: String,
alias: 'CodiceVisualizza',

},
__Dati_Testo031: {
type: String,
alias: 'IdDocOperativo',

},
__Dati_Numero036: {
type: Number,
alias: 'Anno',

},
__Dati_Numero037: {
type: Number,
alias: 'AnnoMese',

},
__Dati_Numero038: {
type: Number,
alias: 'Mese',

},
__Dati_Numero039: {
type: Number,
alias: 'VImponibileSegno',

},
__Dati_Numero040: {
type: Number,
alias: 'VIvaSegno',

},
__Dati_Testo032: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo033: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo034: {
type: String,
alias: 'CodiceFamigliaItem',

},
__Dati_Testo035: {
type: String,
alias: 'CodiceSottoFamigliaItem',

},
__Dati_Testo036: {
type: String,
alias: 'IdVoceDocOperativo',

},
__Dati_Numero041: {
type: Number,
alias: 'ConversioneValutaAPrincipale',

},
__Dati_Testo037: {
type: String,
alias: 'TxtAccountDocContabile',

},
__Dati_Testo038: {
type: String,
alias: 'IdOfferta',

},
__Dati_Numero042: {
type: Number,
alias: 'FlagAggiornaValoriAccessori',

},
__Dati_Numero043: {
type: Number,
alias: 'VImportoPreVariazioniValuta',

},
__Dati_Numero044: {
type: Number,
alias: 'VImportoPreVariazioniSegno',

},
__Dati_Numero045: {
type: Number,
alias: 'FlagAggiornaValoriSensibili_01',

},
__Dati_Numero046: {
type: Number,
alias: 'FlagAggiornaValoriSensibili_02',

},
__Dati_Testo039: {
type: String,
alias: 'IdValuta',

},
__Dati_Testo040: {
type: String,
alias: 'SimboloValutaRidotto',

},
__Dati_Testo041: {
type: String,
alias: 'IdPeriodoContabile',

},
__Dati_Numero047: {
type: Number,
alias: 'Zero',

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
__Dati_Numero048: {
type: Number,
alias: 'FlagVariazioneManuale',

},
__Dati_Testo042: {
type: String,
alias: 'LinguaPrincipale',

},
__Dati_Testo043: {
type: String,
alias: 'LinguaPrincipale_NoteItem',

},
__Dati_Numero049: {
type: Number,
alias: 'FlagAggiornaValoriDescrittivi',

},
__Dati_Testo044: {
type: String,
alias: 'LinguaPrincipale_DescrizioneAliquota',

},
__Dati_Testo045: {
type: String,
alias: 'LinguaPrincipale_DescrizioneItem',

},
__Dati_Testo046: {
type: String,
alias: 'TxtFornituraItem',

},
__Dati_Data002: {
type: Date,
alias: 'DataDocOperativo',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero050: {
type: Number,
alias: 'FlagProvvisorio',

},
__Dati_Testo047: {
type: String,
alias: 'TxtTipoListinoItem',

},
__Dati_Testo048: {
type: String,
alias: 'TxtAliquota',

},
__Dati_Numero051: {
type: Number,
alias: 'VTotaleSegno',

},
__Dati_Numero052: {
type: Number,
alias: 'FlagNoPagamentoIva',

},
__Dati_Numero053: {
type: Number,
alias: 'VVariazioniTotaleValuta',

},
__Dati_Testo049: {
type: String,
alias: 'IdOriginiDati',

},
__Dati_Testo050: {
type: String,
alias: 'CodiceTxtItemAutomatico',

},
__Dati_Testo051: {
type: String,
alias: 'CodiceAliquota',

},
__Dati_Testo052: {
type: String,
alias: 'LinguaDocumento_DescrizioneFamiglia',

},
__Dati_Testo053: {
type: String,
alias: 'LinguaDocumento_DescrizioneSottoFamiglia',

},
__Dati_Testo054: {
type: String,
alias: 'LinguaPrincipale_DescrizioneFamiglia',

},
__Dati_Testo055: {
type: String,
alias: 'LinguaPrincipale_DescrizioneSottoFamiglia',

},
__Dati_Numero054: {
type: Number,
alias: 'VImponibileValutaSegno',

},
__Dati_Numero055: {
type: Number,
alias: 'VImportoPreVariazioniValutaSegno',

},
__Dati_Numero056: {
type: Number,
alias: 'VIvaValutaSegno',

},
__Dati_Numero057: {
type: Number,
alias: 'VTotaleValutaSegno',

},
__Dati_Testo056: {
type: String,
alias: 'IdIntermediario',

},
__Dati_Numero058: {
type: Number,
alias: 'FlagReverseCharge',

},
__Dati_Testo057: {
type: String,
alias: 'IdDichiarazioniIntento',

},
__Dati_Testo058: {
type: String,
alias: 'CodiceCIG',

},
__Dati_Testo059: {
type: String,
alias: 'CodiceCUP',

},
__Dati_Testo060: {
type: String,
alias: 'NumeroOrdine',

},
__Dati_Data003: {
type: Date,
alias: 'DataOrdine',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo061: {
type: String,
alias: 'RiferimentoAmministrazione',

},
__Dati_Testo062: {
type: String,
alias: 'FatturaCollegataCodice',

},
__Dati_Testo063: {
type: String,
alias: 'IdVoceDocContabilePreDuplicazione',

},
__Dati_Data004: {
type: Date,
alias: 'FatturaCollegataData',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data005: {
type: Date,
alias: 'FE_DataInizioPeriodo',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data006: {
type: Date,
alias: 'FE_DataFinePeriodo',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo064: {
type: String,
alias: 'FE_TipoDato',

},
__Dati_Testo065: {
type: String,
alias: 'FE_RiferimentoTesto',

},
__Dati_Numero059: {
type: Number,
alias: 'AnnoSettimana',

},
__Dati_Testo066: {
type: String,
alias: 'IdAccountIntermediario',

},
__Dati_Testo067: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero060: {
type: Number,
alias: 'FlagUmStandardFattura',

},
__Dati_Numero061: {
type: Number,
alias: 'FlagUmAltFattura',

},
__Dati_Testo068: {
type: String,
alias: 'UmItemAlternativa',

},
__Dati_Numero062: {
type: Number,
alias: 'ConversioneUmAlternativaUmItem',

},
__Dati_Numero063: {
type: Number,
alias: 'ConversioneUmItemUmAlternativa',

},
__Dati_Numero064: {
type: Number,
alias: 'QuantitaItemAlternativa',

},
__Dati_Numero065: {
type: Number,
alias: 'QuantitaDefinitivoItemUmAlt',

},
__Dati_Numero066: {
type: Number,
alias: 'QuantitaVariazioneItemUmAlt',

},
__Dati_Numero067: {
type: Number,
alias: 'FlagEscludiDichiarazioneIntento',

},
__Dati_Testo069: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociDocContabiliSchema;