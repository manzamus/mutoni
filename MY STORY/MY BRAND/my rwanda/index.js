let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let form=document.getElementById("form")

let user=JSON.parse(localStorage.getItem("user")) ||[]
form.addEventListener("submit" ,(e)=>{

    e.preventDefault()
    let uwingeneye={

        username:username.value,
        email:email.value,
        password:password.value
    }
    user.find((tat)=>tat.email==email.value)
    user.push(uwingeneye)
    const fatuma=JSON.stringify(uwingeneye)
    localStorage.setItem("uwingeneye",fatuma)
alert("byakunze")
})
let work=JSON.parse(localStorage.getItem("work")) || []
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let employee={
        username:username.Value,
        email:email.value,
        password:password.value
}
work.find((nany)=>nany.email==email.value)
work.push(employee)
const dda=JSON.stringify(employee)
localStorage.setItem("employee",dda)
alert("elle")
}
)
