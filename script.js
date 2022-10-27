let div=document.createElement("div");
div.setAttribute("class","main1");



let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

//headingtag

let h1=document.createElement("h1")
h1.style.fontFamily="Rockwell"
h1.style.fontWeight="530"
h1.style.textShadow="2px 2px 5px LightCyan"
h1.style.transition=" 2s, 4s"
h1.innerHTML="NATIONALITY PREDICTOR"

//p tag for title description
let des=document.createElement("p")
des.innerHTML="Enter the name to search the Nationality";
des.style.textAlign="center";
des.style.fontSize="15px"


//input tag
let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Enter the Name here");

 
let div1=document.createElement("div");
div1.setAttribute("class","input-group-append");

//search button
let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-success");
button.innerHTML="Search";
button.style.marginLeft="190px";
button.style.alignItems="center"
button.style.marginTop="15px";
button.style.marginBottom="5px";
button.addEventListener("click",foo);
 
//to print name highlighted
let name1=document.createElement("div");
name1.setAttribute("id","name");

//output elemnts
let country1=document.createElement("div");
country1.setAttribute("id","countryname");

let probability1=document.createElement("div")
probability1.setAttribute("id","probabilityvalue");

let country2=document.createElement("div");
country2.setAttribute("id","countryname");

let probability2=document.createElement("div")
probability2.setAttribute("id","probabilityvalue");

formgroup.append(h1,des,input,div1,button,name1,country1,probability1,country2,probability2);


div.append(formgroup);
document.body.append(div);


async function foo(){
try {
let name=document.getElementById("main").value;
console.log(name);
let res=await fetch(`https://api.nationalize.io?name=${name}`);

let res1= await res.json();

name1.innerHTML=`Name : <mark>${res1.name}</mark>`;

let res2=await fetch(`https://restcountries.com/v2/alpha/${res1.country[0].country_id}`);
let res3= await res2.json();
country1.innerHTML=`Country 1 : ${res3.name}`;

probability1.innerHTML=`Probability 1 : ${res1.country[0].probability}`;

let res4=await fetch(`https://restcountries.com/v2/alpha/${res1.country[1].country_id}`);
let res5= await res4.json();
country2.innerHTML=`Country 2 : ${res5.name}`;

probability2.innerHTML=`Probability 2 : ${res1.country[1].probability}`;

} catch (error) {
  console.log(error);
}

}
