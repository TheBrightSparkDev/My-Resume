function sendEmail(contactForm){
    emailjs.send("service_vgfb6oi","Rosie",{
        from_email: "contactForm.emailaddress.value",
        from_name: "contactForm.name.value",
        project_request: "contactForm.projectsummary.value",
        })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });     
    return false;
}