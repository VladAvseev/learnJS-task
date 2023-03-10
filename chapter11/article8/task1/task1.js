async function loadJson(url) {
    const response = await fetch(url);

    if (response.status === 200) {
        const json = await response.json();
        return json;
    }

    throw new Error(response.status);
}

loadJson('no-such-user.json')
    .catch(alert); // Error: 404