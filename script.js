const apiUrl = 'https://indianpincodeapi.herokuapp.com/pincode' //For Button
// const apiUrl = 'https://indianpincodeapi.herokuapp.com/pincode?Pincode=828103' //For Trial Purpose
// https://embedmapgenerator.com


var x = document.getElementById('data')
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpPincode = document.getElementById("inp-pincode").value;
    fetch(`${apiUrl}?Pincode=${inpPincode}`)
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML =
                `
            <div class="pincode-map">
                <h3>${inpPincode}</h3>
                <div class="map-area">
                    <div class="mapouter">
                        <div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no"
                                marginheight="0" marginwidth="0"
                                src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=${data[0].Latitude},${data[0].Longitude}&amp;t=h&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="details">
                <p><span>Circle Name:</span> ${data[0].CircleName}</p>
                <p><span>District:</span> ${data[0].District}</p>
                <p><span>Division Name:</span> ${data[0].DivisionName}</p>
                <p><span>Office Name:</span> ${data[0].OfficeName}</p>
                <p><span>State Name:</span> ${data[0].StateName}</p>
                <p><span>Longitude:</span> ${data[0].Longitude}</p>
                <p><span>Latitude:</span> ${data[0].Latitude}</p>
            </div>
            `;
            console.log(data)
        })
})

var inpPincode = document.getElementById("inp-pincode")

inpPincode.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search-btn").click();
    }
});

window.onload = function () {
    document.getElementById("inp-pincode").focus();
}


// fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         x.innerHTML = `Pincode: ${data[0].Pincode} <br> State: ${data[0].StateName} <br> District: ${data[0].District} <br> CircleName: ${data[0].CircleName}`;
//     })




