<!doctype html>
<html lang="{{ app()->getLocale() }}">

@include('layouts.interface.partials.headmeta')

<body class="fixed-header fixed-page-footer smart-style-1">

<div id="app">

    {{-- Header --}}
    @include('layouts.interface.partials.header')

    {{-- Main Navigation --}}
    @include('layouts.interface.partials.nav')

    {{-- Main Panel --}}
    <div id="main" role="main">

        {{-- Ribbon (Breadcrumbs) --}}
        @include('layouts.interface.partials.ribbon')

        {{-- Main Content --}}
        <div id="content">
            @yield('content')
        </div>
        {{-- End Main Content --}}

    </div>
    {{-- End Main Panel --}}

    @include('layouts.interface.partials.footer')
    @include('layouts.interface.partials.shortcuts')
</div>
{{-- END #APP --}}

<!--[if IE 8]>
<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>
<![endif]-->

@include('layouts.interface.partials.javascript')

<script type="application/javascript">
    $(document).ready(function () {

        // DO NOT REMOVE : GLOBAL FUNCTIONS!
        pageSetUp();

    });
</script>

@yield('scripts')

</body>
</html>
