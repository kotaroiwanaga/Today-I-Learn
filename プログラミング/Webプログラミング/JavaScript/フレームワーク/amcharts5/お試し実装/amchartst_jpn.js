// 都道府県名の日本語化辞書
let prefecture = {
    "JP-01":'北海道', 
    "JP-02":'青森県', 
    "JP-03":'岩手県', 
    "JP-04":'宮城県', 
    "JP-05":'秋田県', 
    "JP-06":'山形県', 
    "JP-07":'福島県', 
    "JP-08":'茨城県', 
    "JP-09":'栃木県', 
    "JP-10":'群馬県', 
    "JP-11":'埼玉県', 
    "JP-12":'千葉県', 
    "JP-13":'東京都', 
    "JP-14":'神奈川県',
    "JP-15":'新潟県', 
    "JP-16":'富山県', 
    "JP-17":'石川県', 
    "JP-18":'福井県', 
    "JP-19":'山梨県', 
    "JP-20":'長野県', 
    "JP-21":'岐阜県', 
    "JP-22":'静岡県', 
    "JP-23":'愛知県', 
    "JP-24":'三重県', 
    "JP-25":'滋賀県', 
    "JP-26":'京都府', 
    "JP-27":'大阪府', 
    "JP-28":'兵庫県', 
    "JP-29":'奈良県', 
    "JP-30":'和歌山県',
    "JP-31":'鳥取県', 
    "JP-32":'島根県', 
    "JP-33":'岡山県', 
    "JP-34":'広島県', 
    "JP-35":'山口県', 
    "JP-36":'徳島県', 
    "JP-37":'香川県', 
    "JP-38":'愛媛県', 
    "JP-39":'高知県', 
    "JP-40":'福岡県', 
    "JP-41":'佐賀県', 
    "JP-42":'長崎県', 
    "JP-43":'熊本県', 
    "JP-44":'大分県', 
    "JP-45":'宮崎県', 
    "JP-46":'鹿児島県',
    "JP-47":'沖縄県', 
  };

  // 表示用データ
  let dispData = [
    {id:"JP-01"},
    {id:"JP-02"},
    {id:"JP-03"},
    {id:"JP-04"},
    {id:"JP-05"},
    {id:"JP-06"},
    {id:"JP-07"},
    {id:"JP-08"},
    {id:"JP-09"},
    {id:"JP-10"},
    {id:"JP-11"},
    {id:"JP-12"},
    {id:"JP-13", userCnt: 2},
    {id:"JP-14", userCnt: 1},
    {id:"JP-15"},
    {id:"JP-16"},
    {id:"JP-17"},
    {id:"JP-18"},
    {id:"JP-19"},
    {id:"JP-20"},
    {id:"JP-21"},
    {id:"JP-22"},
    {id:"JP-23"},
    {id:"JP-24"},
    {id:"JP-25"},
    {id:"JP-26"},
    {id:"JP-27"},
    {id:"JP-28"},
    {id:"JP-29"},
    {id:"JP-30"},
    {id:"JP-31"},
    {id:"JP-32"},
    {id:"JP-33"},
    {id:"JP-34"},
    {id:"JP-35"},
    {id:"JP-36"},
    {id:"JP-37"},
    {id:"JP-38"},
    {id:"JP-39"},
    {id:"JP-40", userCnt: 1},
    {id:"JP-41"},
    {id:"JP-42"},
    {id:"JP-43"},
    {id:"JP-44"},
    {id:"JP-45"},
    {id:"JP-46"},
    {id:"JP-47"}
  ];

  // 色分け用プロパティ(value)の設定
  for(let data of dispData){
    // data.userCnt == undefinedもfalseになる想定
    if(data.userCnt > 0){
        data.value = 1;
    } else {
        data.value = 0;
        data.userCnt = 0;
    }
  }
  
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("$CHART$");
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create the map chart
  // https://www.amcharts.com/docs/v5/charts/map-chart/
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "translateX",
    panY: "translateY",
    projection: am5map.geoMercator()
  }));
  
  
  // Create main polygon series for countries
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
  var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_japanHigh,
    geodataNames: prefecture,
    valueField: "value",
    calculateAggregates: true,
  }));
  
  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}:{userCnt}人",
    toggleKey: "active",
    interactive: true
  });

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: root.interfaceColors.get("primaryButtonHover")
  });
  
  polygonSeries.mapPolygons.template.states.create("active", {
    fill: root.interfaceColors.get("primaryButtonHover")
  });
  
  var previousPolygon;
  
  polygonSeries.mapPolygons.template.on("active", function (active, target) {
    if (previousPolygon && previousPolygon != target) {
      previousPolygon.set("active", false);
    }
    if (target.get("active")) {
      polygonSeries.zoomToDataItem(target.dataItem );
    }
    else {
      chart.goHome();
    }
    previousPolygon = target;
  });

  // これを先に書くと↑が動かなくなる
  // ヒートマップの設定
  polygonSeries.set("heatRules", [{
    target: polygonSeries.mapPolygons.template,
    dataField: "value",
    min: am5.color(0x8ab7ff),
    max: am5.color(0x25529a),
    key: "fill",
  }]);
  
  polygonSeries.data.setAll(dispData);

  // Add zoom control
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
  chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
  
  
  // Set clicking on "water" to zoom out
  chart.chartContainer.get("background").events.on("click", function () {
    chart.goHome();
  })
  
  
  // Make stuff animate on load
  chart.appear(1000, 100);
