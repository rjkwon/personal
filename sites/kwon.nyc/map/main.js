mapboxgl.accessToken = 'pk.eyJ1Ijoicmprd29uIiwiYSI6ImNrd2F1emxyYzAyYmQydm53ODR0bDV2N3MifQ.96lHshFi09fTHEDX_9Siyg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rjkwon/ckrct3osw1ftn18nmyrugkb6c', // my custom stylesheet location
    center: [-73.971060, 40.662940], // starting position [lng, lat]
    zoom: 3.5 // starting zoom
});

const popup = new mapboxgl.Popup().setHTML(
`<h3>Brooklyn, New York</h3><p>I moved to Brooklyn in 2010</p>`
);

const marker = new mapboxgl.Marker()
.setLngLat([-73.971060, 40.662940])
.setPopup(popup)
.addTo(map);


// // Add zoom and rotation controls to the map.
// map.addControl(new mapboxgl.NavigationControl());

let geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.432, 38.455]
        },
        properties: {
            title: 'Inglenook, Rutherford, Napa Valley, California',
            description: 'Award-winning director Francis Ford Coppola has reformed the Inglenook estate in its 19th century image since first acquiring a portion of its vineyards back in 1975.',
            img: 'images/inglenook.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.598, 38.603]
        },
        properties: {
            title: 'Chateau Montelena Winery, Calistoga, California',
            description: 'Set against Mount Saint Helena, the chateau was built in 1888 to resemble the gatehouse of an English Gothic castle. The structure overlooks a Chinese garden, a lake and the vineyards, which are ideal for a romantic stroll.',
            img: 'images/montelena.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.491, 38.529]
        },
        properties: {
            title: 'Duckhorn Vineyards, Napa Valley, California',
            description: 'Oenophiles must visit Duckhorn Vineyards, whose Merlot Napa Valley Three Palms Vineyard 2014 was named the top wine (out of more than 16,000) in 2017 by Wine Spectator.',
            img: 'images/duckhorn.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.399, 38.441]
        },
        properties: {
            title: 'Opus One, Oakville, California',
            description: 'Rising gently from the earth around it, the Opus One winery does not rush to reveal itself. The building sits in harmony with its natural surroundings, offering a soft transition from the vineyard to its lush, green grass exterior. Just as it honors the land, it honors the light.',
            img: 'images/opus.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-108.550, 39.063]
        },
        properties: {
            title: 'Two Rivers, Grand Junction, Colorado',
            description: 'Colorado natives Bob and Billie Witham planted their vineyards from scratch in 1999, adding a showplace winery, a conference center, and a "wine country inn." They produce a semi-sweet riesling and a buttery chardonnay, but its their reds that really shine. ',
            img: 'images/two-rivers.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.128, 47.689]
        },
        properties: {
            title: 'Novelty Hill Winery, Woodinville, Washington',
            description: 'The winemaker here is Mike Januik, of the adjacent (but independently owned) Januik winery. Novelty Hills proprietors own the Columbia Valley acclaimed Stillwater Creek Vineyard, and their cabernet sauvignon sourced there is consistently rated highly by critics — especially considering its modest $30 price tag. An excellent syrah and a Bordeaux-style blend called Cascadia also win plaudits.',
            img: 'images/novelty.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-123.135, 45.109]
        },
        properties: {
            title: 'Brooks Winery, Amity, Oregon',
            description: 'This Willamette Valley gem, founded by the late Jimi Brooks and now run by his sister, Janie Brooks-Heuck, specializes in riesling and pinot noir, producing more than a dozen variations on the former (from the dry, smoky, flinty Vitae Springs to the juicy, medium-sweet Le Chenaie and the opulent Tethys, a winemaker-assisted ice wine) and a dozen distinctive examples of the latter, one of them a bright, tangy rosé. ',
            img: 'images/brookswines.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-116.778, 43.575]
        },
        properties: {
            title: 'Ste. Chapelle Winery, Caldwell, Idaho',
            description: ' Ste. Chapelle, founded in 1975 when the very idea of Idaho wine sounded like a joke (and was used as one in several movies). Today, the winery — produces a wide range of agreeable everyday wines (riesling, sauvignon blanc, petit verdot, cabernet sauvignon, etc.) at bargain prices, but makes this list on the basis of its first-rate Panoramic series grenache, malbec, petit verdot, and syrah and its single-vineyard chardonnays, which are bright and full of varietal character.',
            img: 'images/Ste.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-78.444, 37.990]
        },
        properties: {
            title: 'Jefferson Vineyards, Charlottesville, Virginia',
            description: 'Christened after a pioneering Virginia grape-grower named Thomas Jefferson and based around the site of Colle, the estate built by Jefferson Tuscan- born associate Filippo Mazzei, this acclaimed third- generation family - owned winery dates from the mid - 1980s.The great white Rhône variety viognier is considered Virginia official wine grape, and Jefferson version, says wine writer and sommelier Stacy Slinkard, is the best one in the state.',
            img: 'images/jefferson-vine.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-77.001, 42.844]
        },
        properties: {
            title: 'Ravines Wine Cellars, Geneva, N.Y.',
            description: 'This attractive Seneca Lake property is noted for its rieslings — "New York Rieslings dont come any better…," wrote Eric Asimov in The New York Times a few years back. A citrusy, mineral-edged sauvignon blanc, a mouth-filling white made from a couple of hybrid grapes (cayuga and vignoles), a softly seductive cabernet franc, and a honeyed dessert wine made from sun-dried chardonnay clusters called Appassionata are among the standouts. ',
            img: 'images/ravines.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-110.551, 31.660]
        },
        properties: {
            title: 'Callaghan Vineyards, Elgin, Arizona',
            description: 'The Callaghan family produces a blend of (mostly) petit verdot, with merlot, cabernet franc, and cabernet sauvignon added, which tastes sort of like a Pauillac might taste ten years from now when global warming has ratcheted up the temperature over Bordeaux way a few notches. Other than that, they have pretty much given up on the Bordeaux grapes they had been trying to grow for years in the hot climate southeast of Tucson, and have turned to Mediterranean varieties instead.',
            img: 'images/callaghan.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-77.032, 39.533]
        },
        properties: {
            title: 'Old Westminster Winery & Vineyard, Westminster, Md.',
            description: 'The winery has won acclaim for such wines as its flinty albariño, its forthright viognier and viognier blends (the 2016 Cool Ridge Vineyard Limestone, for instance, is a highly original combination of 30 percent viognier and 70 percent grüner veltliner), its earthy Home Vineyard cabernet franc, and several silky Meritage offerings.',
            img: 'images/old-west.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-106.581, 35.180]
        },
        properties: {
            title: 'Gruet Winery, Albuquerque, N.M.',
            description: 'The Gruet family had already been producing Champagne in Bethon, near Épernay, for 30 years when they first visited the American Southwest in the 1980s.Today, Gruet produces a range of what Sacramento grocer and wine and food expert Darrell Corti, a Daily Meal Council member, calls “splendid sparklers,” both vintage and non-vintage, including an ethereal rosé and a stunning bone-dry vintage sauvage',
            img: 'images/gruet.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-75.769, 39.818]
        },
        properties: {
            title: 'Va La Vineyards, Avondale, Pa.',
            description: 'Anthony Vietri is one of the more original winemakers in America. Over the past decade, he has cultivated more than two dozen French and Italian varietals and their clones in what he calls his “little vineyard” of slightly less than seven acres located amid the area’s mushroom farms. They are unusual wines, to say the least, often benefitting from long aeration, and none of them taste quite like anything else you have tried. ',
            img: 'images/vala.png'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-77.164, 39.459]
        },
        properties: {
            title: 'Black Ankle Vineyards, Mount Airy, Md.',
            description: 'This newish Maryland producer — proprietors Ed Boyce and Sarah O.Herron had their first harvest in 2006 and opened their winery for business two years later — makes serious red wines, including Bordeaux- style blend, with varying percentages of the usual grapes, called Rolling Hills, Viento, and Slate 3 and a barrel- fermented syrah called Passeggiata X. ',
            img: 'images/ankle.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-101.795, 33.724]
        },
        properties: {
            title: 'Pheasant Ridge Winery, Lubbock, Texas',
            description: 'Robert Parker once opined that this West Texas winery, a pioneer of the states modern- day wine industry, produced cabernet sauvignons that were "lush, intense wines with plenty of character that can compete in quality with anybody." Texas - based writer Andrew Chalk, a frequent contributor to The Daily Meal, tested this statement by organizing a tasting, involving several sommeliers and other wine experts, to try six vintages of Pheasant Ridge cabernet. ',
            img: 'images/pheasant-ridge-winery.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-85.506, 44.952]
        },
        properties: {
            title: 'Chateau Grand Traverse, Traverse City, Mich.',
            description: 'The calling card at this beautifully situated estate, which combines one of the oldest and largest wineries in Michigan with a comfortable inn, is riesling — from crisp and dry to gloriously sweet. Founded in 1974 by Edward O’Keefe, the winery also produces a range of whites (the pinot grigio is notable), rosés (including a pinot noir vin gris), and reds, principally pinot noir and merlot. Chateau Grand Traverse was also the first Michigan winery to produce an ice wine, which was served at the 1989 inauguration of President George H.W. Bush.',
            img: 'images/traverse.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-123.189, 45.214]
        },
        properties: {
            title: 'The Eyrie Vineyards, McMinnville, Ore.',
            description: 'The late David Lett started making his Eyrie pinot noir in Oregons Willamette Valley in 1970, back when Oregon was better known for olallieberries and Olympia Beer than for anything vinous.He went on to turn his grapes into some of the most elegant and delicate but full- flavored of American pinots, famously standing up to the celebrated Joseph Drouhins Chambolle-Musigny in a taste-off in France (he lost by two-tenths of a point, inspiring Drouhin to later establish a winery in Oregon himself) and earning the sobriquet “Papa Pinot.”',
            img: 'images/Sign.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-98.456, 30.903]
        },
        properties: {
            title: 'Fall Creek Vineyards, Tow, Texas',
            description: 'This pioneering Texas Hill Country winery has made great strides since owners Ed and Susan Auler brought in Chilean Sergio Cuadra as director of winemaking in 2013. Fall Creeks range of wines encompasses roughly 20 bottlings, including one of the best Texas chardonnays(from a grape that can be challenging in Texas), an authoritative tempranillo, and a rich grenache–syrah–mourvèdre blend.',
            img: 'images/Fall-Creek-Vineyards-Texas.jpg'
        }
    },]
};

// add markers to map
geojson.features.forEach(marker => {

    // create a HTML element for each feature
    let el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(`<h3>${marker.properties.title}</h3><img src="${marker.properties.img}"</img><p>${marker.properties.description}</p>`))
        .addTo(map);
});
