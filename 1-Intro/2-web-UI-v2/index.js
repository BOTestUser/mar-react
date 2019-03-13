


//-------------------------------------------------------
// way-1 : plain JS
//-------------------------------------------------------


let indiaClockEle = document.getElementById('india');
let usClockEle = document.getElementById('us');


// indiaClockEle.innerHTML = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" })
// usClockEle.innerHTML = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })


function Clock(timeZone) {
    let ele = `
        <div class="card">
            <div class="card-header">${timeZone}</div>
            <div class="card-body">
                <span class="badge badge-dark">${new Date().toLocaleTimeString("en-US", { timeZone: timeZone })}</span>
            </div>
        </div>
    `
    return ele;
}

// setInterval(() => {
//     indiaClockEle.innerHTML = Clock('Asia/Kolkata')
//     usClockEle.innerHTML = Clock("America/New_York")
// }, 1000);





//-------------------------------------------------------
// way-1 : React JS
//-------------------------------------------------------



let reactIndiaClockEle = document.getElementById('react-india');
let reactUSClockEle = document.getElementById('react-us');



// function ReactClock(timeZone) {
//     let div1 = React.createElement('div', { key: 1, className: 'card-header' }, timeZone)
//     let span = React.createElement('span', { className: 'badge badge-dark' }, new Date().toLocaleTimeString("en-US", { timeZone: timeZone }))
//     let div2 = React.createElement('div', { key: 2, className: 'card-body' }, span)
//     let div = React.createElement('div', { className: 'card' }, [div1, div2])
//     return div;
// }


// with JSX

function ReactClock(timeZone) {
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge badge-dark">{new Date().toLocaleTimeString("en-US", { timeZone: timeZone })}</span>
            </div>
        </div>
    )
}

setInterval(() => {
    ReactDOM.render(ReactClock('Asia/Kolkata'), reactIndiaClockEle)
    ReactDOM.render(ReactClock('America/New_York'), reactUSClockEle)
}, 1000);
