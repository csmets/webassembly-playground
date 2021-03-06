const returnNames = (jsonString) => {

    const t0 = performance.now();

    const json = JSON.parse(jsonString);
    let itemNames = "";
    let itemEmails = "";
    let itemCompanies = "";

    json.forEach((item) => {
        itemNames += item.name + "\n";
        itemEmails += item.email + "\n";
        itemCompanies += item.company + "\n";
    });

    console.log(itemNames);
    console.log(itemEmails);
    console.log(itemCompanies);

    const t1 = performance.now();
    console.log(`Scan through json took ${t1 - t0} milliseconds.`);
};

const ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){

    if (this.readyState == 4 && this.status == 200) {
        const res = returnNames(this.responseText);
    }

}

ajax.open("GET", "large.json", true);
ajax.send();
