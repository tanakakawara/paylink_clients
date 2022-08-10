 

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});



//get url parameter (c_id)
const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString);

const c_id = urlParams.get('c_id');

  