// This is some code I wrote to use No Code API, Airtable, and Webflow to write to the DOM
// instead of using the CMS. No Code API is a cheat code and this was fun to build.
// The write-items.html file is the HTML structure this is based on. You can see the
// live version on a Webflow site here: https://airtable-job-board.webflow.io/

// Get our container with an ID of listing and set it as listing
const listing = document.getElementById("listing");

// On document ready, let's fetch some data
$(document).ready(function () {
  const handleError = (response) => {
    if (!response.ok) {
      throw Error(` ${response.status} ${response.statusText}`);
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
    .catch(function writeError(err) {
      // catches the error and logs it
      let writeWrapper = document.createElement("div");
      writeWrapper.style.textAlign = "center";
      let writeLineOne = document.createElement("p");
      writeLineOne.textContent = "Job listings could not be loaded";
      let writeLineTwo = document.createElement("p");
      writeLineTwo.textContent = err;
      writeWrapper.appendChild(writeLineOne);
      writeWrapper.appendChild(writeLineTwo);
      listing.appendChild(writeWrapper);
    })
    .finally(() => {
      // removes the loading element
      document.getElementById("loading").remove();
    });
});
