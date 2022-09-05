<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="{{ asset('/images/logo.svg') }}" type="image/x-icon">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
    <title>GOOD GIVING NETWORK</title>
</head>
{{-- <body class="bg-gray-50 h-screen antialiased leading-none font-sans"> --}}

<body class="min-h-screen">

    <div id="app"></div>

    <script src="{{mix('js/app.js')}}" defer></script>

</body>

</html>