// This is some code I wrote to use No Code API, Airtable, and Webflow to write to the DOM
// instead of using the CMS. No Code API is a cheat code and this was fun to build.
// The write-items.html file is the HTML structure this is based on. You can see the
// live version on a Webflow site here: https://airtable-job-board.webflow.io/

const listing = document.getElementById("listing");

$(document).ready(function () {
  const handleError = (response) => {
    if (!response.ok) {
      throw Error(
        `There was an error loading this data – status: ${response.status} ${response.statusText}`
      );
    } else {
      return response.json();
    }
  }; //handler function that throws any encountered error

  fetch(
    "https://v1.nocodeapi.com/rileyrichter/airtable/oBStoMqdqFOwtxwb?tableName=Job%20Postings"
  )
    .then(handleError) // skips to .catch if error is thrown
    .then((data) => {
      data.records.forEach((record) => {
        let posting = document.createElement("div");
        posting.setAttribute("class", "posting-wrapper");
        listing.appendChild(posting);
        let postcontent = document.createElement("div");
        postcontent.setAttribute("class", "post-content-wrapper");
        posting.appendChild(postcontent);
        let logowrapper = document.createElement("div");
        logowrapper.setAttribute("class", "company-logo-wrapper");
        postcontent.appendChild(logowrapper);
        let companylogo = document.createElement("img");
        companylogo.setAttribute("class", "company-logo");
        companylogo.setAttribute("src", record.fields.company_logo);
        companylogo.setAttribute("alt", record.fields.company_name + "logo");
        companylogo.setAttribute("loading", "lazy");
        logowrapper.appendChild(companylogo);
        let listingcontent = document.createElement("div");
        listingcontent.setAttribute("class", "listing-content-wrapper");
        postcontent.appendChild(listingcontent);
        let companyname = document.createElement("div");
        companyname.setAttribute("class", "company-name");
        companyname.textContent = record.fields.company_name;
        listingcontent.appendChild(companyname);
        let listingname = document.createElement("h3");
        listingname.setAttribute("class", "post-name");
        listingname.textContent = record.fields.Name;
        listingcontent.appendChild(listingname);
        let jobtype = document.createElement("div");
        jobtype.setAttribute("class", "company-name");
        jobtype.textContent = "Full-Time/USA";
        listingcontent.appendChild(jobtype);
        let applywrapper = document.createElement("div");
        applywrapper.setAttribute("class", "post-apply-wrapper");
        posting.appendChild(applywrapper);
        let applybutton = document.createElement("a");
        applybutton.setAttribute("class", "button w-button");
        applybutton.setAttribute("href", record.fields.apply_link);
        applybutton.setAttribute("target", "_blank");
        let link = document.createTextNode("Apply Now");
        applybutton.appendChild(link);
        applywrapper.appendChild(applybutton);
      });
    })
    .catch(console.log); // catches the error and logs it
});
