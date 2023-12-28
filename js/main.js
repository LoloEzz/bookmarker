
var ma5zan=[]
var oneSite;
var cartona;

/*const validateUrl =(inputUrl , acceptonly) =>
{

let validate = inputUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#?&/ /=]*)/g)

let accepted = acceptonly.some(el => inputUrl.includes(el))

let res =(validate && accepted)

if(res)
return true; 
return false; 

}
console.log(validateUrl('https:/ /www.youtube.com/watch?v=vXgsZEVEkcc'))*/





if(localStorage.getItem("ourLocalData") !=null)
{
    ma5zan=JSON.parse(localStorage.getItem("ourLocalData") );
    display()
}


 function submit()
 {
     oneSite=
     {
        BName:document.getElementById("BName").value,
        BUrl:document.getElementById("BUrl").value,
     } 
     
     ma5zan.push(oneSite);

     localStorage.setItem("ourLocalData",JSON.stringify(ma5zan))

     clear()

     display()
     

 }


function clear()
    {
        document.getElementById("BName").value=null;
        document.getElementById("BUrl").value=null;
    }



    
function display()
    {
      cartona="";
        for(var i=0;i<ma5zan.length;i++)
        {
            cartona+=`<tr><td>`+ma5zan[i].BName+`</td>`+
            `<td>`+ma5zan[i].BUrl+`</td>

            <td>
            
            <button onclick="visit()" class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</button>
            </td>

            <td>
            
            <button onclick="Delete(`+i+`)" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button>
            </td>
            </tr>`
        }
        document.getElementById("tBody").innerHTML=cartona  
        
    }

    function Delete(bIndex)

    {
      ma5zan.splice(bIndex , 1);

     localStorage.setItem("ourLocalData",JSON.stringify(ma5zan))

     display()

    }




