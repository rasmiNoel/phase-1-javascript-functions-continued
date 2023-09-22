// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(mActivity = 'go to the office') {
    return (`This Monday, I will ${mActivity}.`)
}

let wrapAdjective = function(style="*") {
    return function(adj="a hard worker") {
      return `You are ${style}${adj}${style}!`
    }
}