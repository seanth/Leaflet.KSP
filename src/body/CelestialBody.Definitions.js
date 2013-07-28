/*
 * Body definitions
 *
 * SPOILER ALERT: These body definitions contain spoilers
 */

L.KSP.CelestialBody.MOHO = L.KSP.celestialBody({
	id: "moho",
	name: "Moho",
	crs: L.KSP.CRS.EPSG4326,
	radius: 250000,
	addedOn: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdated: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 28,
	thumbnail: "http://static.kerbalmaps.com/images/body-moho.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "moho",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "moho",
			style: "color",
			legend: {
				"7000 m" : "#cdbea5",
				"6000 m" : "#a08773",
				"3000 m" : "#786455",
				"1500 m" : "#645046",
				"500 m" : "#4b3c32",
				"0 m" : "#322823"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "moho",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {}
});

L.KSP.CelestialBody.EVE = L.KSP.celestialBody({
	id: "eve",
	name: "Eve",
	crs: L.KSP.CRS.EPSG4326,
	radius: 700000,
	addedOn: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdated: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 28,
	thumbnail: "http://static.kerbalmaps.com/images/body-eve.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "eve",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "eve",
			style: "color",
			legend: {
				"6500 m" : "#0f0f1e",
				"6000 m" : "#1e1728",
				"3000 m" : "#2d1e37",
				"1500 m" : "#37283c",
				"500 m" : "#3c2841",
				"5 m" : "#4b3c55",
				"-5 m" : "#8c7d9b",
				"-500 m" : "#645573"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "eve",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {}
});

L.KSP.CelestialBody.GILLY = L.KSP.celestialBody({
	id: "gilly",
	name: "Gilly",
	crs: L.KSP.CRS.EPSG4326,
	radius: 13000,
	addedOn: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdated: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 27,
	thumbnail: "http://static.kerbalmaps.com/images/body-gilly.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "gilly",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "gilly",
			style: "color",
			legend: {
				"6500 m" : "#b99b82",
				"4500 m" : "#a08273",
				"2500 m" : "#78695a",
				"1500 m" : "#554b41"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "gilly",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {}
});

L.KSP.CelestialBody.KERBIN = L.KSP.celestialBody({
	id: "kerbin",
	name: "Kerbin",
	crs: L.KSP.CRS.EPSG4326,
	radius: 600000,
	addedOn: 1366416000000, // Sat 20 Apr 2013 12:00:00 AM UTC
	lastUpdated: 1374969600000, // Sun 28 Jul 2013 12:00:00 AM UTC
	lastUpdatedVer: 38,
	lastModifiedVer: 38,
	thumbnail: "http://static.kerbalmaps.com/images/body-kerbin.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "kerbin",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "kerbin",
			style: "color",
			legend: {
				"6800 m" : "#FFFFFF",
				"6000 m" : "#E6E1E1",
				"4000 m" : "#C39B87",
				"2000 m" : "#B97855",
				"1000 m" : "#B99B6E",
				"600 m" : "#5A825A",
				"200 m" : "#1E784B",
				"50 m" : "#0A6437",
				"0 m" : "#004120",
				"-500 m" : "#0F4B9B",
				"-100 m" : "#1E6E9B"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "kerbin",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {
		"Space Centers": L.KSP.layerGroup(L.KSP.LayerGroup.TYPE_SPACECENTER, [
			L.marker([-0.0969, -74.6004], {icon: L.KSP.Icon.SPACECENTER}).bindPopup("<strong>Kerbal Space Center</strong><br>-0.0969 : -74.6004"),
			L.marker([20.5829, -146.5116], {icon: L.KSP.Icon.SPACECENTER}).bindPopup("<strong>Kerbal Space Center 2</strong><br>20.5829 : -146.5116"),
			L.marker([-1.5409, -71.9099], {icon: L.KSP.Icon.SPACECENTER}).bindPopup("<strong>Island Airfield</strong><br>-1.5409 : -71.9099")
		]),
		"Anomalies": L.KSP.layerGroup(L.KSP.LayerGroup.TYPE_ANOMALY, [
			L.marker([0.1023, -74.5684], {icon: L.KSP.Icon.ANOMALY}).bindPopup("0.1023 : -74.5684"),
			L.marker([20.6709, -146.4968], {icon: L.KSP.Icon.ANOMALY}).bindPopup("20.6709 : -146.4968"),
			L.marker([35.5705, -74.9773], {icon: L.KSP.Icon.ANOMALY}).bindPopup("35.5705 : -74.9773"),
			L.marker([-0.6402, -80.7668], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-0.6402 : -80.7668"),
			L.marker([-28.8083, -13.4401], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-28.8083 : -13.4401"),
			L.marker([-6.5057, -141.6856], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-6.5057 : -141.6856"),
			L.marker([81.9551, -128.518], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-81.9551 : -128.518")
		])
	}
});

L.KSP.CelestialBody.MUN = L.KSP.celestialBody({
	id: "mun",
	name: "Mun",
	crs: L.KSP.CRS.EPSG4326,
	radius: 200000,
	addedOn: 1368230400000, // Sat 11 May 2013 12:00:00 AM UTC
	lastUpdated: 1374969600000, // Sun 28 Jul 2013 12:00:00 AM UTC
	lastUpdatedVer: 38,
	lastModifiedVer: 38,
	thumbnail: "http://static.kerbalmaps.com/images/body-mun.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "mun",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "mun",
			style: "color",
			legend: {
				"6700 m" : "#EBEBEB",
				"-70 m" : "#232323"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "mun",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {
		"Anomalies": L.KSP.layerGroup(L.KSP.LayerGroup.TYPE_ANOMALY, [
			L.marker([-9.8314, 25.9177], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-9.8314 : 25.9177"), //monolith
			L.marker([-82.2063, 102.9305], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-82.2063 : 102.9305"), //monolith
			L.marker([57.6604, 9.1422], {icon: L.KSP.Icon.ANOMALY}).bindPopup("57.6604 : 9.1422"), //monolith
			L.marker([2.4695, 81.5133], {icon: L.KSP.Icon.ANOMALY}).bindPopup("2.4695 : 81.5133"), // rockarch
			L.marker([12.4432, 39.178], {icon: L.KSP.Icon.ANOMALY}).bindPopup("12.4432 : 39.1780"), // rockarch
			L.marker([-12.4431, -140.822], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-12.4431 : -140.8220"), // rockarch
			L.marker([0.7027, 22.747], {icon: L.KSP.Icon.ANOMALY}).bindPopup("0.7027 : 22.7470"), // armstrongmemorial
			L.marker([-70.9556, -68.1378], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-70.9556,-68.1378") // ufo
		])
	}
});

L.KSP.CelestialBody.MINMUS = L.KSP.celestialBody({
	id: "minmus",
	name: "Minmus", // used for strings
	crs: L.KSP.CRS.EPSG4326,
	radius: 60000,
	addedOn: 1368230400000, //Sat 11 May 2013 12:00:00 AM UTC
	lastUpdated: 1368230400000, //Sat 11 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 26,
	thumbnail: "http://static.kerbalmaps.com/images/body-minmus.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			style: "sat",
			body: "minmus"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			style: "color",
			body: "minmus",
			legend: {
				"5750 m" : "#414B41",
				"2500 m" : "#BEE6C3",
				"1 m" : "#96CDB4",
				"0 m" : "#87B9A5"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			style: "slope",
			body: "minmus",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {
		"Anomalies": L.KSP.layerGroup(L.KSP.LayerGroup.TYPE_ANOMALY, [
			L.marker([23.7768, 60.0462], {icon: L.KSP.Icon.ANOMALY}).bindPopup("23.7768 : 60.0462") //monolith
		])
	}
});

L.KSP.CelestialBody.DUNA = L.KSP.celestialBody({
	id: "duna",
	name: "Duna",
	crs: L.KSP.CRS.EPSG4326,
	radius: 320000,
	addedOn: 1368835200000, //Sat 18 May 2013 12:00:00 AM UTC
	lastUpdated: 1368835200000, //Sat 18 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 28,
	thumbnail: "http://static.kerbalmaps.com/images/body-duna.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			style: "sat",
			body: "duna"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			style: "color",
			body: "duna",
			legend: {
				"4800 m" : "#C3A082",
				"4000 m" : "#966446",
				"3000 m" : "#733219",
				"2000 m" : "#501E14",
				"1000 m" : "#3C140F",
				"0 m" : "#280F0A"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			style: "slope",
			body: "duna",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {
		"Anomalies": L.KSP.layerGroup(L.KSP.LayerGroup.TYPE_ANOMALY, [
			L.marker([17.0483, -85.4717], {icon: L.KSP.Icon.ANOMALY}).bindPopup("17.0483 : -85.4717"), //face
			L.marker([-30.3525, -28.6828], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-30.3525 : -28.6828"), //msl camera
			L.marker([-66.1344, -160.7432], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-66.1344 : -160.7432") //pyramid sstv
			// though it's defined in game data there does not appear to be anything here
			// L.marker([-0.0005, -31.8825], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-0.0005 : -31.8825") //pyramid
		])
	}
});

L.KSP.CelestialBody.IKE = L.KSP.celestialBody({
	id: "ike",
	name: "Ike",
	crs: L.KSP.CRS.EPSG4326,
	radius: 130000,
	addedOn: 1368835200000, //Sat 18 May 2013 12:00:00 AM UTC
	lastUpdated: 1368835200000, //Sat 18 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 26,
	thumbnail: "http://static.kerbalmaps.com/images/body-ike.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			style: "sat",
			body: "ike"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			style: "color",
			body: "ike",
			legend: {
				"13000 m" : "#828282",
				"11000 m" : "#6E6E6E",
				"9000 m" : "#5A5A5A",
				"7000 m" : "#464646",
				"5000 m" : "#323232",
				"2500 m" : "#191919",
				"70 m" : "#070707"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			style: "slope",
			body: "ike",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {}
});

L.KSP.CelestialBody.DRES = L.KSP.celestialBody({
	id: "dres",
	name: "Dres",
	crs: L.KSP.CRS.EPSG4326,
	radius: 138000,
	addedOn: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdated: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 28,
	thumbnail: "http://static.kerbalmaps.com/images/body-dres.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "dres",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "dres",
			style: "color",
			legend: {
				"6000 m" : "#beb9b4",
				"3500 m" : "#96918c",
				"2000 m" : "#504646",
				"500 m" : "#2d2828",
				"25 m" : "#191919"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "dres",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {}
});

L.KSP.CelestialBody.JOOL = L.KSP.celestialBody({
	id: "jool",
	name: "Jool",
	crs: L.KSP.CRS.EPSG4326,
	thumbnail: "http://static.kerbalmaps.com/images/body-jool.png"
});

L.KSP.CelestialBody.LAYTHE = L.KSP.celestialBody({
	id: "laythe",
	name: "Laythe",
	crs: L.KSP.CRS.EPSG4326,
	radius: 500000,
	addedOn: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdated: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 26,
	thumbnail: "http://static.kerbalmaps.com/images/body-laythe.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "laythe",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "laythe",
			style: "color",
			legend: {
				"6050 m" : "#cdcd9b",
				"3000 m" : "#aaaa7d",
				"1500 m" : "#8c8c69",
				"500 m" : "#696950",
				"0.001 m" : "#464637",
				"-0 m" : "#46505a",
				"-50 m" : "#1e4173",
				"-500 m" : "#192d55"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "laythe",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {}
});

L.KSP.CelestialBody.VALL = L.KSP.celestialBody({
	id: "vall",
	name: "Vall",
	crs: L.KSP.CRS.EPSG4326,
	radius: 300000,
	addedOn: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdated: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 26,
	thumbnail: "http://static.kerbalmaps.com/images/body-vall.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "vall",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "vall",
			style: "color",
			legend: {
				"8000 m" : "#e6f0f0",
				"4000 m" : "#bed7dc",
				"2000 m" : "#91b9be",
				"1000 m" : "#87aaaf",
				"0 m" : "#739196",
				"-400 m" : "#647d82"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "vall",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {
		"Anomalies": L.KSP.layerGroup(L.KSP.LayerGroup.TYPE_ANOMALY, [
			L.marker([-60.3289, 84.0579], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-60.3289 : 84.0579") //icehenge
		])
	}
});

L.KSP.CelestialBody.TYLO = L.KSP.celestialBody({
	id: "tylo",
	name: "Tylo",
	crs: L.KSP.CRS.EPSG4326,
	radius: 600000,
	addedOn: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdated: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 26,
	thumbnail: "http://static.kerbalmaps.com/images/body-tylo.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "tylo",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "tylo",
			style: "color",
			legend: {
				"11300 m" : "#f5f0f0",
				"10000 m" : "#e6e1dc",
				"5000 m" : "#b4afaa",
				"2500 m" : "#878278",
				"1000 m" : "#645f5a",
				"250 m" : "#322d2d",
				"1 m" : "#141414"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "tylo",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {
		"Anomalies": L.KSP.layerGroup(L.KSP.LayerGroup.TYPE_ANOMALY, [
			L.marker([-8.9969, 17.7375], {icon: L.KSP.Icon.ANOMALY}).bindPopup("-8.9969 : 17.7375"), //sagan
			L.marker([40.2671, 174.0467], {icon: L.KSP.Icon.ANOMALY}).bindPopup("40.2671 : 174.0467") //cave
		])
	}
});

L.KSP.CelestialBody.BOP = L.KSP.celestialBody({
	id: "bop",
	name: "Bop",
	crs: L.KSP.CRS.EPSG4326,
	radius: 65000,
	addedOn: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdated: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 30,
	thumbnail: "http://static.kerbalmaps.com/images/body-bop.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "bop",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "bop",
			style: "color",
			legend: {
				"22000 m" : "#918c7d",
				"18000 m" : "#645a55",
				"12000 m" : "#413732",
				"6000 m" : "#2d2823",
				"2000 m" : "#1e1914"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "bop",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {
		"Anomalies": L.KSP.layerGroup(L.KSP.LayerGroup.TYPE_ANOMALY, [
			L.marker([68.211, 118.4473], {icon: L.KSP.Icon.ANOMALY}).bindPopup("68.211 : 118.4473") //deadkracken
		])
	}
});

L.KSP.CelestialBody.POL = L.KSP.celestialBody({
	id: "pol",
	name: "Pol",
	crs: L.KSP.CRS.EPSG4326,
	radius: 44000,
	addedOn: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdated: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 30,
	thumbnail: "http://static.kerbalmaps.com/images/body-pol.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "pol",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "pol",
			style: "color",
			legend: {
				"5600 m" : "#ebd296",
				"5000 m" : "#d2b982",
				"2500 m" : "#91785f",
				"1000 m" : "#505055",
				"780 m" : "#4b4b50"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "pol",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {}
});
L.KSP.CelestialBody.EELOO = L.KSP.celestialBody({
	id: "eeloo",
	name: "Eeloo",
	crs: L.KSP.CRS.EPSG4326,
	radius: 210000,
	addedOn: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdated: 1369180800000, // Wed 22 May 2013 12:00:00 AM UTC
	lastUpdatedVer: 34,
	lastModifiedVer: 30,
	thumbnail: "http://static.kerbalmaps.com/images/body-eeloo.png",
	baseLayers: {
		"Satellite":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SATELLITE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "eeloo",
			style: "sat"
		}),
		"Color Relief": L.KSP.tileLayer(L.KSP.TileLayer.TYPE_COLORRELIEF,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "eeloo",
			style: "color",
			legend: {
				"3900 m" : "#c3cdcd",
				"3500 m" : "#afb9b9",
				"2000 m" : "#879191",
				"1000 m" : "#787878",
				"500 m" : "#4b4637",
				"-400 m" : "#322d23"
			}
		}),
		"Slope":  L.KSP.tileLayer(L.KSP.TileLayer.TYPE_SLOPE,
				L.KSP.TileLayer.DEFAULT_URL,
				L.KSP.CRS.EPSG4326, {
			body: "eeloo",
			style: "slope",
			legend: L.KSP.Legend.SLOPE
		})
	},
	overlays: {}
});

// Objects are unordered so we explicly define the default layer
L.KSP.CelestialBody.KERBIN.defaultLayer = L.KSP.CelestialBody.KERBIN.baseLayers.Satellite;
L.KSP.CelestialBody.MUN.defaultLayer = L.KSP.CelestialBody.MUN.baseLayers.Satellite;
L.KSP.CelestialBody.MINMUS.defaultLayer = L.KSP.CelestialBody.MINMUS.baseLayers.Satellite;

// Model two way relationships between bodies
L.KSP.CelestialBody.EVE.children = [L.KSP.CelestialBody.GILLY];
L.KSP.CelestialBody.KERBIN.children = [L.KSP.CelestialBody.MUN, L.KSP.CelestialBody.MINMUS];
L.KSP.CelestialBody.DUNA.children = [L.KSP.CelestialBody.IKE];
L.KSP.CelestialBody.JOOL.children = [
	L.KSP.CelestialBody.LAYTHE,
	L.KSP.CelestialBody.VALL,
	L.KSP.CelestialBody.TYLO,
	L.KSP.CelestialBody.BOP,
	L.KSP.CelestialBody.POL
];

L.KSP.CelestialBody.GILLY.parent = L.KSP.CelestialBody.EVE;
L.KSP.CelestialBody.MUN.parent = L.KSP.CelestialBody.MINMUS.parent = L.KSP.CelestialBody.KERBIN;
L.KSP.CelestialBody.IKE.parent = L.KSP.CelestialBody.DUNA;
L.KSP.CelestialBody.LAYTHE.parent =
	L.KSP.CelestialBody.VALL.parent =
	L.KSP.CelestialBody.TYLO.parent =
	L.KSP.CelestialBody.BOP.parent =
	L.KSP.CelestialBody.POL.parent =
	L.KSP.CelestialBody.JOOL;

/*
 * An array with references to the all planets and dwarf planets, ascending by proximity to the star
 * Replaces the default (dummy) object
 */
L.KSP.CelestialBody.ALL_PLANETARY = [
	L.KSP.CelestialBody.MOHO,
	L.KSP.CelestialBody.EVE,
	L.KSP.CelestialBody.KERBIN,
	L.KSP.CelestialBody.DUNA,
	L.KSP.CelestialBody.DRES,
	L.KSP.CelestialBody.JOOL,
	L.KSP.CelestialBody.EELOO
];

// Sets the default body to Kerbin
L.KSP.Map.addInitHook(function () {
	this.options.layers = [L.KSP.CelestialBody.KERBIN];
});

