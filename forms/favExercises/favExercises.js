var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow = function() {
    for (i = 0; i < exercises.length; i++)
        selExercises.addItem(exercises[i])
}

selExercises.onfocusout = function() {}

btnChosen.onclick = function() {
    if (selExercises.text[0] == "situps" && selExercises.text[1] == "plank") {
        lblChosen.value = "You chose situps and planks -- those are the two core exercises."
    } else {
        lblChosen.value = "You did not pick the two core exercises."
    }
}

btnNextPage3.onclick = function() {
    ChangeForm(mobileNav)
}