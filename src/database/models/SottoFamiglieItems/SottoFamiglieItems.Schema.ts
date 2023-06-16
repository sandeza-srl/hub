import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISottoFamiglieItemsPrivate } from './SottoFamiglieItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const SottoFamiglieItemsSchema = new mongoose.Schema<ISottoFamiglieItemsPrivate>({

  _id              : {
    type   : String,
    default: uuid.v4
  },
  __Dati_Testo001  : {
    type : String,
    alias: 'IdFamigliaItem'

  },
  __Dati_Numero001 : {
    type : Number,
    alias: 'Uno'

  },
  __Dati_Testo002  : {
    type : String,
    alias: 'TxtSottoFamigliaItem'

  },
  __Dati_Testo003  : {
    type : String,
    alias: 'IdSottoFamigliaItem'

  },
  __Dati_Numero002 : {
    type : Number,
    alias: 'FlagTipoBene'

  },
  __Dati_Numero003 : {
    type : Number,
    alias: 'FlagMagazzino'

  },
  __Dati_Numero004 : {
    type : Number,
    alias: 'FlagVendita'

  },
  __Dati_Numero005 : {
    type : Number,
    alias: 'FlagTipoAzione'

  },
  __Dati_Numero006 : {
    type : Number,
    alias: 'FlagTipoContratto'

  },
  __Dati_Numero007 : {
    type : Number,
    alias: 'FlagProduzione'

  },
  __Dati_Numero008 : {
    type : Number,
    alias: 'FlagAcquisto'

  },
  __Dati_Numero009 : {
    type : Number,
    alias: 'FlagTipoLavorazione'

  },
  __Dati_Numero010 : {
    type : Number,
    alias: 'FlagTipoOraLavoro'

  },
  __Dati_Numero011 : {
    type : Number,
    alias: 'FlagRegistraLotto'

  },
  __Dati_Numero012 : {
    type : Number,
    alias: 'FlagRegistraScadenza'

  },
  __Dati_Numero013 : {
    type : Number,
    alias: 'FlagRegistraNumeroSerie'

  },
  __Dati_Numero014 : {
    type : Number,
    alias: 'FlagMagaCespite'

  },
  __Dati_Testo004  : {
    type : String,
    alias: 'IdAccountCompagnia'

  },
  __Dati_Testo005  : {
    type : String,
    alias: 'CodiceSottoFamigliaItem'

  },
  __Dati_Testo006  : {
    type : String,
    alias: 'CodiceFamigliaItem'

  },
  __Dati_Testo007  : {
    type : String,
    alias: 'TxtFamigliaItem'

  },
  __Dati_Numero015 : {
    type : Number,
    alias: 'FlagMagaMateriaPrima'

  },
  __Dati_Numero016 : {
    type : Number,
    alias: 'FlagMagaProdottoFinito'

  },
  __Dati_Numero017 : {
    type : Number,
    alias: 'FlagMagaSemilavorato'

  },
  __Dati_Numero018 : {
    type : Number,
    alias: 'FlagMagaValorizzaCosto'

  },
  __Dati_Numero019 : {
    type : Number,
    alias: 'FlagMagaValorizzaPrezzo'

  },
  __Dati_Numero020 : {
    type : Number,
    alias: 'FlagGeneraPacchi'

  },
  __Dati_DataOra001: {
    type : Date,
    alias: 'DataOraCreazione',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type : Date,
    alias: 'DataOraUltimaModifica',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero021 : {
    type : Number,
    alias: 'Zero'

  },
  __Dati_Numero022 : {
    type : Number,
    alias: 'FlagWeb'

  },
  __Dati_Numero023 : {
    type : Number,
    alias: 'FlagGestisciPosizioneMagazzino'

  },
  __Dati_Numero024 : {
    type : Number,
    alias: 'FlagRegistraTaglia'

  },
  __Dati_Numero025 : {
    type : Number,
    alias: 'FlagRegistraColore'

  },
  __Dati_Numero026 : {
    type : Number,
    alias: 'FlagRegistraInfoExtra'

  },
  __Dati_Testo008  : {
    type : String,
    alias: 'UnitaDiMisura'

  },
  __Dati_Testo009  : {
    type : String,
    alias: 'IdSottoFamigliaItemOrigine'

  },
  __Dati_Testo010  : {
    type : String,
    alias: 'IdFamigliaItemOrigine'

  },
  __Dati_Numero027 : {
    type : Number,
    alias: 'NumeroDecimaliQuantita'

  },
  __Dati_Numero028 : {
    type : Number,
    alias: 'NumeroDecimaliValori'

  },
  __Dati_Testo011  : {
    type : String,
    alias: 'GeneraCodiceTracciabilitaAutomatico_AltraSottoFamigliaPerCodice'

  },
  __Dati_Testo012  : {
    type : String,
    alias: 'GeneraCodiceTracciabilitaAutomatico_CodiceTest'

  },
  __Dati_Numero029 : {
    type : Number,
    alias: 'GeneraCodiceTracciabilitaAutomatico_FlagUsaCodiceAltro'

  },
  __Dati_Numero030 : {
    type : Number,
    alias: 'GeneraCodiceTracciabilitaAutomatico_NumeroCifre'

  },
  __Dati_Numero031 : {
    type : Number,
    alias: 'GeneraCodiceTracciabilitaAutomatico_OrdineProgressivo'

  },
  __Dati_Numero032 : {
    type : Number,
    alias: 'GeneraCodiceTracciabilitaAutomatico_OrdineTesto'

  },
  __Dati_Numero033 : {
    type : Number,
    alias: 'GeneraCodiceTracciabilitaAutomatico_Progressivo'

  },
  __Dati_Testo013  : {
    type : String,
    alias: 'GeneraCodiceTracciabilitaAutomatico_Testo'

  },
  __Dati_Numero034 : {
    type : Number,
    alias: 'FlagScaricoProduzione_DeduzioneAutomatica'

  },
  __Dati_Numero035 : {
    type : Number,
    alias: 'FlagScaricoProduzione_QtProposta'

  },
  __Dati_Numero036 : {
    type : Number,
    alias: 'GeneraCodiceTracciabilitaAutomatico_OrdineAnno'

  },
  __Dati_Numero037 : {
    type : Number,
    alias: 'GeneraCodiceTracciabilitaAutomatico_Anno'

  },
  __Dati_Testo014  : {
    type : String,
    alias: 'GeneraCodiceTracciabilitaAutomatico_StringaControlloCodice'

  },
  __Dati_Testo015  : {
    type : String,
    alias: 'IdInstallazione'

  },
  __Dati_Numero038 : {
    type : Number,
    alias: 'GeneraCodiceSeriale_FlagUsaSerialeLotto'

  },
  __Dati_Testo016  : {
    type : String,
    alias: 'GeneraCodiceItem_CodiceEsempio'

  },
  __Dati_Testo017  : {
    type : String,
    alias: 'GeneraCodiceItem_Espressione'

  },
  __Dati_Testo018  : {
    type : String,
    alias: 'GeneraCodiceTracciabilitaAutomatico_HelpIdFamigliaItemPerCodice'

  },
  __Dati_Numero039 : {
    type : Number,
    alias: 'GeneraCodiceItem_FlagTipoCodice_AltraSottofamiglia'

  },
  __Dati_Numero040 : {
    type : Number,
    alias: 'GeneraCodiceItem_FlagTipoCodice_Standard'

  },
  __Dati_Testo019  : {
    type : String,
    alias: 'GeneraCodiceTracciabilitaAutomatico_CodiceEsempio'

  },
  __Dati_Testo020  : {
    type : String,
    alias: 'GeneraCodiceTracciabilitaAutomatico_Espressione'

  },
  __Dati_Testo021  : {
    type : String,
    alias: 'GeneraCodiceItem_AltroIdSottoFamigliaItemPerCodice'

  },
  __Dati_Numero041 : {
    type : Number,
    alias: 'GeneraCodiceItem_FlagCodiceValidato'

  },
  __Dati_Numero042 : {
    type : Number,
    alias: 'GeneraCodiceItem_FlagTipoCodice_Proprio'

  },
  __Dati_Numero043 : {
    type : Number,
    alias: 'GeneraCodiceItem_FlagModificaCodicePermessa'

  },
  __Dati_Numero044 : {
    type : Number,
    alias: 'GeneraCodiceItem_FlagProgressivoAnnuale'

  },
  __Dati_Numero045 : {
    type : Number,
    alias: 'GeneraCodiceItem_FlagProgressivoContinuo'

  },
  __Dati_Numero046 : {
    type : Number,
    alias: 'GeneraCodiceItem_FlagProgressivoMensile'

  },
  __Dati_Numero047 : {
    type : Number,
    alias: 'FlagControlloImpostazioni_TipiRicaviSpese'

  },
  __Dati_Numero048 : {
    type : Number,
    alias: 'FlagControlloImpostazioni_Aggiorna'

  },
  __Dati_Numero049 : {
    type : Number,
    alias: 'FlagControlloImpostazioni_TipiInformazioniItems'

  },
  __Dati_Numero050 : {
    type : Number,
    alias: 'FlagControlloImpostazioni_DatiGenerali'

  },
  __Dati_Numero051 : {
    type : Number,
    alias: 'FlagControlloImpostazioni_Valorizzazione'

  },
  __Dati_Numero052 : {
    type : Number,
    alias: 'FlagTracciabilitaNecessaria'

  },
  __Dati_Testo022  : {
    type : String,
    alias: 'GeneraCodiceItem_TxtTipoCodice'

  },
  __Dati_Testo023  : {
    type : String,
    alias: 'ClassePosizioneMagazzino'

  },
  __Dati_Numero053 : {
    type : Number,
    alias: 'FlagEliminaCodificheClienteConRevPermessa'

  },
  __Dati_Testo024  : {
    type : String,
    alias: 'JSON_ImpostazioniSottofamiglia'

  },
  __Dati_Numero054 : {
    type : Number,
    alias: 'Cruscotto_FlagEscludi'

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SottoFamiglieItemsSchema;
