let temp = document.querySelector(".weather1 h1")
let city = document.querySelector(".weather2 p")
let time= document.querySelector(".weather span")
let emoji = document.querySelector(".weather3 img")
let condition = document.querySelector(".weather3 p")
let form = document.querySelector(".container2 form")
let search = document.querySelector(".search")
temp.innerText=55
city.innerText= "ghuwati"
time.innerText="11:30-monday 2022-22-1"
condition.innerText="cloudy"

let target="delhi"
fetchdata(target)

async function fetchdata(target)
{
  try {
    
    const url = `https://api.weatherapi.com/v1/current.json?key=cf9d999f646f4de295150257220712&q=${target}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    let{ current:{temp_c,condition:{icon,text}},location
    :{name,localtime}}=data
    temp.innerText=temp_c+"°"
    city.innerText=name
    condition=text
    emoji.src=icon
    localarr=localtime.split(" ")
    let dayno=new Date(localarr[0]).getDay() 
    let excateday=day(dayno)
    time.innerText = `${localarr[1]} ${excateday}  ${localarr[0]}`
    console.log(localarr[0])
    
  } catch (error) {
    alert("sorry something went worng")
    
  }
}   

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(search.value) 
    target=search.value
    fetchdata(target)
})
function day(num)
{
    switch(num)
    {
        case 0:
            return "monday"
            break
        case 1:
            return "tuesday"
            break
        case 2:
            return "wednesday"
            break
        case 3:
             return "thursday"
             break
        case 4:
            return "friday"
            break
        case 5:
             return "saturday"
             break
        case 6:
            return "sunday"
            break
           
    }
}
