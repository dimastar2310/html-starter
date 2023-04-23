

function get_sum()
{
let sum = 0;
while(true){

var msg = prompt('how much?');
    if (msg==='end'){
      alert('Total is '+sum);
      
    }
    else if(isNaN(Number(msg))){
      alert('Wrong value ... enter number or end');
    }
    else
    {
    sum+=msg;
    }
     

}
}

