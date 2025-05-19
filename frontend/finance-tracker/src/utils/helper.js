import moment from "moment";

export const validateEmail = (email) => {
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const getInitials = (name) => {
    if (!name) return "";

    const words = name.split(" ");
    let initials = "";

    for (let i = 0; i< Math.min(words.length, 2); i++){
        initials += words[i][0];
    }
    return initials.toUpperCase();
};

export const addThousandsSeparator = (num) =>{
    if (num == null || isNaN(num)) return "";

    const [integerPart, fractionalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return fractionalPart
        ? `${formattedInteger}.${fractionalPart}`
        : formattedInteger;
};


export const addIndianThousandsSeparator = (num) => {
    if (num == null || isNaN(Number(num))) return "";

    const [integerPart, fractionalPart] = Math.abs(num).toString().split(".");
    
    let lastThree = integerPart.slice(-3);
    let otherNumbers = integerPart.slice(0, -3);

    if (otherNumbers !== "") {
        otherNumbers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        lastThree = "," + lastThree;
    }

    const formattedInteger = otherNumbers + lastThree;
    const sign = num < 0 ? "-" : "";

    return fractionalPart
        ? `${sign}${formattedInteger}.${fractionalPart}`
        : `${sign}${formattedInteger}`;
};

export const prepareExpenseBarChartData = (data = []) => {
    const chartData = data.map((item) => ({
        category: item?.category,
        amount: item?.amount,
    }))

    return chartData;
}

export const prepareIncomeBarChartData = (data = []) => {
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    const chartData = sortedData.map((item) => ({
        month: moment(item?.date).format("Do MMM"),
        amount: item?.amount,
        source: item.source
    }));

    return chartData;
}   