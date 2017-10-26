<!doctype html>
<html lang="{{ app()->getLocale() }}">

@include('layouts.partials.headmeta')

<body>
    <div id="app">
        <div id="main" role="main">
            <!-- MAIN CONTENT -->
            @yield('content')
        </div>
    </div>

    @include('layouts.partials.javascript')
</body>
</html>
