var grey_5 = ['#f7f7f7', '#cccccc', '#969696', '#636363', '#252525'];
var grey_7 = ['#f7f7f7', '#bdbdbd', '#969696', '#737373', '#525252', '#252525'];

var rd_bu_5 = ['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0'];
var rd_bu_7 = ['#b2182b', '#ef8a62', '#fddbc7', '#f7f7f7', '#d1e5f0', '#67a9cf', '#2166ac'];

var pu_gn_5 = ['#762a83', '#af8dc3', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#7fbf7b', '#1b7837'];
var pu_gn_7 = ['#7b3294', '#c2a5cf', '#f7f7f7', '#a6dba0', '#008837'];

var br_bg_5 = ['#a6611a', '#dfc27d', '#f5f5f5', '#80cdc1', '#018571'];
var br_bg_7 = ['#8c510a', '#d8b365', '#f6e8c3', '#f5f5f5', '#c7eae5', '#5ab4ac', '#01665e'];

var pi_yg_5 = ['#d01c8b', '#f1b6da', '#f7f7f7', '#b8e186', '#4dac26'];
var pi_yg_7 = ['#c51b7d', '#e9a3c9', '#fde0ef', '#f7f7f7', '#e6f5d0', '#a1d76a', '#4d9221'];

var rd_yl_5 = ['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'];
var rd_yl_7 = ['#ffffb2', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#b10026'];

var pu_bu_5 = ['#edf8fb', '#b3cde3', '#8c96c6', '#8856a7', '#810f7c'];
var pu_bu_7 = ['#edf8fb', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#6e016b'];

var spectral_5 = ['#d7191c', '#fdae61', '#ffffbf', '#abdda4', '#2b83ba'];
var spectral_7 = ['#d53e4f', '#fc8d59', '#fee08b', '#ffffbf', '#e6f598', '#99d594', '#3288bd'];

var variables = { 1: {'title': 'Percentage of Population Aged 0-19 in 2017',
                      'field_name': 'pop_19_percent',
                      'test_areas_5':['North Herefordshire','North East Derbyshire','Bolton West','Leeds Central','Newcastle upon Tyne Central'],
                      'test_areas_7': ['Aberdeen South','Bournemouth West','Folkestone and Hythe','Huntingdon','Liverpool, West Derby', 'Belfast North','Newry and Armagh']},
                  2: {'title': 'Youth Claimant Rate 2010',
                      'field_name': 'youth_unemp_rate',
                      'test_areas_5': ['Edinburgh East','Congleton','Wyre Forest','Torbay','Dover'],
                      'test_areas_7': ['Kenilworth and Southam','Edinburgh South West','Dartford','Somerton and Frome','Barking', 'Camberwell and Peckham','Bootle']},
                  3: {'title': 'Percentage of Population Aged 25-64 in 2017',
                      'field_name': 'pop_2064_percent',
                      'test_areas_5': ['Westmorland and Lonsdale', 'Southport', 'South Cambridgeshire','Worcester','Battersea'],
                      'test_areas_7': ['Clwyd West','Cheadle','Wellingborough','Rochdale','Gateshead','Uxbridge and South Ruislip','Aberdeen North']},
                  4: {'title': 'Unemployment Rate 2017',
                      'field_name': 'percent_unemployed',
                      'test_areas_5':['Mid Dorset and North Poole', 'Altrincham and Sale West', 'Bolton West', 'Stockton South', 'Glasgow South West'],
                      'test_areas_7': ['Stone', 'West Aberdeenshire and Kincardine', 'Norwich North', 'Bristol East', 'Vale of Clwyd', 'Dudley South', 'South Thanet']},
                  5: {'title': 'Out of Work Rate 2017',
                      'field_name': 'percent_oow',
                      'test_areas_5': ['North Down', 'Tewkesbury', 'Dwyfor Meirionnydd', 'Wigan', 'Cynon Valley'],
                      'test_areas_7': ['Saffron Walden', 'North East Hertfordshire', 'Lichfield', 'Calder Valley', 'Leigh', 'Dudley North', 'Merthyr Tydfil and Rhymney']},
                  6: {'title': 'Percentage of Population Aged 65+ in 2017',
                      'field_name': 'pop_65_percent',
                      'test_areas_5': ['East Ham', 'Foyle', 'HartlePool', 'Forest of Dean', 'Derbyshire Dales'],
                      'test_areas_7': ['Bristol West', 'Ealing North', 'Hemel Hempstead', 'City of Chester', 'Sherwood', 'Elmet and Rothwell', 'South Suffolk']}}

var region_centres = ['Glasgow North East', 'City of Durham', 'Bolsover', 'Bexleyheath and Crayford', 'Bournemouth West', 'Mid Bedfordshire', 'Garston and Halewood'];
