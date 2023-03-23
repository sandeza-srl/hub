import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociInterventiPrivate } from './VociInterventi.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociInterventiSchema = new mongoose.Schema<IVociInterventiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdVoceDocOperativo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtItem',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'OrdineVoce',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'NoteInterne',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'PercentualeIva',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'QuantitaItem',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'QuantitaDefinitivoItem',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'QuantitaVariazioneItem',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'VIvaValuta',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'VUnitarioItemValuta',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'VTotaleValuta',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'VImponibileValuta',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataEsecuzioneReale',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo005: {
    type: String,
    alias: 'UnitaMisuraItem',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'SimboloValuta',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAliquota',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtAliquota',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'VTotale',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'VImponibile',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VIva',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'ConversioneValutaAPrincipale',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'LinguaPrincipale',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'VPercVariazioneUnitario',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'VPercVariazioniTotale',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'VUnitarioDefinitivoItemValuta',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'VUnitarioDefinitivoItem',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'VUnitarioItem',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagIn',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdProgetto',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdFaseProgetto',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdTipoListino',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagVoceLibera',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'CodiceItem',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdFamigliaItem',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdSottoFamigliaItem',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtFamigliaItem',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'TxtSottoFamigliaItem',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'VImportoPreVariazioni',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'VVariazioniTotale',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdIntervento',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtAccountOperatore',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'CodiceSottoFamigliaItem',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'CodiceFamigliaItem',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdVoceDocOperativoOrigineDiretti',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdDocOperativoOrigineDiretti',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdOfferta',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdTipoDocOperativo',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdTipoDocOperativoOrigine',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'TxtTipoListinoItem',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagTipoOraLavoro',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdRigaOrdineProduzione',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagControllato',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdDocOperativoOrigineTutti',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero026: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagAggiornaValori01_Impostazione',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagAggiornaValori05_Descrittivi',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'ConversioneValutaSuPrincipale',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'FlagAggiornaValori03_Quantita',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdAccountDestinatario',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'TxtAccountPagatore',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'TxtAccountDestinatario',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'LinguaDocumento',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'LinguaDocumento_DescrizioneAliquota',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'LinguaDocumento_DescrizioneItem',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'LinguaDocumento_NoteItem',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'LinguaPrincipale_DescrizioneAliquota',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'LinguaPrincipale_DescrizioneItem',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'LinguaPrincipale_NoteItem',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'IdValuta',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'SimboloValutaRidotto',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'VImportoPreVariazioniValuta',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'LinguaDocumento_DescrizioneFamiglia',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'LinguaDocumento_DescrizioneSottoFamiglia',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'LinguaPrincipale_DescrizioneFamiglia',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'LinguaPrincipale_DescrizioneSottoFamiglia',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'IdImpianto',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataEsecuzioneProgrammata',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataRichiesta',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo054: {
    type: String,
    alias: 'IdAccountPagatore',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'IdAccountIntermediario',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'IdVoceIntervento',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'IdVoceDocOperativoOrigineTutti',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'TxtAccountIntermediario',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'FlagAggiornaValori02_Riferimenti',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'FlagAggiornaValori04_ValoriEconomici',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'FlagAggiornaValori05_IdRiferimento',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'AnnoSettimanaProgrammata',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'AnnoSettimanaRichiesta',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'AnnoSettimanaEsecuzioneReale',

  },
  __Dati_Testo060: {
    type: String,
    alias: 'IdItemFaseProduzione',

  },
  __Dati_Testo061: {
    type: String,
    alias: 'TxtSettimanaAnnoEsecuzioneProgrammata',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'AnnoMeseEsecuzioneReale',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'AnnoMeseEsecuzioneProgrammata',

  },
  __Dati_Testo062: {
    type: String,
    alias: 'TxtSettimanaAnnoEsecuzioneReale',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'FlagItem',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'FlagVariazioneManuale',

  },
  __Dati_Testo063: {
    type: String,
    alias: 'IdSedeDestinatario',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'QuantitaDefinitivoItemPerVociDestinazione',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'QuantitaDefinitivoItemPerMovimenti',

  },
  __Dati_Testo064: {
    type: String,
    alias: 'CodiceEsterno',

  },
  __Dati_Testo065: {
    type: String,
    alias: 'TxtAutomaticoDocOperativo',

  },
  __Dati_Testo066: {
    type: String,
    alias: 'IdIntermediario',

  },
  __Dati_Testo067: {
    type: String,
    alias: 'Tracciabilita_CodiceLotto',

  },
  __Dati_Testo068: {
    type: String,
    alias: 'Tracciabilita_Colore',

  },
  __Dati_Data004: {
    type: Date,
    alias: 'Tracciabilita_DataScadenza',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo069: {
    type: String,
    alias: 'Tracciabilita_InfoExtra',

  },
  __Dati_Testo070: {
    type: String,
    alias: 'Tracciabilita_NumeroSerie',

  },
  __Dati_Testo071: {
    type: String,
    alias: 'Tracciabilita_Taglia',

  },
  __Dati_Testo072: {
    type: String,
    alias: 'IdTipoIntervento',

  },
  __Dati_Testo073: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociInterventiSchema;