function sendRequest(name, phone, address, goods, sum)
{
    let dataToStringify = {data: {client: ' ', order: {address: ' ', sum: 0}, goods: []}};
    
    dataToStringify.data.client = `${name} ${phone}`;
    dataToStringify.data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;
    dataToStringify.data.order.sum = sum;

    let countOfGoods = goods.length;
        for (let i = 0; i < countOfGoods; i++){
            dataToStringify.data.goods.push({title: goods[i].title, count: goods[i].count});
    };
  
    let jsonData = JSON.stringify(dataToStringify);

    return jsonData;
}
