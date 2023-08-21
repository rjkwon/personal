// script.js

// Load the XML data using XMLHttpRequest or fetch API
const xmlData = 
    'https://feeds.pinboard.in/json/v1/u:kwon/?cb=pinboardNS_show_bmarks&tag=post&count=7';

// Create a parser and parse the XML data
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, "application/xml");

// Get the link items from the XML
const linkItems = xmlDoc.querySelectorAll("rdf\\:li");

// Get the container element where the link list will be displayed
const linkListContainer = document.getElementById("linkList");

// Create an unordered list and add it to the container
const ul = document.createElement("ul");
linkListContainer.appendChild(ul);

// Loop through the link items and create list items
linkItems.forEach((linkItem) => {
    const link = linkItem.getAttribute("rdf:resource");
    const title = linkItem.parentNode.parentNode.querySelector("title").textContent;
    const li = document.createElement("li");

    // Customize the list item content as needed
    li.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;

    ul.appendChild(li);
});




// var count = '7';

// function pinboardNS_fetch_script(url)
// {
//     document.writeln('<s'+'cript src="' + url + '"></s'+'cript>');
// }
// pinboardNS_fetch_script('assets/js/linkroll.js');


// function pinboardNS_show_bmarks(r)
// {
//     var lr = new pinboardLinkroll();
//     lr.set_items(r);
//     lr.show_bmarks();
//  } 

// var pinboardNS_linkroll;
// var pinboardNS_callback = function(x)
// {
//     pinboardNS_linkroll = new pinboardLinkroll();
//     pinboardNS_linkroll.set_items(x);
//     pinboardNS_linkroll.show_bmarks();
// }
// var json_URL = "https://feeds.pinboard.in/json/v1/u:kwon/?cb=pinboardNS_show_bmarks&tag=post&count=" + count;

// pinboardNS_fetch_script(json_URL);