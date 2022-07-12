function sendRequest(name, phone, address, goods, sum){
    let data = {client: ' ', order: {address: ' ', sum: 0}, goods: []};
    
    data.client = `${name} ${phone}`;
    data.order.address = `ул. ${address.street}, д. ${address.house}, подъезд ${address.entrance}, этаж ${address.floor}, кв. ${address.flat}`;
    data.order.sum = sum;

    let countOfGoods = goods.length;
        for (let i = 0; i <= countOfGoods; i++){
        data.goods.push({title: goods[i].title, count: goods[i].count});
    };
  
    let jsonData = JSON.stringify(data);

    return jsonData;
}
