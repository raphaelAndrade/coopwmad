const countChecked = () => {
    let namePage = $("#progressNamePage").text();
    count = $("input[type='checkbox']").length;
    checked = $("input:checked").length;
    switch (namePage) {
        case "careerPage":
            var percentage = parseInt(((checked / count) * 100), 10);
            localStorage.setItem("PercentageCarrerPage", percentage);
            let getPercentageCareer = localStorage.getItem("PercentageCarrerPage");
            $(".progress-bar.carrerPage").css("width", getPercentageCareer + "%");
            break;
        case "orientationPage":
            var percentage = parseInt(((checked / count) * 100), 10);
            localStorage.setItem("PercentageOrientation", percentage);
            let getPercentageOrientation = localStorage.getItem("PercentageOrientation");
            $(".progress-bar.orientationPage").css("width", getPercentageOrientation + "%");
            break;
        case "termPage":
            var percentage = parseInt(((checked / count) * 100), 10);
            localStorage.setItem("PercentageTerm", percentage);
            let getPercentageTerm = localStorage.getItem("PercentageTerm");
            $(".progress-bar.termPage").css("width", getPercentageTerm + "%");
            break;
        case "graduationPage":
            var percentage = parseInt(((checked / count) * 100), 10);
            localStorage.setItem("PercentageGraduation", percentage);
            let getPercentageGraduation = localStorage.getItem("PercentageGraduation");
            $(".progress-bar.graduationPage").css("width", getPercentageGraduation + "%");
            break;
    }
}

const loadProgress = () => {
    let namePage = $("#progressNamePage").text();
    let checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
    $.each(checkboxValues, function (key, value) {
        $("#" + key).prop('checked', value);
    });
    switch (namePage) {
        case "careerPage":
            let getPercentageCarrer = localStorage.getItem("PercentageCarrerPage");
            $(".progress-bar").css("width", getPercentageCarrer + "%");
            break;
        case "orientationPage":
            let getPercentageOrientation = localStorage.getItem("PercentageOrientation");
            $(".progress-bar.orientationPage").css("width", getPercentageOrientation + "%");
            break;
        case "termPage":
            let getPercentageTerm = localStorage.getItem("PercentageTerm");
            $(".progress-bar.termPage").css("width", getPercentageTerm + "%");
            break;
        case "graduationPage":
            let getPercentageGraduation = localStorage.getItem("PercentageGraduation");
            $(".progress-bar.graduationPage").css("width", getPercentageGraduation + "%");
            break;
    }
    return;
}

const storeChecked = () => {
    var $checkboxes = $(".listQuestions li :checkbox");
    let checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
    $checkboxes.on("change", function () {
        $checkboxes.each(function () {
            checkboxValues[this.id] = this.checked;
        });
        localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
    });
}

$(document).ready(() => {
    loadProgress();
    $(".listQuestions li input").on("click", function () {
        storeChecked();
        countChecked();
    });


    $(".triggercu").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        var ui = $(this).attr("data-name");
        switch (ui) {
            case "dmsFaq":
                $(".subSectionsQuestions").removeClass("active");
                $(".questionGeneralRaphael").fadeOut();
                $(".questionDMSRaphael").fadeIn();
                $(".questions").css("height", heightQuestions1 + 200)
                break;
            case "wmadFaq":
                $(".subSectionsQuestions").addClass("active");
                $(".questionGeneralRaphael").fadeIn();
                $(".questionDMSRaphael").fadeOut();
                $(".questions").css("height", heightQuestion2 + 200)
                break;
        }
    })
})

/*TODO: save checkbox status to local storage */