// Tweet to share template
function tweetArticle() {
    const author = "AUTHORPILL";
    const article = "ARTICLENAMEPILL";
    const slug = "SLUGPILL";
    const fullUrl = "https://somedomain.com/post/" + slug;
    const tweetCopy = `Hey! I just read this great article by + ${author}! Check it out here!`;
    const copyUnescaped = tweetCopy.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/, "'");
    window.open('http://twitter.com/share?url=' + encodeURIComponent(fullUrl) + '&text=' + encodeURIComponent(copyUnescaped).replace(/'/g, "%27"))}

// Rapper Radio Setup where you share an item when passing through a parameter
function tweetRad(twitterhandle) {
    const rrartistmaster = "ARTISTPILL";
    const rrsongmaster = "SONGNAMEPILL";
    const rrslugmaster = "SLUGPILL";
    const radurl = "https://rapperradio.com/song/" + rrslugmaster;
    const rad = "Hey, " + twitterhandle + "! I want to hear " + rrartistmaster + "'s " + rrsongmaster + " on air!";
    const radunescaped = rad.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/, "'");
    window.open('http://twitter.com/share?url=' + encodeURIComponent(radurl) + '&text=' + encodeURIComponent(radunescaped).replace(/'/g, "%27"))
		$.post("https://breaksocial.herokuapp.com/req",
    {
      itemId: "ITEMID",
      verificationToken: "XXXXXXXXXXXXXXXXX"
    });
} 