var NdviEvi = ee.ImageCollection("MODIS/006/MOD13Q1"),
    Ndwi = ee.ImageCollection("MODIS/MCD43A4_006_NDWI"),
    WaterMask = ee.Image("MODIS/MOD44W/MOD44W_005_2000_02_24"),
    Croplands = ee.Image("USGS/GFSAD1000_V0"),
    Center = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([-57.34971401618218, -30.1945753458267]),
    RioGrandeDoSul = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-57.50935909674871, -30.139662860453758],
          [-57.50935909674871, -30.257167898511362],
          [-57.189382290108085, -30.257167898511362],
          [-57.189382290108085, -30.139662860453758]]], null, false),
    crops1 = /* color: #d63000 */ee.Geometry.MultiPoint(
        [[-57.49054331329972, -30.224119008073323],
         [-57.163013406073155, -30.087118686090903],
         [-57.54015345123917, -30.25807985023494],
         [-57.392009682928624, -30.244437603387546],
         [-57.3825683071962, -30.237170850971722],
         [-57.353557534491124, -30.226047230293577],
         [-57.41209406403214, -30.10404993389705],
         [-57.31253046539933, -30.195042768968833],
         [-57.25519556549698, -30.14443557987681],
         [-57.359994836126866, -30.25600397835934],
         [-57.39252466705948, -30.213587281217716],
         [-57.40351099518448, -30.054287571088626],
         [-57.341026253973546, -30.220559113883155],
         [-57.34514612702042, -30.231386725279936],
         [-57.28300470856339, -30.110584025796427],
         [-57.18635935333878, -30.234352986095086],
         [-57.497066445623936, -30.155419992480457],
         [-57.47578043488175, -30.173823562950247],
         [-57.33724970368058, -30.187078712504643],
         [-57.24970240143448, -30.197464909853952],
         [-57.44245795141674, -30.263519336588903],
         [-57.36366537939526, -30.248543249750323],
         [-57.353966511597406, -30.24869153902938],
         [-57.21500662695385, -30.22696477465981],
         [-57.41421965490795, -30.2561057176117],
         [-57.1309783829353, -30.064641116171508],
         [-57.302811421265375, -30.13459104323219],
         [-57.306855035211576, -30.23595438199685],
         [-57.346337151910795, -30.178097101001786],
         [-57.218277764703764, -30.045936577842653],
         [-57.25175173320962, -30.191155048441814],
         [-57.13090212383462, -30.071640047034307],
         [-57.21865643996603, -30.09913243169955],
         [-57.27908124465353, -30.246645387184167],
         [-57.33178128737814, -30.248869745835247],
         [-57.33281125563986, -30.25583907684051],
         [-57.19067563552267, -30.197845126915396],
         [-57.35049237746603, -30.254059720183477],
         [-57.33174222456889, -30.175824119772138],
         [-57.26805585371928, -30.197487995052487],
         [-57.239560065145064, -30.2054994540151],
         [-57.23990338789897, -30.19392713734519],
         [-57.26170438277202, -30.190366150863444],
         [-57.34101193892436, -30.17300449797283],
         [-57.28058713423686, -30.161725204079882],
         [-57.41671460616069, -30.236455356434437],
         [-57.32582947755661, -30.24274996074694],
         [-57.26797959352341, -30.24690222076902],
         [-57.46813675905075, -30.137995746036193],
         [-57.18352219606247, -30.179703051862457],
         [-57.388147430128285, -30.2219902817361],
         [-57.39776046723766, -30.217243624790097],
         [-57.397417144483754, -30.1751070103462],
         [-57.38505752534313, -30.167983547904303],
         [-57.375444488233754, -30.167686725796145],
         [-57.39604385346813, -30.18727506747882],
         [-57.38952072114391, -30.189649147287206],
         [-57.47844131440563, -30.250168838977316],
         [-57.213396148390004, -30.25135512731476],
         [-57.216829375929066, -30.16204693592477],
         [-57.27154469682687, -30.157146952468786],
         [-57.27154469682687, -30.167239481708407],
         [-57.21317982866281, -30.168129949391755],
         [-57.212493183155, -30.254763619028246],
         [-57.33746266557687, -30.159818604866402],
         [-57.34158253862375, -30.14794404019372],
         [-57.47788167192453, -30.181485999248377],
         [-57.48509144975656, -30.173175780978973],
         [-57.42947316362375, -30.215906577999085],
         [-57.44938588335031, -30.207302561600336],
         [-57.324416400928435, -30.187421440305275],
         [-57.3172066230964, -30.150022192214486],
         [-57.420546772022185, -30.25535673724504],
         [-57.47925496294015, -30.255653295010404],
         [-57.464492084522185, -30.255653295010404],
         [-57.20013356401437, -30.15685009773424],
         [-57.4050972480964, -30.17851814461033],
         [-57.353598835010466, -30.198697792923394],
         [-57.33334279253, -30.145865844393878],
         [-57.301413776416716, -30.148240921734217],
         [-57.42123341753, -30.205819034460646],
         [-57.32372975542062, -30.19721413609355],
         [-57.230002643604216, -30.16100598269705],
         [-57.42912984086984, -30.19454349745775],
         [-57.27360463335031, -30.187421440305275],
         [-57.27942212928459, -30.269238062327233],
         [-57.28216871131584, -30.281097997570566],
         [-57.346713389050215, -30.26212141333881],
         [-57.2141908060424, -30.27249968738158],
         [-57.18603834022209, -30.24165817461934]]),
    crops2 = /* color: #98ff00 */ee.Geometry.MultiPoint(
        [[-57.504700632341766, -30.157589987059986],
         [-57.19141861940231, -30.198547183344818],
         [-57.30540177369919, -30.235928009838688],
         [-57.437961038131014, -30.237765435196717],
         [-57.54387610771109, -30.255338084074097],
         [-57.44002097465445, -30.262825894939258],
         [-57.38817923881461, -30.24073150354289],
         [-57.254197534102694, -30.144882278779548],
         [-57.18223176103541, -30.23123976978707],
         [-57.3133810530276, -30.192521805855627],
         [-57.35449395280787, -30.246737517787174],
         [-57.32364509427084, -30.24227325824166],
         [-57.33205650174154, -30.249762064964496],
         [-57.357376554842126, -30.22438695294494],
         [-57.414110639925134, -30.102536110089556],
         [-57.133701780672205, -30.117460164960722],
         [-57.219360807771814, -30.099937163635293],
         [-57.33334396206869, -30.190729366445314],
         [-57.34201286160482, -30.187539218475997],
         [-57.48835418545736, -30.156299986823274],
         [-57.470501402254236, -30.13915501453442],
         [-57.326241340515445, -30.170594405563264],
         [-57.28908984767255, -30.224300675451115],
         [-57.44253895380332, -30.2387151724558],
         [-57.48923084833457, -30.225144399518037],
         [-57.18232046595552, -30.179430057886012],
         [-57.1318520211313, -30.063020845056922],
         [-57.2238228340339, -30.148537802381263],
         [-57.27463460161203, -30.143490709875092],
         [-57.44320607378, -30.194840238661136],
         [-57.42809987260812, -30.242010711190538]]),
    RioGrandeDoSul2 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry({
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -57.078506285408906,
                -30.0674607121418
              ],
              [
                -57.30509930298703,
                -29.94853984596945
              ],
              [
                -57.317458922127656,
                -29.98661003056609
              ],
              [
                -57.339431578377656,
                -30.018720399907025
              ],
              [
                -57.37651043579953,
                -30.02942154684581
              ],
              [
                -57.41770916626828,
                -30.05438639695123
              ],
              [
                -57.42869549439328,
                -30.08172163185648
              ],
              [
                -57.45616131470578,
                -30.12092855914528
              ],
              [
                -57.490493590096406,
                -30.14943291612472
              ],
              [
                -57.54679852173703,
                -30.17080578036826
              ],
              [
                -57.58525067017453,
                -30.18979999191526
              ],
              [
                -57.550918394783906,
                -30.20879054084404
              ],
              [
                -57.54867299962717,
                -30.222951853154576
              ],
              [
                -57.55862935949045,
                -30.248164380299627
              ],
              [
                -57.553822840935766,
                -30.261213030368722
              ],
              [
                -57.541119899041234,
                -30.272184417009733
              ],
              [
                -57.5229237930842,
                -30.28107923578961
              ],
              [
                -57.504384364373266,
                -30.282265150714984
              ],
              [
                -57.4954579727717,
                -30.266550614847425
              ],
              [
                -57.4679921524592,
                -30.261509570451437
              ],
              [
                -57.455975856072484,
                -30.266254089988298
              ],
              [
                -57.443959559685766,
                -30.271591400428647
              ],
              [
                -57.42233022618967,
                -30.271591400428647
              ],
              [
                -57.40962728429514,
                -30.27870736294036
              ],
              [
                -57.41443380284983,
                -30.288194510335895
              ],
              [
                -57.4072240250178,
                -30.2941235115829
              ],
              [
                -57.39349111486155,
                -30.28700866708029
              ],
              [
                -57.38834127355295,
                -30.27307393516398
              ],
              [
                -57.37220510411936,
                -30.268033225709623
              ],
              [
                -57.35950216222483,
                -30.265661037583413
              ],
              [
                -57.35469564367014,
                -30.272777430008222
              ],
              [
                -57.346112574822484,
                -30.27366694278847
              ],
              [
                -57.32997640538889,
                -30.265957564233627
              ],
              [
                -57.32173665929514,
                -30.25913722471717
              ],
              [
                -57.315503913671634,
                -30.25265870528215
              ],
              [
                -57.306234199316165,
                -30.25710709993457
              ],
              [
                -57.297994453222415,
                -30.269561533127877
              ],
              [
                -57.29044135263648,
                -30.28468264946737
              ],
              [
                -57.28220160654273,
                -30.28586852083935
              ],
              [
                -57.276021796972415,
                -30.27786361092024
              ],
              [
                -57.27190192392554,
                -30.26541023091638
              ],
              [
                -57.26160224130835,
                -30.26007258444735
              ],
              [
                -57.2533624952146,
                -30.26748590396358
              ],
              [
                -57.249585944921634,
                -30.278753077604676
              ],
              [
                -57.240316230566165,
                -30.283496763761423
              ],
              [
                -57.2310465162107,
                -30.28468264946737
              ],
              [
                -57.21628363779273,
                -30.282014386472355
              ],
              [
                -57.20255072763648,
                -30.263927580445156
              ],
              [
                -57.18950446298804,
                -30.25265870528215
              ],
              [
                -57.17371161630835,
                -30.24376131166263
              ],
              [
                -57.167188483984134,
                -30.231006975905785
              ],
              [
                -57.17027838876929,
                -30.214097515252195
              ],
              [
                -57.173250752983726,
                -30.20341635822852
              ],
              [
                -57.167757588921226,
                -30.190360036573434
              ],
              [
                -57.15745790630404,
                -30.176114802199447
              ],
              [
                -57.14715822368685,
                -30.157117952548017
              ],
              [
                -57.1334253135306,
                -30.135445202480117
              ],
              [
                -57.12165644674473,
                -30.125096159167406
              ],
              [
                -57.11410334615879,
                -30.10727750849509
              ],
              [
                -57.095563917447855,
                -30.103119360864195
              ],
              [
                -57.08492091207676,
                -30.086187953668862
              ],
              [
                -57.069814710904886,
                -30.080840591119546
              ]
            ]
          ],
          "evenOdd": true
        },
        {
          "type": "Point",
          "coordinates": [
            -57.53521657182687,
            -30.187421440305275
          ]
        }
      ],
      "coordinates": []
    }),
    NonCrop1 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Geometry.MultiPoint(
        [[-57.478479530852276, -30.219504438658667],
         [-57.4633733296804, -30.163715350044484],
         [-57.523060734922055, -30.236241870134954],
         [-57.45233624761737, -30.248105790356494],
         [-57.49319165533221, -30.19826770386068],
         [-57.37680524175799, -30.21725661930399],
         [-57.248402531797055, -30.212509733946735],
         [-57.231923039609555, -30.282503057785654],
         [-57.2068604785744, -30.18432038610751],
         [-57.4046143848244, -30.167106080031715],
         [-57.498341496640805, -30.175120010422408],
         [-57.377491887265805, -30.18194617785871],
         [-57.30196088140643, -30.173042387336714],
         [-57.17561810796893, -30.214586524471606],
         [-57.149525578672055, -30.12286934019295],
         [-57.099057133847836, -30.086633890853015],
         [-57.073651250058774, -30.080395301233917],
         [-57.184201176816586, -30.072076569669637],
         [-57.193470891172055, -30.134450000381293],
         [-57.15261548345721, -30.129105249092067],
         [-57.3496827441994, -30.067025569985237],
         [-57.373028691465024, -30.091089785361586],
         [-57.37337201421893, -30.108911355233996],
         [-57.17905133550799, -30.088416272751093],
         [-57.3551759082619, -30.12999606106953],
         [-57.4156007129494, -30.189068630935814],
         [-57.43002026861346, -30.112475283574987],
         [-57.22436993902362, -30.148107494353773],
         [-57.5254639941994, -30.188771872340176],
         [-57.17184155767596, -30.029877951560447],
         [-57.29269116705096, -30.040875098186905],
         [-57.23604291265643, -29.99063494777432],
         [-57.13338940923846, -30.097624734080664],
         [-57.236386235410336, -30.067322694750057],
         [-57.20377057378924, -30.04176670523547],
         [-57.17218488042987, -30.052762532372395],
         [-57.247372563535336, -30.11485116437738],
         [-57.266598637754086, -30.032255816398123],
         [-57.325306828672055, -30.09257503891016],
         [-57.30814069097674, -30.140388273503735],
         [-57.34521954839862, -30.111584313542426],
         [-57.21887677496112, -30.01144756506438],
         [-57.42710958949068, -30.117085043853194],
         [-57.40513693324068, -30.074014312094693],
         [-57.43019949427583, -30.0906507498178],
         [-57.1538246773813, -30.15716850483286],
         [-57.15794455042818, -30.138168004678676],
         [-57.20188986292818, -30.108472398843517],
         [-57.45079885951021, -30.202576738473358],
         [-57.10919271937349, -30.103720273303043],
         [-57.46208882524484, -30.170801304175534],
         [-57.26364827348703, -30.22421319024242],
         [-57.28562092973703, -30.18831172561662],
         [-57.21695637895578, -30.19305977802678],
         [-57.46792531206125, -30.144084498865116],
         [-57.2948906440925, -30.212346386598984],
         [-57.419516803760466, -30.146459619089548],
         [-57.36801839067453, -30.188014964740326],
         [-57.21111989213937, -30.20759926434477],
         [-57.51633382036203, -30.187421440305275],
         [-57.54786044363994, -30.175371967917187],
         [-57.544770538854785, -30.178785102023337],
         [-57.539277374792285, -30.1817529486198],
         [-57.536530792761035, -30.18516586167833],
         [-57.531037628698535, -30.185462631138815],
         [-57.535500824499316, -30.189023794922008],
         [-57.50546008353252, -30.185759399705173],
         [-57.50391513113994, -30.19065595195743],
         [-57.49773532156963, -30.18264328516497],
         [-57.50048190360088, -30.196294104492576],
         [-57.29967817176506, -30.20220251802129],
         [-57.26568921912834, -30.22979347607925],
         [-57.40954145301506, -30.255597365320885],
         [-57.23479017127678, -30.234242905844106],
         [-57.19908460487053, -30.20724660439949],
         [-57.445590342175215, -30.242844565708953],
         [-57.19530805457756, -30.253521440979014],
         [-57.47477277625725, -30.204872948892646],
         [-57.272555674206465, -30.26034217049617],
         [-57.199427927624434, -30.237209080482405]]),
    NonCrop2 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Geometry.MultiPoint(
        [[-57.49461570028587, -30.200812680192758],
         [-57.42972769979759, -30.113240572736395],
         [-57.405426281951726, -30.166951876781905],
         [-57.378990429900945, -30.17763698920849],
         [-57.459671277068914, -30.163389915216563],
         [-57.47924067404157, -30.220959176314423],
         [-57.52146937277204, -30.235791158329107],
         [-57.24921442892438, -30.213542346441326],
         [-57.224151867889226, -30.14706261149336],
         [-57.416137305173955, -30.12913026840341],
         [-57.37289947346958, -30.091084247402105],
         [-57.08897155598911, -30.089301913593644],
         [-57.325864256184424, -30.092569501033864],
         [-57.23625701741489, -30.067614279349282],
         [-57.21840423421177, -30.01186606843844],
         [-57.17171233968052, -30.030296377153395],
         [-57.50267547444614, -30.163368314900872],
         [-57.174802244465674, -30.214410806426038],
         [-57.150083006184424, -30.15624400412942],
         [-57.26612609700474, -30.02821570740806],
         [-57.48859924153599, -30.166135226611726],
         [-57.194028318684424, -30.2276435171504],
         [-57.1926550276688, -30.252261707742345],
         [-57.23282378987583, -30.281321028273215],
         [-57.378049314778174, -30.18224684347097],
         [-57.452207029621924, -30.248406253850565],
         [-57.23727200314494, -29.990069001298465],
         [-57.28459096147531, -30.1933565237015],
         [-57.27360463335031, -30.223026574298405],
         [-57.23309254838937, -30.236078562199456]]),
    Elevations = ee.Image("USGS/SRTMGL1_003"),
    CHIRPS = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY"),
    FLDAS = ee.ImageCollection("NASA/FLDAS/NOAH01/C/GL/M/V001");
/*----------------------------------------------------------------------------------------------------------------------*/
NdviEvi = NdviEvi.filterDate("2000-01-01", "2019-12-31").filterBounds(RioGrandeDoSul2);
Ndwi = Ndwi.filterDate("2010-01-01", "2019-12-31").filterBounds(RioGrandeDoSul2);
CHIRPS = CHIRPS.filterDate("2000-01-01", "2019-12-31").filterBounds(RioGrandeDoSul2);
FLDAS = FLDAS.filterDate("2000-01-01", "2019-12-31").filterBounds(RioGrandeDoSul2);
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
//*************************GRÁFICOS*************************************//
/*-----------------------------------------------------------------------*/


//Monthly Prec.

var title = {
  title: 'Monthly precipitation',
  hAxis: {title: 'Time'},
  vAxis: {title: 'Precipitation (mm)'},
};

var chartMonthly = ui.Chart.image.seriesByRegion({
  imageCollection: monthlyPrecip,
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
  regions: RioGrandeDoSul2,
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
    monthlyPrecip, RioGrandeDoSul2, ee.Reducer.mean(), 2500)
    .setOptions({
      title:'Doy precipitation',
      hAxis:{title:'DOY'},
      vAxis:{title:'Precipitation (mm)'}
    }).setSeriesNames(['precipitation']);
print(DoyRainfall);

var DoySoilM = ui.Chart.image.doySeries(
    FLDAS.select("SoilMoi00_10cm_tavg"), RioGrandeDoSul2, ee.Reducer.mean(), 2500)
    .setOptions({
      title:'Doy soil moisture',
      hAxis:{title:'DOY'},
      vAxis:{title:'Soil moisture'}
    }).setSeriesNames(['SM']);
print(DoySoilM);

var DoyTair = ui.Chart.image.doySeries(
    FLDAS.select("Tair_in_C"), RioGrandeDoSul2, ee.Reducer.mean(), 2500)
    .setOptions({
      title:'Doy Temperature',
      hAxis:{title:'DOY'},
      vAxis:{title:'Temperature (°C)'}
    }).setSeriesNames(['Temperature']);
print(DoyTair);

var DoyNDVI = ui.Chart.image.doySeries(
    NdviEvi.select("ndvi_d"), RioGrandeDoSul2, ee.Reducer.mean(), 250)
    .setOptions({
      title:'Doy NDVI',
      hAxis:{title:'DOY'},
      vAxis:{title:'NDVI'}
    }).setSeriesNames(['NDVI']);
print(DoyNDVI);

var DoyEVI = ui.Chart.image.doySeries(
    NdviEvi.select("evi_d"), RioGrandeDoSul2, ee.Reducer.mean(), 250)
    .setOptions({
      title:'Doy EVI',
      hAxis:{title:'DOY'},
      vAxis:{title:'EVI'}
    }).setSeriesNames(['EVI']);
print(DoyEVI);

var DoyNDWI = ui.Chart.image.doySeries(
    Ndwi.select("NDWI"), RioGrandeDoSul2, ee.Reducer.mean(), 500)
    .setOptions({
      title:'Doy NDWI',
      hAxis:{title:'DOY'},
      vAxis:{title:'NDWI'}
    }).setSeriesNames(['NDWI']);
print(DoyNDWI);