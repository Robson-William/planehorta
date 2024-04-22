export type Plant = {
    name:string, 
    value:number,
    perUP:number,
    necessaryUP:number,
    color:string,
    firstPlant: string
}

const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

export const plants = [
    {name: "Alface", value: 0, perUP: 16, necessaryUP: 0, color: randomHexColorCode(), firstPlant: ""},
    {name: "Couve", value: 0, perUP: 9, necessaryUP: 0, color: randomHexColorCode(), firstPlant: ""}
]