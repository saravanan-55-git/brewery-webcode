let container = document.createElement("div");
container.setAttribute("class","container");

let row = document.createElement("div");
row.setAttribute("class","row");

let table = document.createElement("table");
row_table = document.createElement('tr')
let td = document.createElement("td");

container.append(row);
// document.body.innerHTML += `
// </br></br>
// <table >
//     <th>Name</th>
//     <th>Brewery type</th>
//     <th>Street</th>
//     <th>City</th>
//     <th>State</th>
//     <th>Country</th>
//     <th>Brewery Type</th>
//     <th>Phone</th>
//     <th>Website</th>
//     </table>
// `

async function getListData(){
    v=  fetch("https://api.openbrewerydb.org/breweries")
    out = await v;
    prom = out.json();
    out1 = await prom;   
    document.getElementById('data').innerHTML = '';
    
    var slno=0;
    if(out1.length > 0)
{    var temp = '';
    out1.forEach(itemdata => {
        slno=slno+1;
        temp += "<tr>"   
        temp += "<td>" +slno+ "</td>" 
        temp += "<td>" +itemdata.name+ "</td>"
        temp += "<td>" +itemdata.city+ "</td>"
        temp += "<td>" +itemdata.street+ "</td>"
        temp += "<td>" +itemdata.postal_code+ "</td>"
        temp += "<td>" +itemdata.country+ "</td>"
        temp += "<td>" +itemdata.brewery_type+ "</td>"
        temp += "<td>" +itemdata.phone+ "</td>"
        temp += "<td>" +itemdata.state+ "</td>"
        temp += "<td>" +itemdata.website_url+ "</td></tr>"
    });
    document.getElementById('data').innerHTML += temp;
    
}

    // for(let i=0;i<out1.length;i++){
        
        
        // <div class="container">
            
        // <td width=100%> ${out1[i].street}</td>
        // // <td width=100%> ${out1[i].city}</td>
        // // <td width=100%> ${out1[i].state}</td>
        // // <td width=100%> ${out1[i].postal_code}</td>
        // // <td width=100%> ${out1[i].country}</td>
        // // <td width=100%> ${out1[i].brewery_type}</td>
        // // <td width=100%> ${out1[i].phone}</td>
        // // <td width=100%> ${out1[i].website_url}</td>
        // // </tr>
        // </div>
       
    // }
   

    //https://stackoverflow.com/questions/64458283/how-to-fetch-api-data-and-view-in-html-table

    console.log("length of the array:..."+out1.length);

    console.log(out1);
    console.log(out1[0]);
    console.log(out1[0].name);
    console.log(out1[0].brewery_type);
    console.log(out1[0].street);
    
}
async function getSingleData(){
    v = fetch("https://api.openbrewerydb.org/breweries/madtree-brewing-cincinnati");
    data = await v;
    prom = data.json();
    data1 = await prom;
    console.log(data1);    
    document.getElementById('data').innerHTML = '';
    
    var slno=0;
    if(data1.length !=0)
{    var temp = '';
        temp += "<tr>"  
        temp += "<td>" +slno+1+ "</td>"  
        temp += "<td>" +data1.name+ "</td>"
        temp += "<td>" +data1.city+ "</td>"
        temp += "<td>" +data1.street+ "</td>"
        temp += "<td>" +data1.postal_code+ "</td>"
        temp += "<td>" +data1.country+ "</td>"
        temp += "<td>" +data1.brewery_type+ "</td>"
        temp += "<td>" +data1.phone+ "</td>"
        temp += "<td>" +data1.state+ "</td>"
        temp += "<td>" +data1.website_url+ "</td></tr>"
    
    document.getElementById('data').innerHTML += temp;
}
        // for(let i=0;i<data1.length;i++){
        // document.body.innerHTML += `
        
        // <div class="container">
        //     <tr>    
        // <td width=100%> ${data1.name}</td>
        // <td width=100%> ${data1.street}</td>
        // <td width=100%> ${data1.city}</td>
        // <td width=100%> ${data1.state}</td>
        // <td width=100%> ${data1.postal_code}</td>
        // <td width=100%> ${data1.country}</td>
        // <td width=100%> ${data1.brewery_type}</td>
        // <td width=100%> ${data1.phone}</td>
        // <td width=100%> ${data1.website_url}</td>
        // </tr>
        // </div>
       // `
      //}
}

async function getRandomData(){
v= fetch("https://api.openbrewerydb.org/breweries/random?size=3")
data = await v;
prom = data.json();
data1 = await prom;
console.log(data1);
console.log(data1.length);
document.getElementById('data').innerHTML = '';
var slno = 0;
if(data1.length > 0)
{    var temp = '';
    data1.forEach(itemdata => {
        slno=slno+1;
        temp += "<tr>"    
        temp += "<td>" +slno+ "</td>"
        temp += "<td>" +itemdata.name+ "</td>"
        temp += "<td>" +itemdata.city+ "</td>"
        temp += "<td>" +itemdata.street+ "</td>"
        temp += "<td>" +itemdata.postal_code+ "</td>"
        temp += "<td>" +itemdata.country+ "</td>"
        temp += "<td>" +itemdata.brewery_type+ "</td>"
        temp += "<td>" +itemdata.phone+ "</td>"
        temp += "<td>" +itemdata.state+ "</td>"
        temp += "<td>" +itemdata.website_url+ "</td></tr>"
    });
    document.getElementById('data').innerHTML += temp;
}

    //     for(let i=0;i<data1.length;i++){

    //     document.body.innerHTML += `
        
    //     <div class="container">
    //         <tr>    
    //     <td width=100%> ${data1[i].name}</td>
    //     <td width=100%> ${data1[i].street}</td>
    //     <td width=100%> ${data1[i].city}</td>
    //     <td width=100%> ${data1[i].state}</td>
    //     <td width=100%> ${data1[i].postal_code}</td>
    //     <td width=100%> ${data1[i].country}</td>
    //     <td width=100%> ${data1[i].brewery_type}</td>
    //     <td width=100%> ${data1[i].phone}</td>
    //     <td width=100%> ${data1[i].website_url}</td>
    //     </tr>
    //     </div>
    //     `
    // }
    
}

