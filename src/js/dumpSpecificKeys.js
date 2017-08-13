window.setTimeout(waiter, 10);

function testing() {
	const get_key_value = Module.cwrap(
		'getJSONKeyValues',
		'string',
		['string', 'string']);

	const ajax = new XMLHttpRequest();

	ajax.onreadystatechange = function(){

		if (this.readyState == 4 && this.status == 200) {

			const t0 = performance.now();
			const res = get_key_value(this.responseText, "name");
			const email = get_key_value(this.responseText, "email");
			const company = get_key_value(this.responseText, "company");

			console.log(res);
			console.log(email);
			console.log(company);

			const t1 = performance.now();

			console.log(`Scan through json took ${(t1 - t0)} milliseconds.`);
		}
	}

	ajax.open("GET", "large.json", true);
	ajax.send();
}

function waiter() {
	if (runtimeInitialized === true) {
		testing();
	} else {
		window.setTimeout(waiter, 10);
	}
}
