// db.seed.ts
import { Injectable } from '@nestjs/common';
import { CityEntity } from '../../shared/entity/city.entity';
import { CountryEntity } from '../../shared/entity/country.entity';
import { StateEntity } from '../../shared/entity/state.entity';

@Injectable()
export class SeedDatabase {
  async run(): Promise<any> {
    const countries = [
      {
        name: 'Canada',
        countryCode: 'CA',
        dialerCode: '+1',
        states: [
          {
            name: 'Alberta',
            state_code: 'AB',
            cities: [
              {
                name: 'Airdrie',
              },
              {
                name: 'Athabasca',
              },
              {
                name: 'Banff',
              },
              {
                name: 'Barrhead',
              },
              {
                name: 'Bassano',
              },
              {
                name: 'Beaumont',
              },
              {
                name: 'Beaverlodge',
              },
              {
                name: 'Black Diamond',
              },
              {
                name: 'Blackfalds',
              },
              {
                name: 'Bon Accord',
              },
              {
                name: 'Bonnyville',
              },
              {
                name: 'Bow Island',
              },
              {
                name: 'Brooks',
              },
              {
                name: 'Calgary',
              },
              {
                name: 'Calmar',
              },
              {
                name: 'Camrose',
              },
              {
                name: 'Canmore',
              },
              {
                name: 'Cardston',
              },
              {
                name: 'Carstairs',
              },
              {
                name: 'Chestermere',
              },
              {
                name: 'Claresholm',
              },
              {
                name: 'Coaldale',
              },
              {
                name: 'Coalhurst',
              },
              {
                name: 'Cochrane',
              },
              {
                name: 'Cold Lake',
              },
              {
                name: 'Crossfield',
              },
              {
                name: 'Devon',
              },
              {
                name: 'Didsbury',
              },
              {
                name: 'Drayton Valley',
              },
              {
                name: 'Edmonton',
              },
              {
                name: 'Edson',
              },
              {
                name: 'Elk Point',
              },
              {
                name: 'Fairview',
              },
              {
                name: 'Falher',
              },
              {
                name: 'Fort Macleod',
              },
              {
                name: 'Fort McMurray',
              },
              {
                name: 'Fort Saskatchewan',
              },
              {
                name: 'Fox Creek',
              },
              {
                name: 'Gibbons',
              },
              {
                name: 'Grand Centre',
              },
              {
                name: 'Grande Cache',
              },
              {
                name: 'Grande Prairie',
              },
              {
                name: 'Grimshaw',
              },
              {
                name: 'Hanna',
              },
              {
                name: 'Heritage Pointe',
              },
              {
                name: 'High Level',
              },
              {
                name: 'High Prairie',
              },
              {
                name: 'High River',
              },
              {
                name: 'Hinton',
              },
              {
                name: 'Irricana',
              },
              {
                name: 'Jasper Park Lodge',
              },
              {
                name: 'Killam',
              },
              {
                name: 'Lac La Biche',
              },
              {
                name: 'Lacombe',
              },
              {
                name: 'Lamont',
              },
              {
                name: 'Larkspur',
              },
              {
                name: 'Laurel',
              },
              {
                name: 'Leduc',
              },
              {
                name: 'Lethbridge',
              },
              {
                name: 'Lloydminster',
              },
              {
                name: 'Magrath',
              },
              {
                name: 'Manning',
              },
              {
                name: 'Mannville',
              },
              {
                name: 'Maple Ridge',
              },
              {
                name: 'Mayerthorpe',
              },
              {
                name: 'Medicine Hat',
              },
              {
                name: 'Mill Woods Town Centre',
              },
              {
                name: 'Millet',
              },
              {
                name: 'Morinville',
              },
              {
                name: 'Nanton',
              },
              {
                name: 'Okotoks',
              },
              {
                name: 'Olds',
              },
              {
                name: 'Peace River',
              },
              {
                name: 'Penhold',
              },
              {
                name: 'Picture Butte',
              },
              {
                name: 'Pincher Creek',
              },
              {
                name: 'Ponoka',
              },
              {
                name: 'Provost',
              },
              {
                name: 'Raymond',
              },
              {
                name: 'Red Deer',
              },
              {
                name: 'Rideau Park',
              },
              {
                name: 'Rimbey',
              },
              {
                name: 'Rocky Mountain House',
              },
              {
                name: 'Sexsmith',
              },
              {
                name: 'Sherwood Park',
              },
              {
                name: 'Silver Berry',
              },
              {
                name: 'Slave Lake',
              },
              {
                name: 'Smoky Lake',
              },
              {
                name: 'Spirit River',
              },
              {
                name: 'Springbrook',
              },
              {
                name: 'Spruce Grove',
              },
              {
                name: 'St. Albert',
              },
              {
                name: 'Stettler',
              },
              {
                name: 'Stony Plain',
              },
              {
                name: 'Strathmore',
              },
              {
                name: 'Sundre',
              },
              {
                name: 'Swan Hills',
              },
              {
                name: 'Sylvan Lake',
              },
              {
                name: 'Taber',
              },
              {
                name: 'Tamarack',
              },
              {
                name: 'Three Hills',
              },
              {
                name: 'Tofield',
              },
              {
                name: 'Two Hills',
              },
              {
                name: 'Valleyview',
              },
              {
                name: 'Vegreville',
              },
              {
                name: 'Vermilion',
              },
              {
                name: 'Viking',
              },
              {
                name: 'Vulcan',
              },
              {
                name: 'Wainwright',
              },
              {
                name: 'Wembley',
              },
              {
                name: 'Westlake',
              },
              {
                name: 'Westlock',
              },
              {
                name: 'Wetaskiwin',
              },
              {
                name: 'Whitecourt',
              },
              {
                name: 'Wild Rose',
              },
            ],
          },
          {
            name: 'British Columbia',
            state_code: 'BC',
            cities: [
              {
                name: 'Abbotsford',
              },
              {
                name: 'Agassiz',
              },
              {
                name: 'Aldergrove',
              },
              {
                name: 'Aldergrove East',
              },
              {
                name: 'Anmore',
              },
              {
                name: 'Arbutus Ridge',
              },
              {
                name: 'Armstrong',
              },
              {
                name: 'Ashcroft',
              },
              {
                name: 'Barrière',
              },
              {
                name: 'Bowen Island',
              },
              {
                name: 'Burnaby',
              },
              {
                name: 'Burns Lake',
              },
              {
                name: 'Cache Creek',
              },
              {
                name: 'Campbell River',
              },
              {
                name: 'Castlegar',
              },
              {
                name: 'Cedar',
              },
              {
                name: 'Central Coast Regional District',
              },
              {
                name: 'Chase',
              },
              {
                name: 'Chemainus',
              },
              {
                name: 'Chetwynd',
              },
              {
                name: 'Chilliwack',
              },
              {
                name: 'Colwood',
              },
              {
                name: 'Coombs',
              },
              {
                name: 'Coquitlam',
              },
              {
                name: 'Courtenay',
              },
              {
                name: 'Cowichan Bay',
              },
              {
                name: 'Cranbrook',
              },
              {
                name: 'Creston',
              },
              {
                name: 'Cumberland',
              },
              {
                name: 'Dawson Creek',
              },
              {
                name: 'Delta',
              },
              {
                name: 'Denman Island',
              },
              {
                name: 'Denman Island Trust Area',
              },
              {
                name: 'Duck Lake',
              },
              {
                name: 'Duncan',
              },
              {
                name: 'East Wellington',
              },
              {
                name: 'Elkford',
              },
              {
                name: 'Ellison',
              },
              {
                name: 'Enderby',
              },
              {
                name: 'Fairwinds',
              },
              {
                name: 'Fernie',
              },
              {
                name: 'Fort Nelson',
              },
              {
                name: 'Fort St. John',
              },
              {
                name: 'Fraser Valley Regional District',
              },
              {
                name: 'French Creek',
              },
              {
                name: 'Fruitvale',
              },
              {
                name: 'Gibsons',
              },
              {
                name: 'Golden',
              },
              {
                name: 'Grand Forks',
              },
              {
                name: 'Hanceville',
              },
              {
                name: 'Hope',
              },
              {
                name: 'Hornby Island',
              },
              {
                name: 'Houston',
              },
              {
                name: 'Invermere',
              },
              {
                name: 'Kamloops',
              },
              {
                name: 'Kelowna',
              },
              {
                name: 'Kimberley',
              },
              {
                name: 'Kitimat',
              },
              {
                name: 'Ladner',
              },
              {
                name: 'Ladysmith',
              },
              {
                name: 'Lake Cowichan',
              },
              {
                name: 'Langford',
              },
              {
                name: 'Langley',
              },
              {
                name: 'Lillooet',
              },
              {
                name: 'Lions Bay',
              },
              {
                name: 'Logan Lake',
              },
              {
                name: 'Lumby',
              },
              {
                name: 'Mackenzie',
              },
              {
                name: 'Maple Ridge',
              },
              {
                name: 'Merritt',
              },
              {
                name: 'Metchosin',
              },
              {
                name: 'Metro Vancouver Regional District',
              },
              {
                name: 'Mission',
              },
              {
                name: 'Nakusp',
              },
              {
                name: 'Nanaimo',
              },
              {
                name: 'Nelson',
              },
              {
                name: 'New Westminster',
              },
              {
                name: 'North Cowichan',
              },
              {
                name: 'North Oyster/Yellow Point',
              },
              {
                name: 'North Saanich',
              },
              {
                name: 'North Vancouver',
              },
              {
                name: 'Oak Bay',
              },
              {
                name: 'Okanagan',
              },
              {
                name: 'Okanagan Falls',
              },
              {
                name: 'Oliver',
              },
              {
                name: 'Osoyoos',
              },
              {
                name: 'Parksville',
              },
              {
                name: 'Peace River Regional District',
              },
              {
                name: 'Peachland',
              },
              {
                name: 'Pemberton',
              },
              {
                name: 'Penticton',
              },
              {
                name: 'Pitt Meadows',
              },
              {
                name: 'Port Alberni',
              },
              {
                name: 'Port Coquitlam',
              },
              {
                name: 'Port McNeill',
              },
              {
                name: 'Port Moody',
              },
              {
                name: 'Powell River',
              },
              {
                name: 'Prince George',
              },
              {
                name: 'Prince Rupert',
              },
              {
                name: 'Princeton',
              },
              {
                name: 'Puntledge',
              },
              {
                name: 'Quesnel',
              },
              {
                name: 'Regional District of Alberni-Clayoquot',
              },
              {
                name: 'Regional District of Central Okanagan',
              },
              {
                name: 'Revelstoke',
              },
              {
                name: 'Richmond',
              },
              {
                name: 'Rossland',
              },
              {
                name: 'Royston',
              },
              {
                name: 'Salmo',
              },
              {
                name: 'Salmon Arm',
              },
              {
                name: 'Salt Spring Island',
              },
              {
                name: 'Saltair',
              },
              {
                name: 'Sechelt',
              },
              {
                name: 'Sicamous',
              },
              {
                name: 'Six Mile',
              },
              {
                name: 'Smithers',
              },
              {
                name: 'Sooke',
              },
              {
                name: 'South Pender Harbour',
              },
              {
                name: 'Sparwood',
              },
              {
                name: 'Summerland',
              },
              {
                name: 'Surrey',
              },
              {
                name: 'Terrace',
              },
              {
                name: 'Tofino',
              },
              {
                name: 'Trail',
              },
              {
                name: 'Tsawwassen',
              },
              {
                name: 'Tumbler Ridge',
              },
              {
                name: 'Ucluelet',
              },
              {
                name: 'Vancouver',
              },
              {
                name: 'Vanderhoof',
              },
              {
                name: 'Vernon',
              },
              {
                name: 'Victoria',
              },
              {
                name: 'Walnut Grove',
              },
              {
                name: 'Welcome Beach',
              },
              {
                name: 'West End',
              },
              {
                name: 'West Kelowna',
              },
              {
                name: 'West Vancouver',
              },
              {
                name: 'Whistler',
              },
              {
                name: 'White Rock',
              },
              {
                name: 'Williams Lake',
              },
            ],
          },
          {
            name: 'Manitoba',
            state_code: 'MB',
            cities: [
              {
                name: 'Altona',
              },
              {
                name: 'Beausejour',
              },
              {
                name: 'Boissevain',
              },
              {
                name: 'Brandon',
              },
              {
                name: 'Carberry',
              },
              {
                name: 'Carman',
              },
              {
                name: 'Cross Lake 19A',
              },
              {
                name: 'Dauphin',
              },
              {
                name: 'De Salaberry',
              },
              {
                name: 'Deloraine',
              },
              {
                name: 'Flin Flon',
              },
              {
                name: 'Gimli',
              },
              {
                name: 'Grunthal',
              },
              {
                name: 'Headingley',
              },
              {
                name: 'Ile des Chênes',
              },
              {
                name: 'Killarney',
              },
              {
                name: 'La Broquerie',
              },
              {
                name: 'Lac du Bonnet',
              },
              {
                name: 'Landmark',
              },
              {
                name: 'Lorette',
              },
              {
                name: 'Melita',
              },
              {
                name: 'Minnedosa',
              },
              {
                name: 'Moose Lake',
              },
              {
                name: 'Morden',
              },
              {
                name: 'Morris',
              },
              {
                name: 'Neepawa',
              },
              {
                name: 'Niverville',
              },
              {
                name: 'Portage la Prairie',
              },
              {
                name: 'Rivers',
              },
              {
                name: 'Roblin',
              },
              {
                name: 'Selkirk',
              },
              {
                name: 'Shilo',
              },
              {
                name: 'Souris',
              },
              {
                name: 'St. Adolphe',
              },
              {
                name: 'Steinbach',
              },
              {
                name: 'Stonewall',
              },
              {
                name: 'Swan River',
              },
              {
                name: 'The Pas',
              },
              {
                name: 'Thompson',
              },
              {
                name: 'Virden',
              },
              {
                name: 'West St. Paul',
              },
              {
                name: 'Winkler',
              },
              {
                name: 'Winnipeg',
              },
            ],
          },
          {
            name: 'New Brunswick',
            state_code: 'NB',
            cities: [
              {
                name: 'Baie Ste. Anne',
              },
              {
                name: 'Bathurst',
              },
              {
                name: 'Bouctouche',
              },
              {
                name: 'Campbellton',
              },
              {
                name: 'Dieppe',
              },
              {
                name: 'Edmundston',
              },
              {
                name: 'Florenceville-Bristol',
              },
              {
                name: 'Fredericton',
              },
              {
                name: 'Fundy Bay',
              },
              {
                name: 'Grande-Digue',
              },
              {
                name: 'Greater Lakeburn',
              },
              {
                name: 'Hampton',
              },
              {
                name: 'Harrison Brook',
              },
              {
                name: 'Keswick Ridge',
              },
              {
                name: 'Lincoln',
              },
              {
                name: 'Lutes Mountain',
              },
              {
                name: 'McEwen',
              },
              {
                name: 'Miramichi',
              },
              {
                name: 'Moncton',
              },
              {
                name: 'Nackawic',
              },
              {
                name: 'New Maryland',
              },
              {
                name: 'Noonan',
              },
              {
                name: 'Oromocto',
              },
              {
                name: 'Richibucto',
              },
              {
                name: 'Sackville',
              },
              {
                name: 'Saint Andrews',
              },
              {
                name: 'Saint John',
              },
              {
                name: 'Saint-Antoine',
              },
              {
                name: 'Saint-Léonard',
              },
              {
                name: 'Salisbury',
              },
              {
                name: 'Shediac',
              },
              {
                name: 'Shediac Bridge-Shediac River',
              },
              {
                name: 'Shippagan',
              },
              {
                name: 'Starlight Village',
              },
              {
                name: 'Sussex',
              },
              {
                name: 'Tracadie-Sheila',
              },
              {
                name: 'Wells',
              },
            ],
          },
          {
            name: 'Newfoundland and Labrador',
            state_code: 'NL',
            cities: [
              {
                name: 'Bay Roberts',
              },
              {
                name: 'Bay St. George South',
              },
              {
                name: 'Bonavista',
              },
              {
                name: 'Botwood',
              },
              {
                name: 'Burgeo',
              },
              {
                name: 'Carbonear',
              },
              {
                name: 'Catalina',
              },
              {
                name: 'Channel-Port aux Basques',
              },
              {
                name: 'Clarenville-Shoal Harbour',
              },
              {
                name: 'Conception Bay South',
              },
              {
                name: 'Corner Brook',
              },
              {
                name: 'Deer Lake',
              },
              {
                name: 'Fogo Island',
              },
              {
                name: 'Gambo',
              },
              {
                name: 'Goulds',
              },
              {
                name: 'Grand Bank',
              },
              {
                name: 'Grand Falls-Windsor',
              },
              {
                name: 'Happy Valley-Goose Bay',
              },
              {
                name: 'Harbour Breton',
              },
              {
                name: 'Labrador City',
              },
              {
                name: 'Lewisporte',
              },
              {
                name: 'Marystown',
              },
              {
                name: 'Mount Pearl',
              },
              {
                name: 'Pasadena',
              },
              {
                name: 'Springdale',
              },
              {
                name: 'St. Anthony',
              },
              {
                name: "St. John's",
              },
              {
                name: 'Stephenville',
              },
              {
                name: 'Stephenville Crossing',
              },
              {
                name: 'Torbay',
              },
              {
                name: 'Upper Island Cove',
              },
              {
                name: 'Wabana',
              },
            ],
          },
          {
            name: 'Northwest Territories',
            state_code: 'NT',
            cities: [
              {
                name: 'Behchokǫ̀',
              },
              {
                name: 'Fort McPherson',
              },
              {
                name: 'Fort Smith',
              },
              {
                name: 'Hay River',
              },
              {
                name: 'Inuvik',
              },
              {
                name: 'Norman Wells',
              },
              {
                name: 'Yellowknife',
              },
            ],
          },
          {
            name: 'Nova Scotia',
            state_code: 'NS',
            cities: [
              {
                name: 'Amherst',
              },
              {
                name: 'Annapolis County',
              },
              {
                name: 'Antigonish',
              },
              {
                name: 'Berwick',
              },
              {
                name: 'Bridgewater',
              },
              {
                name: 'Cape Breton County',
              },
              {
                name: 'Chester',
              },
              {
                name: 'Colchester',
              },
              {
                name: 'Cole Harbour',
              },
              {
                name: 'Cow Bay',
              },
              {
                name: 'Dartmouth',
              },
              {
                name: 'Digby',
              },
              {
                name: 'Digby County',
              },
              {
                name: 'English Corner',
              },
              {
                name: 'Eskasoni 3',
              },
              {
                name: 'Fall River',
              },
              {
                name: 'Glace Bay',
              },
              {
                name: 'Greenwood',
              },
              {
                name: 'Halifax',
              },
              {
                name: 'Hantsport',
              },
              {
                name: 'Hayes Subdivision',
              },
              {
                name: 'Kentville',
              },
              {
                name: 'Lake Echo',
              },
              {
                name: 'Lantz',
              },
              {
                name: 'Lower Sackville',
              },
              {
                name: 'Lunenburg',
              },
              {
                name: 'Middleton',
              },
              {
                name: 'New Glasgow',
              },
              {
                name: 'Oxford',
              },
              {
                name: 'Parrsboro',
              },
              {
                name: 'Pictou',
              },
              {
                name: 'Pictou County',
              },
              {
                name: 'Port Hawkesbury',
              },
              {
                name: 'Port Williams',
              },
              {
                name: 'Princeville',
              },
              {
                name: 'Shelburne',
              },
              {
                name: 'Springhill',
              },
              {
                name: 'Sydney',
              },
              {
                name: 'Sydney Mines',
              },
              {
                name: 'Truro',
              },
              {
                name: 'Windsor',
              },
              {
                name: 'Wolfville',
              },
              {
                name: 'Yarmouth',
              },
            ],
          },
          {
            name: 'Nunavut',
            state_code: 'NU',
            cities: [
              {
                name: 'Clyde River',
              },
              {
                name: 'Gjoa Haven',
              },
              {
                name: 'Iqaluit',
              },
              {
                name: 'Kugluktuk',
              },
              {
                name: 'Pangnirtung',
              },
              {
                name: 'Rankin Inlet',
              },
            ],
          },
          {
            name: 'Ontario',
            state_code: 'ON',
            cities: [
              {
                name: 'Ajax',
              },
              {
                name: 'Algoma',
              },
              {
                name: 'Alliston',
              },
              {
                name: 'Amherstburg',
              },
              {
                name: 'Amigo Beach',
              },
              {
                name: 'Ancaster',
              },
              {
                name: 'Angus',
              },
              {
                name: 'Arnprior',
              },
              {
                name: 'Atikokan',
              },
              {
                name: 'Attawapiskat',
              },
              {
                name: 'Aurora',
              },
              {
                name: 'Aylmer',
              },
              {
                name: 'Azilda',
              },
              {
                name: 'Ballantrae',
              },
              {
                name: 'Bancroft',
              },
              {
                name: 'Barrie',
              },
              {
                name: 'Bath',
              },
              {
                name: 'Belleville',
              },
              {
                name: 'Bells Corners',
              },
              {
                name: 'Belmont',
              },
              {
                name: 'Binbrook',
              },
              {
                name: 'Bluewater',
              },
              {
                name: 'Bourget',
              },
              {
                name: 'Bracebridge',
              },
              {
                name: 'Brampton',
              },
              {
                name: 'Brant',
              },
              {
                name: 'Brantford',
              },
              {
                name: 'Brockville',
              },
              {
                name: 'Brussels',
              },
              {
                name: 'Burford',
              },
              {
                name: 'Burlington',
              },
              {
                name: 'Cambridge',
              },
              {
                name: 'Camlachie',
              },
              {
                name: 'Capreol',
              },
              {
                name: 'Carleton Place',
              },
              {
                name: 'Casselman',
              },
              {
                name: 'Chatham',
              },
              {
                name: 'Chatham-Kent',
              },
              {
                name: 'Clarence-Rockland',
              },
              {
                name: 'Cobourg',
              },
              {
                name: 'Cochrane District',
              },
              {
                name: 'Collingwood',
              },
              {
                name: 'Concord',
              },
              {
                name: 'Constance Bay',
              },
              {
                name: 'Cookstown',
              },
              {
                name: 'Cornwall',
              },
              {
                name: 'Corunna',
              },
              {
                name: 'Deep River',
              },
              {
                name: 'Delaware',
              },
              {
                name: 'Deseronto',
              },
              {
                name: 'Dorchester',
              },
              {
                name: 'Dowling',
              },
              {
                name: 'Dryden',
              },
              {
                name: 'Durham',
              },
              {
                name: 'Ear Falls',
              },
              {
                name: 'East Gwillimbury',
              },
              {
                name: 'East York',
              },
              {
                name: 'Elliot Lake',
              },
              {
                name: 'Elmvale',
              },
              {
                name: 'Englehart',
              },
              {
                name: 'Espanola',
              },
              {
                name: 'Essex',
              },
              {
                name: 'Etobicoke',
              },
              {
                name: 'Exeter',
              },
              {
                name: 'Fort Erie',
              },
              {
                name: 'Fort Frances',
              },
              {
                name: 'Gananoque',
              },
              {
                name: 'Glencoe',
              },
              {
                name: 'Goderich',
              },
              {
                name: 'Golden',
              },
              {
                name: 'Gravenhurst',
              },
              {
                name: 'Greater Napanee',
              },
              {
                name: 'Greater Sudbury',
              },
              {
                name: 'Greenstone',
              },
              {
                name: 'Guelph',
              },
              {
                name: 'Haldimand County',
              },
              {
                name: 'Haliburton Village',
              },
              {
                name: 'Halton',
              },
              {
                name: 'Hamilton',
              },
              {
                name: 'Hanover',
              },
              {
                name: 'Harriston',
              },
              {
                name: 'Hawkesbury',
              },
              {
                name: 'Hearst',
              },
              {
                name: 'Hornepayne',
              },
              {
                name: 'Huntsville',
              },
              {
                name: 'Huron East',
              },
              {
                name: 'Ingersoll',
              },
              {
                name: 'Innisfil',
              },
              {
                name: 'Iroquois Falls',
              },
              {
                name: 'Jarvis',
              },
              {
                name: 'Kanata',
              },
              {
                name: 'Kapuskasing',
              },
              {
                name: 'Kawartha Lakes',
              },
              {
                name: 'Kenora',
              },
              {
                name: 'Keswick',
              },
              {
                name: 'Kincardine',
              },
              {
                name: 'King',
              },
              {
                name: 'Kingston',
              },
              {
                name: 'Kirkland Lake',
              },
              {
                name: 'Kitchener',
              },
              {
                name: "L'Orignal",
              },
              {
                name: 'Lakefield',
              },
              {
                name: 'Lambton Shores',
              },
              {
                name: 'Lappe',
              },
              {
                name: 'Leamington',
              },
              {
                name: 'Limoges',
              },
              {
                name: 'Lindsay',
              },
              {
                name: 'Listowel',
              },
              {
                name: 'Little Current',
              },
              {
                name: 'Lively',
              },
              {
                name: 'London',
              },
              {
                name: 'Lucan',
              },
              {
                name: 'Madoc',
              },
              {
                name: 'Manitoulin District',
              },
              {
                name: 'Manitouwadge',
              },
              {
                name: 'Marathon',
              },
              {
                name: 'Markdale',
              },
              {
                name: 'Markham',
              },
              {
                name: 'Mattawa',
              },
              {
                name: 'Meaford',
              },
              {
                name: 'Metcalfe',
              },
              {
                name: 'Midland',
              },
              {
                name: 'Mildmay',
              },
              {
                name: 'Millbrook',
              },
              {
                name: 'Milton',
              },
              {
                name: 'Mississauga',
              },
              {
                name: 'Mississauga Beach',
              },
              {
                name: 'Moose Factory',
              },
              {
                name: 'Moosonee',
              },
              {
                name: 'Morrisburg',
              },
              {
                name: 'Mount Albert',
              },
              {
                name: 'Mount Brydges',
              },
              {
                name: 'Napanee',
              },
              {
                name: 'Napanee Downtown',
              },
              {
                name: 'Neebing',
              },
              {
                name: 'Nepean',
              },
              {
                name: 'New Hamburg',
              },
              {
                name: 'Newmarket',
              },
              {
                name: 'Niagara Falls',
              },
              {
                name: 'Nipissing District',
              },
              {
                name: 'Norfolk County',
              },
              {
                name: 'North Bay',
              },
              {
                name: 'North Perth',
              },
              {
                name: 'North York',
              },
              {
                name: 'Norwood',
              },
              {
                name: 'Oakville',
              },
              {
                name: 'Omemee',
              },
              {
                name: 'Orangeville',
              },
              {
                name: 'Orillia',
              },
              {
                name: 'Osgoode',
              },
              {
                name: 'Oshawa',
              },
              {
                name: 'Ottawa',
              },
              {
                name: 'Owen Sound',
              },
              {
                name: 'Paisley',
              },
              {
                name: 'Paris',
              },
              {
                name: 'Parkhill',
              },
              {
                name: 'Parry Sound',
              },
              {
                name: 'Parry Sound District',
              },
              {
                name: 'Peel',
              },
              {
                name: 'Pembroke',
              },
              {
                name: 'Perth',
              },
              {
                name: 'Petawawa',
              },
              {
                name: 'Peterborough',
              },
              {
                name: 'Petrolia',
              },
              {
                name: 'Pickering',
              },
              {
                name: 'Picton',
              },
              {
                name: 'Plantagenet',
              },
              {
                name: 'Plattsville',
              },
              {
                name: 'Port Colborne',
              },
              {
                name: 'Port Hope',
              },
              {
                name: 'Port Rowan',
              },
              {
                name: 'Port Stanley',
              },
              {
                name: 'Powassan',
              },
              {
                name: 'Prescott',
              },
              {
                name: 'Prince Edward',
              },
              {
                name: 'Queenswood Heights',
              },
              {
                name: 'Quinte West',
              },
              {
                name: 'Rainy River District',
              },
              {
                name: 'Rayside-Balfour',
              },
              {
                name: 'Red Lake',
              },
              {
                name: 'Regional Municipality of Waterloo',
              },
              {
                name: 'Renfrew',
              },
              {
                name: 'Richmond',
              },
              {
                name: 'Richmond Hill',
              },
              {
                name: 'Ridgetown',
              },
              {
                name: 'Rockwood',
              },
              {
                name: 'Russell',
              },
              {
                name: 'Sarnia',
              },
              {
                name: 'Sault Ste. Marie',
              },
              {
                name: 'Scarborough',
              },
              {
                name: 'Seaforth',
              },
              {
                name: 'Shelburne',
              },
              {
                name: 'Simcoe',
              },
              {
                name: 'Sioux Lookout',
              },
              {
                name: 'Skatepark',
              },
              {
                name: 'Smiths Falls',
              },
              {
                name: 'South Huron',
              },
              {
                name: 'South River',
              },
              {
                name: 'St. Catharines',
              },
              {
                name: 'St. George',
              },
              {
                name: 'St. Thomas',
              },
              {
                name: 'Stirling',
              },
              {
                name: 'Stoney Point',
              },
              {
                name: 'Stratford',
              },
              {
                name: 'Sudbury',
              },
              {
                name: 'Tavistock',
              },
              {
                name: 'Temiskaming Shores',
              },
              {
                name: 'Thessalon',
              },
              {
                name: 'Thornhill',
              },
              {
                name: 'Thorold',
              },
              {
                name: 'Thunder Bay',
              },
              {
                name: 'Thunder Bay District',
              },
              {
                name: 'Timiskaming District',
              },
              {
                name: 'Timmins',
              },
              {
                name: 'Tobermory',
              },
              {
                name: 'Toronto',
              },
              {
                name: 'Toronto county',
              },
              {
                name: 'Tottenham',
              },
              {
                name: 'Tweed',
              },
              {
                name: 'Uxbridge',
              },
              {
                name: 'Valley East',
              },
              {
                name: 'Vanier',
              },
              {
                name: 'Vaughan',
              },
              {
                name: 'Vineland',
              },
              {
                name: 'Virgil',
              },
              {
                name: 'Walpole Island',
              },
              {
                name: 'Wasaga Beach',
              },
              {
                name: 'Waterford',
              },
              {
                name: 'Waterloo',
              },
              {
                name: 'Watford',
              },
              {
                name: 'Wawa',
              },
              {
                name: 'Welland',
              },
              {
                name: 'Wellesley',
              },
              {
                name: 'Wendover',
              },
              {
                name: 'West Lorne',
              },
              {
                name: 'Willowdale',
              },
              {
                name: 'Winchester',
              },
              {
                name: 'Windsor',
              },
              {
                name: 'Wingham',
              },
              {
                name: 'Woodstock',
              },
              {
                name: 'York',
              },
            ],
          },
          {
            name: 'Prince Edward Island',
            state_code: 'PE',
            cities: [
              {
                name: 'Alberton',
              },
              {
                name: 'Belfast',
              },
              {
                name: 'Charlottetown',
              },
              {
                name: 'Cornwall',
              },
              {
                name: 'Fallingbrook',
              },
              {
                name: 'Kensington',
              },
              {
                name: 'Montague',
              },
              {
                name: 'Souris',
              },
              {
                name: 'Summerside',
              },
            ],
          },
          {
            name: 'Quebec',
            state_code: 'QC',
            cities: [
              {
                name: 'Abitibi-Témiscamingue',
              },
              {
                name: 'Acton Vale',
              },
              {
                name: 'Adstock',
              },
              {
                name: 'Albanel',
              },
              {
                name: 'Alma',
              },
              {
                name: 'Amos',
              },
              {
                name: 'Amqui',
              },
              {
                name: 'Ange-Gardien',
              },
              {
                name: 'Asbestos',
              },
              {
                name: 'Baie-Comeau',
              },
              {
                name: "Baie-D'Urfé",
              },
              {
                name: 'Baie-Saint-Paul',
              },
              {
                name: 'Barraute',
              },
              {
                name: 'Bas-Saint-Laurent',
              },
              {
                name: 'Beaconsfield',
              },
              {
                name: 'Beauceville',
              },
              {
                name: 'Beauharnois',
              },
              {
                name: 'Beaupré',
              },
              {
                name: 'Bécancour',
              },
              {
                name: 'Bedford',
              },
              {
                name: 'Beloeil',
              },
              {
                name: 'Berthierville',
              },
              {
                name: 'Blainville',
              },
              {
                name: 'Bois-des-Filion',
              },
              {
                name: 'Boisbriand',
              },
              {
                name: 'Bonaventure',
              },
              {
                name: 'Boucherville',
              },
              {
                name: 'Breakeyville',
              },
              {
                name: 'Bromont',
              },
              {
                name: 'Brossard',
              },
              {
                name: 'Brownsburg-Chatham',
              },
              {
                name: 'Buckingham',
              },
              {
                name: 'Cabano',
              },
              {
                name: 'Cacouna',
              },
              {
                name: 'Candiac',
              },
              {
                name: 'Cantley',
              },
              {
                name: 'Cap-Chat',
              },
              {
                name: 'Cap-Santé',
              },
              {
                name: 'Capitale-Nationale',
              },
              {
                name: 'Carignan',
              },
              {
                name: 'Carleton',
              },
              {
                name: 'Carleton-sur-Mer',
              },
              {
                name: 'Centre-du-Québec',
              },
              {
                name: 'Chambly',
              },
              {
                name: 'Chambord',
              },
              {
                name: 'Chandler',
              },
              {
                name: 'Chapais',
              },
              {
                name: 'Charlemagne',
              },
              {
                name: 'Château-Richer',
              },
              {
                name: 'Châteauguay',
              },
              {
                name: 'Chaudière-Appalaches',
              },
              {
                name: 'Chertsey',
              },
              {
                name: 'Chibougamau',
              },
              {
                name: 'Chute-aux-Outardes',
              },
              {
                name: 'Coaticook',
              },
              {
                name: 'Contrecoeur',
              },
              {
                name: 'Cookshire',
              },
              {
                name: 'Cookshire-Eaton',
              },
              {
                name: 'Côte-Nord',
              },
              {
                name: 'Côte-Saint-Luc',
              },
              {
                name: 'Coteau-du-Lac',
              },
              {
                name: 'Cowansville',
              },
              {
                name: 'Crabtree',
              },
              {
                name: 'Danville',
              },
              {
                name: 'Daveluyville',
              },
              {
                name: 'Delson',
              },
              {
                name: 'Deux-Montagnes',
              },
              {
                name: 'Disraeli',
              },
              {
                name: 'Dolbeau-Mistassini',
              },
              {
                name: 'Dollard-Des Ormeaux',
              },
              {
                name: 'Donnacona',
              },
              {
                name: 'Dorval',
              },
              {
                name: 'Drummondville',
              },
              {
                name: 'Dunham',
              },
              {
                name: 'East Angus',
              },
              {
                name: 'East Broughton',
              },
              {
                name: 'Farnham',
              },
              {
                name: 'Ferme-Neuve',
              },
              {
                name: 'Fermont',
              },
              {
                name: 'Forestville',
              },
              {
                name: 'Fort-Coulonge',
              },
              {
                name: 'Fossambault-sur-le-Lac',
              },
              {
                name: 'Franklin',
              },
              {
                name: 'Gaspé',
              },
              {
                name: 'Gaspésie-Îles-de-la-Madeleine',
              },
              {
                name: 'Gatineau',
              },
              {
                name: 'Godefroy',
              },
              {
                name: 'Granby',
              },
              {
                name: 'Hampstead',
              },
              {
                name: 'Hauterive',
              },
              {
                name: 'Havre-Saint-Pierre',
              },
              {
                name: 'Hérouxville',
              },
              {
                name: 'Hudson',
              },
              {
                name: 'Huntingdon',
              },
              {
                name: 'Joliette',
              },
              {
                name: 'Jonquière',
              },
              {
                name: 'Kingsey Falls',
              },
              {
                name: 'Kirkland',
              },
              {
                name: "L'Ancienne-Lorette",
              },
              {
                name: "L'Ange-Gardien",
              },
              {
                name: "L'Ascension-de-Notre-Seigneur",
              },
              {
                name: "L'Assomption",
              },
              {
                name: "L'Épiphanie",
              },
              {
                name: "L'Île-Perrot",
              },
              {
                name: 'La Conception',
              },
              {
                name: 'La Haute-Saint-Charles',
              },
              {
                name: 'La Malbaie',
              },
              {
                name: 'La Minerve',
              },
              {
                name: 'La Pocatière',
              },
              {
                name: 'La Prairie',
              },
              {
                name: 'La Sarre',
              },
              {
                name: 'La Tuque',
              },
              {
                name: 'Labelle',
              },
              {
                name: 'Lac-Alouette',
              },
              {
                name: 'Lac-Brome',
              },
              {
                name: 'Lac-Connelly',
              },
              {
                name: 'Lac-Lapierre',
              },
              {
                name: 'Lac-Mégantic',
              },
              {
                name: 'Lac-Simon',
              },
              {
                name: 'Lachute',
              },
              {
                name: 'Lacolle',
              },
              {
                name: 'Lanoraie',
              },
              {
                name: 'Laval',
              },
              {
                name: 'Lavaltrie',
              },
              {
                name: 'Le Bic',
              },
              {
                name: 'le Plateau',
              },
              {
                name: 'Lebel-sur-Quévillon',
              },
              {
                name: 'Leblanc',
              },
              {
                name: 'Les Cèdres',
              },
              {
                name: 'Les Coteaux',
              },
              {
                name: 'Les Escoumins',
              },
              {
                name: 'Lévis',
              },
              {
                name: 'Linière',
              },
              {
                name: 'Longueuil',
              },
              {
                name: 'Lorraine',
              },
              {
                name: 'Louiseville',
              },
              {
                name: 'Luceville',
              },
              {
                name: 'Macamic',
              },
              {
                name: 'Magog',
              },
              {
                name: 'Malartic',
              },
              {
                name: 'Maliotenam',
              },
              {
                name: 'Manawan',
              },
              {
                name: 'Mandeville',
              },
              {
                name: 'Maniwaki',
              },
              {
                name: 'Maria',
              },
              {
                name: 'Marieville',
              },
              {
                name: 'Mascouche',
              },
              {
                name: 'Maskinongé',
              },
              {
                name: 'Matagami',
              },
              {
                name: 'Matane',
              },
              {
                name: 'Mauricie',
              },
              {
                name: 'Melocheville',
              },
              {
                name: 'Mercier',
              },
              {
                name: 'Métabetchouan',
              },
              {
                name: 'Metabetchouan-Lac-a-la-Croix',
              },
              {
                name: 'Mirabel',
              },
              {
                name: 'Mistissini',
              },
              {
                name: 'Mont-Joli',
              },
              {
                name: 'Mont-Laurier',
              },
              {
                name: 'Mont-Royal',
              },
              {
                name: 'Mont-Saint-Grégoire',
              },
              {
                name: 'Mont-Saint-Hilaire',
              },
              {
                name: 'Mont-Tremblant',
              },
              {
                name: 'Montmagny',
              },
              {
                name: 'Montréal',
              },
              {
                name: 'Montréal-Est',
              },
              {
                name: 'Montréal-Ouest',
              },
              {
                name: 'Morin-Heights',
              },
              {
                name: 'Napierville',
              },
              {
                name: 'Neuville',
              },
              {
                name: 'New Carlisle',
              },
              {
                name: 'New-Richmond',
              },
              {
                name: 'Nicolet',
              },
              {
                name: 'Nord-du-Québec',
              },
              {
                name: 'Normandin',
              },
              {
                name: 'Notre-Dame-de-Grâce',
              },
              {
                name: "Notre-Dame-de-l'Île-Perrot",
              },
              {
                name: 'Notre-Dame-des-Prairies',
              },
              {
                name: 'Notre-Dame-du-Lac',
              },
              {
                name: 'Notre-Dame-du-Mont-Carmel',
              },
              {
                name: 'Oka',
              },
              {
                name: 'Ormstown',
              },
              {
                name: 'Otterburn Park',
              },
              {
                name: 'Outaouais',
              },
              {
                name: 'Papineauville',
              },
              {
                name: 'Parc-Boutin',
              },
              {
                name: 'Piedmont',
              },
              {
                name: 'Pierreville',
              },
              {
                name: 'Pincourt',
              },
              {
                name: 'Plessisville',
              },
              {
                name: 'Pohénégamook',
              },
              {
                name: 'Pointe-Calumet',
              },
              {
                name: 'Pointe-Claire',
              },
              {
                name: 'Pointe-du-Lac',
              },
              {
                name: 'Pont Rouge',
              },
              {
                name: 'Pont-Rouge',
              },
              {
                name: 'Port-Cartier',
              },
              {
                name: 'Portneuf',
              },
              {
                name: 'Prévost',
              },
              {
                name: 'Princeville',
              },
              {
                name: 'Québec',
              },
              {
                name: 'Rawdon',
              },
              {
                name: 'Repentigny',
              },
              {
                name: 'Richelieu',
              },
              {
                name: 'Richmond',
              },
              {
                name: 'Rigaud',
              },
              {
                name: 'Rimouski',
              },
              {
                name: 'Rivière-du-Loup',
              },
              {
                name: 'Rivière-Rouge',
              },
              {
                name: 'Roberval',
              },
              {
                name: 'Rock Forest',
              },
              {
                name: 'Rosemère',
              },
              {
                name: 'Rougemont',
              },
              {
                name: 'Rouyn-Noranda',
              },
              {
                name: 'Sacré-Coeur',
              },
              {
                name: 'Saguenay',
              },
              {
                name: "Saint-Adolphe-d'Howard",
              },
              {
                name: 'Saint-Alexandre',
              },
              {
                name: 'Saint-Amable',
              },
              {
                name: 'Saint-Ambroise',
              },
              {
                name: 'Saint-André-Avellin',
              },
              {
                name: 'Saint-Anselme',
              },
              {
                name: 'Saint-Antoine-de-Tilly',
              },
              {
                name: 'Saint-Augustin',
              },
              {
                name: 'Saint-Augustin-de-Desmaures',
              },
              {
                name: 'Saint-Barnabé-Sud',
              },
              {
                name: 'Saint-Basile-le-Grand',
              },
              {
                name: 'Saint-Boniface',
              },
              {
                name: 'Saint-Bruno',
              },
              {
                name: 'Saint-Bruno-de-Guigues',
              },
              {
                name: 'Saint-Bruno-de-Montarville',
              },
              {
                name: 'Saint-Canut',
              },
              {
                name: 'Saint-Césaire',
              },
              {
                name: 'Saint-Charles',
              },
              {
                name: 'Saint-Côme-Linière',
              },
              {
                name: 'Saint-Constant',
              },
              {
                name: 'Saint-Cyrille-de-Wendover',
              },
              {
                name: 'Saint-Damase',
              },
              {
                name: 'Saint-Denis-sur-Richelieu',
              },
              {
                name: 'Saint-Donat-de-Montcalm',
              },
              {
                name: 'Saint-Édouard',
              },
              {
                name: 'Saint-Elzéar',
              },
              {
                name: 'Saint-Éphrem-de-Beauce',
              },
              {
                name: 'Saint-Eustache',
              },
              {
                name: 'Saint-Félicien',
              },
              {
                name: 'Saint-Félix-de-Valois',
              },
              {
                name: 'Saint-Gabriel',
              },
              {
                name: 'Saint-Gédéon',
              },
              {
                name: 'Saint-Georges',
              },
              {
                name: 'Saint-Germain-de-Grantham',
              },
              {
                name: 'Saint-Henri',
              },
              {
                name: 'Saint-Hippolyte',
              },
              {
                name: 'Saint-Honoré',
              },
              {
                name: 'Saint-Hyacinthe',
              },
              {
                name: 'Saint-Isidore',
              },
              {
                name: 'Saint-Jacques-le-Mineur',
              },
              {
                name: 'Saint-Jean-Baptiste',
              },
              {
                name: 'Saint-Jean-sur-Richelieu',
              },
              {
                name: 'Saint-Jérôme',
              },
              {
                name: 'Saint-Joseph',
              },
              {
                name: 'Saint-Joseph-de-Beauce',
              },
              {
                name: 'Saint-Joseph-de-Coleraine',
              },
              {
                name: 'Saint-Joseph-du-Lac',
              },
              {
                name: 'Saint-Lambert-de-Lauzon',
              },
              {
                name: 'Saint-Laurent',
              },
              {
                name: 'Saint-Lazare',
              },
              {
                name: 'Saint-Léonard',
              },
              {
                name: "Saint-Léonard-d'Aston",
              },
              {
                name: 'Saint-Liboire',
              },
              {
                name: 'Saint-Lin-Laurentides',
              },
              {
                name: 'Saint-Marc-des-Carrières',
              },
              {
                name: 'Saint-Mathieu',
              },
              {
                name: 'Saint-Michel',
              },
              {
                name: 'Saint-Michel-des-Saints',
              },
              {
                name: 'Saint-Nazaire',
              },
              {
                name: 'Saint-Norbert',
              },
              {
                name: 'Saint-Pacôme',
              },
              {
                name: 'Saint-Pascal',
              },
              {
                name: 'Saint-Philippe-de-La Prairie',
              },
              {
                name: 'Saint-Pie',
              },
              {
                name: 'Saint-Pierre-les-Becquets',
              },
              {
                name: 'Saint-Prime',
              },
              {
                name: 'Saint-Raphaël',
              },
              {
                name: 'Saint-Raymond',
              },
              {
                name: 'Saint-Rémi',
              },
              {
                name: 'Saint-Rémi-de-Tingwick',
              },
              {
                name: 'Saint-Sauveur',
              },
              {
                name: 'Saint-Sauveur-des-Monts',
              },
              {
                name: 'Saint-Siméon',
              },
              {
                name: 'Saint-Thomas',
              },
              {
                name: 'Saint-Tite',
              },
              {
                name: 'Saint-Victor',
              },
              {
                name: 'Saint-Zotique',
              },
              {
                name: 'Sainte Catherine de la Jacques Cartier',
              },
              {
                name: 'Sainte-Adèle',
              },
              {
                name: 'Sainte-Agathe-des-Monts',
              },
              {
                name: 'Sainte-Anne-de-Bellevue',
              },
              {
                name: 'Sainte-Anne-des-Monts',
              },
              {
                name: 'Sainte-Anne-des-Plaines',
              },
              {
                name: 'Sainte-Béatrix',
              },
              {
                name: 'Sainte-Catherine',
              },
              {
                name: 'Sainte-Croix',
              },
              {
                name: 'Sainte-Élisabeth',
              },
              {
                name: 'Sainte-Julie',
              },
              {
                name: 'Sainte-Julienne',
              },
              {
                name: 'Sainte-Madeleine',
              },
              {
                name: 'Sainte-Marie',
              },
              {
                name: 'Sainte-Marthe-sur-le-Lac',
              },
              {
                name: 'Sainte-Martine',
              },
              {
                name: 'Sainte-Sophie',
              },
              {
                name: 'Sainte-Thècle',
              },
              {
                name: 'Sainte-Thérèse',
              },
              {
                name: 'Salaberry-de-Valleyfield',
              },
              {
                name: 'Salluit',
              },
              {
                name: 'Senneterre',
              },
              {
                name: 'Sept-Îles',
              },
              {
                name: 'Shannon',
              },
              {
                name: 'Shawinigan',
              },
              {
                name: 'Shawville',
              },
              {
                name: 'Sherbrooke',
              },
              {
                name: 'Sorel-Tracy',
              },
              {
                name: 'St-Jean-Port-Joli',
              },
              {
                name: 'Sutton',
              },
              {
                name: 'Témiscaming',
              },
              {
                name: 'Terrasse-des-Pins',
              },
              {
                name: 'Terrebonne',
              },
              {
                name: 'Thetford-Mines',
              },
              {
                name: 'Thurso',
              },
              {
                name: 'Trois-Rivières',
              },
              {
                name: "Val-d'Or",
              },
              {
                name: 'Val-David',
              },
              {
                name: 'Val-des-Monts',
              },
              {
                name: 'Val-Morin',
              },
              {
                name: 'Valcourt',
              },
              {
                name: 'Vallée-Jonction',
              },
              {
                name: 'Varennes',
              },
              {
                name: 'Vaudreuil-Dorion',
              },
              {
                name: 'Venise-en-Québec',
              },
              {
                name: 'Verchères',
              },
              {
                name: 'Victoriaville',
              },
              {
                name: 'Ville-Marie',
              },
              {
                name: 'Wakefield',
              },
              {
                name: 'Warwick',
              },
              {
                name: 'Waskaganish',
              },
              {
                name: 'Waswanipi',
              },
              {
                name: 'Waterloo',
              },
              {
                name: 'Weedon Centre',
              },
              {
                name: 'Westmount',
              },
              {
                name: 'Weymontachie',
              },
              {
                name: 'Windsor',
              },
              {
                name: 'Yamachiche',
              },
            ],
          },
          {
            name: 'Saskatchewan',
            state_code: 'SK',
            cities: [
              {
                name: 'Assiniboia',
              },
              {
                name: 'Biggar',
              },
              {
                name: 'Canora',
              },
              {
                name: 'Carlyle',
              },
              {
                name: 'Dalmeny',
              },
              {
                name: 'Esterhazy',
              },
              {
                name: 'Estevan',
              },
              {
                name: 'Foam Lake',
              },
              {
                name: 'Gravelbourg',
              },
              {
                name: 'Hudson Bay',
              },
              {
                name: 'Humboldt',
              },
              {
                name: 'Indian Head',
              },
              {
                name: 'Kamsack',
              },
              {
                name: 'Kerrobert',
              },
              {
                name: 'Kindersley',
              },
              {
                name: 'La Ronge',
              },
              {
                name: 'Langenburg',
              },
              {
                name: 'Langham',
              },
              {
                name: 'Lanigan',
              },
              {
                name: 'Lumsden',
              },
              {
                name: 'Macklin',
              },
              {
                name: 'Maple Creek',
              },
              {
                name: 'Martensville',
              },
              {
                name: 'Meadow Lake',
              },
              {
                name: 'Melfort',
              },
              {
                name: 'Melville',
              },
              {
                name: 'Moose Jaw',
              },
              {
                name: 'Moosomin',
              },
              {
                name: 'Nipawin',
              },
              {
                name: 'North Battleford',
              },
              {
                name: 'Outlook',
              },
              {
                name: 'Oxbow',
              },
              {
                name: 'Pelican Narrows',
              },
              {
                name: 'Pilot Butte',
              },
              {
                name: 'Preeceville',
              },
              {
                name: 'Prince Albert',
              },
              {
                name: 'Regina',
              },
              {
                name: 'Regina Beach',
              },
              {
                name: 'Rosetown',
              },
              {
                name: 'Rosthern',
              },
              {
                name: 'Saskatoon',
              },
              {
                name: 'Shaunavon',
              },
              {
                name: 'Shellbrook',
              },
              {
                name: 'Swift Current',
              },
              {
                name: 'Tisdale',
              },
              {
                name: 'Unity',
              },
              {
                name: 'Wadena',
              },
              {
                name: 'Warman',
              },
              {
                name: 'Watrous',
              },
              {
                name: 'Weyburn',
              },
              {
                name: 'White City',
              },
              {
                name: 'Wilkie',
              },
              {
                name: 'Wynyard',
              },
              {
                name: 'Yorkton',
              },
            ],
          },
          {
            name: 'Yukon',
            state_code: 'YT',
            cities: [
              {
                name: 'Dawson City',
              },
              {
                name: 'Haines Junction',
              },
              {
                name: 'Watson Lake',
              },
              {
                name: 'Whitehorse',
              },
            ],
          },
        ],
      },
    ];

    for (const countryData of countries) {
      const country = new CountryEntity();
      country.name = countryData.name;
      country.code = countryData.countryCode;
      const countryStore = await country.save();
      for (const stateData of countryData.states) {
        const state = new StateEntity();
        state.name = stateData.state_code;
        state.country_id = countryStore.id;
        const stateD = await state.save();
        for (const cityData of stateData.cities) {
          const city = new CityEntity();
          city.name = cityData.name;
          city.state_id = stateD.id;
          await city.save();
        }
      }
    }
  }
}
