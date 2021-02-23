function leapYearCheck(year)
{
    var isLeap = false;
    if(year%4==0 && year%100!=0)
    {
        isLeap = true;
    }
    else if (year%400==0)
    {
        isLeap = true;
    }

    if(isLeap)
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }

}

leapYearCheck(2020);