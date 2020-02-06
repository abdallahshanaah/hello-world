alert("Hello! are you ready");
var Name="";
var Age="";
var Major="";
function information (Name,Age,Major)
{
    Name = prompt("what is your name ? ","abdallah shanaah"); 
    Age = prompt("how old are you ? ","23");
    Major = prompt("what is your Major ? ","Ccomputer science ");
    return "name :"+Name+"\n"+"Age :"+Age+"\n"+"Major :"+Major;
}

  alert((information(Name,Age,Major)));
            
      