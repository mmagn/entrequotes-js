google.load('search', '1');

var imageSearch;

var id=0;

function searchComplete() {

    // Check that we got results
    if (imageSearch.results && imageSearch.results.length > 0) {

        // Grab our content div, clear it.
        var contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';

        // Loop through our results, printing them to the page.
        var result = imageSearch.results[id];
        var imgContainer = document.createElement('div');
        
        var newImg = document.createElement('img');

        // There is also a result.url property which has the escaped version
        newImg.src= result.tbUrl
        imgContainer.appendChild(newImg);

        var randLeft = Math.floor(Math.random()*window.innerWidth-100);
        var randTop = Math.floor(Math.random()*window.innerHeight-100);

        imgContainer.setAttribute("style","position:absolute; top:"+randTop+"px; left:"+randLeft+"px;");
        newImg.setAttribute("alt", result.titleNoFormatting);
        newImg.setAttribute("title", result.titleNoFormatting);

        var body = document.getElementsByTagName('body') [0];
        body.appendChild(imgContainer);
        id++;
        id = id%4;
        console.log('hop');
    }
}

function flood() {
    setInterval(searchComplete, 500);
}

function OnLoad() {

// Create an Image Search instance.
imageSearch = new google.search.ImageSearch();

// Set searchComplete as the callback function when a search is 
// complete.  The imageSearch object will have results in it.
imageSearch.setSearchCompleteCallback(this, searchComplete, null);

// Find me a beautiful car.
imageSearch.execute("entrecote");

// Include the required Google branding
google.search.Search.getBranding('branding');
}
google.setOnLoadCallback(OnLoad);

entrequotes = (function(){
    public = {};
    
    public.svp = function(){
        alert("voila une entrecote");
    }

    return public;
})();