const endDate = "6 september 2023 6:27 PM"

const inputs = document.querySelectorAll('input')
document.getElementById('sub-head').innerText = endDate;

// const clock = () => {
//     const end = new Date(endDate);
//     const now = new Date();
//     const diff = (end - now)/1000;
//     console.log(diff/60/60/24)
//     const daysleft = Math.floor(diff/60/60/24)
//     console.log(daysleft)
//     const hoursleft = (diff/60/60 - daysleft*24)
//     const minutesleft = ((hoursleft - Math.floor(hoursleft))*60)
//     const secondsleft = ((minutesleft - Math.floor(minutesleft))*60)
//     console.log(hoursleft, minutesleft, secondsleft)
//     inputs[0].value = daysleft
//     inputs[1].value = Math.floor(hoursleft)
//     inputs[2].value = Math.floor(minutesleft)
//     inputs[3].value = Math.floor(secondsleft)
// }

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff/60/60/24)
    inputs[1].value = Math.floor((diff/60/60)%24)
    inputs[2].value = Math.floor((diff/60) % 60)
    inputs[3].value = Math.floor((diff%60))

}

// initial call
clock()

setInterval(
    ()=>{clock()},
    1000
)

/* 
1 day = 24 hours
1 hour = 60 minutes
60 minutes = 3600 seconds
*/