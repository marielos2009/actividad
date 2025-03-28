import url from"./url.js";

async function getData() {
    try {
        const nameData = await fetch(url);
        if (!nameData.ok){
            throw new Error("sorry..",nameData.status);
        }
     {
        const tranformData= await nameData.json();
        return tranformData.data
     }
    } catch (error) {
        console.log(error.message)
        
    }
}
export default getData;