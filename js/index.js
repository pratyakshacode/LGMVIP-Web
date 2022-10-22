
        var value = 0;
        var value2 = -1;
        var finalAns;
        var c;

        let operation = '';

        let content = document.getElementById('content');
      
      Array.from(document.getElementsByClassName('btns')).forEach((element)=>{
        element.addEventListener('click',(e)=>{

          if(c == true) content.innerText = '';
          c = false;
            if(e.target.id == 'decimal') content.innerText = content.innerText + '.'
            else content.innerText = content.innerText+e.target.id;

        })
      })

      Array.from(document.getElementsByClassName('operation')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            
            value = parseFloat(content.innerText);
            content.innerText = e.target.innerText;
            operation = e.target.id;

        })
      })

      document.getElementById('equal').addEventListener('click',()=>{
        
        
        value2 = content.innerText;

        let s = value2.substr(1,value2.length)

        console.log(value2);
        console.log(s);
        s = parseFloat(s);
        console.log(typeof(s))
        
        
        if(operation == 'add'){
           finalAns = s + value;
        }

        else if(operation == 'mul'){
            finalAns= s * value;
        }
        else if(operation == 'div'){
            finalAns=  value / s;
        }
        else if(operation == 'sub'){
            finalAns= value - s;
        }

        else if(operation == 'mod'){
            finalAns = value % s;
        }
        content.innerText = finalAns;
        c = true;
      })

      document.getElementById('clear').addEventListener('click',()=>{
        content.innerText = ""
        
      })
      
  
    