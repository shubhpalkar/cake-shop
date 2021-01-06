import { Address } from "./address.dto"
import { Payment } from "./payment.dto"

// export class Ordertbl{
export class Order{
    orderid: number
    userid: string
    addrdetails: Address
    ddate: Date
    
}

// export default Ordertbl;

// fname: string
//     email: string
//     mnumber: Number 
//     payment: Payment