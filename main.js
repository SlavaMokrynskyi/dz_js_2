// function Show(car)
// {
//     console.log(car.maker);
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.average_speed);
// }

// function CalaculateTime(average_speed, distance)
// {
//     let time = 0;
//     time = distance/average_speed;
//     let count = 0;
//     for(let i = 1; i <= time; i++)
//     {
//         if(i%4==0)
//         {
//             count++;
//         }
//     }
//     time += count;
//     return time;
// }

// let car = {
//     maker: "Mercedes",
//     model: "CLS 63 AMG",
//     year: "2009",
//     average_speed: 100
// };

let fraction = {
    numerator: 0,
    denominator: 0
}

function CutDown(fraction)
{
    let numerator_arr = [];
    let denominator_arr = [];
    let k = 0;
    for(let i = 1; i <= fraction.numerator; i++)
    {
        if(fraction.numerator % i == 0)
        {
            numerator_arr[k] = i;
            k++;
        }
    }
    let l = 0;
    for(let i = 1; i <= fraction.denominator; i++)
    {
        if(fraction.denominator % i == 0)
        {
            denominator_arr[l] = i;
            k++;
        }
    }

    let max_dilnuk;
    max_dilnuk = numerator_arr[0];
    for(let i = 0; i < k; i++)
    {
        for(let j = 0; j < l; j++)
        {
            if(numerator_arr[i] == denominator[j] && numerator_arr[i] > max_dilnuk)
            {
                max_dilnuk = numerator_arr[i];
                break;
            }
        }
    }
    fraction.numerator /= max_dilnuk;
    fraction.denominator  /= max_dilnuk;
    return(fraction);
}

function Add(numerator1,denominator1,numerator2,denominator2)
{
    let numerator, denominator;
    if(denominator1 == denominator2)
    {
        numerator = numerator1 + numerator2;
        denominator = denominator1;
    }
    else
    {
        numerator = numerator1*denominator2 + numerator2*denominator1;
        denominator = denominator1*denominator2;
    }
    console.log(numerator1,"/",denominator1, " + ", numerator2,"/",denominator2, "=" , numerator,"/",denominator);
}

function Minus(numerator1,denominator1,numerator2,denominator2)
{
    let numerator, denominator;
    if(denominator1 == denominator2)
    {
        numerator = numerator1 - numerator2;
        denominator = denominator1;
    }
    else
    {
        numerator = numerator1*denominator2 - numerator2*denominator1;
        denominator = denominator1*denominator2;
    }
    console.log(numerator1,"/",denominator1, " - ", numerator2,"/",denominator2, "=" , numerator,"/",denominator);
}

function Multiply(numerator1,denominator1,numerator2,denominator2)
{
    let numerator, denominator;
    numerator = numerator1*numerator2;
    denominator = denominator1*denominator2;
    console.log(numerator1,"/",denominator1, " * ", numerator2,"/",denominator2, "=" , numerator,"/",denominator);
}


function Divide(numerator1,denominator1,numerator2,denominator2)
{
    let numerator, denominator;
    numerator = numerator1*denominator2;
    denominator = denominator1*numerator2;
    console.log(numerator1,"/",denominator1, " ÷ ", numerator2,"/",denominator2, "=" , numerator,"/",denominator);
}

let Time = {
    seconds,
    minutes,
    hours
}

function ShowTime(Time)
{
    console.log("Sec:",Time.seconds,"\nMin:",Time.minutes,"\nHours:",Time.hours)
}

function AddSeconds(Time,seconds)
{
    if(seconds > 60)
    {
        Time.minutes += Math.round(seconds/60);
        seconds -= Math.round(seconds/60) * 60;
    }
    if(minutes > 60)
    {
        Time.hours += Math.round(minutes/60);
        Time.minutes -= Math.round(minutes/60) * 60;
    }
    Time.seconds += seconds;
    ShowTime(Time);
}

function AddMinutes(Time,minutes)
{
    if(minutes > 60)
        {
            Time.hours += Math.round(minutes/60);
            minutes -= Math.round(minutes/60) * 60;
        }
        Time.minutes += minutes;
        ShowTime(Time);
}

function AddHours(Time,hours)
{
    Time.hours += hours;
    ShowTime(Time);
}