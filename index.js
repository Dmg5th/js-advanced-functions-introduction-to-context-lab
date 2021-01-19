// let arr = ["Chris Multisanti", "Tony Soprano", "Silvio Dante", "Paulie Walnuts", "Bobby Baccala"]


function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array){
    return array.map(arr => createEmployeeRecord(arr))
}


function createTimeInEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(" ")

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
        date,
    })

    return employee
}