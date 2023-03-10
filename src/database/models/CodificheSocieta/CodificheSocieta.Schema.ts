import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ICodificheSocietaPrivate } from './CodificheSocieta.Types.Private';


/* --------
* Schema Definition
* -------- */
const CodificheSocietaSchema = new mongoose.Schema<ICodificheSocietaPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'FatTesto'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FatCifreProgressivo'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FatFlagAnno'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FatFlagMese'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'FatFlagAnnoVedi'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'FatFlagMeseVedi'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FatCodiceTest'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FatRitenuta'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccount'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdCodifica'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'OffCifreProgressivo'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'OffCodiceTest'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'OffFlagAnno'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'OffFlagAnnoVedi'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'OffFlagMese'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'OffFlagMeseVedi'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'OffTesto'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'PjCodiceTest'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'PjFlagAnno'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'PjFlagAnnoVedi'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'PjFlagMese'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'PjFlagMeseVedi'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'PjTesto'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'OrfCodiceTest'
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'OrfFlagAnno'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'OrfFlagAnnoVedi'
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'OrfFlagMese'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'OrfFlagMeseVedi'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'OrfTesto'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'FatTerminiPagamento'
  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FatIdFirma'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'FatIdAccountIntestazione'
  },
  __Dati_Numero018: {
    type: Number,
    alias: 'PjCifreProgressivo'
  },
  __Dati_Numero019: {
    type: Number,
    alias: 'OrfCifreProgressivo'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'PjTipoPagamento'
  },
  __Dati_Numero020: {
    type: Number,
    alias: 'PjGiorniPagamento'
  },
  __Dati_Numero021: {
    type: Number,
    alias: 'PagFlagConfermato'
  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ImgBloccato'
  },
  __Dati_Contenitore002: {
    type: String,
    alias: 'ImgSbloccato'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'PasswordBlocco'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'PasswordBloccoVisualizza'
  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FatFlagPdfAuto'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'FatFlagPdfAutoVedi'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'PagFlagConfermatoVedi'
  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FatFlagMailAuto'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'FatFlagMailAutoVedi'
  },
  __Dati_Numero024: {
    type: Number,
    alias: 'DdtCifreProgressivo'
  },
  __Dati_Numero025: {
    type: Number,
    alias: 'DdtCodiceTest'
  },
  __Dati_Numero026: {
    type: Number,
    alias: 'DdtFlagAnno'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'DdtFlagAnnoVedi'
  },
  __Dati_Numero027: {
    type: Number,
    alias: 'DdtFlagMese'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'DdtFlagMeseVedi'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'DdtIdAccountIntestazione'
  },
  __Dati_Testo026: {
    type: String,
    alias: 'DdtPorto'
  },
  __Dati_Numero028: {
    type: Number,
    alias: 'DdtDaMagazzino'
  },
  __Dati_Testo027: {
    type: String,
    alias: 'DdtDaMagazzinoVedi'
  },
  __Dati_Testo028: {
    type: String,
    alias: 'DdtIdTipoPagamento'
  },
  __Dati_Testo029: {
    type: String,
    alias: 'DdtTesto'
  },
  __Dati_Testo030: {
    type: String,
    alias: 'DdtIdTipoFatturazione'
  },
  __Dati_Testo031: {
    type: String,
    alias: 'DdtNote'
  },
  __Dati_Numero029: {
    type: Number,
    alias: 'PagIdAliquota'
  },
  __Dati_Testo032: {
    type: String,
    alias: 'PagTxtAliquota'
  },
  __Dati_Numero030: {
    type: Number,
    alias: 'FatFlagRecCrediti'
  },
  __Dati_Testo033: {
    type: String,
    alias: 'FatFlagRecCreditiVedi'
  },
  __Dati_Numero031: {
    type: Number,
    alias: 'FatFlagRitenuta'
  },
  __Dati_Testo034: {
    type: String,
    alias: 'FatFlagRitenutaVedi'
  },
  __Dati_Testo035: {
    type: String,
    alias: 'FatTitoloRitenuta'
  },
  __Dati_Testo036: {
    type: String,
    alias: 'FatTitoloRecuperoCrediti'
  },
  __Dati_Numero032: {
    type: Number,
    alias: 'FatPercRitenuta'
  },
  __Dati_Numero033: {
    type: Number,
    alias: 'FatValorePrimoRecuperoCrediti'
  },
  __Dati_Numero034: {
    type: Number,
    alias: 'FatIdAliquotaRecuperoCrediti'
  },
  __Dati_Numero035: {
    type: Number,
    alias: 'FatValoreSecondoRecuperoCrediti'
  },
  __Dati_Numero036: {
    type: Number,
    alias: 'FatGgPrimoRecuperoCrediti'
  },
  __Dati_Numero037: {
    type: Number,
    alias: 'FatGgSecondoRecuperoCrediti'
  },
  __Dati_Numero038: {
    type: Number,
    alias: 'DdtFlagEtichettaStock'
  },
  __Dati_Testo037: {
    type: String,
    alias: 'DdtFlagEtichettaStockVedi'
  },
  __Dati_Numero039: {
    type: Number,
    alias: 'DdtFlagEtichettaSped'
  },
  __Dati_Testo038: {
    type: String,
    alias: 'DdtFlagEtichettaSpedVedi'
  },
  __Dati_Numero040: {
    type: Number,
    alias: 'RiPCifreProgressivo'
  },
  __Dati_Numero041: {
    type: Number,
    alias: 'RiPCodiceTest'
  },
  __Dati_Numero042: {
    type: Number,
    alias: 'RiPFlagAnno'
  },
  __Dati_Testo039: {
    type: String,
    alias: 'RiPFlagAnnoVedi'
  },
  __Dati_Numero043: {
    type: Number,
    alias: 'RiPFlagMese'
  },
  __Dati_Testo040: {
    type: String,
    alias: 'RiPFlagMeseVedi'
  },
  __Dati_Testo041: {
    type: String,
    alias: 'RiPTesto'
  },
  __Dati_Testo042: {
    type: String,
    alias: 'CodiceSIAperRiba'
  },
  __Dati_Numero044: {
    type: Number,
    alias: 'FlagContabilizzabile'
  },
  __Dati_Numero045: {
    type: Number,
    alias: 'ValoreMinimoAlertScaduto'
  },
  __Dati_Testo043: {
    type: String,
    alias: 'ConservazioneSostitutivaUser'
  },
  __Dati_Testo044: {
    type: String,
    alias: 'ConservazioneSostitutivaPassword'
  },
  __Dati_Testo045: {
    type: String,
    alias: 'ConservazioneSostitutivaWeb'
  },
  __Dati_Numero046: {
    type: Number,
    alias: 'FlagFattElettAutomatica'
  },
  __Dati_Numero047: {
    type: Number,
    alias: 'FlagFattElettPEC'
  },
  __Dati_Numero048: {
    type: Number,
    alias: 'FlagFatEl'
  },
  __Dati_Numero049: {
    type: Number,
    alias: 'FlagEsportaItem'
  },
  __Dati_Numero050: {
    type: Number,
    alias: 'FlagImportaItem'
  },
  __Dati_Numero051: {
    type: Number,
    alias: 'FlagPartenzaMappadaIntervento'
  },
  __Dati_Numero052: {
    type: Number,
    alias: 'FlagArrivoMappadaIntervento'
  },
  __Dati_Numero053: {
    type: Number,
    alias: 'FlagGestioneRipartitori'
  },
  __Dati_Numero054: {
    type: Number,
    alias: 'FlagGestioneFiltri'
  },
  __Dati_Testo046: {
    type: String,
    alias: 'NomeFileFatturaElettronica'
  },
  __Dati_Testo047: {
    type: String,
    alias: 'NomeFileConnettoreContabilita'
  },
  __Dati_Numero055: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo048: {
    type: String,
    alias: 'IdInstallazione'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CodificheSocietaSchema;