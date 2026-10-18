const datos = [
  {
    Mes: "Enero",
    Personas: {
      Final: 120,
      Proyectado: 130,
    },
    Kilos: {
      Final: 2450,
      Proyectado: 2600,
    },
  },
  {
    Mes: "Febrero",
    Personas: {
      Final: 135,
      Proyectado: 140,
    },
    Kilos: {
      Final: 2700,
      Proyectado: 2800,
    },
  },
  {
    Mes: "Marzo",
    Personas: {
      Final: 150,
      Proyectado: 155,
    },
    Kilos: {
      Final: 3100,
      Proyectado: 3200,
    },
  },
  {
    Mes: "Abril",
    Personas: {
      Final: 145,
      Proyectado: 160,
    },
    Kilos: {
      Final: 2950,
      Proyectado: 3300,
    },
  },
  {
    Mes: "Mayo",
    Personas: {
      Final: 165,
      Proyectado: 170,
    },
    Kilos: {
      Final: 3400,
      Proyectado: 3500,
    },
  },
  {
    Mes: "Junio",
    Personas: {
      Final: 180,
      Proyectado: 175,
    },
    Kilos: {
      Final: 3700,
      Proyectado: 3600,
    },
  },
  {
    Mes: "Julio",
    Personas: {
      Final: 190,
      Proyectado: 200,
    },
    Kilos: {
      Final: 3950,
      Proyectado: 4100,
    },
  },
  {
    Mes: "Agosto",
    Personas: {
      Final: 205,
      Proyectado: 210,
    },
    Kilos: {
      Final: 4200,
      Proyectado: 4300,
    },
  },
  {
    Mes: "Septiembre",
    Personas: {
      Final: 195,
      Proyectado: 215,
    },
    Kilos: {
      Final: 4050,
      Proyectado: 4400,
    },
  },
  {
    Mes: "Octubre",
    Personas: {
      Final: 220,
      Proyectado: 225,
    },
    Kilos: {
      Final: 4550,
      Proyectado: 4600,
    },
  },
  {
    Mes: "Noviembre",
    Personas: {
      Final: 235,
      Proyectado: 240,
    },
    Kilos: {
      Final: 4800,
      Proyectado: 4900,
    },
  },
  {
    Mes: "Diciembre",
    Personas: {
      Final: 250,
      Proyectado: 260,
    },
    Kilos: {
      Final: 5200,
      Proyectado: 5400,
    },
  },
];
// Varaibles

const h3LastPD = document.getElementById("LastPD");
const h3ResultadoPD = document.getElementById("PD-Resultado");
const h3RFPD = document.getElementById("RfPD");
const h3LastKG = document.getElementById("LastKG");
const h3ResultadoKG = document.getElementById("KG-Resultado");
const h3RFKH = document.getElementById("RfKG");
const h3LastHC = document.getElementById("LastHC");
const h3ResultadoHC = document.getElementById("HC-Resultado");
const h3RFHC = document.getElementById("RfHC");
const GraficoPD = document.getElementById("Grafico-PD");
const GraficoKG = document.getElementById("Grafico-KG");
const GraficoHC = document.getElementById("Grafico-HC");
const mesActual = new Date().getMonth();
const datoMesActual = datos[mesActual];
//Funcion para calcular resultados

function calcularResultados(final, proyectado) {
  return ((final - proyectado) / proyectado) * 100;
}

function CalculoHC() {
  const dato = datos[mesActual];

  h3LastHC.innerText = dato.Personas.Final;
  h3RFHC.innerText = dato.Personas.Proyectado;

  const resultado = calcularResultados(
    dato.Personas.Final,
    dato.Personas.Proyectado,
  );

  h3ResultadoHC.innerText = resultado.toFixed(0) + "%";

  if (resultado < 0) {
    h3ResultadoHC.style.color = "red";
  } else {
    h3ResultadoHC.style.color = "green";
  }
}

function CalculoKILOS() {
  const dato = datos[mesActual];

  h3LastKG.innerText = dato.Kilos.Final;
  h3RFKH.innerText = dato.Kilos.Proyectado;

  const resultado = calcularResultados(dato.Kilos.Final, dato.Kilos.Proyectado);
  h3ResultadoKG.innerText = resultado.toFixed(0) + "%";

  if (resultado < 0) {
    h3ResultadoKG.style.color = "green";
  } else {
    h3ResultadoKG.style.color = "red";
  }
}

function CalculoPD() {
  const dato = datos[mesActual];

  h3LastPD.innerText = (dato.Kilos.Final / dato.Personas.Final).toFixed(1);
  h3RFPD.innerText = (dato.Kilos.Proyectado / dato.Personas.Proyectado).toFixed(1);

  const resultado = calcularResultados(
    dato.Kilos.Final / dato.Personas.Final,
    dato.Kilos.Proyectado / dato.Personas.Proyectado,
  );

  h3ResultadoPD.innerText = resultado.toFixed(2) + "%";

 if (resultado < 0) {
  h3ResultadoPD.style.color = "green";
} else {
  h3ResultadoPD.style.color = "red";
}
}

CalculoHC();
CalculoKILOS();
CalculoPD();


//Hacer graficos combinados.

const meses = datos.map((dato)=> dato.Mes);
const kilosFinal = datos.map((dato)=> dato.Kilos.Final);
const kilosProyectado = datos.map((dato)=> dato.Kilos.Proyectado);
const personasFinal = datos.map((dato)=> dato.Personas.Final);
const personasProyectado = datos.map((dato)=> dato.Personas.Proyectado);
const pdFinal = datos.map((dato)=> (dato.Kilos.Final / dato.Personas.Final).toFixed(1));
const pdProyectado = datos.map((dato)=> (dato.Kilos.Proyectado / dato.Personas.Proyectado).toFixed(1));

const graficoCombinadoPD = new Chart(GraficoPD,{
  data:{
    datasets:[{
      type:"bar",
      label:"Last Tons",
      data:pdFinal
    },{
      type:"line",
      label:"RF Tons",
      data:pdProyectado
    }],
    labels:meses
  },
  options:{
    reponsive:true
  }
})

const graficoCombinadoKG = new Chart(GraficoKG,{
  data:{
    datasets:[{
      type:"bar",
      label:"Last Tons",
      data:kilosFinal
    },{
      type:"line",
      label:"RF Tons",
      data:kilosProyectado
    }],
    labels:meses
  },
  options:{
    reponsive:true
  }
})

const graficoCombinadoHC = new Chart(GraficoHC,{
  data:{
    datasets:[{
      type:"bar",
      label:"Last HC",
      data:personasFinal
    },{
      type:"line",
      label:"RF HC",
      data:personasProyectado
    }],
    labels:meses
  },
  options:{
    reponsive:true
  }
})