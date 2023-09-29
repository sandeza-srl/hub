import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFornitureItemsPrivate } from './FornitureItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const FornitureItemsSchema = new mongoose.Schema<IFornitureItemsPrivate>({

  _id              : {
    type   : String,
    default: uuid.v4
  },
  __Dati_Testo001  : {
    type : String,
    alias: 'IdItem'

  },
  __Dati_Testo002  : {
    type : String,
    alias: 'TxtItem'

  },
  __Dati_Numero001 : {
    type : Number,
    alias: 'Uno'

  },
  __Dati_Testo003  : {
    type : String,
    alias: 'IdAccountFornitore'

  },
  __Dati_Testo004  : {
    type : String,
    alias: 'TxtAccountFornitore'

  },
  __Dati_Testo005  : {
    type : String,
    alias: 'IdFornituraItem'

  },
  __Dati_Testo006  : {
    type : String,
    alias: 'CodiceRiferimentoFornitore'

  },
  __Dati_Numero002 : {
    type : Number,
    alias: 'VAcquistoUmItem'

  },
  __Dati_Data001   : {
    type : Date,
    alias: 'DataCostoAcquisto',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero003 : {
    type : Number,
    alias: 'VAcquistoUmItemPrecedente'

  },
  __Dati_Numero004 : {
    type : Number,
    alias: 'DifferenzaCostoPercentuale'

  },
  __Dati_Data002   : {
    type : Date,
    alias: 'DataCostoAcquistoPrecedente',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo007  : {
    type : String,
    alias: 'LettereTxtItem'

  },
  __Dati_Numero005 : {
    type : Number,
    alias: 'QtAccettata'

  },
  __Dati_Numero006 : {
    type : Number,
    alias: 'QtAMagazzino'

  },
  __Dati_Numero007 : {
    type : Number,
    alias: 'QtUtilizzata'

  },
  __Dati_Numero008 : {
    type : Number,
    alias: 'QtDaOrdinare'

  },
  __Dati_Numero009 : {
    type : Number,
    alias: 'QtFabbisogno'

  },
  __Dati_Numero010 : {
    type : Number,
    alias: 'QtInConsegna'

  },
  __Dati_Numero011 : {
    type : Number,
    alias: 'QtPrevisionale'

  },
  __Dati_Numero012 : {
    type : Number,
    alias: 'QtRientrata'

  },
  __Dati_Numero013 : {
    type : Number,
    alias: 'QtPrenotata'

  },
  __Dati_Numero014 : {
    type : Number,
    alias: 'QtDisponibile'

  },
  __Dati_Numero015 : {
    type : Number,
    alias: 'Ordine'

  },
  __Dati_Testo008  : {
    type : String,
    alias: 'IdRubricaCommerciale'

  },
  __Dati_Testo009  : {
    type : String,
    alias: 'IdRubricaTecnico'

  },
  __Dati_Testo010  : {
    type : String,
    alias: 'IdAccountProduttore'

  },
  __Dati_Testo011  : {
    type : String,
    alias: 'TxtAccountProduttore'

  },
  __Dati_Testo012  : {
    type : String,
    alias: 'NomeRubricaCommerciale'

  },
  __Dati_Testo013  : {
    type : String,
    alias: 'NomeRubricaTecnico'

  },
  __Dati_Testo014  : {
    type : String,
    alias: 'IdAccountCompagnia'

  },
  __Dati_Testo015  : {
    type : String,
    alias: 'IdFamigliaItem'

  },
  __Dati_Testo016  : {
    type : String,
    alias: 'IdSottoFamigliaItem'

  },
  __Dati_Numero016 : {
    type : Number,
    alias: 'VariazionePercentuale'

  },
  __Dati_Numero017 : {
    type : Number,
    alias: 'VariazioneDiretta'

  },
  __Dati_Numero018 : {
    type : Number,
    alias: 'VAcquistoUmItemDefinitivo'

  },
  __Dati_Numero019 : {
    type : Number,
    alias: 'ValoreFisso'

  },
  __Dati_Testo017  : {
    type : String,
    alias: 'UnitaMisuraItem'

  },
  __Dati_Testo018  : {
    type : String,
    alias: 'UnitaMisuraFornitura'

  },
  __Dati_Numero020 : {
    type : Number,
    alias: 'ConversioneUMDaItemAFornitura'

  },
  __Dati_Numero021 : {
    type : Number,
    alias: 'VAcquistoUmForListino'

  },
  __Dati_Numero022 : {
    type : Number,
    alias: 'VAcquistoUmForDefinitivo'

  },
  __Dati_Testo019  : {
    type : String,
    alias: 'CodiceItem'

  },
  __Dati_Numero023 : {
    type : Number,
    alias: 'GiorniApprovigionamento'

  },
  __Dati_Numero024 : {
    type : Number,
    alias: 'QuantitaMinimaOrdine'

  },
  __Dati_Data003   : {
    type : Date,
    alias: 'DataInizioValidita',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data004   : {
    type : Date,
    alias: 'DataFineValidita',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo020  : {
    type : String,
    alias: 'TxtFornituraItem'

  },
  __Dati_Testo021  : {
    type : String,
    alias: 'CodiceFamigliaItem'

  },
  __Dati_Testo022  : {
    type : String,
    alias: 'CodiceSottoFamigliaItem'

  },
  __Dati_Testo023  : {
    type : String,
    alias: 'TxtFamigliaItem'

  },
  __Dati_Testo024  : {
    type : String,
    alias: 'TxtSottoFamigliaItem'

  },
  __Dati_Numero025 : {
    type : Number,
    alias: 'FlagCreatoArticoliProduzione'

  },
  __Dati_Testo025  : {
    type : String,
    alias: 'Condizione'

  },
  __Dati_Testo026  : {
    type : String,
    alias: 'IdAliquota'

  },
  __Dati_DataOra001: {
    type : Date,
    alias: 'DataOraUltimaModifica',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero026 : {
    type : Number,
    alias: 'FlagProduzione'

  },
  __Dati_Numero027 : {
    type : Number,
    alias: 'FlagAcquisto'

  },
  __Dati_Numero028 : {
    type : Number,
    alias: 'ConversioneUMDaFornituraAItem'

  },
  __Dati_Testo027  : {
    type : String,
    alias: 'CodiceTxtItemAutomatico'

  },
  __Dati_Testo028  : {
    type : String,
    alias: 'Note'

  },
  __Dati_Numero029 : {
    type : Number,
    alias: 'FlagCreatoDistinta'

  },
  __Dati_Testo029  : {
    type : String,
    alias: 'DescrizioneCommerciale'

  },
  __Dati_Numero030 : {
    type : Number,
    alias: 'FlagNonAttivo'

  },
  __Dati_Numero031 : {
    type : Number,
    alias: 'GiorniTrasporto'

  },
  __Dati_Numero032 : {
    type : Number,
    alias: 'GiorniProduzione'

  },
  __Dati_Numero033 : {
    type : Number,
    alias: 'VAcquistoUmForDefinitivoValuta'

  },
  __Dati_Testo030  : {
    type : String,
    alias: 'VAcquistoUmItemValuta'

  },
  __Dati_Numero034 : {
    type : Number,
    alias: 'Zero'

  },
  __Dati_Testo031  : {
    type : String,
    alias: 'IdCiclo'

  },
  __Dati_Testo032  : {
    type : String,
    alias: 'IdScaglione'

  },
  __Dati_Testo033  : {
    type : String,
    alias: 'TxtCiclo'

  },
  __Dati_Testo034  : {
    type : String,
    alias: 'IdSedeFornitore'

  },
  __Dati_DataOra002: {
    type : Date,
    alias: 'DataOraCreazione',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo035  : {
    type : String,
    alias: 'TxtScaglione'

  },
  __Dati_Numero035 : {
    type : Number,
    alias: 'FlagValoreInValuta'

  },
  __Dati_Testo036  : {
    type : String,
    alias: 'IdValuta'

  },
  __Dati_Data005   : {
    type : Date,
    alias: 'DataValoreValuta',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero036 : {
    type : Number,
    alias: 'ConversioneValutaAPrincipale'

  },
  __Dati_Numero037 : {
    type : Number,
    alias: 'ConversioneValutaSuPrincipale'

  },
  __Dati_Numero038 : {
    type : Number,
    alias: 'VAcquistoUmForListinoValuta'

  },
  __Dati_Testo037  : {
    type : String,
    alias: 'IdInstallazione'

  },
  __Dati_Numero039 : {
    type : Number,
    alias: 'FlagAggiornaVariazioni'

  },
  __Dati_Numero040 : {
    type : Number,
    alias: 'FlagAggiornaContenutiDaItems'

  },
  __Dati_Numero041 : {
    type : Number,
    alias: 'MultipliVincolantiQuantitaFornitura'

  },
  __Dati_Numero042 : {
    type : Number,
    alias: 'MultipliVincolantiQuantitaItem'

  },
  __Dati_Testo038  : {
    type : String,
    alias: 'TxtFornituraItemDataAutomatico'

  },
  __Dati_Testo039  : {
    type : String,
    alias: 'TxtUtenteCreazione'

  },
  __Dati_Testo040  : {
    type : String,
    alias: 'SimboloValuta'

  }
}, {
  timestamps: true
});

/**
 * Indexing
 */
FornitureItemsSchema.index({
  __Dati_Testo001: 1,
  __Dati_Testo006: 1
});

/* --------
* Module Exports
* -------- */
export default FornitureItemsSchema;
