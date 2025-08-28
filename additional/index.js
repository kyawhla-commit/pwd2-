fetch(api)
    .then(res => res.json())
    .then(data => setItems(data))


(async () => {
    const res = await fetch(api)
    const data = await res.json()

    setItems(data)
})

fetch(api)
    .then(async res => {
        const data = await res.json();
        setItems(data);
    })