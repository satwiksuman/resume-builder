function printResume(){


    var divContents = document.getElementById("resumePrint").innerHTML;
            var a = window.open('', '', 'width=vw');
            // a.document.write('<html>');
            // a.document.write('<body >');
            a.document.write(divContents);
            // a.document.write('</body></html>');
            a.document.close();
            a.print();
}

function generateResume(){
   document.getElementById("head2").innerHTML=document.getElementById("root1").value;
   
   document.getElementById("doc01").href=document.getElementById("root4").value;
   
   document.getElementById("doc02").href=document.getElementById("root5").value; 

   document.getElementById("doc03").href=document.getElementById("root6").value; 

   document.getElementById("doc1").innerHTML=document.getElementById("root2").value;
   
   document.getElementById("doc2").innerHTML=document.getElementById("root7").value; 

   document.getElementById("doc3").innerHTML=document.getElementById("root3").value; 

   document.getElementById("doc4").innerHTML=document.getElementById("root8").value; 

   document.getElementById("doc5").innerHTML=document.getElementById("root10").value; 

   document.getElementById("doc6").innerHTML=document.getElementById("root9").value;
   
   document.getElementById("form").style.display='none';
   document.getElementById("resume").style.display='block'
 

   
}