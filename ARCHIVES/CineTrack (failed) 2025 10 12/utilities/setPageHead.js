// ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ | SET HEAD CONTENT | ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ //
function headContent(directory, page=false) {
    // VARIABLES
    let currentHREF;
    if(page) {
        currentHREF = `./${page}.css`;
    } else {
        currentHREF = ``;
    };
    // HEAD CONTENT
    const head = `
        <!-- ========================================# META DATA | STARTS ▼ -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- ========================================# META DATA | ENDS ▲ -->

        <!-- ----------------------------------------------------------------------- -->

        <!-- ========================================# TITLE OF THE PAGE | STARTS ▼ -->
        <title> CineTrack | Home </title>
        <!-- ========================================# TITLE OF THE PAGE | ENDS ▲ -->

        <!-- ----------------------------------------------------------------------- -->

        <!-- ========================================# CUSTOM TAB ICON OF THE PAGE | STARTS ▼ -->
        <link rel="shortcut icon" href="${directory}/asset library/images/components/logo_ai.png" type="image/x-icon">
        <!-- ========================================# CUSTOM TAB ICON OF THE PAGE | ENDS ▲ -->

        <!-- ----------------------------------------------------------------------- -->

        <!-- ========================================# GOOGLE FONTS CDN | STARTS ▼ -->
        <!-- CDN CONNECTION -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <!-- LINKS (7): BITCOUNT, BUNGEE, COOKIE, JOSEFIN SANS, MONOTON, MONTSERRAT, ROBOTO -->
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single+Ink:wght@100..900&family=Bungee&family=Cookie&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Monoton&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <!-- ========================================# GOOGLE FONTS CDN | ENDS ▲ -->
        
        <!-- ----------------------------------------------------------------------- -->

        <!-- ========================================# FONT AWESOME V7.0.1 CDN | STARTS ▼ -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
        <!-- ========================================# FONT AWESOME V7.0.1 CDN | ENDS ▲ -->

        <!-- ----------------------------------------------------------------------- -->

        <!-- ========================================# CUSTOM STYLE SHEETS | STARTS ▼ -->
        <link rel="stylesheet" href="${directory}/global.css">
        <link rel="stylesheet" href="${directory}/styles.css">
        <link rel="stylesheet" href="${currentHREF}">
        <!-- ========================================# CUSTOM STYLE SHEETS | ENDS ▲ -->
        
        <!-- ----------------------------------------------------------------------- -->

        <!-- ========================================# RESPONSIVE DESIGNS | STARTS ▼ -->
        <link rel="stylesheet" media="(max-width: 1280px)" href="${directory}/styles_laptop.css">
        <link rel="stylesheet" media="(max-width: 991px)" href="${directory}/styles_tablet.css">
        <link rel="stylesheet" media="(max-width: 575px)" href="${directory}/styles_mobile.css">
        <link rel="stylesheet" media="(max-width: 360px)" href="${directory}/styles_extrasmall.css">
        <!-- ========================================# RESPONSIVE DESIGNS | ENDS ▲ -->
    `;
    document.head.innerHTML = head;
};
// ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ | SET HEAD CONTENT | ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ //
