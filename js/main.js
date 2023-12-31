$(document).ready(function () {
  
  // dashboard4 PSC정보
  $("#open1").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open1").hasClass("active")) {
      // active class 제거
      $("#open1").removeClass("active");
    } else {
      // active class 추가
      $("#open1").addClass("active");
      // active 나머지 class 제거
      $("#open2").removeClass("active");
      $("#open3").removeClass("active");
    }
  });

  $("#open2").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open2").hasClass("active")) {
      // active class 제거
      $("#open2").removeClass("active");
    } else {
      // active class 추가
      $("#open2").addClass("active");
      // active 나머지 class 제거
      $("#open1").removeClass("active");
      $("#open3").removeClass("active");
    }
  });

  $("#open3").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open3").hasClass("active")) {
      // active class 제거
      $("#open3").removeClass("active");
    } else {
      // active class 추가
      $("#open3").addClass("active");
      // active 나머지 class 제거
      $("#open1").removeClass("active");
      $("#open2").removeClass("active");
    }
  });

  // -------------------------------------------- //

  // dashboard1 자율운항지원 서비스
  $("#open4").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open4").hasClass("active")) {
      // active class 제거
      $("#open4").removeClass("active");
    } else {
      // active class 추가
      $("#open4").addClass("active");
      // active 나머지 class 제거
      $("#open5").removeClass("active");
      $("#open6").removeClass("active");
      $("#open7").removeClass("active");
    }
  });

  $("#open5").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open5").hasClass("active")) {
      // active class 제거
      $("#open5").removeClass("active");
    } else {
      // active class 추가
      $("#open5").addClass("active");
      // active 나머지 class 제거
      $("#open4").removeClass("active");
      $("#open6").removeClass("active");
      $("#open7").removeClass("active");
    }
  });

  $("#open6").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open6").hasClass("active")) {
      // active class 제거
      $("#open6").removeClass("active");
    } else {
      // active class 추가
      $("#open6").addClass("active");
      // active 나머지 class 제거
      $("#open4").removeClass("active");
      $("#open5").removeClass("active");
      $("#open7").removeClass("active");
    }
  });

  $("#open7").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open7").hasClass("active")) {
      // active class 제거
      $("#open7").removeClass("active");
    } else {
      // active class 추가
      $("#open7").addClass("active");
      // active 나머지 class 제거
      $("#open4").removeClass("active");
      $("#open5").removeClass("active");
      $("#open6").removeClass("active");
    }
  });

  // dashboard2 사고대응지원 서비스
  $("#open8").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open4").hasClass("active")) {
      // active class 제거
      $("#open8").removeClass("active");
    } else {
      // active class 추가
      $("#open8").addClass("active");
      // active 나머지 class 제거
      $("#open9").removeClass("active");
      $("#open10").removeClass("active");
      $("#open11").removeClass("active");
    }
  });

  $("#open9").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open5").hasClass("active")) {
      // active class 제거
      $("#open9").removeClass("active");
    } else {
      // active class 추가
      $("#open9").addClass("active");
      // active 나머지 class 제거
      $("#open8").removeClass("active");
      $("#open10").removeClass("active");
      $("#open11").removeClass("active");
    }
  });

  $("#open10").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open6").hasClass("active")) {
      // active class 제거
      $("#open10").removeClass("active");
    } else {
      // active class 추가
      $("#open10").addClass("active");
      // active 나머지 class 제거
      $("#open8").removeClass("active");
      $("#open9").removeClass("active");
      $("#open11").removeClass("active");
    }
  });

  $("#open11").on("click", function (e) {
    // test class를 포함하는 DOM 객체가 active class를 포함하면 true 아니면 false를 반환
    if ($(e.target.id === "open7").hasClass("active")) {
      // active class 제거
      $("#open11").removeClass("active");
    } else {
      // active class 추가
      $("#open11").addClass("active");
      // active 나머지 class 제거
      $("#open8").removeClass("active");
      $("#open9").removeClass("active");
      $("#open10").removeClass("active");
    }
  });

  // -------------------------------------------- //

  // dashboard1 아코디언 메뉴
  $(".toggle ul").hide();
  // $(".toggle > li:first-child a").next().show();

  $(".toggle li a").on("click", function () {
    $(".toggle li a").not(this).removeClass("active");
    $(this).addClass("active");

    $(this).next().stop().slideToggle(300);
    // $(this).next().slideDown(300);
    $(".toggle li a").not(this).next().slideUp(300);
    return false;
  });

  // $(".toggle li a").eq(0).trigger("click");
});

// -------------------------------------------- //

// 로딩 중 //
function loaderShow() {
  $(".loader").css("display", "block");
  setTimeout("loaderHide()", 4000);
}

function loaderHide() {
  $(".loader").css("display", "none");
}

// -------------------------------------------- //

// 사고대응지원 서비스 am chart //
am5.ready(function () {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([am5themes_Animated.new(root)]);

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/radar-chart/
  var chart = root.container.children.push(
    am5radar.RadarChart.new(root, {
      panX: false,
      panY: false,
      startAngle: 160,
      endAngle: 380,
    })
  );

  // Create axis and its renderer
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
  var axisRenderer = am5radar.AxisRendererCircular.new(root, {
    innerRadius: -20,
  });

  axisRenderer.grid.template.setAll({
    stroke: root.interfaceColors.get("background"),
    visible: true,
    strokeOpacity: 0.8,
  });

  var xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: -40,
      max: 100,
      strictMinMax: true,
      renderer: axisRenderer,
    })
  );

  // Add clock hand
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
  var axisDataItem = xAxis.makeDataItem({});

  var clockHand = am5radar.ClockHand.new(root, {
    pinRadius: am5.percent(20),
    radius: am5.percent(100),
    bottomWidth: 40,
  });

  var bullet = axisDataItem.set(
    "bullet",
    am5xy.AxisBullet.new(root, {
      sprite: clockHand,
    })
  );

  xAxis.createAxisRange(axisDataItem);

  var label = chart.radarContainer.children.push(
    am5.Label.new(root, {
      fill: am5.color(0xffffff),
      centerX: am5.percent(50),
      textAlign: "center",
      centerY: am5.percent(50),
      fontSize: "1.5em",
    })
  );

  axisDataItem.set("value", 50);
  bullet.get("sprite").on("rotation", function () {
    var value = axisDataItem.get("value");
    var text = Math.round(axisDataItem.get("value")).toString();
    var fill = am5.color(0x000000);
    xAxis.axisRanges.each(function (axisRange) {
      if (
        value >= axisRange.get("value") &&
        value <= axisRange.get("endValue")
      ) {
        fill = axisRange.get("axisFill").get("fill");
      }
    });

    label.set("text", Math.round(value).toString());

    clockHand.pin.animate({
      key: "fill",
      to: fill,
      duration: 500,
      easing: am5.ease.out(am5.ease.cubic),
    });
    clockHand.hand.animate({
      key: "fill",
      to: fill,
      duration: 500,
      easing: am5.ease.out(am5.ease.cubic),
    });
  });

  setInterval(function () {
    axisDataItem.animate({
      key: "value",
      to: Math.round(Math.random() * 140 - 40),
      duration: 500,
      easing: am5.ease.out(am5.ease.cubic),
    });
  }, 2000);

  // chart.bulletsContainer.set("mask", undefined);

  // Create axis ranges bands
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Bands
  var bandsData = [
    {
      title: "Unsustainable",
      color: "#ee1f25",
      lowScore: -40,
      highScore: -20,
    },
    {
      title: "Volatile",
      color: "#f04922",
      lowScore: -20,
      highScore: 0,
    },
    {
      title: "Foundational",
      color: "#fdae19",
      lowScore: 0,
      highScore: 20,
    },
    {
      title: "Developing",
      color: "#f3eb0c",
      lowScore: 20,
      highScore: 40,
    },
    {
      title: "Maturing",
      color: "#b0d136",
      lowScore: 40,
      highScore: 60,
    },
    {
      title: "Sustainable",
      color: "#54b947",
      lowScore: 60,
      highScore: 80,
    },
    {
      title: "High Performing",
      color: "#0f9747",
      lowScore: 80,
      highScore: 100,
    },
  ];

  am5.array.each(bandsData, function (data) {
    var axisRange = xAxis.createAxisRange(xAxis.makeDataItem({}));

    axisRange.setAll({
      value: data.lowScore,
      endValue: data.highScore,
    });

    axisRange.get("axisFill").setAll({
      visible: true,
      fill: am5.color(data.color),
      fillOpacity: 0.8,
    });

    axisRange.get("label").setAll({
      // text: data.title,
      inside: true,
      radius: 15,
      fontSize: "0.9em",
      fill: root.interfaceColors.get("background"),
    });
  });
}); // end am5.ready()



// dashboard all 사고대응지원 서비스 am chart //
am5.ready(function () {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv1");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([am5themes_Animated.new(root)]);

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/radar-chart/
  var chart = root.container.children.push(
    am5radar.RadarChart.new(root, {
      panX: false,
      panY: false,
      startAngle: 160,
      endAngle: 380,
    })
  );

  // Create axis and its renderer
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
  var axisRenderer = am5radar.AxisRendererCircular.new(root, {
    innerRadius: -15,
  });

  axisRenderer.grid.template.setAll({
    stroke: root.interfaceColors.get("background"),
    visible: true,
    strokeOpacity: 0.8,
  });

  var xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: -40,
      max: 100,
      strictMinMax: true,
      renderer: axisRenderer,
    })
  );

  // Add clock hand
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
  var axisDataItem = xAxis.makeDataItem({});

  var clockHand = am5radar.ClockHand.new(root, {
    pinRadius: am5.percent(20),
    radius: am5.percent(100),
    bottomWidth: 15,
  });

  var bullet = axisDataItem.set(
    "bullet",
    am5xy.AxisBullet.new(root, {
      sprite: clockHand,
    })
  );

  xAxis.createAxisRange(axisDataItem);

  var label = chart.radarContainer.children.push(
    am5.Label.new(root, {
      fill: am5.color(0xffffff),
      centerX: am5.percent(50),
      textAlign: "center",
      centerY: am5.percent(50),
      fontSize: "1.3em",
    })
  );

  axisDataItem.set("value", 50);
  bullet.get("sprite").on("rotation", function () {
    var value = axisDataItem.get("value");
    var text = Math.round(axisDataItem.get("value")).toString();
    var fill = am5.color(0x000000);
    xAxis.axisRanges.each(function (axisRange) {
      if (
        value >= axisRange.get("value") &&
        value <= axisRange.get("endValue")
      ) {
        fill = axisRange.get("axisFill").get("fill");
      }
    });

    label.set("text", Math.round(value).toString());

    clockHand.pin.animate({
      key: "fill",
      to: fill,
      duration: 500,
      easing: am5.ease.out(am5.ease.cubic),
    });
    clockHand.hand.animate({
      key: "fill",
      to: fill,
      duration: 500,
      easing: am5.ease.out(am5.ease.cubic),
    });
  });

  setInterval(function () {
    axisDataItem.animate({
      key: "value",
      to: Math.round(Math.random() * 140 - 40),
      duration: 500,
      easing: am5.ease.out(am5.ease.cubic),
    });
  }, 2000);

  // chart.bulletsContainer.set("mask", undefined);

  // Create axis ranges bands
  // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Bands
  var bandsData = [
    {
      title: "Unsustainable",
      color: "#ee1f25",
      lowScore: -40,
      highScore: -20,
    },
    {
      title: "Volatile",
      color: "#f04922",
      lowScore: -20,
      highScore: 0,
    },
    {
      title: "Foundational",
      color: "#fdae19",
      lowScore: 0,
      highScore: 20,
    },
    {
      title: "Developing",
      color: "#f3eb0c",
      lowScore: 20,
      highScore: 40,
    },
    {
      title: "Maturing",
      color: "#b0d136",
      lowScore: 40,
      highScore: 60,
    },
    {
      title: "Sustainable",
      color: "#54b947",
      lowScore: 60,
      highScore: 80,
    },
    {
      title: "High Performing",
      color: "#0f9747",
      lowScore: 80,
      highScore: 100,
    },
  ];

  am5.array.each(bandsData, function (data) {
    var axisRange = xAxis.createAxisRange(xAxis.makeDataItem({}));

    axisRange.setAll({
      value: data.lowScore,
      endValue: data.highScore,
    });

    axisRange.get("axisFill").setAll({
      visible: true,
      fill: am5.color(data.color),
      fillOpacity: 0.8,
    });

    axisRange.get("label").setAll({
      // text: data.title,
      inside: true,
      radius: 15,
      fontSize: "0.9em",
      fill: root.interfaceColors.get("background"),
    });
  });
}); // end am5.ready()