document.getElementById("registration-form").addEventListener("submit", function(event){
    event.preventDefault();
    
    let firstName = document.getElementById('firstName').value;
    let middleName = document.getElementById('middleName').value;
    let lastName = document.getElementById('lastName').value;
    let DOB=document.getElementById('DOB').value;
    let studentId=document.getElementById('studentId').value;
    let address=document.getElementById('address').value;
    let state=document.getElementById('state').value;
    let country=document.getElementById('country').value;
    let zipcode=document.getElementById('zipcode').value;
    let email=document.getElementById('email').value;
    let course=document.getElementById('course').value
    let level=document.getElementById('level').value;
    let language=document.getElementById('language').value;
    let startdate=document.getElementById('startdate').value;


     // Update preview section
     document.getElementById("preview-firstname").textContent = firstName;
     document.getElementById("preview-middleName").textContent=middleName;
     document.getElementById("preview-lastName").textContent = lastName;
     document.getElementById("preview-DOB").textContent = DOB;
     document.getElementById("preview-studentId").textContent = studentId;
     document.getElementById("preview-address").textContent=address;
     document.getElementById("preview-state").textContent = state;
     document.getElementById("preview-country").textContent = country;
     document.getElementById("preview-zipcode").textContent = zipcode;
     document.getElementById("preview-email").textContent = email;
     document.getElementById("preview-course").textContent = course;
     document.getElementById("preview-level").textContent=level;
     document.getElementById("preview-language").textContent = language;
     document.getElementById("preview-startdate").textContent =startdate;

 
    
      // Show the preview page
    let formDetails = document.getElementById("registration-form");
    formDetails.style.display = "none";
    let previewPage = document.getElementById("preview");
    previewPage.style.display = "block"
    previewPage.style.padding = "10px";

}); 