function Add(el1,el2) 
{
    document.getElementById('eredmeny').innerHTML = parseFloat(el1.value) + parseFloat(el2.value);
}
function Sub(el1,el2)
{
    document.getElementById('eredmeny').innerHTML = parseFloat(el1.value) - parseFloat(el2.value);
}

function Multi(el1,el2) 
{
    document.getElementById('eredmeny').innerHTML = parseFloat(el1.value) * parseFloat(el2.value);
}


function Div(el1,el2) {
    document.getElementById('eredmeny').innerHTML = parseFloat(el1.value) / parseFloat(el2.value);
}