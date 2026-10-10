function formatDate(dateString, format){
    // 1. Validar si viene vacío
    if (!dateString || dateString === ''){
        return "Fecha inválida";
    }
    
    // 2. Convertir el texto de HTML a un objeto Date real
    // Reemplazamos los guiones por barras para evitar problemas de zonas horarias en navegadores
    const dateObj = new Date(dateString.replace(/-/g, '\/'));
    
    // 3. Validar si el objeto Date es válido
    if (isNaN(dateObj.getTime())) {
        return "Fecha inválida";
    }

    // 4. Formatear
    if (format === 'short'){
        return new Intl.DateTimeFormat('es-ES', { dateStyle: 'short' }).format(dateObj);
    }
    if (format === 'medium'){
        return new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' }).format(dateObj);
    }
    if (format === 'long'){
        return new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(dateObj);
    }
    if (format === 'full'){
        return new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' }).format(dateObj);
    }
    else{
        return 'UPS hubo un error';
    }
    
    return dateString; // Retorno por defecto si no es 'full'
}