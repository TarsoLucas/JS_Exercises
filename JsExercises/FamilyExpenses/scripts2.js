// family expenses calculator

familyBalance = {
    revenue: [25100.27, 16000],
    expenses: [2500, 1000, 700, 900]
}

function sum(array){
    let total = 0;
    for(let data of array)
        total += data
    return total
}

function Balance(){
    const totalRevenue = sum(familyBalance.revenue)
    const totalExpenses = sum(familyBalance.expenses)

    let balance = totalRevenue - totalExpenses
    return console.log(`You final balance is U$${balance.toFixed(2)}.`)
}

Balance()