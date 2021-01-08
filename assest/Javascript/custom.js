var a=1;
var myVar = setInterval(slider, 2000);
function slider()
{
    switch (a) {
        case 1:
            $("#slider1").attr("src","assest/Images/slide2.jpg");
          a++;
          break;
        case 2:
            $("#slider1").attr("src","assest/Images/gaming3.jpg");
          a++;
          break;
        case 3:
            $("#slider1").attr("src","assest/Images/images1.jpg");
            a++;
           
          break;
        default:
            a=1;
      }
    }


    function faizan(id)
    {
        var a=0;
        EvenNumber=0;
        OddNumber=0;
      
        var pre=document.getElementById('value').innerHTML;
        pre=" ";
    
        while(a<10)
        {
            if(a%2=='0' && id=="start" )
            {
                
                
                
                $("#value").html(pre+a);
                pre=pre+a;
                EvenNumber++;
                
            }
            else if(a%2!='0'&&id=="start2")
            {
                $("#value2").html(pre+a);
                pre=pre+a;
                
                OddNumber++;
            }
           
            a++;
        }
       
        
    }    
    
    
document.getElementById('start').onclick=function()
{
    faizan((this).id);
}
document.getElementById('start2').onclick=function()
{
    faizan((this).id);
}


    
