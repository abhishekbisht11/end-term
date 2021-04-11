function showData()
{
    event.preventDefault();
    var country=document.getElementById("country").value;
    var date1=document.getElementById("date1").value;
    var date2=document.getElementById("date2").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(date1);

    if(country=='' || date1=='' || date2=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+date1+"T00:00:00Z&to="+date2+"T00:00:00Z";

        fetch(url)
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            var length=data.length;
            var index=length-1;

            var c=data[index].Confirmed;
            var a=data[index].Active;
            var d=data[index].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("data").style.display="block";
            
        })
    }
    
}