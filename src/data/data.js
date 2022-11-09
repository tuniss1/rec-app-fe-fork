const notes = new Array(8)
    .fill(1)
    .map((_, i) => ({
        id: i + 4,
        title: `Note ${i}`
    }))

export default notes;
