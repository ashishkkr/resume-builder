function addNewWEField(){
    // console.log("adding new page")

    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add('mt-2')
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here")

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb)
}
function addNewEDUField(){
    // console.log("adding new page")

    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("edField");
    newNode.classList.add('mt-2')
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here")

    let edOb = document.getElementById("ed");
    let edAddButtonOb = document.getElementById("edAddButton");

    edOb.insertBefore(newNode,edAddButtonOb)
}

// generating CV
function generateCV(){
    // console.log("Generating cv")
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameField;

    // date of birth
    let dobField = document.getElementById("dobField").value;
    let dobT = document.getElementById("dobT");
    dobT.innerHTML = dobField;

    // language
    let lgField = document.getElementById("lgField").value;
    let langT = document.getElementById("langT");
    langT.innerHTML=lgField;

    // contact
    let contatField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML=contactField;

    // address
    let addressField = document.getElementById("addressField").value;
    let addressT=document.getElementById("addressT")
    addressT.innerHTML = addressField;

    // facebook
    let fbField = document.getElementById("fbField").value;
    let fbT = document.getElementById("fbT");
    fbT.innerHTML = fbField;

    // instagram
    let igField = document.getElementById("igField").value;
    let igT = document.getElementById("igT");
    igT.innerHTML = igField;

    // linkedin
    let lnField = document.getElementById("lnField").value;
    let lnT = document.getElementById("lnT");
    lnT.innerHTML = lnField;

    // education
    let edus = document.getElementsByClassName("edField");
    let str='';

    for(let e of edus)
    {
        str=str + `<li>${e.value}</li>`;
    }
    document.getElementById("edT").innerHTML=str;

    // technical skills
    document.getElementById("tsT").innerHTML=document.getElementById("tsField").value;

    // soft skills
    document.getElementById("ssT").innerHTML=document.getElementById("ssField").value;

    // work experience
    let wes = document.getElementsByClassName("weField")
    let str1=''

    for(let e of wes)
    {
        str1=str1 + `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str1;
    

    // reference
    document.getElementById("refT").innerHTML=document.getElementById("rfField").value;

    // set Image
    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function(){
        document.getElementById("imgT").src = reader.result;
    }

    
    document.getElementById("cv-form").style.display="none"
    document.getElementById("cv-template").style.display="block"
}

    function printCV(){
        window.print();
    }

    

