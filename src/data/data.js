const notes = new Array(12)
    .fill(1)
    .map((_, i) => ({
        id: i + 4,
        title: `Note ${i}`
    }))

console.log(notes);

export default notes;
