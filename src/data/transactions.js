
import moment from "moment-timezone";

export default [
    {
        "invoiceNumber": 300500,
        "status": "ativo",
        "name": "Platinum Subscription Plan",
        "issueDate": moment().subtract(1, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(1, "hour").add(1, "month").format("h:mm:ss")
    },
    {
        "invoiceNumber": 300499,
        "status": "ativo",
        "name": "Platinum Subscription Plan",
        "issueDate": moment().subtract(2, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(2, "hour").add(1, "month").format("h:mm:ss")
    },
    {
        "invoiceNumber": 300498,
        "status": "ativo",
        "name": "Platinum Subscription Plan",
        "issueDate": moment().subtract(2, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(2, "hour").add(1, "month").format("h:mm:ss")
    },
    {
        "invoiceNumber": 300497,
        "status": "ativo",
        "name": "Flexible Subscription Plan",
        "issueDate": moment().subtract(3, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(3, "hour").add(1, "month").format("h:mm:ss")
    },
    {
        "invoiceNumber": 300496,
        "status": "ativo",
        "name": "Gold Subscription Plan",
        "issueDate": moment().subtract(1, "day").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": moment().subtract(1, "hour").format("h:mm:ss")
    },
    {
        "invoiceNumber": 300495,
        "status": "ativo",
        "name": "Gold Subscription Plan",
        "issueDate": moment().subtract(3, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": moment().subtract(3, "hour").format("h:mm:ss")
    },
    {
        "invoiceNumber": 300494,
        "status": "ativo",
        "name": "Flexible Subscription Plan",
        "issueDate": moment().subtract(4, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": moment().subtract(4, "hour").format("h:mm:ss")
    },
    {
        "invoiceNumber": 300493,
        "status": "inativo",
        "name": "Gold Subscription Plan",
        "issueDate": moment().subtract(20, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": moment().subtract(20, "hour").format("h:mm:ss")
    },
    {
        "invoiceNumber": 300492,
        "status": "inativo",
        "name": "Platinum Subscription Plan",
        "issueDate": moment().subtract(2, "months").format("DD MMM YYYY"),
        "dueDate": moment().subtract(3, "hour").format("h:mm:ss")
    },
    {
        "invoiceNumber": 300491,
        "status": "ativo",
        "name": "Platinum Subscription Plan",
        "issueDate": moment().subtract(6, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(6, "hour").add(1, "month").format("h:mm:ss")
    }
]