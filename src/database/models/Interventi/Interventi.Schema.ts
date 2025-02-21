import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInterventiPrivate } from './Interventi.Types.Private';


/* --------
* Schema Definition
* -------- */
const InterventiSchema = new mongoose.Schema<IInterventiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdIntervento',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'IdProgetto',

},
__Dati_Testo003: {
type: String,
alias: 'IdFaseProgetto',

},
__Dati_Testo004: {
type: String,
alias: 'IdTipoIntervento',

},
__Dati_Testo005: {
type: String,
alias: 'IdOperatoreResponsabile',

},
__Dati_Data001: {
type: Date,
alias: 'DataInserimento',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo006: {
type: String,
alias: 'CodiceRichiesta',

},
__Dati_Testo007: {
type: String,
alias: 'CodiceIntervento',

},
__Dati_Numero002: {
type: Number,
alias: 'ProgressivoProgramma',

},
__Dati_Data002: {
type: Date,
alias: 'DataEsecuzioneProgrammata',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero003: {
type: Number,
alias: 'AnnoInserimento',

},
__Dati_Data003: {
type: Date,
alias: 'DataEsecuzioneReale',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data004: {
type: Date,
alias: 'DataRichiesta',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data005: {
type: Date,
alias: 'DataScadenzaRichiesta',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Ora001: {
type: String,
alias: 'OraScadenzaRichiesta',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraScadenzaRichiesta',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero004: {
type: Number,
alias: 'AnnoRichiesta',

},
__Dati_Numero005: {
type: Number,
alias: 'AnnoScadenzaRichiesta',

},
__Dati_Numero006: {
type: Number,
alias: 'AnnoEsecuzioneProgrammata',

},
__Dati_Testo008: {
type: String,
alias: 'TipoRichiesta',

},
__Dati_Numero007: {
type: Number,
alias: 'PrioritaRichiesta',

},
__Dati_Testo009: {
type: String,
alias: 'NotePreProgramma',

},
__Dati_Testo010: {
type: String,
alias: 'IdAccountDestinatario',

},
__Dati_Testo011: {
type: String,
alias: 'IdSedeDestinatario',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagStatoProgrammato',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagRichiesta',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagStatoAssegnato',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagDdtCreabile',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagRitardo',

},
__Dati_Ora002: {
type: String,
alias: 'OraFineEsecuzione',

},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraFineEsecuzione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo012: {
type: String,
alias: 'IdDocOperativo',

},
__Dati_Testo013: {
type: String,
alias: 'CodiceDocOperativo',

},
__Dati_Testo014: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagBloccato',

},
__Dati_Testo015: {
type: String,
alias: 'TxtTipoIntervento',

},
__Dati_Testo016: {
type: String,
alias: 'TxtAccountDestinatario',

},
__Dati_Testo017: {
type: String,
alias: 'IdRubricaDestinatario',

},
__Dati_Testo018: {
type: String,
alias: 'TxtSedeDestinatario',

},
__Dati_Testo019: {
type: String,
alias: 'NomeRubricaDestinatario',

},
__Dati_Testo020: {
type: String,
alias: 'MailDestinatario',

},
__Dati_Testo021: {
type: String,
alias: 'MailCompagnia',

},
__Dati_Testo022: {
type: String,
alias: 'Citta',

},
__Dati_Testo023: {
type: String,
alias: 'NotePreRichiesta',

},
__Dati_Testo024: {
type: String,
alias: 'NotePostLavoroVisibili',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagStatoConfermato',

},
__Dati_Testo025: {
type: String,
alias: 'TxtStato',

},
__Dati_Testo026: {
type: String,
alias: 'TxtProgetto',

},
__Dati_Testo027: {
type: String,
alias: 'TxtFaseProgetto',

},
__Dati_Testo028: {
type: String,
alias: 'IdTipoDocOperativoDdt',

},
__Dati_Testo029: {
type: String,
alias: 'IdTipoDocOperativo',

},
__Dati_Testo030: {
type: String,
alias: 'TxtOperatoreResponsabile',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagDocOperativoChiuso',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagStatoEseguito',

},
__Dati_Testo031: {
type: String,
alias: 'OggettoMail',

},
__Dati_Testo032: {
type: String,
alias: 'ContenutoMail',

},
__Dati_Ora003: {
type: String,
alias: 'OraEsecuzioneProgrammata',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagLavoroCompletato',

},
__Dati_Numero018: {
type: Number,
alias: 'OrdineStato',

},
__Dati_Testo033: {
type: String,
alias: 'NotePostLavoroInterne',

},
__Dati_Testo034: {
type: String,
alias: 'NotePostLavoroTutte',

},
__Dati_Testo035: {
type: String,
alias: 'NotePreTutte',

},
__Dati_Testo036: {
type: String,
alias: 'TipoDocumento',

},
__Dati_Testo037: {
type: String,
alias: 'SottoTipoDocumento',

},
__Dati_Numero019: {
type: Number,
alias: 'FlagDocOperativoUnico',

},
__Dati_DataOra003: {
type: Date,
alias: 'DataOraFirma',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Contenitore001: {
type: String,
alias: 'FirmaCliente',

},
__Dati_Numero020: {
type: Number,
alias: 'FlagInviato',

},
__Dati_Testo038: {
type: String,
alias: 'UrlRichiesta',

},
__Dati_Testo039: {
type: String,
alias: 'GeolocalizzazioneFirma',

},
__Dati_Ora004: {
type: String,
alias: 'OraInizioEsecuzione',

},
__Dati_DataOra004: {
type: Date,
alias: 'DataOraInizioEsecuzione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo040: {
type: String,
alias: 'TxtOperatoriTutti',

},
__Dati_Numero021: {
type: Number,
alias: 'FlagStatoControllato',

},
__Dati_Testo041: {
type: String,
alias: 'FirmaClienteEstesa',

},
__Dati_Numero022: {
type: Number,
alias: 'FlagPagamentoAbilitato',

},
__Dati_Testo042: {
type: String,
alias: 'CondizioniGenerali',

},
__Dati_Testo043: {
type: String,
alias: 'IndirizziMailA',

},
__Dati_Testo044: {
type: String,
alias: 'IndirizziMailCC',

},
__Dati_Testo045: {
type: String,
alias: 'IndirizziMailCCN',

},
__Dati_Testo046: {
type: String,
alias: 'DestinatarioA_Tipo',

},
__Dati_Testo047: {
type: String,
alias: 'DestinatarioCC_Tipo',

},
__Dati_Testo048: {
type: String,
alias: 'DestinatarioCCN_Tipo',

},
__Dati_Testo049: {
type: String,
alias: 'NomeFormatoStampa',

},
__Dati_Ora005: {
type: String,
alias: 'Durata',

},
__Dati_Ora006: {
type: String,
alias: 'OraFineProgrammata',

},
__Dati_Numero023: {
type: Number,
alias: 'FlagCalendarioInviato',

},
__Dati_Testo050: {
type: String,
alias: 'IdDocumentoCollegato',

},
__Dati_Testo051: {
type: String,
alias: 'TxtIntervento',

},
__Dati_Numero024: {
type: Number,
alias: 'VImponibile_03',

},
__Dati_Numero025: {
type: Number,
alias: 'VIva_03',

},
__Dati_Numero026: {
type: Number,
alias: 'VTotale_04',

},
__Dati_Testo052: {
type: String,
alias: 'IdAbbinamento',

},
__Dati_Testo053: {
type: String,
alias: 'IdSottoTipoDocumento',

},
__Dati_Testo054: {
type: String,
alias: 'IdTipoDocumento',

},
__Dati_Numero027: {
type: Number,
alias: 'FlagStatoAttivo',

},
__Dati_Testo055: {
type: String,
alias: 'UrlEsecuzione',

},
__Dati_Testo056: {
type: String,
alias: 'FlagSelezionatoTxt',

},
__Dati_Testo057: {
type: String,
alias: 'IdZona',

},
__Dati_Testo058: {
type: String,
alias: 'TxtZona',

},
__Dati_Data006: {
type: Date,
alias: 'DataUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero028: {
type: Number,
alias: 'FlagIncassoImmediato',

},
__Dati_Testo059: {
type: String,
alias: 'IdDocOperativoDdt',

},
__Dati_Testo060: {
type: String,
alias: 'IdRegolaRipetizione',

},
__Dati_DataOra005: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra006: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero029: {
type: Number,
alias: 'Zero',

},
__Dati_Testo061: {
type: String,
alias: 'IdImpianto',

},
__Dati_Testo062: {
type: String,
alias: 'IdTipoImpianto',

},
__Dati_Testo063: {
type: String,
alias: 'IdSchedaAttivitaControllo',

},
__Dati_Testo064: {
type: String,
alias: 'IdAttivitaControllo',

},
__Dati_Numero030: {
type: Number,
alias: 'AnnoMeseEsecuzioneProgrammata',

},
__Dati_Numero031: {
type: Number,
alias: 'AnnoSettimanaEsecuzioneProgrammata',

},
__Dati_Numero032: {
type: Number,
alias: 'AnnoMeseRichiesta',

},
__Dati_Numero033: {
type: Number,
alias: 'AnnoSettimanaRichiesta',

},
__Dati_Numero034: {
type: Number,
alias: 'AnnoMeseScadenzaRichiesta',

},
__Dati_Numero035: {
type: Number,
alias: 'AnnoSettimanaScadenzaRichiesta',

},
__Dati_Numero036: {
type: Number,
alias: 'AnnoEsecuzioneReale',

},
__Dati_Numero037: {
type: Number,
alias: 'AnnoMeseEsecuzioneReale',

},
__Dati_Numero038: {
type: Number,
alias: 'AnnoSettimanaEsecuzioneReale',

},
__Dati_Numero039: {
type: Number,
alias: 'AnnoMeseInserimento',

},
__Dati_Numero040: {
type: Number,
alias: 'AnnoSettimanaInserimento',

},
__Dati_Numero041: {
type: Number,
alias: 'FlagAggiornaDatiDocOperativo',

},
__Dati_Numero042: {
type: Number,
alias: 'ConversioneValutaAPrincipale',

},
__Dati_Numero043: {
type: Number,
alias: 'ConversioneValutaSuPrincipale',

},
__Dati_Data007: {
type: Date,
alias: 'DataValoreValuta',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo065: {
type: String,
alias: 'IdValuta',

},
__Dati_Testo066: {
type: String,
alias: 'SimboloRidottoValuta',

},
__Dati_Testo067: {
type: String,
alias: 'SimboloValuta',

},
__Dati_Testo068: {
type: String,
alias: 'TxtValuta',

},
__Dati_Testo069: {
type: String,
alias: 'LinguaPrincipale',

},
__Dati_Testo070: {
type: String,
alias: 'LinguaDocumento',

},
__Dati_Testo071: {
type: String,
alias: 'IdAccountPagatore',

},
__Dati_Testo072: {
type: String,
alias: 'IdAccountIntermediario',

},
__Dati_Testo073: {
type: String,
alias: 'IdRubricaPagatore',

},
__Dati_Testo074: {
type: String,
alias: 'IdSedePagatore',

},
__Dati_Testo075: {
type: String,
alias: 'IdRubricaCompagnia',

},
__Dati_Testo076: {
type: String,
alias: 'IdSedeCompagnia',

},
__Dati_Testo077: {
type: String,
alias: 'IdRubricaIntermediario',

},
__Dati_Numero044: {
type: Number,
alias: 'FlagAggiornaImpostazioni',

},
__Dati_Numero045: {
type: Number,
alias: 'FlagAggiornaIntervento',

},
__Dati_Numero046: {
type: Number,
alias: 'FlagDocOperativoCreato',

},
__Dati_Testo078: {
type: String,
alias: 'TxtImpianto',

},
__Dati_DataOra007: {
type: Date,
alias: 'DataOraFlagInviato',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo079: {
type: String,
alias: 'TxtUtenteFlagInviato',

},
__Dati_DataOra008: {
type: Date,
alias: 'DataOraFlagStatoConfermato',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra009: {
type: Date,
alias: 'DataOraFlagStatoControllato',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo080: {
type: String,
alias: 'TxtUtenteFlagStatoConfermato',

},
__Dati_Testo081: {
type: String,
alias: 'TxtUtenteFlagStatoControllato',

},
__Dati_Testo082: {
type: String,
alias: 'IdDocOperativoOrigineDiretti_Tutti',

},
__Dati_Testo083: {
type: String,
alias: 'IdTipoDocOperativo_OrigineDati',

},
__Dati_Testo084: {
type: String,
alias: 'IdAccountIntervento',

},
__Dati_Numero047: {
type: Number,
alias: 'FlagAggiorna01_ValoriImpostazione',

},
__Dati_Numero048: {
type: Number,
alias: 'FlagAggiorna03_ValoriDaVoci',

},
__Dati_Numero049: {
type: Number,
alias: 'FlagAggiorna04_Totali',

},
__Dati_Numero050: {
type: Number,
alias: 'VDaPagare_06',

},
__Dati_Numero051: {
type: Number,
alias: 'VDaPagareValuta_06',

},
__Dati_Numero052: {
type: Number,
alias: 'VImponibileValuta_03',

},
__Dati_Numero053: {
type: Number,
alias: 'VIvaValuta_03',

},
__Dati_Numero054: {
type: Number,
alias: 'VPagato_03',

},
__Dati_Numero055: {
type: Number,
alias: 'VPagatoValuta_03',

},
__Dati_Numero056: {
type: Number,
alias: 'VTotaleValuta_04',

},
__Dati_Numero057: {
type: Number,
alias: 'FlagAggiorna06_Totali2',

},
__Dati_Numero058: {
type: Number,
alias: 'FlagPagatoTutto',

},
__Dati_Data008: {
type: Date,
alias: 'DataFinePeriodo',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo085: {
type: String,
alias: 'IdVoceOriginePrincipale',

},
__Dati_Testo086: {
type: String,
alias: 'VariazioneOriginePrincipale',

},
__Dati_Numero059: {
type: Number,
alias: 'FlagEreditaScontoOrigine',

},
__Dati_Numero060: {
type: Number,
alias: 'FlagTrasmesso',

},
__Dati_Numero061: {
type: Number,
alias: 'OrePausa',

},
__Dati_Numero062: {
type: Number,
alias: 'FlagFeedbackRichiesto',

},
__Dati_Numero063: {
type: Number,
alias: 'FlagFeedbackInviato',

},
__Dati_Testo087: {
type: String,
alias: 'IdTipoDocOperativoOrigineAutomatica',

},
__Dati_Testo088: {
type: String,
alias: 'IdDocOperativoOrigineAutomatica',

},
__Dati_Ora007: {
type: String,
alias: 'DurataEffettiva',

},
__Dati_Numero064: {
type: Number,
alias: 'TotaleVoci_QuantitaItem_03',

},
__Dati_Testo089: {
type: String,
alias: 'IdSottoFamiglieAbilitate',

},
__Dati_Testo090: {
type: String,
alias: 'IdFamiglieAbilitate',

},
__Dati_Numero065: {
type: Number,
alias: 'FlagTrasfertaConNotte',

},
__Dati_Testo091: {
type: String,
alias: 'IdIntermediario',

},
__Dati_Testo092: {
type: String,
alias: 'TxtAccountIntermediario',

},
__Dati_Numero066: {
type: Number,
alias: 'FlagChiusuraAutomatica',

},
__Dati_Testo093: {
type: String,
alias: 'IdMetodoPagamento',

},
__Dati_Testo094: {
type: String,
alias: 'TxtMetodoPagamento',

},
__Dati_Testo095: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero067: {
type: Number,
alias: 'TotaleVoci_QuantitaOre_03',

},
__Dati_Numero068: {
type: Number,
alias: 'TotaleQta_03',

},
__Dati_Testo096: {
type: String,
alias: 'IdClasseIntervento',

},
__Dati_Testo097: {
type: String,
alias: 'TxtClasseIntervento',

},
__Dati_Testo098: {
type: String,
alias: 'IdPeriodoContabile',

},
__Dati_Numero069: {
type: Number,
alias: 'FlagRispettaProgressivo',

},
__Dati_Testo099: {
type: String,
alias: 'IdTipoInterventoPerCodice',

},
__Dati_Testo100: {
type: String,
alias: 'TxtPeriodoContabile',

},
__Dati_Testo101: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InterventiSchema;