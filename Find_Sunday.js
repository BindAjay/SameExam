for( let years = 2014; years <= 2050 ; years++)
{
    const p = new Date(years, 0, 1);
   // console.log(dd.getDate());
    if( p.getDate() === 0 )
        console.log("1st Sunday");
}


console.log('--------------------');
for (let year = 2014; year <= 2050; year++)
    {
    const d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log(`1st January is being a Sunday  ${year}`);
    }
console.log('--------------------');

