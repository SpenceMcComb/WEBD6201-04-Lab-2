/**
 * Name: Spence McComb
 * Student ID: 100426427
 * Date Completed: 2020/03/05
 */

class Contact
{
    /**
     * Creates an instance of Contact.
     * @param {string} [contactName=""]
     * @param {string} [emailAddress=""]
     * @param {string} [contactNumber=""]
     * @param {string} [contactMessage=""]
     * @memberof Contact
     */
    constructor(contactName = "", emailAddress = "", contactNumber = "", contactMessage = "")
    {
        this.contactName = contactName;
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.contactMessage = contactMessage;
    }
}

class Login
{
    /**
     * Creates an instance of Login.
     * @param {string} [loginName=""]
     * @param {string} [loginPassword=""]
     * @memberof Login
     */
    constructor(loginName = "", loginPassword = "")
    {
        this.loginName = loginName;
        this.loginPassword = loginPassword;
    }
}

class User
{
    /**
     * Creates an instance of User.
     * @param {string} [firstName=""]
     * @param {string} [lastName=""]
     * @param {string} [emailAddress=""]
     * @param {string} [password=""]
     * @memberof User
     */
    constructor(firstName = "", lastName = "", emailAddress = "", password = "")
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
    }
}

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let contactObject = new Contact();

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
       PageSwitcher();

        Main();
    }

    function PageSwitcher()
    {
        let name = window.location.pathname;

       let pageName = name.substring(1, name.length - 5);

       switch(pageName)
        {
            case "index":
                DisplayHomePageContent();
                break;
            case "products":
                DisplayProductsContent();
                break;
            case "services":
                DisplayServicesContent();
                break;
            case "about":
                DisplayAboutContent();
                break;
            case "contact":
                DisplayContactContent();
                break;
            case "projects":
                DisplayProjectsContent();
                break;
            case "login":
                DisplayLoginContent();
                break;
            case "register":
                DisplayRegisterContent();
                break;
            default:
                console.error("Landed in a page that is not defined");
                break;
        }

        // add a class of active to the active link
        $("#"+pageName).addClass("active");
    }

    function DisplayHomePageContent()
    {
        document.getElementById("home").className = "nav-item active";
        /* $("button").click(()=>{
            location.href = "projects.html";
        }); */

        document.title = "WEBD6201 - Home";

        let progressbar = $( "#progressBar" ).progressbar({
            value: 37
          });

        console.log(progressbar);

        $("#projectsButton").click(function(){
            $(this).fadeOut(3000, "linear", ()=>{
                $(this).fadeIn(1000, "linear", ()=>{
                    location.href = "projects.html";
                });
            });
        });
    }

    function DisplayProductsContent()
    {
        document.title = "WEBD6201 - Products";
    }

    function DisplayServicesContent()
    {
        document.title = "WEBD6201 - Services";
    }

    function DisplayAboutContent()
    {
        document.title = "WEBD6201 - About Us";
    }

    function DisplayContactContent()
    {
        document.title = "WEBD6201 - Contact Us";
        function clearForm()
        {
            //document.getElementById("contactForm").reset();
            $("#contactForm")[0].reset();
            $("#errorMessage").hide();
        }

        function validateInput(selector, condition, errorMessage)
        {
            if(condition)
            {
                $("#errorMessage").show();
                $("#errorMessage").text(errorMessage);
                $(selector).select();
                $(selector).css("border", "2px solid red");
            }
            else
            {
                $("#errorMessage").hide();
                $(selector).css("border", "1px solid #ced4da");
            }
        }

        $("#errorMessage").hide();
        $("#contactName").select();

        // Contact Name Events
        $("#contactName").blur((e)=>
        {
            validateInput("#contactName",( $("#contactName").val().length < 2),"Contact Name is Too Short");
        });

        $("#contactName").focus((e)=>
        {
            $("#contactName").select();
        });

        // Email Events
        $("#emailAddress").blur((e)=>
        {
            validateInput("#emailAddress",($("#emailAddress").val().length < 8) || (!$("#emailAddress").val().includes("@")),"Invalid Email Address");
        });

        $("#emailAddress").focus((e)=>
        {
            $("#emailAddress").select();
        });

        // Contact Number Events
        $("#contactNumber").blur((e)=>
        {
            let phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
            let phoneNumber = $("#contactNumber").val();

            validateInput("#contactNumber",( !phonePattern.test(phoneNumber)),"Invalid Contact Number");
        });

        $("#contactNumber").focus((e)=>
        {
            $("#contactNumber").select();
        });

        // Contact Message Events
        $("#contactMessage").blur((e)=>
        {
            validateInput("#contactMessage",( $("#contactMessage").val().length < 2 ),"Contact Message Too Short");
        });

        $("#contactMessage").focus((e)=>
        {
            $("#contactMessage").select();
        });


        $("#contactForm").submit  ((e)=>
        {
            if(document.getElementById("contactForm").checkValidity() == false)
            {
                e.preventDefault();
                e.stopPropagation();
                console.log("form not valid");
            }

            
            let contactName = $("#contactName").val();
            let emailAddress = $("#emailAddress").val();
            let contactNumber = $("#contactNumber").val();
            let contactMessage = $("#contactMessage").val();

            console.log(`Contact Name: ${contactName}`);
            console.log(`Email Address: ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Contact Message: ${contactMessage}`);

            contactObject.contactName = contactName;
            contactObject.emailAddress = emailAddress;
            contactObject.contactNumber = contactNumber;
            contactObject.contactMessage = contactMessage;

            console.log(contactObject);

            clearForm();
        });

        $("#resetButton").click((e)=>
        {
            e.preventDefault();
            if(confirm("Are You Sure?"))
            {
                clearForm();
            }

            
        });
    }

    function DisplayProjectsContent()
    {
        document.title = "WEBD6201 - Projects";
    }

    /**
     * Function that displays the login page and contains the appropriate validation
     */
    function DisplayLoginContent()
    {
        // Change the title to an appropriate one
        document.title = "WEBD6201 - Login";

        // On form submission
        $("#loginForm").submit((e)=>
        {  
            // Gives us more control over what the button does
            e.preventDefault();
            e.stopPropagation();

            // Gather the login name and password from the form
            let loginName = $("#contactName").val()
            let loginPassword = $("#password").val();

            // Ensure data has been entered before moving on
            if (loginName != "" && loginPassword != "")
            {
                // Create a new Login
                let theUser = new Login(loginName, loginPassword);
                
                // Generate the text that will be appended
                let addedText = '<li id="navbarUser" class="navbar-text">&nbsp;' + theUser.loginName + '&nbsp;</a></li>';
                $("#login").after(addedText);

                // Resets the form
                $("#loginForm")[0].reset();
                $("#login").hide();
                $("#logout").show();
            }    
        });

    }

    /**
     * Function that displays the register page and contains the appropriate validation
     */
    function DisplayRegisterContent()
    {
        document.title = "WEBD6201 - Register";

        // Declare the constants for this page
        let MINIMUM_NAME_LENGTH = 2;
        let MINIMUM_EMAIL_LENGTH = 8;
        let MINIMUM_PASSWORD_LENGTH = 6;

        // Create and insert the new, hidden div
        let insertErrorMessageDiv = "<div id=errorMessageDiv></div>";
        $("#confirmPassword").parent().after(insertErrorMessageDiv);
        let errorMessageDiv = $("#errorMessageDiv");
        errorMessageDiv.html('<div class="col-md-12"><p class="hint-text" id="ErrorMessage"></p></div>');
        let errorMessage = $("#ErrorMessage");
        errorMessageDiv.hide();

        // Data validation when first name loses focus
        $("#FirstName").blur(function(){
            if ($("#FirstName").val().length < MINIMUM_NAME_LENGTH)
            {
                // Select the element again
                errorMessageDiv.show();
                errorMessage.text('First name too short. Please ensure it is at least ' + MINIMUM_NAME_LENGTH + ' characters long.');
                $("#FirstName").focus();
            }
            else 
            {
                // Clear and hide the error message
                errorMessage.text("");
                errorMessageDiv.hide();
            }
        });

        // Data validation when last name loses focus
        $("#lastName").blur(function(){
            if ($("#lastName").val().length < MINIMUM_NAME_LENGTH)
            {
                // Select the element again
                errorMessageDiv.show();
                errorMessage.text('Last name too short. Please ensure it is at least ' + MINIMUM_NAME_LENGTH + ' characters long.');
                $("#lastName").focus();
            }
            else 
            {
                // Clear and hide the error message
                errorMessage.text("");
                errorMessageDiv.hide();
            }
        });

        // Data validation when email address loses focus
        $("#emailAddress").blur(function(){
            if ($("#emailAddress").val().length < MINIMUM_NAME_LENGTH || !$("#emailAddress").val().includes("@"))
            {
                // Select the element again
                errorMessageDiv.show();
                errorMessage.text('Email address must be at least ' + MINIMUM_EMAIL_LENGTH + ' characters long and contain the following: @.');
                $("#emailAddress").focus();
            }
            else 
            {
                // Clear and hide the error message
                errorMessage.text("");
                errorMessageDiv.hide();
            }
        });

        // Data validation when password loses focus
        $("#password").blur(function(){
            if ($("#password").val().length < MINIMUM_PASSWORD_LENGTH)
            {
                // Select the element again
                errorMessageDiv.show();
                errorMessage.text('Password must be at least ' + MINIMUM_PASSWORD_LENGTH + ' characters long.');
                $("#password").focus();
            }
            else 
            {
                // Clear and hide the error message
                errorMessage.text("");
                errorMessageDiv.hide();
            }
        });

        // Data validation when confirmPassword loses focus
        $("#confirmPassword").blur(function(){
            if ($("#confirmPassword").val().length < MINIMUM_PASSWORD_LENGTH)
            {
                // Select the element again
                errorMessageDiv.show();
                errorMessage.text('Password must be at least ' + MINIMUM_PASSWORD_LENGTH + ' characters long.');
                $("#confirmPassword").focus();
            }
            else if ($("#confirmPassword").val() != $("#password").val())
            {
                // Select the first password element
                errorMessageDiv.show();
                errorMessage.text('The entered passwords do not match.');
                $("#password").select();
            }
            else 
            {
                // Clear and hide the error message
                errorMessage.text("");
                errorMessageDiv.hide();
            }
        });
        

        $("#registerForm").submit((e)=>
        {  
            e.preventDefault();
            e.stopPropagation();

            // Validation to ensure information has been entered in each textbox before submission
            if ($("#FirstName").val() != "" && $("#lastName").val() != "" && $("#emailAddress").val() != "" && $("#password").val() != "")
            {
                // Gather the data from the form
                let firstName = $("#FirstName").val();
                let lastName = $("#lastName").val();
                let emailAddress = $("#emailAddress").val();
                let password = $("#password").val();

                // Create a new User and display it in the console
                let theUser = new User(firstName, lastName, emailAddress, password);
                console.log(theUser);

                $("#registerForm")[0].reset();
            }
            else
            {
                // Show an error
                errorMessageDiv.show();
                errorMessage.text('Please fill in the form before submitting.');
            }
        });
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
       
    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

