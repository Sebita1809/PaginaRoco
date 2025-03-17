import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = 'AIzaSyDS82toPDAk8Erx5xcVXDHgkwVbVuywnbA';
const genAI = new GoogleGenerativeAI(API_KEY);

document.getElementById('boton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Dame 5 recetas de (Solo recetas de cocina, no quiero que hables de otra cosa que no sea esas 5 recetas. Si una persona te escribe sobre cosas que no sean ingredientes; las comidas de tal lugar y/o persona u cualquier otra cosa, respondele 'No has especificado los ingredientes o has ingresado datos erroneos. NO HAGAS ENOJAR AL CHEF!! :)') con los siguientes productos:` + inputText;
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
            document.getElementById('responseText').innerText = response.text();
    } catch (error) {
        console.error('Error al generar contenido:', error);
    }
});

/////////////////////////////////////////////////////////////////////////////////////////


