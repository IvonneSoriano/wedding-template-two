$(document).ready(function(){fillData()})
function fillData(){const urlSearchParams=new URLSearchParams(window.location.search);if(urlSearchParams.size>0){const params=Object.fromEntries(urlSearchParams.entries());console.log(params);const rsvForm="rsvForm";console.log(params.guest)
document.forms[rsvForm].guest.value=params.guest;document.forms[rsvForm].cant.value=params.cant}}