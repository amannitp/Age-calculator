const calculator=document.querySelector('button')
const currentDate=new Date()
const userInput=document.getElementById('date')
const currentAge=document.querySelector('.currentAge')

userInput.max=new Date().toISOString().split('T')[0];



calculator.addEventListener('click',calculateAge)

function calculateAge(e){

    let birthDate=new Date(userInput.value);

    let day=birthDate.getDate();
    let month=birthDate.getMonth()+1;
    let year=birthDate.getFullYear();

    let currentday=currentDate.getDate();
    let currentMonth=currentDate.getMonth()+1;
    let currentYear=currentDate.getFullYear();

     let d3,m3,y3;
     y3=currentYear-year;

     if(currentMonth>=month){
        m3=currentMonth-month;
     }else{
        y3--;
        m3=12+currentMonth-month
     }

     if(currentday>=day){
        d3=currentday-day;
     }else{
            m3--;
            d3=getDaysInMonth(year,month)+currentday-day;
     }
     if(m3<0){
        m3=11;
        y3--;
     }
     if(isNaN(d3) || isNaN(m3) || isNaN(y3)){
        alert("Please Enter Your Date Of Birth")
     }else{
        currentAge.style.display='block'
        if(d3!==0 && m3!==0 && y3!==0){
            currentAge.innerHTML=`You are <span>${y3}</span> years <span>${m3}</span> months and <span>${d3}</span> days old`
        }else if(d3===0 && m3===0 && y3===0){
            currentAge.innerHTML=`new born baby`
        }else if( m3===0 && y3===0){
            currentAge.innerHTML=`You are <span>${d3}</span> days old`
        }else if(d3===0 && y3===0){
            currentAge.innerHTML=`You are <span>${m3}</span> months old`
        }else if(d3===0 && m3===0){
            currentAge.innerHTML=`You are <span>${y3}</span> years old`
        }else if(d3===0){
            currentAge.innerHTML=`You are <span>${y3}</span> years and <span>${m3}</span> months  old`
        }else if(m3===0){
            currentAge.innerHTML=`You are <span>${y3}</span> years and <span>${d3}</span> days  old`

        }else if(y3===0){
            currentAge.innerHTML=`You are <span>${m3}</span> months and <span>${d3}</span> days  old`
        }

     }


     console.log(typeof y3,m3,d3)
}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}