alert("Hello! are you ready");
var Name="";
var Age="";
var Major="";
function information (Name,Age)
{
    Name = prompt("what is your name ? ","abdallah shanaah"); 
    Age = prompt("how old are you ? ","23");
    if(Age>6 && Age<=12)
    {return "name :"+Name+"\n"+"Age :"+Age+"\n"+"Major : Middle School";}
    else if
    (Age>13 && Age<19){return "name :"+Name+"\n"+"Age :"+Age+"\n"+"Major : High School";}
    else if
    (Age>=19&& Age<24){return "name :"+Name+"\n"+"Age :"+Age+"\n"+"Major : University";}
    else 
    { return "name :"+Name+"\n"+"Age :"+Age+"\n"+"Major : YOU ARE EVEN BABY OR OLD TO STUDY";}
    
}

  document.write(information(Name,Age));
            
      