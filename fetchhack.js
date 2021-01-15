async function sendFetch(){
    let response = await fetch("https://opentdb.com/api.php?amount=10");
    let data = await response.json();
    console.log(data);
}
sendFetch();

