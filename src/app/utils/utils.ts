export function getImageUrl(urlPath: string, newUrlPath:string): string {
    if (urlPath && urlPath.length > 0 ) {
        return urlPath;
    } else {
        // Aquí puedes devolver una URL de imagen alternativa o una URL de imagen predeterminada
        return newUrlPath;
    }
}

