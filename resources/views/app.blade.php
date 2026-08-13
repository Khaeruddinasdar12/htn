<!DOCTYPE html>
<html lang="id" prefix="og: https://ogp.me/ns#">
<head>
    @php
        $ogTitle = $og['title'] ?? 'Program Studi Hukum Tata Negara - FSHI IAIN Bone';
        $ogDescription = $og['description'] ?? 'Program Studi Hukum Tata Negara Fakultas Syariah dan Hukum Islam IAIN Bone';
        $ogImage = $og['image'] ?? asset('logoiainbone.png');
        $ogUrl = $og['url'] ?? url()->current();
        $ogType = $og['type'] ?? 'website';
        $ogImageType = $og['image_type'] ?? 'image/png';
        $ogImageWidth = $og['image_width'] ?? 1200;
        $ogImageHeight = $og['image_height'] ?? 630;
    @endphp
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('logoiainbone.png') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $ogTitle }}</title>
    <meta name="description" content="{{ $ogDescription }}">

    <meta property="og:locale" content="id_ID">
    <meta property="og:type" content="{{ $ogType }}">
    <meta property="og:site_name" content="Hukum Tata Negara FSHI IAIN Bone">
    <meta property="og:title" content="{{ $ogTitle }}">
    <meta property="og:description" content="{{ $ogDescription }}">
    <meta property="og:url" content="{{ $ogUrl }}">
    <meta property="og:image" content="{{ $ogImage }}">
    <meta property="og:image:secure_url" content="{{ $ogImage }}">
    <meta property="og:image:type" content="{{ $ogImageType }}">
    <meta property="og:image:width" content="{{ $ogImageWidth }}">
    <meta property="og:image:height" content="{{ $ogImageHeight }}">
    <meta property="og:image:alt" content="{{ $ogTitle }}">
    <link rel="image_src" href="{{ $ogImage }}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $ogTitle }}">
    <meta name="twitter:description" content="{{ $ogDescription }}">
    <meta name="twitter:image" content="{{ $ogImage }}">

    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body>
    <div id="root"></div>
</body>
</html>