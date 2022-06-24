function accept () {
    var footer = document.querySelector(".footer")
    footer.remove()
}

function alert_loading(element){
    alert("Loading " + element + " weather report...")

    var city = document.querySelector(".san-jose h2");
    city.innerText=element;
}

var cel = document.querySelector("select").options[0].innerText
var far = document.querySelector("select").options[1].innerText

var temperaturas = [24,18,27,19,21,18,26,21]
var ftemperaturas = [75,65,80,66,69,61,78,70]


function type_temp(){
    var select = document.querySelector("select").selectedIndex
    var todaytempmax = document.querySelector("#today div .max_temp")
    var todaytempmin = document.querySelector("#today div .min_temp")
    var tomorrowtempmax = document.querySelector("#tomorrow div .max_temp")
    var tomorrowtempmin = document.querySelector("#tomorrow div .min_temp")
    var fridaytempmax = document.querySelector("#friday div .max_temp")
    var fridaytempmin = document.querySelector("#friday div .min_temp")
    var saturdaytempmax = document.querySelector("#saturday div .max_temp")
    var saturdaytempmin = document.querySelector("#saturday div .min_temp")
    
    var diastemp = [todaytempmax,todaytempmin,tomorrowtempmax,tomorrowtempmin,fridaytempmax,fridaytempmin,saturdaytempmax,saturdaytempmin]
    
    if(select==1){
        for (i=0;i<diastemp.length;i++) {
            diastemp[i].innerText = ftemperaturas[i] + "°"
        }
    } else {
        for (i=0;i<diastemp.length;i++) {
            diastemp[i].innerText = temperaturas[i] + "°"
        }
    }
}