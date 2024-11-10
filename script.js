function openURL() {
    var url = "./images/resume/ResumeAB.pdf";
    window.open(url, "_blank");
}

function scrolltoTopfunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleContactForm() {
    document.getElementById('contactForm').classList.toggle('show');
}

function closeContactForm() {
    document.getElementById('contactForm').classList.remove('show');
}


function toggleCollapseButtons() {
    const collapseButtons = document.getElementById("inlineCollapseButtons");
    collapseButtons.style.display = collapseButtons.style.display === "none" ? "block" : "none";
}

function toggleSingleCollapse(collapseId) {
    closeAllCollapses();
    $('#' + collapseId).collapse('toggle');
}

function closeAllCollapses() {
    $('#collapseOne, #collapseTwo, #collapseThree').collapse('hide');
}

