function ConstructorXMLHttpRequest()
{
    
    if(window.ActiveXObject) /*Si no ten�a el m�todo anterior,
    deber�a ser el Internet Exp. un navegador que emplea objetos
    ActiveX, lo mismo, miramos si tiene el m�todo de creaci�n. */
    {
        /*Hay diferentes versiones del objeto, creamos un array, que
        contiene los diferentes tipos desde la
        versi�n mas reciente, hasta la mas antigua */
        var versionesObj = new Array(
        "Msxml2.XMLHTTP.5.0",
        "Msxml2.XMLHTTP.4.0",
        "Msxml2.XMLHTTP.3.0",
        "Msxml2.XMLHTTP",
        "Microsoft.XMLHTTP");
        for (var i = 0; i < versionesObj.length; i++)
        {
            try
            {
                /*Intentamos devolver el objeto intentando crear las diferentes
                versiones se puede intentar crear uno que no existe y se
                producir� un error. */
                return new ActiveXObject(versionesObj[i]);
            }
            catch (errorControlado) //Capturamos el error, ya que podr�a crearse otro objeto.
            {}
        }
    }
    else if(window.XMLHttpRequest) /*Vemos si el objeto window (la base de
    la ventana del navegador) posee el m�todo
    XMLHttpRequest(Navegadores como Mozilla y Safari). */
    /*OJO (A�O 2012 -nota m�a-) WINDOWS YA TIENE SU PROPIO OBJETO QUE SE LLAMA ASI PERO AUN NO
    INVESTIGO COMO ACOMODAR SUS ARGUMENTOS, ASI QUE POR MIENTRAS EL CODIGO ACOMODADO DE ESTA
    MANERA ES POR ESE DETALLE
    */
    {
        return new XMLHttpRequest(); //Si lo tiene, crearemos el objeto con este m�todo.
    }
    /* Si el navegador llego aqu� es porque no posee manera alguna de
    crear el objeto, emitimos un mensaje de error. */
    throw new Error("No se pudo crear el objeto XMLHttpRequest");
}