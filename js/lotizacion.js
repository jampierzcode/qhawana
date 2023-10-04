var lotizacion = [
  {
    nombre_sector: "1. Las Bromelias",
    categoria_precio: [
      {
        precio: "18000",
        lotes: [
          26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
          43, 44, 45, 46, 47, 48,
        ],
      },
    ],
    medidas: "300",
    cantidad_terrenos: "23",
    img: "bromelias.png",
  },
  {
    nombre_sector: "2. Las Heligonias",
    categoria_precio: [
      {
        precio: "18000",
        lotes: [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
      },
      {
        precio: "19500",
        lotes: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
      },
    ],
    medidas: "300",
    cantidad_terrenos: "21",
    img: "heligonias.png",
  },
  {
    nombre_sector: "3. Los Anturios",
    categoria_precio: [
      {
        precio: "18000",
        lotes: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "15",
          "21",
          "22",
          "23",
          "24",
          "25",
        ],
      },
      {
        precio: "15000",
        lotes: ["09", "14", "16", "17", "18", "19", "20"],
      },
    ],
    medidas: "300",
    cantidad_terrenos: "25",
    img: "anturios.png",
  },
];

// cargar la base de datos
function buscar_sectores() {
  let template = "";
  for (let index = 0; index < lotizacion.length; index++) {
    template += `<li class="item-search">${lotizacion[index].nombre_sector}</li>`;
  }
  $("#aplication-filter .listing-sector").html(template);
}
buscar_sectores();

// open aplication

// app de lotizacion
let sectores = $("#aplication-filter .item-search");
$(sectores).click((e) => {
  let targeta = $(e.target).text();
  for (let index = 0; index < lotizacion.length; index++) {
    if (targeta === lotizacion[index].nombre_sector) {
      $("#sector-id-aplication").html(
        ` <img src="img/lotizacion/${lotizacion[index].img}" alt="" />`
      );
      let template = `<div class="description-box">
        <p><b class="color-primario">Sector: </b><span>${lotizacion[index].nombre_sector}</span></p>
              <p><b class="color-primario">Medidas: </b><span>${lotizacion[index].medidas} m2</span></p>
              <p><b class="color-primario">N Terrenos: </b><span>${lotizacion[index].cantidad_terrenos} lotes</span></p>
              </div> 
              <div class="categoria-precios">
              <p>
                <b class="color-primario">Categoria Precios: </b>
              </p>
        `;

      for (let j = 0; j < lotizacion[index]["categoria_precio"].length; j++) {
        template += `
          <div class="cat-lotes">
                  <h4>$/${lotizacion[index]["categoria_precio"][j].precio} dolares</h4>
                  <p>Lotes:</p>
                  <ul class="lotes-cat">`;
        for (
          let k = 0;
          k < lotizacion[index]["categoria_precio"][j].lotes.length;
          k++
        ) {
          template += `
                    
                      <li>${lotizacion[index]["categoria_precio"][j].lotes[k]}</li>
            `;
        }
        template += `</ul>
          </div>`;
      }
      template += `
        </div>`;
      $("#info-sector-id-aplication").html(template);
      break;
    }
  }
});

// Hide Header on on scroll down
var navbarHeight = $(".navbar").outerHeight();
$(window).scroll(function (event) {
  var y = window.scrollY;
  if (y >= navbarHeight) {
    $(".navbar").addClass("stickys");
    $(".navbar .navbar-brand").html(`<img src="logo oscuro.png" alt=""
      /></a>`);
  } else {
    $(".navbar").removeClass("stickys");
    $(".navbar .navbar-brand").html(`<img src="logo qhawana.png" alt=""
      /></a>`);
  }
});
