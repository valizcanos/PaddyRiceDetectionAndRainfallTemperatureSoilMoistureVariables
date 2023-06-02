var NdviEvi = ee.ImageCollection("MODIS/006/MOD13Q1"),
    Ndwi = ee.ImageCollection("MODIS/MCD43A4_006_NDWI"),
    WaterMask = ee.Image("MODIS/MOD44W/MOD44W_005_2000_02_24"),
    CampoAlegre = 
    /* color: #ffffff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-75.33117195859103, 2.8109700657120373],
          [-75.33220192685275, 2.810027063776173],
          [-75.33340355649142, 2.806512231669532],
          [-75.33529149489306, 2.802921583427976],
          [-75.33709393935106, 2.801807118838715],
          [-75.3373514314165, 2.800521196840525],
          [-75.33958302931688, 2.7931485501533384],
          [-75.34421788649462, 2.78371835322342],
          [-75.3490244050493, 2.775659761490542],
          [-75.35898076491259, 2.773259319281156],
          [-75.36104070143602, 2.7698301076752436],
          [-75.36653386549852, 2.770515950791194],
          [-75.36722051100634, 2.7677725759446634],
          [-75.37443028883837, 2.7619428833186084],
          [-75.3819833894243, 2.7598853379095565],
          [-75.39125310377977, 2.7533697539615507],
          [-75.39485799269579, 2.7516551206808666],
          [-75.40138112502001, 2.748568774561849],
          [-75.40584432082079, 2.7470255985087264],
          [-75.41150914626024, 2.745310956110791],
          [-75.41442738966845, 2.744110704968138],
          [-75.41820393996142, 2.7411958043197613],
          [-75.4200922151079, 2.7375950348932947],
          [-75.4226671357622, 2.7381094311884713],
          [-75.42424372329606, 2.7355644383579762],
          [-75.42819193496598, 2.726991119792697],
          [-75.43511029530853, 2.7199827470421716],
          [-75.43734189320892, 2.7182680660165266],
          [-75.43528195668549, 2.7155245713085163],
          [-75.4330503587851, 2.7156960399103767],
          [-75.43099042226166, 2.7141528216175663],
          [-75.42807217885345, 2.7120951941621874],
          [-75.42395230580658, 2.7134669461882113],
          [-75.41966077138275, 2.7136384150820345],
          [-75.41828748036713, 2.710894909863219],
          [-75.41519757558197, 2.705750820817475],
          [-75.41777249623627, 2.699920826848711],
          [-75.42051907826752, 2.6920331434338265],
          [-75.41811581899017, 2.6836309897263173],
          [-75.41449774491693, 2.681186277305623],
          [-75.41192282426263, 2.680328909718431],
          [-75.40900458085443, 2.679471541530622],
          [-75.40848959672357, 2.6763850110844287],
          [-75.40625799882318, 2.6741558453722654],
          [-75.40316809403802, 2.6755276401362806],
          [-75.39767492997552, 2.672269625067111],
          [-75.39939154374505, 2.6674683239443544],
          [-75.40333975541498, 2.6612951949617107],
          [-75.41072119462396, 2.6484344103702577],
          [-75.41741598832513, 2.640546396379436],
          [-75.42325247514154, 2.638488645356391],
          [-75.42737234818841, 2.635230532605873],
          [-75.43080557572748, 2.6331727727902354],
          [-75.43286551225091, 2.6304290877494485],
          [-75.43595541703607, 2.626827991974154],
          [-75.4413627504101, 2.6231411450656643],
          [-75.44402350175287, 2.619625769285998],
          [-75.4501174806347, 2.6138811095833963],
          [-75.45114744889642, 2.6111373822344386],
          [-75.4538082002392, 2.6089080993510865],
          [-75.45646895158197, 2.6054784256604497],
          [-75.45844305741693, 2.6005911245127487],
          [-75.46359289872552, 2.597504398240185],
          [-75.46170462357904, 2.595703804430035],
          [-75.46084631669427, 2.5949321205831506],
          [-75.46118963944818, 2.5929600375014155],
          [-75.45947302567865, 2.5915881518053294],
          [-75.4585378537632, 2.5894602854364055],
          [-75.4567354093052, 2.5880026528066904],
          [-75.45167139868508, 2.584401435596329],
          [-75.45064143042336, 2.5835440014208157],
          [-75.4475515256382, 2.5825150796459497],
          [-75.4449766049839, 2.5838869751605094],
          [-75.43742350439797, 2.5842299488075606],
          [-75.43390444617043, 2.5851731258591175],
          [-75.42423533201035, 2.5935119845414207],
          [-75.42200373410996, 2.5940264410694964],
          [-75.41479395627793, 2.599685449056859],
          [-75.40123270749864, 2.609031330899656],
          [-75.39505289792832, 2.6112606135644527],
          [-75.39230631589707, 2.6128897022411075],
          [-75.39119051694688, 2.6137471164851407],
          [-75.38543986081895, 2.6216353000229615],
          [-75.37986454140136, 2.6242815040813365],
          [-75.37668880592773, 2.62513891052749],
          [-75.37514385353515, 2.6244529854176295],
          [-75.37231144081542, 2.6228239117733194],
          [-75.3683632291455, 2.6229096525443443],
          [-75.36613163124511, 2.621280576889861],
          [-75.36338504921386, 2.6205089087343447],
          [-75.36166843544433, 2.6195657581205505],
          [-75.35900768410156, 2.61536444221504],
          [-75.35789188515136, 2.6148499944019514],
          [-75.35068210731933, 2.616907784388152],
          [-75.34695992404527, 2.6276804632303996],
          [-75.34395584994859, 2.6382264928385983],
          [-75.3394926541478, 2.65305937489872],
          [-75.33563841849706, 2.6668896050556703],
          [-75.3328918364658, 2.674777450702951],
          [-75.32842864066502, 2.680093144164745],
          [-75.3299735930576, 2.681979352426946],
          [-75.32568205863377, 2.688838267027116],
          [-75.3241371062412, 2.688838267027116],
          [-75.32310713797948, 2.690381517501478],
          [-75.32104720145604, 2.6939824276770437],
          [-75.32053221732518, 2.6977547983441825],
          [-75.3189872649326, 2.701698627891766],
          [-75.31847228080174, 2.705470974603031],
          [-75.31589736014745, 2.710100656797071],
          [-75.31615974328798, 2.7137554976835125],
          [-75.31804801843447, 2.73090226231771],
          [-75.31581642053408, 2.737246503278399],
          [-75.31186820886415, 2.7417045984600414],
          [-75.30997993371767, 2.748563173986073],
          [-75.308778304079, 2.7529354953174203],
          [-75.30842367928041, 2.757509279460968],
          [-75.30584875862611, 2.7684828357231543],
          [-75.30138556282533, 2.7900867272331804],
          [-75.3051621131183, 2.7904296429534634],
          [-75.31014029304994, 2.791115474093937],
          [-75.31408850471986, 2.7918013048341837],
          [-75.31752173225892, 2.7928300501938974],
          [-75.31923834602846, 2.795401909650279],
          [-75.32009665291322, 2.798831046822777],
          [-75.3216416053058, 2.8003741552777655],
          [-75.324559848714, 2.8031174541775856],
          [-75.32782141487611, 2.8053463797985563],
          [-75.33039633553041, 2.808432577489305],
          [-75.3300530127765, 2.8118616764699316]]]),
    Center = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([-75.375009326921, 2.6598752764833047]),
    Croplands = ee.Image("USGS/GFSAD1000_V0"),
    crops1 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.MultiPoint(
        [[-75.38312666231808, 2.643699115082503],
         [-75.36046736056026, 2.644727986703024],
         [-75.3511976462048, 2.6639334332769695],
         [-75.36776296908077, 2.67087818631455],
         [-75.37008039766964, 2.671135398636522],
         [-75.3749727469128, 2.6672772081533047],
         [-75.39934866244015, 2.6322099907783123],
         [-75.36570303255733, 2.643527636396146],
         [-75.40020696932491, 2.6442135509994262],
         [-75.39076559359249, 2.644985204474825],
         [-75.38510076815304, 2.642584503197594],
         [-75.38321249300655, 2.6619614592211245],
         [-75.38389913851437, 2.656902902653888],
         [-75.37334196383175, 2.6867596884186637],
         [-75.3844999533337, 2.675058928571666],
         [-75.36965124422726, 2.658897368087504],
         [-75.35857908541378, 2.662155418579695],
         [-75.3434728842419, 2.6773309611418705],
         [-75.3445886831921, 2.692163371964803],
         [-75.35308592135128, 2.708067288157478],
         [-75.35420172030148, 2.704552154801992],
         [-75.36321394259151, 2.675830562747052],
         [-75.3347181540173, 2.6725296798159297],
         [-75.36613218599972, 2.6912202760631394],
         [-75.3826975088757, 2.6606121325776075],
         [-75.40527097994503, 2.6492089039899467],
         [-75.37432901674923, 2.6775453036197434],
         [-75.35909406954464, 2.7046807574214693],
         [-75.37411444002804, 2.686590521967318],
         [-75.34982435518917, 2.6611265614596538],
         [-75.3966020804089, 2.653581583029196],
         [-75.3801225882214, 2.6715008313729762],
         [-75.3614114981335, 2.685475948913941],
         [-75.34596197420773, 2.6923348438684984],
         [-75.36123983675655, 2.7177981528601216],
         [-75.35780660921749, 2.724828332306493],
         [-75.35823576265987, 2.7242281966378914],
         [-75.3654455404919, 2.7191698984098616],
         [-75.34441702181515, 2.698850758313539],
         [-75.37265531832394, 2.6853902124831017],
         [-75.38146141571059, 2.664488540410677],
         [-75.3986275534059, 2.666374772658561],
         [-75.36669853729262, 2.6419392680743456],
         [-75.36137703460707, 2.6445971884520483],
         [-75.39888504547133, 2.631564750273934],
         [-75.39631012481703, 2.651885005415415],
         [-75.40506485504164, 2.648112493751844],
         [-75.40583733123793, 2.627706436485956],
         [-75.35845879119887, 2.723659911430715],
         [-75.36485317749037, 2.7016690097781],
         [-75.36518543135463, 2.666706636424872],
         [-75.36518543135463, 2.676137751696737],
         [-75.34029453169643, 2.681796386046988],
         [-75.36398380171596, 2.6850543757715646],
         [-75.36303966414272, 2.659847598070121],
         [-75.36904781233608, 2.6671353250532293],
         [-75.3631254948312, 2.6697074536848016],
         [-75.37857501875698, 2.6498161858133207],
         [-75.36707370650112, 2.651873918041259],
         [-75.36080806624233, 2.674508746054124],
         [-75.39144962202846, 2.6388415562312915],
         [-75.37514179121791, 2.6540173854721782],
         [-75.39024799238979, 2.638584337186899],
         [-75.37479846846401, 2.6420996595185398],
         [-75.37385433089077, 2.6465581027919183],
         [-75.37771671187221, 2.6564180645817315],
         [-75.3686186588937, 2.6362693633933656],
         [-75.36269634138881, 2.6582185708514774],
         [-75.37016361128627, 2.664220239435153],
         [-75.37891834151088, 2.6324968042814785],
         [-75.36105518433558, 2.6933040575413325],
         [-75.36491756531703, 2.681986869192875],
         [-75.36710624787318, 2.694847302360363],
         [-75.36543254944789, 2.6794576347378034],
         [-75.35629158112513, 2.6962190738903877],
         [-75.3656139651102, 2.6960788835740677],
         [-75.36198761852206, 2.679081666109575],
         [-75.35894062908115, 2.6830041219056806],
         [-75.36449816616, 2.695607337230695],
         [-75.3606787005228, 2.6812250861356883],
         [-75.36684751398658, 2.68158768737723],
         [-75.35940170176124, 2.6974703078453723],
         [-75.37070989496803, 2.6807731884508694],
         [-75.36375760920143, 2.680430241372289],
         [-75.38472175486183, 2.6812661747079116]]),
    crops2 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Geometry.MultiPoint(
        [[-75.41011995236674, 2.6248267684695805],
         [-75.40720170895854, 2.625169730969004],
         [-75.39871691472348, 2.6440200924667203],
         [-75.39888857610043, 2.6304732068541568],
         [-75.39931772954282, 2.6254145219194918],
         [-75.36258219487485, 2.6474496603279114],
         [-75.34524439580258, 2.691690230348926],
         [-75.36138056523617, 2.684574122324355],
         [-75.37292479283627, 2.6797728693943683],
         [-75.35238018351113, 2.6974094015847414],
         [-75.3585242369629, 2.7229940534521377],
         [-75.40769682199736, 2.629001593755574],
         [-75.38246259958525, 2.6435773679648698],
         [-75.37799940378447, 2.6370611605992678],
         [-75.34375295908232, 2.6771009973801885],
         [-75.33474073679228, 2.672213977800581],
         [-75.36146903533053, 2.6447766253094347],
         [-75.34588843016887, 2.6969882655355373],
         [-75.35987883239055, 2.690868428037467],
         [-75.33615725998878, 2.720080563875433],
         [-75.39479701887905, 2.6587330007318486],
         [-75.36707370650112, 2.6503306191910676],
         [-75.3645846165353, 2.6475869720401524],
         [-75.36612956892787, 2.636097883681726],
         [-75.3796049870187, 2.6548747714039194],
         [-75.36535709273159, 2.6702218787651812],
         [-75.38192241560756, 2.6684213900417157],
         [-75.37780254256069, 2.6625054799648553],
         [-75.36956279646694, 2.663448597968956],
         [-75.3689619816476, 2.6702218787651812]]),
    NonCrop1 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Geometry.MultiPoint(
        [[-75.39558041618048, 2.6864199036334324],
         [-75.40433514640509, 2.6877916846479986],
         [-75.4134331993836, 2.6881346296607576],
         [-75.40193188712774, 2.682818971140207],
         [-75.3914605431336, 2.693107321509175],
         [-75.39025891349493, 2.703052644266735],
         [-75.38493741080939, 2.708025275101122],
         [-75.39901364371954, 2.6802468700087543],
         [-75.3969537071961, 2.6759600227803193],
         [-75.3940354637879, 2.681275711110275],
         [-75.38751233146368, 2.6877916846479986],
         [-75.38507329167125, 2.7173526761629074],
         [-75.39262639225718, 2.7233540536400818],
         [-75.38232670964, 2.7250687274301417],
         [-75.38061009587047, 2.7166668025502725],
         [-75.42288150908264, 2.6028926009959217],
         [-75.409450260946, 2.68276643410702],
         [-75.40618869478389, 2.6800228592567286],
         [-75.40241214449092, 2.67779370016246],
         [-75.41597339327022, 2.6956268590570107],
         [-75.40842029268428, 2.693569200181161],
         [-75.39897891695186, 2.6932262566971037],
         [-75.39211246187374, 2.710887720283685],
         [-75.39211246187374, 2.718946749187646],
         [-75.38507434541866, 2.724605184131991],
         [-75.39056750948116, 2.73489317949644],
         [-75.38387271577999, 2.7331785197214553],
         [-75.37958118135616, 2.7309494583519305],
         [-75.376491276571, 2.724776651442712],
         [-75.38129779512569, 2.7088300872749946],
         [-75.39211246187374, 2.6885965102167515],
         [-75.42583007615225, 2.5988531445503806],
         [-75.42926330369131, 2.596452354796722],
         [-75.43424148362296, 2.5985101748650417],
         [-75.41862029832022, 2.6015968986775104],
         [-75.38762868092479, 2.7143910413396215],
         [-75.37681401417674, 2.7171345386227497],
         [-75.40496647999706, 2.7454264895615106],
         [-75.40050328419628, 2.7459408824895606],
         [-75.39792836354198, 2.743025986303095],
         [-75.39037526295604, 2.7510847995809953],
         [-75.390546924333, 2.7488557715635173],
         [-75.37612736866893, 2.731194864211396],
         [-75.35398305104198, 2.6291162875437637],
         [-75.35072148487987, 2.6335747773630964],
         [-75.35157979176464, 2.6387191688618308],
         [-75.39964497731151, 2.6762725792699746],
         [-75.39947331593456, 2.6870754027611934],
         [-75.35484135792674, 2.624657781793299],
         [-75.39260686085643, 2.700450194599295],
         [-75.3791923131597, 2.741642114771536],
         [-75.37781902214408, 2.749186546078486],
         [-75.37531512199061, 2.755008874077557],
         [-75.37274020133631, 2.757237890584098],
         [-75.36982195792811, 2.7602384831319364],
         [-75.3969444554867, 2.7277459509580364],
         [-75.39866106925624, 2.7318611489222855],
         [-75.40046351371424, 2.735633401333959],
         [-75.40235178886073, 2.740005769960918],
         [-75.40827410636561, 2.7417204199668164],
         [-75.42235033927577, 2.7359763327831788],
         [-75.39178565805123, 2.685245277627438],
         [-75.39916709726022, 2.6824588400197427],
         [-75.39976791207955, 2.680872711160868],
         [-75.39957479303048, 2.684216439865893],
         [-75.39487556283639, 2.6822444984022478],
         [-75.40182784860299, 2.681772946711536],
         [-75.39905980889962, 2.6832733378235964],
         [-75.39604500596688, 2.683573415825075],
         [-75.40017560784982, 2.682908957294209],
         [-75.40032581155465, 2.684548668821101],
         [-75.40132359330819, 2.6791151065104386],
         [-75.39783672158883, 2.677957658167624],
         [-75.3984804517524, 2.676928814278105],
         [-75.3899778491752, 2.6785792509321675],
         [-75.38936094110177, 2.6805726324967787]]),
    NonCrop2 = 
    /* color: #00ffff */
    /* shown: false */
    ee.Geometry.MultiPoint(
        [[-75.41372121022167, 2.6857036209418705],
         [-75.4099446599287, 2.6889616002457415],
         [-75.41646779225292, 2.6927339864638973],
         [-75.4128629033369, 2.6834744721999266],
         [-75.40513814137401, 2.6862180393047024],
         [-75.40290654347362, 2.69256251461637],
         [-75.39552510426464, 2.692391042744708],
         [-75.390546924333, 2.7006216653350026],
         [-75.39003194020214, 2.7115957420056915],
         [-75.3824788396162, 2.7151965892416166],
         [-75.38780034230174, 2.724133878790875],
         [-75.38093388722362, 2.723790943961946],
         [-75.37612736866893, 2.7244768135221347],
         [-75.3934651677412, 2.7335645482719335],
         [-75.40496647999706, 2.7435095376142487],
         [-75.35072148487987, 2.632961480340999],
         [-75.42239662236346, 2.602002423442162],
         [-75.39822505871896, 2.6864419875952392],
         [-75.39238857190256, 2.6883281860586603],
         [-75.39359020154123, 2.699473844666446],
         [-75.3718339837633, 2.7750627935615184],
         [-75.3965306047705, 2.6724257046869857],
         [-75.39365527670654, 2.6717719572833656],
         [-75.40408368517683, 2.6754001244934273],
         [-75.40178771426008, 2.6749607216044176],
         [-75.40498490740583, 2.67603243569151],
         [-75.40635819842146, 2.675743072980319],
         [-75.40156777312086, 2.676825503512748],
         [-75.39462496017461, 2.6791361570501464],
         [-75.39151896213536, 2.678632452821839]]),
    imageVisParam11 = {"opacity":1,"bands":["classification"],"min":0,"max":2,"gamma":1},
    Elevations = ee.Image("USGS/SRTMGL1_003"),
    CHIRPS = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY"),
    FLDAS = ee.ImageCollection("NASA/FLDAS/NOAH01/C/GL/M/V001");

/*--------------------------------------------------------------------------------------------------------*/

NdviEvi = NdviEvi.filterDate("2000-01-01", "2019-12-31").filterBounds(CampoAlegre);
Ndwi = Ndwi.filterDate("2010-01-01", "2019-12-31").filterBounds(CampoAlegre);
CHIRPS = CHIRPS.filterDate("2000-01-01", "2019-12-31").filterBounds(CampoAlegre);
FLDAS = FLDAS.filterDate("2000-01-01", "2019-12-31").filterBounds(CampoAlegre);
print("FLDAS dataset: ",FLDAS);

//************************************************************************//
//*****************CALCULATE MONTHLY PRECIPITATIONS***********************//

// set start and end year
var startyear = 2000;
var endyear = 2019;
 
// make a date object
var startdate = ee.Date.fromYMD(startyear, 1, 1);
var enddate = ee.Date.fromYMD(endyear + 1, 1, 1);
 
// make a list with years
var years = ee.List.sequence(startyear, endyear);
// make a list with months
var months = ee.List.sequence(1, 12);

var monthlyPrecip =  ee.ImageCollection.fromImages(
  years.map(function (y) {
    return months.map(function(m) {
      var w = CHIRPS.filter(ee.Filter.calendarRange(y, y, 'year'))
                    .filter(ee.Filter.calendarRange(m, m, 'month'))
                    .sum();
      return w.set('year', y)
              .set('month', m)
              .set('system:time_start', ee.Date.fromYMD(y, m, 1));
 
    });
  }).flatten()
);

print("Monthly P. Dataset: ", monthlyPrecip);
//***********************************************************************//
//******************CALCULATE MEAN MONTHLY PRECIPITATION******************//

var meanMonthlyP =  ee.ImageCollection.fromImages(
  months.map(function (m) {
    var w = monthlyPrecip.filter(ee.Filter.eq('month', m)).mean();
    return w.set('month', m)
            .set('system:time_start',ee.Date.fromYMD(1, m, 1));
  }).flatten()
);

print("Mean Monthly P. Dataset: ", meanMonthlyP);


//***********************************************************************//
//******************CALCULATE MEAN MONTHLY TEMPERATURE******************//


var FLDASconvertTemp = function(image){
  var Temperat = image.expression(
    'K-273',
    {'K':image.select('Tair_f_tavg')
    }).set('system:time_start', image.get('system:time_start')).
    rename('Tair_in_C');
    return image.addBands(Temperat);
};

FLDAS = FLDAS.map(FLDASconvertTemp);

print("New FLDAS: ", FLDAS);

var meanMonthlyT = ee.ImageCollection.fromImages(
    months.map(function(m) {
      var w = FLDAS.select('Tair_in_C')
                    .filter(ee.Filter.calendarRange(m, m, 'month'))
                    .mean();
      return w.set('month', m)
              .set('system:time_start', ee.Date.fromYMD(1, m, 1));
 
    }).flatten()
);

print("Mean Monthly T. Dataset: ", meanMonthlyT);


//***********************************************************************//
//******************CALCULATE MEAN SOIL MOISTURE******************//

var meanMonthlySM = ee.ImageCollection.fromImages(
    months.map(function(m) {
      var w = FLDAS.select('SoilMoi00_10cm_tavg')
                    .filter(ee.Filter.calendarRange(m, m, 'month'))
                    .mean();
      return w.set('month', m)
              .set('system:time_start', ee.Date.fromYMD(1, m, 1));
 
    }).flatten()
);

print("Mean Monthly SM. Dataset: ", meanMonthlySM);


//***********************************************************************//
//******************CALCULATE RAINFALL ANOMALIES******************//



//***********************************************************************//
//****************************CHARTS*************************************//
/*-----------------------------------------------------------------------*/


//Monthly Prec.

var title = {
  title: 'Monthly precipitation',
  hAxis: {title: 'Time'},
  vAxis: {title: 'Precipitation (mm)'},
};

var chartMonthly = ui.Chart.image.seriesByRegion({
  imageCollection: monthlyPrecip,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'precipitation',
  scale: 2500,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title)
  .setChartType('ColumnChart');
 
print(chartMonthly);

//Mean monthly prec.
var title2 = {
  title: 'Mean monthly precipitation',
  hAxis: {title: 'Time'},
  vAxis: {title: 'Precipitation (mm)'},
};

var chartMeanMonthly = ui.Chart.image.seriesByRegion({
  imageCollection: meanMonthlyP,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'precipitation',
  scale: 2500,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title2)
  .setChartType('ColumnChart');
 
print(chartMeanMonthly);


//Monthly Temp.
var title3 = {
  title: 'Monthly temperature',
  hAxis: {title: 'Time'},
  vAxis: {title: 'Temperature (°C)'},
};


var chartMonthlyT = ui.Chart.image.seriesByRegion({
  imageCollection: FLDAS,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'Tair_in_C',
  scale: 2500,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title3)
  .setChartType('ColumnChart');
 
print(chartMonthlyT);

//Mean monthly temp.
var title4 = {
  title: 'Mean monthly temperature',
  hAxis: {title: 'Time'},
  vAxis: {title: 'Temperature (°C)'},
};

var chartMeanMonthlyT = ui.Chart.image.seriesByRegion({
  imageCollection: meanMonthlyT,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'Tair_in_C',
  scale: 2500,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title4)
  .setChartType('ColumnChart');
 
print(chartMeanMonthlyT);

//Monthly SM.
var title5 = {
  title: 'Monthly soil moisture',
  hAxis: {title: 'Time'},
  vAxis: {title: 'Soil moisture'},
};


var chartMonthlySM = ui.Chart.image.seriesByRegion({
  imageCollection: FLDAS,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'SoilMoi00_10cm_tavg',
  scale: 2500,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title5)
  .setChartType('ColumnChart');
 
print(chartMonthlySM);

//Mean monthly soil moisture.
var title6 = {
  title: 'Mean monthly soil moisture',
  hAxis: {title: 'Time'},
  vAxis: {title: 'Soil moisture'},
};

var chartMeanMonthlySM = ui.Chart.image.seriesByRegion({
  imageCollection: meanMonthlySM,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'SoilMoi00_10cm_tavg',
  scale: 2500,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title6)
  .setChartType('ColumnChart');
 
print(chartMeanMonthlySM);

//***********************************************************************//
//*************************Monthly SVI  function*************************//
//-----------------------------------------------------------------------//

var SVIconvert_NDVI = function(image){
  var SVI = image.expression(
    'NDVI/10000',
    {'NDVI':image.select('NDVI')
    }).set('system:time_start', image.get('system:time_start')).
    rename('ndvi_d');
    return image.addBands(SVI);
};

var SVIconvert_EVI = function(image){
  var SVI = image.expression(
    'EVI/10000',
    {'EVI':image.select('EVI')
    }).set('system:time_start', image.get('system:time_start')).
    rename('evi_d');
    return image.addBands(SVI);
};


NdviEvi = NdviEvi.map(SVIconvert_NDVI);
NdviEvi = NdviEvi.map(SVIconvert_EVI);

//Monthly NDVI

var title7 = {
  title: 'Monthly NDVI',
  hAxis: {title: 'Time'},
  vAxis: {title: 'NDVI'},
};


var chartMonthlyNDVI = ui.Chart.image.seriesByRegion({
  imageCollection: NdviEvi,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'ndvi_d',
  scale: 250,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title7)
  .setChartType('ColumnChart');
 
print(chartMonthlyNDVI);

//Monthly EVI

var title8 = {
  title: 'Monthly EVI',
  hAxis: {title: 'Time'},
  vAxis: {title: 'EVI'},
};


var chartMonthlyEVI = ui.Chart.image.seriesByRegion({
  imageCollection: NdviEvi,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'evi_d',
  scale: 250,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title8)
  .setChartType('ColumnChart');
 
print(chartMonthlyEVI);

//Monthly NDWI

var title9 = {
  title: 'Monthly NDWI',
  hAxis: {title: 'Time'},
  vAxis: {title: 'NDWI'},
};


var chartMonthlyNDWI = ui.Chart.image.seriesByRegion({
  imageCollection: Ndwi,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'NDWI',
  scale: 500,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title9)
  .setChartType('ColumnChart');
 
print(chartMonthlyNDWI);

//***********************************************************************//
//***************************CALCULATE MEAN SVI***************************//
//-----------------------------------------------------------------------//
var meanMonthlySVI_NDVI = ee.ImageCollection.fromImages(
    months.map(function(m) {
      var w = NdviEvi.select('ndvi_d')
                    .filter(ee.Filter.calendarRange(m, m, 'month'))
                    .mean();
      return w.set('month', m)
              .set('system:time_start', ee.Date.fromYMD(1, m, 1));
 
    }).flatten()
);

print("Mean Monthly SVI-NDVI Dataset: ", meanMonthlySVI_NDVI);

var meanMonthlySVI_EVI = ee.ImageCollection.fromImages(
    months.map(function(m) {
      var w = NdviEvi.select('evi_d')
                    .filter(ee.Filter.calendarRange(m, m, 'month'))
                    .mean();
      return w.set('month', m)
              .set('system:time_start', ee.Date.fromYMD(1, m, 1));
 
    }).flatten()
);

print("Mean Monthly SVI-EVI Dataset: ", meanMonthlySVI_EVI);

var meanMonthlySVI_NDWI = ee.ImageCollection.fromImages(
    months.map(function(m) {
      var w = Ndwi.select('NDWI')
                    .filter(ee.Filter.calendarRange(m, m, 'month'))
                    .mean();
      return w.set('month', m)
              .set('system:time_start', ee.Date.fromYMD(1, m, 1));
 
    }).flatten()
);

print("Mean Monthly SVI-NDWI Dataset: ", meanMonthlySVI_EVI);

//Mean Monthly NDVI

var title10 = {
  title: 'Mean monthly NDVI',
  hAxis: {title: 'Time'},
  vAxis: {title: 'NDVI'},
};

var chartMeanMonthlyNDVI = ui.Chart.image.seriesByRegion({
  imageCollection: meanMonthlySVI_NDVI,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'ndvi_d',
  scale: 250,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title10)
  .setChartType('ColumnChart');
 
print(chartMeanMonthlyNDVI);

//Mean Monthly EVI

var title11 = {
  title: 'Mean monthly EVI',
  hAxis: {title: 'Time'},
  vAxis: {title: 'EVI'},
};

var chartMeanMonthlyEVI = ui.Chart.image.seriesByRegion({
  imageCollection: meanMonthlySVI_EVI,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'evi_d',
  scale: 250,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title11)
  .setChartType('ColumnChart');
 
print(chartMeanMonthlyEVI);

//Mean Monthly NDWI

var title11 = {
  title: 'Mean monthly NDWI',
  hAxis: {title: 'Time'},
  vAxis: {title: 'NDWI'},
};

var chartMeanMonthlyNDWI = ui.Chart.image.seriesByRegion({
  imageCollection: meanMonthlySVI_NDWI,
  regions: CampoAlegre,
  reducer: ee.Reducer.mean(),
  band: 'NDWI',
  scale: 500,
  xProperty: 'system:time_start',
  seriesProperty: 'SITE'
}).setOptions(title11)
  .setChartType('ColumnChart');
 
print(chartMeanMonthlyNDWI);

//***********************************************************************//
//*****************************CHARTS DOYs ******************************//
//-----------------------------------------------------------------------//

//DOY Rainfall

var DoyRainfall = ui.Chart.image.doySeries(
    monthlyPrecip, CampoAlegre, ee.Reducer.mean(), 2500)
    .setOptions({
      title:'Doy precipitation',
      hAxis:{title:'DOY'},
      vAxis:{title:'Precipitation (mm)'}
    }).setSeriesNames(['precipitation']);
print(DoyRainfall);

var DoySoilM = ui.Chart.image.doySeries(
    FLDAS.select("SoilMoi00_10cm_tavg"), CampoAlegre, ee.Reducer.mean(), 2500)
    .setOptions({
      title:'Doy soil moisture',
      hAxis:{title:'DOY'},
      vAxis:{title:'Soil moisture'}
    }).setSeriesNames(['SM']);
print(DoySoilM);

var DoyTair = ui.Chart.image.doySeries(
    FLDAS.select("Tair_in_C"), CampoAlegre, ee.Reducer.mean(), 2500)
    .setOptions({
      title:'Doy Temperature',
      hAxis:{title:'DOY'},
      vAxis:{title:'Temperature (°C)'}
    }).setSeriesNames(['Temperature']);
print(DoyTair);

var DoyNDVI = ui.Chart.image.doySeries(
    NdviEvi.select("ndvi_d"), CampoAlegre, ee.Reducer.mean(), 250)
    .setOptions({
      title:'Doy NDVI',
      hAxis:{title:'DOY'},
      vAxis:{title:'NDVI'}
    }).setSeriesNames(['NDVI']);
print(DoyNDVI);

var DoyEVI = ui.Chart.image.doySeries(
    NdviEvi.select("evi_d"), CampoAlegre, ee.Reducer.mean(), 250)
    .setOptions({
      title:'Doy EVI',
      hAxis:{title:'DOY'},
      vAxis:{title:'EVI'}
    }).setSeriesNames(['EVI']);
print(DoyEVI);

var DoyNDWI = ui.Chart.image.doySeries(
    Ndwi.select("NDWI"), CampoAlegre, ee.Reducer.mean(), 500)
    .setOptions({
      title:'Doy NDWI',
      hAxis:{title:'DOY'},
      vAxis:{title:'NDWI'}
    }).setSeriesNames(['NDWI']);
print(DoyNDWI);