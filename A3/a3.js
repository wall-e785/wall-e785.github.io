async function run() {
  const datawide = await d3.csv("./dataset/videogames_wide.csv");
  const datalong = await d3.csv("./dataset/videogames_long.csv");
  const wiiGames = await d3.csv("./dataset/wiiGames.csv");

  const q1Spec = vl
  .markBar()
  .data(datawide)
  .encode(
    vl.x().fieldN("Platform").sort("-y"),
    vl.color().fieldN("Genre"),
    vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales (in millions)"),
    vl.tooltip(
      [
            vl.fieldN("Genre"),
            vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales")
      ]
    )
  ).height(800).toSpec();


  const q2Spec = vl
    .markLine({point: true})
    .data(datawide)
    .encode(
      vl.x().fieldO("Year"),
      vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales (in millions)"),
      vl.color({value: "red"}),
      vl.tooltip(
        [
          vl.x().fieldO("Year"),
          vl.y().fieldN("Platform").aggregate("max").title("Most Popular Platform"),
          vl.y().fieldN("Genre").aggregate("max").title("Most Popular Genre")
        ]
      )
    ).toSpec();

    const q3Spec = vl
    .markLine({point: "true"})
    .data(datalong)
    .encode(
      vl.x().fieldN("platform"),
      vl.y().fieldQ("sales_amount").aggregate("sum").title("Total Sales (millions)"),
      vl.color().fieldN("sales_region"),
      vl.tooltip(
        [
            vl.x().fieldN("platform").title("Platform"),
            vl.y().fieldQ("sales_amount").aggregate("sum").title("Total Sales (millions)"),
            vl.color().fieldN("sales_region").title("Sales Region")
        ]
      )
    ).height(600).toSpec();

    const q4Spec = vl
    .markPoint()
    .data(wiiGames)
    .encode(
      vl.y().fieldQ('Global_Sales').aggregate("sum").title('Global Sales'),
      vl.x().fieldO('Year').title('Year'),
      vl.color().fieldN("Platform"),
      vl.tooltip(
        [
            vl.y().fieldQ('Global_Sales').aggregate("sum").title('Global Sales'),
            vl.x().fieldO('Year').title('Year'),
            vl.color().fieldN("Platform")
        ]
      )
    ).toSpec();

  await render("#view", q1Spec);
  await render("#view2", q2Spec);
  await render("#view3", q3Spec);
  await render("#view4", q4Spec);
}

async function render(viewID, spec) {
  const result = await vegaEmbed(viewID, spec);
  result.view.run();
}

run();
