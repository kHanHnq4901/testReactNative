
import monent from "moment"
export const convertDateTimeToString = (date: string): string =>{
    return monent(date).format("DD/MM/YYYY")
}