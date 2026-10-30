document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("#home h3:nth-of-type(2)");

    if(title) {
        const roles =[ 
            "Full Stack Developer",
            "CSIT Student",
            "Web Developer"
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {
            const currentRole = roles[roleIndex];

            title.textContent = currentRole.substring(0,charIndex);

            if(!deleting) {
                charIndex++;

                if (charIndex>currentRole.length){
                    deleting = true;
                    setTimeout(typeEffect, 1200);
                    return;
                }

            } else {
                charIndex--;

                if (charIndex<0){
                    charIndex=0;
                    deleting=false;
                      roleIndex = (roleIndex + 1) % roles.length;
                }
            }
            
            setTimeout(typeEffect, deleting ? 50 : 100);
        }
    
        typeEffect();
    }

 
        const projectCards = document.querySelectorAll(".project-card");
           if (projectCards.length > 1) {
         const comingSoon = projectCards[1].querySelector("h3");

        if(comingSoon){
            const projectRoles = [
               
                "Thankyou for Reaching Me Out"
                
            ];
            let projectRoleIndex = 0;
            let projectCharIndex = 0;
            let deleting = false;

            function typeEffect(){
                const currentProjectRole = projectRoles[projectRoleIndex];
                comingSoon.textContent = currentProjectRole.substring(0, projectCharIndex);

                if(!deleting){
                    projectCharIndex++;

                    if (projectCharIndex > currentProjectRole.length){
                        deleting = true;
                        setTimeout(typeEffect,1400);
                        return;
                    }


        }
        else {
            projectCharIndex--;

            if (projectCharIndex < 0){
                projectCharIndex = 0;
                deleting = false;
                projectRoleIndex = (projectRoleIndex +1) % projectRoles.length;
            }      }
            setTimeout(typeEffect, deleting ? 50:100);
                }

typeEffect();
            }
        }
        
    });


const contactButton = document.querySelector("#contactBtn");
const projectButton = document.querySelector("#projectsBtn");
const downloadButton = document.querySelector("#downloadBtn");

if (contactButton){
    contactButton.addEventListener("click", () => {
        window.open (
          
           "https://mail.google.com/mail/?view=cm&fs=1&to=saraswatibaniya16@gmail.com",
            "_blank"
        );
  }  );
    
}

if (downloadButton){
    downloadButton.addEventListener("click", ()=> {
        const link = document.createElement("a");
        link.href = "saraswaticv.pdf";
        link.download = "saraswaticv.pdf";
        link.click();
        link.remove();

    });
}
 
if (projectButton){
    projectButton.addEventListener("click", ()=> {
       const projects = document.querySelector("#projects");
       if(projects){
        projects.scrollIntoView({

           behavior : "smooth"
        });
    }
    });
    
}


const themetoggle = document.querySelector("#themetoggle");
if (themetoggle){
    themetoggle.addEventListener("click", ()=> {
        document.body.classList.toggle("light-theme");
        if(document.body.classList.contains("light-theme")){
            themetoggle.textContent = "🌙 Dark Mode";
            themetoggle.setAttribute (
                "aria-label",
                "Switch to dark mode"
            )
            } else{
                themetoggle.textContent = "light mode";
                themetoggle.setAttribute (
                    "aria-label",
                    "Switch to light mode"
                );

        }

    });
}

const backtotop = document.getElementById("backtotop");

if(backtotop){
    backtotop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


window.addEventListener("scroll", () => {
    if(window.scrollY> 300) {
        backtotop.style.display="block";
    } else {
        backtotop.style.display = "none";
    }
   } );

   const navlinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let currentSection ="";

        document.querySelectorAll("section").forEach (section => {
            const sectionTop = section.offsetTop-200;

            if (window.scrollY >= sectionTop){
                            currentSection = section.getAttribute("id");
        }
    });

              navlinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

       
