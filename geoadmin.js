window.onload = function(e) {
	var layer = ga.layer.create('ch.swisstopo.pixelkarte-farbe');
	var map = new ga.Map({
		target: 'map',
		layers: [layer],
		view: new ol.View2D({
			resolution: 500,
			center: [670000, 160000]
		})
	});
};