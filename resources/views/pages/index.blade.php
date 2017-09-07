<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- iOS web-app metas : hides Safari UI Components and Changes Status Bar Appearance -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <title>SmartyBot</title>

    <!-- Styles -->
    <link type="text/css" href="{{ asset("css/app.css") }}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" media="screen" href="css/vendor/smartadmin-production.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="css/vendor/smartadmin-skins.min.css">
    {{--<link type="text/css" href="{{ asset("css/smartadmin.css") }}" rel="stylesheet">--}}

    <link rel="apple-touch-icon" href="img/splash/sptouch-icon-iphone.png">
    <link rel="apple-touch-icon" sizes="76x76" href="img/splash/touch-icon-ipad.png">
    <link rel="apple-touch-icon" sizes="120x120" href="img/splash/touch-icon-iphone-retina.png">
    <link rel="apple-touch-icon" sizes="152x152" href="img/splash/touch-icon-ipad-retina.png">

    <!-- Startup image for web apps -->
    <link rel="apple-touch-startup-image" href="img/splash/ipad-landscape.png"
          media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)">
    <link rel="apple-touch-startup-image" href="img/splash/ipad-portrait.png"
          media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)">
    <link rel="apple-touch-startup-image" href="img/splash/iphone.png" media="screen and (max-device-width: 320px)">

</head>
<body class="fixed-header fixed-page-footer smart-style-1 minified">

<div id="app">

    {{-- Header --}}
    @include('pages.partials.header')

    {{-- Main Navigation --}}
    @include('pages.partials.nav')

    {{-- Main Panel --}}
    <div id="main" role="main">

        {{-- Ribbon (Breadcrumbs) --}}
        @include('pages.partials.ribbon')

        {{-- Main Content --}}
        <div id="content">
            @yield('MainContent')
        </div>
        {{-- End Main Content --}}

    </div>
    {{-- End Main Panel --}}

</div>

<!--[if IE 8]>
<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>
<![endif]-->

<!-- MAIN APP JS FILE -->
<script src="{{ asset('js/app.js') }}"></script>

<!-- SmartAdmin -->
<script src="{{ asset('js/vendor/smartadmin.js') }}"></script>

</body>
</html>
