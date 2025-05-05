'use server'

export async function createPost(prevState: { message: string }, formData: FormData): Promise<{ message: string }> {
    'use server'

    const title = formData.get('title');
    const content = formData.get('content');

    console.log('Datos a enviar:', { title, content }); // 👈 Verificamos los datos antes de enviarlos

    const res = await fetch('https://api.vercel.app/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
    });

    console.log('Estado de la respuesta:', res.status); // 👈 Vemos el código de estado HTTP

    const textResponse = await res.text();
    console.log('Respuesta en texto:', textResponse); // 👈 Verificamos qué está devolviendo el servidor

    try {
        const json = JSON.parse(textResponse);
        console.log('JSON recibido:', json); // 👈 Aquí dejamos el `console.log(json)` que pediste

        if (!res.ok) {
            return { message: 'Failed to create post' };
        }

        return { message: 'Post created successfully' };
    } catch (error) {
        console.error('Error al procesar JSON:', error);
        return { message: 'Invalid JSON response from server' };
    }
}






export async function deletePost(
    // formData: FormData
){

    // 'use server'
    // const id = formData.get('id')


    //Update Data
    //Revalidat cache
}