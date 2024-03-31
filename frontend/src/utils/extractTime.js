export function extractTime (dateString){
    const date = new Date(dateString)
    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())
    return `${hours}:${minutes}`; 
    //2024-03-30T01:54:14.842Z ,This is the format of time and it will get only hours,minutes from it
    // return time in HH:MM
}

// *Helper function to pad single-Digit number with a leading zero
function padZero(number){
    return number.toString().padStart(2 , "0");
} 
/*this function padZero(number) ensures that the HH:MM is in two digit format always for example if the minutes are less the 10 to becomes 1 digit so it puts 0 in front of it (padStart (must 2 digit with 0 at start)) to make 2 digit i.e(01,02,03 etc) similarly in hours.
we convert number to string bc concat is only in string 
the dateString is a parameter(any time) taken from user and then we extract hours and minute from that time and using padZero for 2 digit if there is 1  
*/
