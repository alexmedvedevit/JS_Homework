function roundoff(num1, num2)
{
    if (num2 > 15)
    {
        num2 = 15;
    }
    let truncated = num1.toFixed(num2);
    truncated = parseFloat(truncated);
    console.log(truncated);
}

roundoff(10.5, 16);