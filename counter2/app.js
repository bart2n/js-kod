let counter = 0;

const btns= document.querySelectorAll('.btn');
const color = document.querySelector("#value");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
      if(styles.contains('increase')){
        counter++;
      }
      else if(styles.contains('decrease')){
        counter--;
      }
      else{
        counter=0;
      }
      if(counter>0){
        value.style.color="green";
      }
      if(counter<0){
        value.style.color="red";
      }
      console.log(counter);
      value.textContent = counter;
    });
});