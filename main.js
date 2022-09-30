function button1Clicked() {;

    let button1Div = document.getElementById("button-1-div");
    let button1 = document.getElementById("button1");

    button1.remove();
    button1Div.innerHTML = "<h1>Marks</h1><ul>\
    <li>Lines</li>\
    <li>Area</li>\
    </ul>\
    <h1>Channels</h1>\
    <ul><li>Position (Both)</li>\
    <ul><li>They use position to reflect the attribute of each state's position (attribute type: quantitative).</li> <li> This is a good choice and done effectively as different positions indicate different states.</li>  </ul>\
    <li>Shape</li><ul><li>The shape of each state reflects the actual shape of each state i.e., the spatial region (attribute type: categorical, categories = countries).</li> <li>This is a good choice and is done effectively because each shape reflects the shape of the states themselves, which prevents the need to label each state. Each shape needs to be unique in order to color them individually, so they must have had a way to code in the shape.</li>\
    </ul><li>Length</li><ul><li>The length of the lines above the map reflects the number of votes each party has (attribute type: quantitative).</li> <li>This is a good choice and is done effectively. They use color as well to show where the length of each line cuts off.</li>\
    </ul><li>Color</li><ul><li>The color of each state represents (I assume, they did not define this) the political leaning of each state (attribute type: categorical, categories = democratic, neutral/middleground, republican)</li> <li>This is a good choice because blue typically reflects democrat and red republican, however they do not clarify what the condition is for a state to be blue, red, or striped.</li>\
    </ul></ul>"; 
}

function button2Clicked() {;

    let button2Div = document.getElementById("button-2-div");
    let button2 = document.getElementById("button2");

    button2.remove();
    button2Div.innerHTML = "<h1>Colormap(s)</h1>\
    <ul><li>Divergent</li><ul><li>They use a divergent red to blue color map containing three possible colors: red, striped, then blue. This represents the attribute type of categorical.</li> \
    <li>I would characterize this as divergent because the striped represents a middleground between the red and blue. Each color represents the political leaning of the state (though unclear by what definition). This is a good choice because each color reflects the natural democrats are blue / republicans red tradition and both colors are easy to see.</li></ul></ul>"; 
}



function button3Clicked() {;

    let button3Div = document.getElementById("button-3-div");
    let button3 = document.getElementById("button3");

    button3.remove();
    button3Div.innerHTML = "<h1>Marks</h1>\
    <ul><li>Points</li></ul>\
    <ul><li>This is also an example of containment link (Marks as Links). This is because the viz shows hierarchical relationships using areas. The depiction of these different 'areas' are through a boundary line (for ex. Fly Balls and Line Drives).</li> </ul>\
    <h1>Channels</h1>\
    <ul><li>Position (Both)</li>\
    <ul><li>Position is used to show the relationship between velocity and launch angles (attribute type: quantitative)</li><li>This is a good choice as different x and y values indicate specific 'batted ball' and its launch angle and exit velocity. As the attribute is quantitative, points can be in different partial values and not just integers/categories - for ex. it can take the values like 72.3mph and 25.3 deg</li></ul>\
    <li>Color</li><ul><li>This vis looks at the relative saturation of two major colors - purple and orange.</li><li>This color combination is highly contrasted and is also a good color combination for color blindness. Moreover, we tend to view high saturation as 'more.' Therefore this is a good choice as higher than avg. value are more brighter/saturated. However, there is no inherent meaning to purple and orange i.e., without the scale we wouldn't really know what is higher or lower. </li> \
    </ul></ul>"; 
}

function button4Clicked() {;

    let button4Div = document.getElementById("button-4-div");
    let button4 = document.getElementById("button4");

    button4.remove();
    button4Div.innerHTML = "<h1>Colormap(s)</h1>\
    <ul><li>Divergent</li><ul><li>This represents the attribute type of quantitative, specifically ordered.</li> \
    <li>Divergent is a good choice. White is a neutral colour indicating average (a meaningful middleground). Other points with different colors are either below or above average. Using divergent scheme also helps highlight extremes (for. ex, home-runs being on the extreme side of higher than avg. values).</li></ul></ul>"; 
}

























