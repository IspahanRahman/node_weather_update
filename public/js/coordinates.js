const SubmitBtn=document.getElementById('SubmitBtn')
const lat=document.getElementById('lat')
const long=document.getElementById('long')
const city_name=document.getElementById('city_name')
const temp_status=document.getElementById('temp_status')
const temp_degree=document.getElementById('temp_degree')
const dataHide=document.querySelector('.middle_layer')
const day=document.getElementById('day')
const today_date=document.getElementById('today_date')


const getInfo=async (event)=>{
    event.preventDefault()
   let latValue=lat.value
   let longValue=long.value

   if(latValue==="" || longValue===""){
       city_name.innerText=`Please write the Latitude and Longitude before search`
      dataHide.classList.add('data_hide')
      
   }
   else{
       try{
       
        let url=`http://api.openweathermap.org/data/2.5/weather?lat=${latValue}&lon=${longValue}&units=metric&appid=b6cd5aa4bb75fbb867c906b56db84e1b`
        const response=await fetch(url)
        const data=await response.json()
        const array=[data]

        console.log(array)
        city_name.innerText=`${array[0].name},${array[0].sys.country}`
        temp_degree.innerText=array[0].main.temp
        const temp_weather=array[0].weather[0].main
        
        // condition check whether it is sunny or cloudy

        if(temp_weather=='Clear'){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
        }
        else if(temp_weather=='Clouds'){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
        }
        else if(temp_weather=='Rain'){
            temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>"
        }
        else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
        }
      
        dataHide.classList.remove('data_hide')

       }catch{
           city_name.innerText=`Please enter the Latitude and Longitude properly`
           dataHide.classList.add('data_hide')
       }
   }
   

}
SubmitBtn.addEventListener('click',getInfo)

const getCurretDay=()=>{
    var weekday=new Array(7)
    weekday[0]="Sunday"
    weekday[1]="Monday"
    weekday[2]="Tuesday"
    weekday[3]="Wednesday"
    weekday[4]="Thursday"
    weekday[5]="Friday"
    weekday[6]="Saturday"

    let currentDate=new Date()
    let days=weekday[currentDate.getDay()]
    day.innerText=days


}
getCurretDay()

const getCurrentDate=()=>{
    var month=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    let now=new Date()
    let months=month[now.getMonth()]
    let date=now.getDate()
     today_date.innerText=`${date}th ${months}`


}
getCurrentDate()

x=navigator.geolocation
x.getCurrentPosition(success,failure)

async function success(position){
var myLat=position.coords.latitude
var myLong=position.coords.longitude


let url=`https://api.opencagedata.com/geocode/v1/json?q=${myLat}+${myLong}&key=e949887176ac41f8b1d61da43c412746`
const response1 =await fetch(url)
const location=await response1.json()
const arr=[location]
console.log(arr)
const state=arr[0].results[0].components.state
console.log(state)

let url2=`http://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=b6cd5aa4bb75fbb867c906b56db84e1b`
 const response2=await fetch(url2)
 const data=await response2.json()
 const array=[data]

 console.log(array)

city_name.innerText=`${arr[0].results[0].components.state},${arr[0].results[0].components.country}`
  console.log(city_name)

  const temp_Degree=document.getElementById('temp_degree')
  temp_Degree.innerText=array[0].main.temp
  console.log(temp_degree)
  const temp_Weather=array[0].weather[0].main
  
  // condition check whether it is sunny or cloudy

  if(temp_Weather=='Clear'){
      temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
  }
  else if(temp_Weather=='Clouds'){
      temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
  }
  else if(temp_Weather=='Rain'){
      temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>"
  }
  else{
      temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
  }


}

function failure(){

}





  