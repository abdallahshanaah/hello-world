alert("Hello! are you ready");
var Name="";
var Age="";
var Major="";
function information ()
{
    Name = prompt("what is your name ? ","abdallah shanaah"); 
    Age = prompt("how old are you ? ",);
    var again = confirm("DO YOU WANT TO ADD NEW PARSON ?");
  console.log(again);
    do {
      

    if(Age>=6 && Age<=12)
    {console.log(Age);
      return "name :"+Name+"\n"+"Age :"+Age+"\n"+"Major : Middle School";}
    else if
    (Age>=13 && Age<19){return "name :"+Name+"\n"+"Age :"+Age+"\n"+"Major : High School";}
    else if
    (Age>=19&& Age<=24){return "name :"+Name+"\n"+"Age :"+Age+"\n"+"Major : University";}
    else if(Age==0){return "Error";}
    else 
    { return "name :"+Name+"\n"+"Age :"+Age+"\n"+"Major : YOU ARE EVEN BABY OR OLD TO STUDY";}
    
  }while(again==true)
  console.log(again);
  
}

  document.write(information());
            
      