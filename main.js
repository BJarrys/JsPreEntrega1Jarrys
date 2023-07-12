let monto=0;

function Iniciar()
{
    let opcion;
    opcion=prompt("Seleccione una Opción: 1. Prestamo a 6 meses / 2. Prestamo a 12 meses");

    switch (opcion) {
        case "1":
            alert("Usted seleccionó la opción 'Prestamo personal a 6 meses'");
            SeisMeses();
            break;
        case "2":
            alert("Usted seleccionó la opción 'Prestamo personal a 12 meses'");
            DoceMeses();
            break;
        default:
            alert("Usted seleccionó una opción incorrecta");
            
            break;
    }
}

function SeisMeses()
{
    SeleccionDeImporte();
    CalculoCuotaMesAMes(monto, 45, 6);
}

function DoceMeses()
{
    SeleccionDeImporte();
    CalculoCuotaMesAMes(monto, 72, 12);
}

function SeleccionDeImporte()
{
    monto=parseFloat(prompt("Ingrese el monto total del crédito a solicitar", 0));
    if (isNaN(monto)==false && monto<=10000)
    {
        alert("Debe ingresar un monto mayor a $ 10.000");
        SeleccionDeImporte();
    }
}

function CalculoCuotaMesAMes(monto, interes, tiempo)
{
    let pagoInteres=0, pagoCapital = 0, cuota = 0;

    cuota = monto * (Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);
    
    let mostrar="<thead><tr><th>Mes</th><th>Cuota Total</th><th>Capital pagado</th><th>Interés pagado</th><th>Saldo</th></tr></thead><tbody>";
    for(let i = 1; i <= tiempo; i++) {

        pagoInteres = parseFloat(monto*(interes/100));
        pagoCapital = cuota - pagoInteres;
        if (i==tiempo)
        {
            monto=0;
        }
        else
        {
            monto = parseFloat(monto-pagoCapital);
        }

        mostrar+="<tr><td>" + i + "</td><td>" + cuota + "</td><td>" + pagoCapital + "</td><td>" + pagoInteres + "</td><td>" + monto + "</td></tr>";
    }

    mostrar+="</tbody>"

    document.getElementById("TPago").innerHTML=mostrar;
} 