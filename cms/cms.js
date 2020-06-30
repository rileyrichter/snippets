// Tweet to share template
function tweetArticle() {
    let author = "AUTHORPILL";
    let article = "ARTICLENAMEPILL";
    let slug = "SLUGPILL";
    let fullUrl = "https://somedomain.com/post/" + slug;
    let tweetCopy = "Hey! I just read this great article by " + author + "! Check it out here!";
    let copyUnescaped = tweetCopy.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/, "'");
    window.open('http://twitter.com/share?url=' + encodeURIComponent(fullUrl) + '&text=' + encodeURIComponent(copyUnescaped).replace(/'/g, "%27"))}

// Rapper Radio Setup where you share an item when passing through a parameter
function tweetRad(twitterhandle) {
    var rrartistmaster = "ARTISTPILL";
    var rrsongmaster = "SONGNAMEPILL";
    var rrslugmaster = "SLUGPILL";
    var radurl = "https://rapperradio.com/song/" + rrslugmaster;
    var rad = "Hey, " + twitterhandle + "! I want to hear " + rrartistmaster + "'s " + rrsongmaster + " on air!";
    var radunescaped = rad.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/, "'");
    window.open('http://twitter.com/share?url=' + encodeURIComponent(radurl) + '&text=' + encodeURIComponent(radunescaped).replace(/'/g, "%27"))
		$.post("https://breaksocial.herokuapp.com/req",
    {
      itemId: "ITEMID",
      verificationToken: "XXXXXXXXXXXXXXXXX"
    });
} 