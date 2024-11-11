import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IItemsPrivate } from './Items.Types.Private';


/* --------
* Schema Definition
* -------- */
const ItemsSchema = new mongoose.Schema<IItemsPrivate>({

  _id                  : {
    type   : String,
    default: uuid.v4
  },
  __Dati_Numero001     : {
    type : Number,
    alias: 'Uno'

  },
  __Dati_Testo001      : {
    type : String,
    alias: 'IdItem'

  },
  __Dati_Testo002      : {
    type : String,
    alias: 'TxtItem'

  },
  __Dati_Testo003      : {
    type : String,
    alias: 'TxtItemEsteso'

  },
  __Dati_Testo004      : {
    type : String,
    alias: 'TxtFamigliaItem'

  },
  __Dati_Testo005      : {
    type : String,
    alias: 'IdSottoFamigliaItem'

  },
  __Dati_Contenitore001: {
    type : String,
    alias: 'ImgItem'

  },
  __Dati_Numero002     : {
    type : Number,
    alias: 'ScortaMinima'

  },
  __Dati_Numero003     : {
    type : Number,
    alias: 'QtGiacenza_Maga'

  },
  __Dati_Numero004     : {
    type : Number,
    alias: 'QtEntrata_Maga'

  },
  __Dati_Numero005     : {
    type : Number,
    alias: 'QtUscita_Maga'

  },
  __Dati_Numero006     : {
    type : Number,
    alias: 'QtFabbisognoTotale_DOp'

  },
  __Dati_Numero007     : {
    type : Number,
    alias: 'QtInArrivo_DOp'

  },
  __Dati_Numero008     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp'

  },
  __Dati_Numero009     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp'

  },
  __Dati_Testo006      : {
    type : String,
    alias: 'ClassePosizioneMagazzino'

  },
  __Dati_Testo007      : {
    type : String,
    alias: 'UnitaMisura'

  },
  __Dati_Numero010     : {
    type : Number,
    alias: 'ProgCodiceItem'

  },
  __Dati_Numero011     : {
    type : Number,
    alias: 'QtRichiestoApprovigionamento_DOp'

  },
  __Dati_Testo008      : {
    type : String,
    alias: 'IdFamigliaItem'

  },
  __Dati_Testo009      : {
    type : String,
    alias: 'TxtTipoProdotto'

  },
  __Dati_Numero012     : {
    type : Number,
    alias: 'FlagDistintaBase'

  },
  __Dati_Testo010      : {
    type : String,
    alias: 'LetteraIniziale'

  },
  __Dati_Numero013     : {
    type : Number,
    alias: 'AnnoSettimana10'

  },
  __Dati_Numero014     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett10'

  },
  __Dati_Testo011      : {
    type : String,
    alias: 'IdDocumentoImgItem'

  },
  __Dati_Testo012      : {
    type : String,
    alias: 'LettereTxtItem'

  },
  __Dati_Numero015     : {
    type : Number,
    alias: 'QtGiacenzaNonDisponibile_Maga'

  },
  __Dati_Numero016     : {
    type : Number,
    alias: 'QtPrenotata_DOp'

  },
  __Dati_Numero017     : {
    type : Number,
    alias: 'QtGiacenzaDisponibile_DOp'

  },
  __Dati_Numero018     : {
    type : Number,
    alias: 'FlagListinoIvato'

  },
  __Dati_Numero019     : {
    type : Number,
    alias: 'FlagVendita'

  },
  __Dati_Testo013      : {
    type : String,
    alias: 'GeneraCodiceSeriale_CodiceComposto'

  },
  __Dati_Numero020     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett09'

  },
  __Dati_Testo014      : {
    type : String,
    alias: 'Master_IdItemMaster'

  },
  __Dati_Numero021     : {
    type : Number,
    alias: 'FlagMagazzino'

  },
  __Dati_Numero022     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett12'

  },
  __Dati_Numero023     : {
    type : Number,
    alias: 'FlagTipoBene'

  },
  __Dati_Numero024     : {
    type : Number,
    alias: 'FlagTipoAzione'

  },
  __Dati_Testo015      : {
    type : String,
    alias: 'TxtSottoFamigliaItem'

  },
  __Dati_Testo016      : {
    type : String,
    alias: 'IdAccountOperatoreRespCommerciale'

  },
  __Dati_Testo017      : {
    type : String,
    alias: 'IdAccountOperatoreRespTecnico'

  },
  __Dati_Testo018      : {
    type : String,
    alias: 'IdRubricaOperatoreRespCommerciale'

  },
  __Dati_Testo019      : {
    type : String,
    alias: 'IdRubricaOperatoreRespTecnico'

  },
  __Dati_Testo020      : {
    type : String,
    alias: 'NomeRubricaOperatoreRespCommerciale'

  },
  __Dati_Testo021      : {
    type : String,
    alias: 'NomeRubricaOperatoreRespTecnico'

  },
  __Dati_Testo022      : {
    type : String,
    alias: 'Note'

  },
  __Dati_Testo023      : {
    type : String,
    alias: 'IdAccountCompagnia'

  },
  __Dati_Testo024      : {
    type : String,
    alias: 'TxtAccountCompagnia'

  },
  __Dati_Numero025     : {
    type : Number,
    alias: 'FornituraStandard_VAcquistoUnitario'

  },
  __Dati_Numero026     : {
    type : Number,
    alias: 'Appuntamenti_NumeroMaxPartecipanti'

  },
  __Dati_Numero027     : {
    type : Number,
    alias: 'Appuntamenti_NumeroMinPartecipanti'

  },
  __Dati_Ora001        : {
    type : String,
    alias: 'Appuntamenti_TempoOperazione'

  },
  __Dati_Testo025      : {
    type : String,
    alias: 'GeneraCodiceSeriale_Testo'

  },
  __Dati_Numero028     : {
    type : Number,
    alias: 'Appuntamenti_NumeroOperatori'

  },
  __Dati_Numero029     : {
    type : Number,
    alias: 'Appuntamenti_MinutiDiOraPossibili'

  },
  __Dati_Numero030     : {
    type : Number,
    alias: 'FlagTipoContratto'

  },
  __Dati_Numero031     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_ProgressivoSeriale'

  },
  __Dati_Numero032     : {
    type : Number,
    alias: 'DurataSottoscrizioneMesi'

  },
  __Dati_Numero033     : {
    type : Number,
    alias: 'FlagProduttoreVincolato'

  },
  __Dati_Testo026      : {
    type : String,
    alias: 'IdAccountProduttoreVincolato'

  },
  __Dati_Testo027      : {
    type : String,
    alias: 'InformazioniAggiuntive_Lista'

  },
  __Dati_Numero034     : {
    type : Number,
    alias: 'AnnoSettimana09'

  },
  __Dati_Testo028      : {
    type : String,
    alias: 'IdFamigliaItemOrigine'

  },
  __Dati_Numero035     : {
    type : Number,
    alias: 'FlagRegistraTaglia'

  },
  __Dati_Testo029      : {
    type : String,
    alias: 'IdItemOrigine'

  },
  __Dati_Numero036     : {
    type : Number,
    alias: 'FlagRegistraInfoExtra'

  },
  __Dati_Numero037     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_OrdineNumero'

  },
  __Dati_Testo030      : {
    type : String,
    alias: 'FormatoStampa'

  },
  __Dati_Numero038     : {
    type : Number,
    alias: 'DurataGaranziaMesi'

  },
  __Dati_Testo031      : {
    type : String,
    alias: 'IdAliquotaIN'

  },
  __Dati_Testo032      : {
    type : String,
    alias: 'TxtAliquota'

  },
  __Dati_Testo033      : {
    type : String,
    alias: 'IdSottoFamigliaItemOrigine'

  },
  __Dati_Numero039     : {
    type : Number,
    alias: 'FlagRegistraColore'

  },
  __Dati_Numero040     : {
    type : Number,
    alias: 'FlagAcquisto'

  },
  __Dati_Numero041     : {
    type : Number,
    alias: 'InformazioniAggiuntive_FlagRicalcolaLista'

  },
  __Dati_Numero042     : {
    type : Number,
    alias: 'FlagTipoLavorazione'

  },
  __Dati_Numero043     : {
    type : Number,
    alias: 'FlagRegistraNumeroSerie'

  },
  __Dati_Numero044     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett12'

  },
  __Dati_Numero045     : {
    type : Number,
    alias: 'FlagTipoOraLavoro'

  },
  __Dati_Testo034      : {
    type : String,
    alias: 'CodiceCommercialeItem'

  },
  __Dati_Numero046     : {
    type : Number,
    alias: 'FlagNonAttivo'

  },
  __Dati_Numero047     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett10'

  },
  __Dati_Numero048     : {
    type : Number,
    alias: 'QtMovimentiControllo'

  },
  __Dati_Numero049     : {
    type : Number,
    alias: 'QtGiacenza_DOp'

  },
  __Dati_Numero050     : {
    type : Number,
    alias: 'QtIngressoDaUltimoInv_DOp'

  },
  __Dati_Data001       : {
    type : Date,
    alias: 'DataUltimoInventario',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero051     : {
    type : Number,
    alias: 'QtUltimoInventario'

  },
  __Dati_Testo035      : {
    type : String,
    alias: 'CodiceItem'

  },
  __Dati_Numero052     : {
    type : Number,
    alias: 'VVenditaUnitarioStandardIvato'

  },
  __Dati_Testo036      : {
    type : String,
    alias: 'IdAliquotaINOrigine'

  },
  __Dati_Numero053     : {
    type : Number,
    alias: 'PercentualeAliquota'

  },
  __Dati_Numero054     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_Maga'

  },
  __Dati_Numero055     : {
    type : Number,
    alias: 'QtOrdinata_DOp'

  },
  __Dati_Numero056     : {
    type : Number,
    alias: 'QtEntrata_DOp'

  },
  __Dati_Numero057     : {
    type : Number,
    alias: 'QtUscita_DOp'

  },
  __Dati_Numero058     : {
    type : Number,
    alias: 'QtUscitaDaUltimoInv_DOp'

  },
  __Dati_Numero059     : {
    type : Number,
    alias: 'QtGiacenzaUltimoInv_DOp'

  },
  __Dati_Testo037      : {
    type : String,
    alias: 'IdArticolo'

  },
  __Dati_Numero060     : {
    type : Number,
    alias: 'FlagLinkArticoloProduzione'

  },
  __Dati_Testo038      : {
    type : String,
    alias: 'IdTipoUtensile'

  },
  __Dati_Testo039      : {
    type : String,
    alias: 'IdRisorsa'

  },
  __Dati_Testo040      : {
    type : String,
    alias: 'IdTipoFase'

  },
  __Dati_Numero061     : {
    type : Number,
    alias: 'FlagLinkTipoUtensile'

  },
  __Dati_Numero062     : {
    type : Number,
    alias: 'FlagLinkFaseStandard'

  },
  __Dati_Testo041      : {
    type : String,
    alias: 'IdTipoStrumento'

  },
  __Dati_Testo042      : {
    type : String,
    alias: 'CodiceSottoFamigliaItem'

  },
  __Dati_Testo043      : {
    type : String,
    alias: 'CodiceFamigliaItem'

  },
  __Dati_Testo044      : {
    type : String,
    alias: 'CodiceAmministrativo'

  },
  __Dati_Numero063     : {
    type : Number,
    alias: 'QtPrenotata_Maga'

  },
  __Dati_Testo045      : {
    type : String,
    alias: 'FornituraStandard_TxtFornitura'

  },
  __Dati_Numero064     : {
    type : Number,
    alias: 'VVenditaUnitarioStandard'

  },
  __Dati_Numero065     : {
    type : Number,
    alias: 'FlagRegistraLotto'

  },
  __Dati_Numero066     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett11'

  },
  __Dati_Numero067     : {
    type : Number,
    alias: 'FlagRegistraScadenza'

  },
  __Dati_Numero068     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett09'

  },
  __Dati_Numero069     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett09'

  },
  __Dati_Numero070     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett10'

  },
  __Dati_Numero071     : {
    type : Number,
    alias: 'QtGiacenzaDisponibileInternamente_Maga'

  },
  __Dati_Numero072     : {
    type : Number,
    alias: 'QtGiacenzaDisponibileAltrove_Maga'

  },
  __Dati_Numero073     : {
    type : Number,
    alias: 'QtGiacenzaDisponibile_Maga'

  },
  __Dati_Numero074     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp'

  },
  __Dati_Numero075     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_Maga'

  },
  __Dati_Numero076     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_Maga'

  },
  __Dati_Numero077     : {
    type : Number,
    alias: 'DistintaItem_VVenditaTotale'

  },
  __Dati_Numero078     : {
    type : Number,
    alias: 'DistintaItem_VAcquistoTotale'

  },
  __Dati_Numero079     : {
    type : Number,
    alias: 'FlagGeneraPacchi'

  },
  __Dati_Numero080     : {
    type : Number,
    alias: 'AnnoSettimana11'

  },
  __Dati_DataOra001    : {
    type : Date,
    alias: 'DataOraUltimaModifica',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo046      : {
    type : String,
    alias: 'CodiceTxtItemAutomatico'

  },
  __Dati_Numero081     : {
    type : Number,
    alias: 'VAcquistoUnitarioUltimo'

  },
  __Dati_Numero082     : {
    type : Number,
    alias: 'FlagAggiornaValori01'

  },
  __Dati_Numero083     : {
    type : Number,
    alias: 'VVenditaUnitarioUltimo'

  },
  __Dati_Numero084     : {
    type : Number,
    alias: 'VGiacenza_UltimoConsolidato'

  },
  __Dati_Numero085     : {
    type : Number,
    alias: 'FlagLinkTipoStrumento'

  },
  __Dati_Numero086     : {
    type : Number,
    alias: 'FlagLinkRisorsa'

  },
  __Dati_Numero087     : {
    type : Number,
    alias: 'FlagLinkTipoImpianto'

  },
  __Dati_Testo047      : {
    type : String,
    alias: 'IdTipoImpianto'

  },
  __Dati_Numero088     : {
    type : Number,
    alias: 'FlagMagaCespite'

  },
  __Dati_Numero089     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett11'

  },
  __Dati_Numero090     : {
    type : Number,
    alias: 'FlagMagaMateriaPrima'

  },
  __Dati_Numero091     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett12'

  },
  __Dati_Numero092     : {
    type : Number,
    alias: 'FlagMagaProdottoFinito'

  },
  __Dati_Numero093     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett09'

  },
  __Dati_Numero094     : {
    type : Number,
    alias: 'FlagMagaSemilavorato'

  },
  __Dati_Numero095     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett09'

  },
  __Dati_Numero096     : {
    type : Number,
    alias: 'FlagMagaValorizzaCosto'

  },
  __Dati_Numero097     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett10'

  },
  __Dati_Numero098     : {
    type : Number,
    alias: 'FlagMagaValorizzaPrezzo'

  },
  __Dati_Numero099     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett11'

  },
  __Dati_Data002       : {
    type : Date,
    alias: 'DataCorrente',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero100     : {
    type : Number,
    alias: 'GeneraCodice_FlagCreazioneSeriali'

  },
  __Dati_Numero101     : {
    type : Number,
    alias: 'AnnoSettimana01'

  },
  __Dati_Numero102     : {
    type : Number,
    alias: 'AnnoSettimana02'

  },
  __Dati_Numero103     : {
    type : Number,
    alias: 'AnnoSettimana03'

  },
  __Dati_Numero104     : {
    type : Number,
    alias: 'AnnoSettimana04'

  },
  __Dati_Numero105     : {
    type : Number,
    alias: 'AnnoSettimana05'

  },
  __Dati_Numero106     : {
    type : Number,
    alias: 'AnnoSettimana06'

  },
  __Dati_Numero107     : {
    type : Number,
    alias: 'AnnoSettimana07'

  },
  __Dati_Numero108     : {
    type : Number,
    alias: 'AnnoSettimana08'

  },
  __Dati_Numero109     : {
    type : Number,
    alias: 'DurataGaranziaGiorni'

  },
  __Dati_Numero110     : {
    type : Number,
    alias: 'DurataSottoscrizioneGiorni'

  },
  __Dati_Numero111     : {
    type : Number,
    alias: 'FlagAggiornaQuantita01'

  },
  __Dati_Numero112     : {
    type : Number,
    alias: 'FlagAggiornaQuantita02'

  },
  __Dati_Numero113     : {
    type : Number,
    alias: 'FlagAggiornaValori02'

  },
  __Dati_DataOra002    : {
    type : Date,
    alias: 'DataOraCreazione',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero114     : {
    type : Number,
    alias: 'Zero'

  },
  __Dati_Numero115     : {
    type : Number,
    alias: 'FlagProduzione'

  },
  __Dati_Numero116     : {
    type : Number,
    alias: 'FlagWeb'

  },
  __Dati_Numero117     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett00'

  },
  __Dati_Numero118     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett01'

  },
  __Dati_Numero119     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett02'

  },
  __Dati_Numero120     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett03'

  },
  __Dati_Numero121     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett04'

  },
  __Dati_Numero122     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett05'

  },
  __Dati_Numero123     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett06'

  },
  __Dati_Numero124     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett07'

  },
  __Dati_Numero125     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett08'

  },
  __Dati_Numero126     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_Sett00'

  },
  __Dati_Numero127     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp_SettOltre12'

  },
  __Dati_Numero128     : {
    type : Number,
    alias: 'FlagGestisciPosizioneMagazzino'

  },
  __Dati_Numero129     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett00'

  },
  __Dati_Numero130     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett01'

  },
  __Dati_Numero131     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett02'

  },
  __Dati_Numero132     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett03'

  },
  __Dati_Numero133     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett04'

  },
  __Dati_Numero134     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett05'

  },
  __Dati_Numero135     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett06'

  },
  __Dati_Numero136     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett07'

  },
  __Dati_Numero137     : {
    type : Number,
    alias: 'QtInArrivo_DOp_Sett08'

  },
  __Dati_Numero138     : {
    type : Number,
    alias: 'QtInArrivo_DOp_SettOltre12'

  },
  __Dati_Numero139     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett00'

  },
  __Dati_Numero140     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett01'

  },
  __Dati_Numero141     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett02'

  },
  __Dati_Numero142     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett03'

  },
  __Dati_Numero143     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett04'

  },
  __Dati_Numero144     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett05'

  },
  __Dati_Numero145     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett06'

  },
  __Dati_Numero146     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett07'

  },
  __Dati_Numero147     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett08'

  },
  __Dati_Numero148     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_SettOltre12'

  },
  __Dati_Numero149     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett00'

  },
  __Dati_Numero150     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett00'

  },
  __Dati_Numero151     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett01'

  },
  __Dati_Numero152     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett02'

  },
  __Dati_Numero153     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett03'

  },
  __Dati_Numero154     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett04'

  },
  __Dati_Numero155     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett05'

  },
  __Dati_Numero156     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett06'

  },
  __Dati_Numero157     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett07'

  },
  __Dati_Numero158     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett08'

  },
  __Dati_Numero159     : {
    type : Number,
    alias: 'QtPrenotata_DOp_SettOltre12'

  },
  __Dati_Numero160     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett01'

  },
  __Dati_Numero161     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett02'

  },
  __Dati_Numero162     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett03'

  },
  __Dati_Numero163     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett04'

  },
  __Dati_Numero164     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett05'

  },
  __Dati_Numero165     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett06'

  },
  __Dati_Numero166     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett07'

  },
  __Dati_Numero167     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett08'

  },
  __Dati_Numero168     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_SettOltre12'

  },
  __Dati_Numero169     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett01'

  },
  __Dati_Numero170     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett02'

  },
  __Dati_Numero171     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett03'

  },
  __Dati_Numero172     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett04'

  },
  __Dati_Numero173     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett05'

  },
  __Dati_Numero174     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett06'

  },
  __Dati_Numero175     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett07'

  },
  __Dati_Numero176     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_Sett08'

  },
  __Dati_Numero177     : {
    type : Number,
    alias: 'QtDaOttenereCumulato_DOp_SettOltre12'

  },
  __Dati_Numero178     : {
    type : Number,
    alias: 'FlagAggiornaDistinta'

  },
  __Dati_Numero179     : {
    type : Number,
    alias: 'AnnoSettimana12'

  },
  __Dati_Numero180     : {
    type : Number,
    alias: 'NumeroDecimaliQuantita'

  },
  __Dati_Numero181     : {
    type : Number,
    alias: 'NumeroDecimaliValori'

  },
  __Dati_Numero182     : {
    type : Number,
    alias: 'QtFabbisognoAttivo_DOp'

  },
  __Dati_Numero183     : {
    type : Number,
    alias: 'GiorniApprovigionamentoStandard'

  },
  __Dati_Numero184     : {
    type : Number,
    alias: 'FlagAggiornaDaFornitureeListini'

  },
  __Dati_Numero185     : {
    type : Number,
    alias: 'SettimaneApprovigionamentoStandard'

  },
  __Dati_Numero186     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett00'

  },
  __Dati_Numero187     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett01'

  },
  __Dati_Numero188     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett02'

  },
  __Dati_Numero189     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett03'

  },
  __Dati_Numero190     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett04'

  },
  __Dati_Numero191     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett05'

  },
  __Dati_Numero192     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett06'

  },
  __Dati_Numero193     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett07'

  },
  __Dati_Numero194     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett08'

  },
  __Dati_Testo048      : {
    type : String,
    alias: 'IdTipoContenitore'

  },
  __Dati_Numero195     : {
    type : Number,
    alias: 'FlagLinkTipoContenitore'

  },
  __Dati_Numero196     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_Anno'

  },
  __Dati_Numero197     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_UsaAnno'

  },
  __Dati_Testo049      : {
    type : String,
    alias: 'GeneraCodiceSeriale_Separatore'

  },
  __Dati_Numero198     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_OrdineAnno'

  },
  __Dati_Numero199     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_OrdineTesto'

  },
  __Dati_Numero200     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_CifreProgressivo'

  },
  __Dati_Numero201     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_Numero'

  },
  __Dati_Numero202     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_AnnoDueCifre'

  },
  __Dati_Numero203     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_AnnoVisibile'

  },
  __Dati_Numero204     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett11'

  },
  __Dati_Numero205     : {
    type : Number,
    alias: 'QtPrenotata_DOp_Sett12'

  },
  __Dati_Numero206     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett09'

  },
  __Dati_Numero207     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett10'

  },
  __Dati_Numero208     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett11'

  },
  __Dati_Numero209     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaDisponibile_DOp_Sett12'

  },
  __Dati_Numero210     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett10'

  },
  __Dati_Numero211     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett11'

  },
  __Dati_Numero212     : {
    type : Number,
    alias: 'QtPrevisioneGiacenza_DOp_Sett12'

  },
  __Dati_Numero213     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett09'

  },
  __Dati_Numero214     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett10'

  },
  __Dati_Numero215     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett11'

  },
  __Dati_Numero216     : {
    type : Number,
    alias: 'QtPropostaOrdineApprov_Sett12'

  },
  __Dati_Testo050      : {
    type : String,
    alias: 'TxtAnnoSettimana01'

  },
  __Dati_Testo051      : {
    type : String,
    alias: 'TxtAnnoSettimana02'

  },
  __Dati_Testo052      : {
    type : String,
    alias: 'TxtAnnoSettimana03'

  },
  __Dati_Testo053      : {
    type : String,
    alias: 'TxtAnnoSettimana04'

  },
  __Dati_Testo054      : {
    type : String,
    alias: 'TxtAnnoSettimana05'

  },
  __Dati_Testo055      : {
    type : String,
    alias: 'TxtAnnoSettimana06'

  },
  __Dati_Testo056      : {
    type : String,
    alias: 'TxtAnnoSettimana07'

  },
  __Dati_Testo057      : {
    type : String,
    alias: 'TxtAnnoSettimana08'

  },
  __Dati_Testo058      : {
    type : String,
    alias: 'TxtAnnoSettimana09'

  },
  __Dati_Testo059      : {
    type : String,
    alias: 'TxtAnnoSettimana10'

  },
  __Dati_Testo060      : {
    type : String,
    alias: 'TxtAnnoSettimana11'

  },
  __Dati_Testo061      : {
    type : String,
    alias: 'TxtAnnoSettimana12'

  },
  __Dati_Numero217     : {
    type : Number,
    alias: 'SettimaneTrasportoStandard'

  },
  __Dati_Numero218     : {
    type : Number,
    alias: 'SettimaneProduzioneStandard'

  },
  __Dati_Numero219     : {
    type : Number,
    alias: 'SettimaneApprovigionamento10'

  },
  __Dati_Numero220     : {
    type : Number,
    alias: 'SettimaneApprovigionamento01'

  },
  __Dati_Numero221     : {
    type : Number,
    alias: 'SettimaneApprovigionamento02'

  },
  __Dati_Numero222     : {
    type : Number,
    alias: 'SettimaneApprovigionamento03'

  },
  __Dati_Numero223     : {
    type : Number,
    alias: 'SettimaneApprovigionamento04'

  },
  __Dati_Numero224     : {
    type : Number,
    alias: 'SettimaneApprovigionamento05'

  },
  __Dati_Numero225     : {
    type : Number,
    alias: 'SettimaneApprovigionamento06'

  },
  __Dati_Numero226     : {
    type : Number,
    alias: 'SettimaneApprovigionamento07'

  },
  __Dati_Numero227     : {
    type : Number,
    alias: 'SettimaneApprovigionamento08'

  },
  __Dati_Numero228     : {
    type : Number,
    alias: 'SettimaneApprovigionamento09'

  },
  __Dati_Numero229     : {
    type : Number,
    alias: 'SettimaneApprovigionamento11'

  },
  __Dati_Numero230     : {
    type : Number,
    alias: 'SettimaneApprovigionamento12'

  },
  __Dati_Testo062      : {
    type : String,
    alias: 'FornituraStandard_IdSede'

  },
  __Dati_Numero231     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett00'

  },
  __Dati_Numero232     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett01'

  },
  __Dati_Numero233     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett02'

  },
  __Dati_Numero234     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett03'

  },
  __Dati_Numero235     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett04'

  },
  __Dati_Numero236     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett05'

  },
  __Dati_Numero237     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett06'

  },
  __Dati_Numero238     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett07'

  },
  __Dati_Numero239     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett08'

  },
  __Dati_Numero240     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett09'

  },
  __Dati_Numero241     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett10'

  },
  __Dati_Numero242     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett11'

  },
  __Dati_Numero243     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_Sett12'

  },
  __Dati_Numero244     : {
    type : Number,
    alias: 'QtDaOttenere_DOp_SettOltre12'

  },
  __Dati_Numero245     : {
    type : Number,
    alias: 'FlagAggiornaQuantitaDaSelezioni'

  },
  __Dati_Numero246     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett00'

  },
  __Dati_Numero247     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett01'

  },
  __Dati_Numero248     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett02'

  },
  __Dati_Numero249     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett03'

  },
  __Dati_Numero250     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett04'

  },
  __Dati_Numero251     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett05'

  },
  __Dati_Numero252     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett06'

  },
  __Dati_Numero253     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett07'

  },
  __Dati_Numero254     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett08'

  },
  __Dati_Numero255     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett09'

  },
  __Dati_Numero256     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett10'

  },
  __Dati_Numero257     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett11'

  },
  __Dati_Numero258     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_Sett12'

  },
  __Dati_Numero259     : {
    type : Number,
    alias: 'QtDaSelezioniApprovigionamento_SettOltre12'

  },
  __Dati_Numero260     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett00'

  },
  __Dati_Numero261     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett01'

  },
  __Dati_Numero262     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett02'

  },
  __Dati_Numero263     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett03'

  },
  __Dati_Numero264     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett04'

  },
  __Dati_Numero265     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett05'

  },
  __Dati_Numero266     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett06'

  },
  __Dati_Numero267     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett07'

  },
  __Dati_Numero268     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett08'

  },
  __Dati_Numero269     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett09'

  },
  __Dati_Numero270     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett10'

  },
  __Dati_Numero271     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett11'

  },
  __Dati_Numero272     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_Sett12'

  },
  __Dati_Numero273     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza_SettOltre12'

  },
  __Dati_Numero274     : {
    type : Number,
    alias: 'QtSimulazionePrevisioneGiacenza'

  },
  __Dati_Numero275     : {
    type : Number,
    alias: 'QtDaOttenere_DOp'

  },
  __Dati_Numero276     : {
    type : Number,
    alias: 'FlagScaricoProduzione_DeduzioneAutomatica'

  },
  __Dati_Numero277     : {
    type : Number,
    alias: 'FlagScaricoProduzione_QtProposta'

  },
  __Dati_Numero278     : {
    type : Number,
    alias: 'FlagItemSelezionato'

  },
  __Dati_Numero279     : {
    type : Number,
    alias: 'VItemUnitario_UltimoConsolidato'

  },
  __Dati_Data003       : {
    type : Date,
    alias: 'DataVUltimoConsolidato',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero280     : {
    type : Number,
    alias: 'VItemUnitario_Rolling'

  },
  __Dati_Numero281     : {
    type : Number,
    alias: 'VGiacenza_Rolling'

  },
  __Dati_Numero282     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett00_Rolling'

  },
  __Dati_Numero283     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett01_Rolling'

  },
  __Dati_Numero284     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett02_Rolling'

  },
  __Dati_Numero285     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett03_Rolling'

  },
  __Dati_Numero286     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett04_Rolling'

  },
  __Dati_Numero287     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett05_Rolling'

  },
  __Dati_Numero288     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett06_Rolling'

  },
  __Dati_Numero289     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett07_Rolling'

  },
  __Dati_Numero290     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett08_Rolling'

  },
  __Dati_Numero291     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett09_Rolling'

  },
  __Dati_Numero292     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett10_Rolling'

  },
  __Dati_Numero293     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett11_Rolling'

  },
  __Dati_Numero294     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_Sett12_Rolling'

  },
  __Dati_Numero295     : {
    type : Number,
    alias: 'VPrevisioneGiacenza_SettOltre12_Rolling'

  },
  __Dati_Data004       : {
    type : Date,
    alias: 'DataVGiacenzaRolling',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo063      : {
    type : String,
    alias: 'IdInstallazione'

  },
  __Dati_Testo064      : {
    type : String,
    alias: 'FornituraStandard_IdFornitura'

  },
  __Dati_Numero296     : {
    type : Number,
    alias: 'FlagTracciabilitaNecessaria'

  },
  __Dati_Numero297     : {
    type : Number,
    alias: 'QtTracciabilita'

  },
  __Dati_Numero298     : {
    type : Number,
    alias: 'DiffQtTracciabilitaQtGiacenza'

  },
  __Dati_Numero299     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_FlagGeneraAlCaricoFiniti'

  },
  __Dati_Numero300     : {
    type : Number,
    alias: 'GeneraCodiceSeriale_FlagUsaSerialeLotto'

  },
  __Dati_Testo065      : {
    type : String,
    alias: 'GeneraSeriale_CodiceEsempio'

  },
  __Dati_Testo066      : {
    type : String,
    alias: 'GeneraSeriale_Espressione'

  },
  __Dati_Numero301     : {
    type : Number,
    alias: 'AnnoCreazione'

  },
  __Dati_Numero302     : {
    type : Number,
    alias: 'AnnoMeseCreazione'

  },
  __Dati_Testo067      : {
    type : String,
    alias: 'GeneraCodiceItem_AltroIdSottoFamigliaItemPerCodice'

  },
  __Dati_Numero303     : {
    type : Number,
    alias: 'GeneraCodiceItem_FlagTipoCodice_Standard'

  },
  __Dati_Testo068      : {
    type : String,
    alias: 'GeneraCodiceItem_AltroIdFamigliaItemPerCodice'

  },
  __Dati_Numero304     : {
    type : Number,
    alias: 'FlagAggiornaLink'

  },
  __Dati_Testo069      : {
    type : String,
    alias: 'CodificaClienteItemPrincipale_CodiceItemCliente'

  },
  __Dati_Testo070      : {
    type : String,
    alias: 'CodificaClienteItemPrincipale_DescrizioneItemCliente'

  },
  __Dati_Testo071      : {
    type : String,
    alias: 'CodificaClienteItemPrincipale_NumeroRevisione'

  },
  __Dati_Testo072      : {
    type : String,
    alias: 'CodificaClienteItemPrincipale_TxtAccountCliente'

  },
  __Dati_Testo073      : {
    type : String,
    alias: 'IdItemSostitutivo'

  },
  __Dati_Testo074      : {
    type : String,
    alias: 'TxtUtenteCreazione'

  },
  __Dati_Numero305     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp'

  },
  __Dati_Numero306     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett00'

  },
  __Dati_Numero307     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett01'

  },
  __Dati_Numero308     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett02'

  },
  __Dati_Numero309     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett03'

  },
  __Dati_Numero310     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett04'

  },
  __Dati_Numero311     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett05'

  },
  __Dati_Numero312     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett06'

  },
  __Dati_Numero313     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett07'

  },
  __Dati_Numero314     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett08'

  },
  __Dati_Numero315     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett09'

  },
  __Dati_Numero316     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett10'

  },
  __Dati_Numero317     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett11'

  },
  __Dati_Numero318     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett12'

  },
  __Dati_Numero319     : {
    type : Number,
    alias: 'QtPrevisioneGiacenzaSenzaFabbisogni_DOp_SettOltre12'

  },
  __Dati_Testo075      : {
    type : String,
    alias: 'IdDocumentoPrincipaleItem'

  },
  __Dati_Numero320     : {
    type : Number,
    alias: 'FornituraStandard_FlagAcquisto'

  },
  __Dati_Numero321     : {
    type : Number,
    alias: 'FornituraStandard_FlagProduzione'

  },
  __Dati_Testo076      : {
    type : String,
    alias: 'FornituraStandard_CodiceRiferimentoFornitore'

  },
  __Dati_Testo077      : {
    type : String,
    alias: 'TxtAccountProduttoreVincolato'

  },
  __Dati_Testo078      : {
    type : String,
    alias: 'JSON_ImpostazioniItem'

  },
  __Dati_Numero322     : {
    type : Number,
    alias: 'FlagDifferenzeImpostazioniItemSottoFamiglia'

  },
  __Dati_Numero323     : {
    type : Number,
    alias: 'ControlloEliminazione_FlagItemEliminabile'

  },
  __Dati_Numero324     : {
    type : Number,
    alias: 'ControlloEliminazione_FlagAggiornaItemEliminabile'

  },
  __Dati_Numero325     : {
    type : Number,
    alias: 'Cruscotto_FlagEscludi'

  },
  __Dati_Testo079      : {
    type : String,
    alias: 'InformazioniAggiuntive_ListaAStringa'

  },
  __Dati_Testo080      : {
    type : String,
    alias: 'IdTipoImballo'

  },
  __Dati_Testo081      : {
    type : String,
    alias: 'TxtTipoImballo'

  },
  __Dati_Numero326     : {
    type : Number,
    alias: 'PaginaCatalogo'

  },
  __Dati_Data005       : {
    type : Date,
    alias: 'DataAttivazione',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data006       : {
    type : Date,
    alias: 'DataDisattivazione',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero327     : {
    type : Number,
    alias: 'GiorniDiAttivazione'

  },
  __Dati_Testo082      : {
    type : String,
    alias: 'CodiceTipoImballo'

  },
  __Dati_Testo083      : {
    type : String,
    alias: 'IdStatoItems'

  },
  __Dati_Numero328     : {
    type : Number,
    alias: 'FlagItemOrdinato'

  },
  __Dati_Numero329     : {
    type : Number,
    alias: 'FlagItemFabbisogno'

  },
  __Dati_Numero330     : {
    type : Number,
    alias: 'FlagItemEntrata'

  },
  __Dati_Numero331     : {
    type : Number,
    alias: 'FlagItemUscita'

  },
  __Dati_Numero332     : {
    type : Number,
    alias: 'FlagItemRichiestoOrdineApprovvigionamento'

  },
  __Dati_Numero333     : {
    type : Number,
    alias: 'FlagNovita'

  },
  __Dati_Numero334     : {
    type : Number,
    alias: 'FlagRevisione'

  },
  __Dati_Data007       : {
    type : Date,
    alias: 'StatiItems_DataCambioStatoSucccessivoAutomatico',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero335     : {
    type : Number,
    alias: 'FlagAggiornaDaStatoItems'

  },
  __Dati_Testo084      : {
    type : String,
    alias: 'IdStatoItemsSuccessivo'

  },
  __Dati_Testo085      : {
    type : String,
    alias: 'StatiItems_IdStatoItemsESuccessivo'

  },
  __Dati_Numero336     : {
    type : Number,
    alias: 'Master_FlagPossibileItemMaster'

  },
  __Dati_Numero337     : {
    type : Number,
    alias: 'Master_FlagQuestoItemMaster'

  },
  __Dati_Numero338     : {
    type : Number,
    alias: 'Master_FlagItemCorrelatoAMaster'

  },
  __Dati_Numero339     : {
    type : Number,
    alias: 'BloccoImpostazioni_ImpostazioniGenerali'

  },
  __Dati_Numero340     : {
    type : Number,
    alias: 'BloccoImpostazioni_FlagTipo'

  },
  __Dati_Numero341     : {
    type : Number,
    alias: 'BloccoImpostazioni_Multimaga'

  },
  __Dati_Numero342     : {
    type : Number,
    alias: 'BloccoImpostazioni_ScaricoProduzione'

  },
  __Dati_Numero343     : {
    type : Number,
    alias: 'BloccoImpostazioni_TipiInfoAggiuntive'

  },
  __Dati_Numero344     : {
    type : Number,
    alias: 'BloccoImpostazioni_Tracciabilita'

  },
  __Dati_Numero345     : {
    type : Number,
    alias: 'BloccoImpostazioni_Controlli'

  },
  __Dati_Numero346     : {
    type : Number,
    alias: 'BloccoImpostazioni_Valorizzazione'

  },
  __Dati_Numero347     : {
    type : Number,
    alias: 'BloccoImpostazioni_TipiRicaviSpese'

  },
  __Dati_Numero348     : {
    type : Number,
    alias: 'FlagDescrizioneDaInfoAggiuntive'

  },
  __Dati_Numero349     : {
    type : Number,
    alias: 'FlagDescrizioneNonModificabile'

  },
  __Dati_Data008       : {
    type : Date,
    alias: 'WIP_DataValorizzazione',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero350     : {
    type : Number,
    alias: 'WIP_Valore'

  },
  __Dati_Numero351     : {
    type : Number,
    alias: 'FlagAggiornaWIP'

  },
  __Dati_Testo088      : {
    type : String,
    alias: 'Catalogo_Gamma'

  },
  __Dati_Testo091      : {
    type : String,
    alias: 'Integrazione_DatiVariAC'

  }
}, {
  timestamps: true
});

/**
 * Indexing
 */
ItemsSchema.index({
  __Dati_Testo002: 1
});
ItemsSchema.index({
  __Dati_Testo034: 1
});
ItemsSchema.index({
  __Dati_Testo003: 1
});
ItemsSchema.index({
  __Dati_Testo026: 1
});
ItemsSchema.index({
  __Dati_Testo005: 1
});
ItemsSchema.index({
  __Dati_Numero116: 1
});
ItemsSchema.index({
  __Dati_Numero046: 1
});

/* --------
* Module Exports
* -------- */
export default ItemsSchema;
