import "bs-stepper/dist/css/bs-stepper.min.css";
import "@yaireo/tagify/dist/tagify.css";
import Stepper from "bs-stepper";
import Tagify from "@yaireo/tagify";

// Function Helper
const initAddPaper = () => {
    const stepper = new Stepper($(".bs-stepper")[0]);
    let pageStepper = 1;
    $(".stepper-next").on("click", () => {
        pageStepper += 1;
        stepper.to(pageStepper);
    });

    $(".stepper-prev").on("click", () => {
        pageStepper -= 1;
        stepper.to(pageStepper);
    });

    new Tagify(document.querySelector("#keywords"), {
        maxTags: 4,
    });

    $("#author_ct").countrySelect({
        preferredCountries: ["id", "my", "ph", "sg"],
    });
    $(".country-select").addClass("d-block");
    $(".country-list").removeAttr("style");
    $(".selected-flag").on("click", () => {
        let widthDropdown = $(".country-select").width();
        $(".country-list").width(widthDropdown - 4);
    });
};

const initEditPaper = () => {
    new Tagify(document.querySelector("#keywords"), {
        maxTags: 4,
    });

    $("#author_ct").countrySelect({
        preferredCountries: ["id", "my", "ph", "sg"],
    });
    $(".country-select").addClass("d-block");
    $(".country-list").removeAttr("style");
    $(".selected-flag").on("click", () => {
        let widthDropdown = $(".country-select").width();
        $(".country-list").width(widthDropdown - 4);
    });
};

window.addEventListener("popstate", function (event) {
    window.location.reload();
});

// Emit handler
document.addEventListener("livewire:load", function () {
    Livewire.on("action", (actions) => {
        window.scrollTo(0, 0);
        if (actions === "show-add-paper") {
            window.history.pushState(null, null, "/author/submission/add");
            initAddPaper();
        } else if (actions === "show-edit-paper") {
            initEditPaper();
        } else if (actions === null) {
            $("#deleteSubmission").on("hidden.bs.modal", function (event) {
                Livewire.emit("deletePaper", null);
            });
            setTimeout(
                () =>
                    window.history.pushState(null, null, "/author/submission/"),
                200
            );
        }
    });
    Livewire.on("show-edit", (id) => {
        window.history.pushState(null, null, `/author/submission/edit/${id}`);
        Livewire.emit("grabId", id);
        Livewire.emit("grabAction", "show-edit-paper");
    });
});

// Pathname handler
let pathName = window.location.pathname;
window.addEventListener("DOMContentLoaded", function () {
    if (pathName === "/author/submission/add") {
        initAddPaper();
    } else if (pathName === "/author/submission") {
        $("#deleteSubmission").on("hidden.bs.modal", function (event) {
            Livewire.emit("deletePaper", null);
        });
    } else if (pathName.includes("/author/submission/edit")) {
        initEditPaper();
    }
});
