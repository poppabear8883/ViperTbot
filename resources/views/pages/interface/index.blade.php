<!doctype html>
<html lang="{{ app()->getLocale() }}">

@include('pages.interface.partials.headmeta')

<body class="fixed-header fixed-page-footer smart-style-1 minified">

<div id="app">

    {{-- Header --}}
    @include('pages.interface.partials.header')

    {{-- Main Navigation --}}
    @include('pages.interface.partials.nav')

    {{-- Main Panel --}}
    <div id="main" role="main">

        {{-- Ribbon (Breadcrumbs) --}}
        @include('pages.interface.partials.ribbon')

        {{-- Main Content --}}
        <div id="content">
            <section id="widget-grid">

                <!-- row -->
                <div class="row">

                    <!-- SINGLE GRID -->
                    <article class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                        <div class="jarviswidget" id="wid-id-0">

                            <header>
                                <h2>Widget Title</h2>
                            </header><!-- widget div-->

                            <div>
                                <!-- widget edit box -->
                                <div class="jarviswidget-editbox">
                                    <!-- This area used as dropdown edit box -->
                                    <input class="form-control" type="text">
                                </div><!-- end widget edit box -->

                                <!-- widget content -->
                                <div class="widget-body">

                                    [PLACE WIDGET CONTENTS HERE]

                                </div><!-- end widget content -->
                            </div><!-- end widget div -->
                        </div><!-- end widget -->


                        <div class="jarviswidget" id="wid-id-1">

                            <header>
                                <h2>Widget Title</h2>
                            </header><!-- widget div-->

                            <div>
                                <!-- widget edit box -->
                                <div class="jarviswidget-editbox">
                                    <!-- This area used as dropdown edit box -->
                                    <input class="form-control" type="text">
                                </div><!-- end widget edit box -->

                                <!-- widget content -->
                                <div class="widget-body">

                                    [PLACE WIDGET CONTENTS HERE]

                                </div><!-- end widget content -->
                            </div><!-- end widget div -->
                        </div><!-- end widget -->

                    </article><!-- END GRID -->

                    <!-- SINGLE GRID -->
                    <article class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                        <div class="jarviswidget" id="wid-id-2">

                            <header>
                                <h2>Widget Title</h2>
                            </header><!-- widget div-->

                            <div>
                                <!-- widget edit box -->
                                <div class="jarviswidget-editbox">
                                    <!-- This area used as dropdown edit box -->
                                    <input class="form-control" type="text">
                                </div><!-- end widget edit box -->

                                <!-- widget content -->
                                <div class="widget-body">

                                    [PLACE WIDGET CONTENTS HERE]

                                </div><!-- end widget content -->
                            </div><!-- end widget div -->
                        </div><!-- end widget -->

                        <div class="jarviswidget" id="wid-id-4">

                            <header>
                                <h2>Widget Title</h2>
                            </header><!-- widget div-->

                            <div>
                                <!-- widget edit box -->
                                <div class="jarviswidget-editbox">
                                    <!-- This area used as dropdown edit box -->
                                    <input class="form-control" type="text">
                                </div><!-- end widget edit box -->

                                <!-- widget content -->
                                <div class="widget-body">

                                    [PLACE WIDGET CONTENTS HERE]

                                </div><!-- end widget content -->
                            </div><!-- end widget div -->
                        </div><!-- end widget -->

                    </article><!-- END GRID -->

                </div><!-- end row -->

            </section><!-- end widget grid -->

        </div>
        {{-- End Main Content --}}

    </div>
    {{-- End Main Panel --}}

    @include('pages.interface.partials.footer')
    @include('pages.interface.partials.shortcuts')
</div>
{{-- END #APP --}}

<!--[if IE 8]>
<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>
<![endif]-->

@include('pages.interface.partials.javascript')

</body>
</html>
