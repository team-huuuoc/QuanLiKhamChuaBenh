//Convert date: dd/mm/yyyy => ISO-8601
export function handleDate(date:string):Date{
    const [day, month, year]= date.split("/").map(Number);
    return new Date(year, month - 1, day)
}