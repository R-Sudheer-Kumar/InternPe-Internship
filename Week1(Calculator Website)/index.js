function CheckLength(a)
{
    val = document.forms.displays.value;
    
    if (val.length < 12)
    {
        document.forms.displays.style.fontSize = "40px";
    }
    else if(val.length >= 12 && val.length <= 16)
    {
        document.forms.displays.style.fontSize = "30px";
    }
    else if(val.length > 16 && val.length <=20)
    {
        document.forms.displays.style.fontSize = "25px";
    }
    else if(val.length > 20 && val.length <=23)
    {
        document.forms.displays.style.fontSize = "20px";
    }
    else if(val.length >= 24)
    {
        document.forms.displays.style.fontSize = "18px";
    }
    

    switch(a)
    {
        case 'AC':  document.forms.displays.value='';
                    document.forms.displays.style.fontSize = "40px";
                    break;
        case 'DE' : document.forms.displays.value = val.toString().slice(0,-1); break;
        case '=' : document.forms.displays.value = eval(val.toString().replace('x','*'));break;
        default : document.forms.displays.value += a;break;
    }
}