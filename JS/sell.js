function checkPhone ()
{
  let phone= document.getElementById("seller-phone").value;

  if( phone.length != 10 )
    {
      document.getElementById("phone-err").innerHTML = "Please Enter Valid Phone Number.";

      return false;
    }
  
  else
    {
      document.getElementById("phone-err").innerHTML="";
      return true;
    }

}

function checkName ()
{
  let name = document.getElementById("seller-name").value;
  let i;

  for(i =0 ; i < name.length ; i++)
  {
    if(name[i] >= '0' && name[i] <='9')
      {
        document.getElementById("name-err").innerHTML = "Numbers Are Not Allowded in Your Name." ;
        
        return false;
      }
  }
  
    document.getElementById("name-err").innerHTML = "" ;
    return true;

}


function check()
{
  if(checkName() == false) 
    {

      return false;
    }
  
  if (checkPhone() == false)
    {
      
      return false;
    }

  else
    {
      return true;
    }
}