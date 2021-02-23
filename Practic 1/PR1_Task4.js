function priceCount(numOfPeople, groupType, dayOfWeek)
{
    var pricePerOne = 0;
    if(dayOfWeek == "Friday")
    {
        if(groupType == "Students")
        {
            pricePerOne = 8.45;
        }
        else if(groupType=="Corporates")
        {
            pricePerOne = 10.90;
        }
        else if(groupType == "Regular")
        {
            pricePerOne = 15;
        }
    }
    else if(dayOfWeek == "Saturday")
    {
        if(groupType == "Students")
        {
            pricePerOne = 9.80;
        }
        else if(groupType=="Corporates")
        {
            pricePerOne = 15.60;
        }
        else if(groupType == "Regular")
        {
            pricePerOne = 20;
        }
    }
    else if(dayOfWeek == "Sunday")
    {
        if(groupType == "Students")
        {
            pricePerOne = 10.46;
        }
        else if(groupType=="Corporates")
        {
            pricePerOne = 16;
        }
        else if(groupType == "Regular")
        {
            pricePerOne = 22.50;
        }
    }

    var totalPrice = numOfPeople*pricePerOne;

    if(groupType=="Students" && numOfPeople>=30)
    {
        totalPrice -= totalPrice*0.15;
    }
    if(groupType=="Corporates" && numOfPeople>=100)
    {
        totalPrice = (numOfPeople-10)*pricePerOne;
    }
    if(groupType=="Regular" && (numOfPeople>=10 || numOfPeople<=20))
    {
        totalPrice -= totalPrice*0.05;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

priceCount(30, "Students", "Sunday");