function findDivider(num)
{
    var divider = 1;
    if (num%2==0)
    {
        divider = 2;
    }
    if (num%3==0)
    {
        divider = 3;
    }
    if (num%6==0)
    {
        divider = 6;
    }
    if (num%7==0)
    {
        divider = 7;
    }
    if (num%10==0)
    {
        divider = 10;
    }

    if(divider==1)
    {
        console.log("Не делится")
    }
    else
    {
        console.log(`Число делится на ${divider}`);
    }
}

findDivider(1643);