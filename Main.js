

function getVallink() {   
     var val1 = document.querySelector('input').value;

    if (val1!=null) {
          var classlink= val1.slice(0,37)+"output/online.zip?download=zip"
         console.log(classlink)
  if (window.confirm('Ok to downloading Cancel to Stay here'))
   {
   window.open(classlink);
   };
    } else {
        
    }

  

}




